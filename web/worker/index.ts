/**
 * Cloudflare Worker for gccatlantic.com.
 *
 * The site itself is a static export (`out/`) served as Workers static assets.
 * This Worker only runs for /api/* (see `run_worker_first` in wrangler.jsonc);
 * every other request is served straight from the assets.
 *
 * POST /api/contact
 *   Validates the contact form and emails the enquiry to CONTACT_TO
 *   (default info@gccatlantic.com) over HTTPS. Nothing is stored.
 *
 * Configuration (Cloudflare dashboard or `wrangler secret put`):
 *   RESEND_API_KEY  secret, required   API key for the email provider
 *   CONTACT_TO      optional           recipient, default info@gccatlantic.com
 *   CONTACT_FROM    optional           sender, must be on a domain verified
 *                                      with the provider
 *
 * The email provider is isolated in `sendEmail()`. To use a different
 * provider, replace that one function.
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface Enquiry {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}

const DEFAULT_TO = "info@gccatlantic.com";
const DEFAULT_FROM = "GCC Atlantic website <website@gccatlantic.com>";
const MIN_FILL_MS = 3000; // faster than this is treated as automated

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, max) : "";

const oneLine = (v: string) => v.replace(/\n+/g, " ");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function handleContact(request: Request, env: Env): Promise<Response> {
  // Same-origin only.
  const origin = request.headers.get("Origin");
  if (origin && new URL(origin).host !== new URL(request.url).host) {
    return json(403, { ok: false });
  }
  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    return json(415, { ok: false });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json(400, { ok: false });
  }

  // Spam checks: honeypot filled, or submitted implausibly fast.
  // Answer as if accepted so automated senders learn nothing.
  const startedAt = Number(body.startedAt);
  if (clean(body.website, 200) || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return json(200, { ok: true });
  }

  const enquiry: Enquiry = {
    name: oneLine(clean(body.name, 200)),
    email: oneLine(clean(body.email, 254)),
    organisation: oneLine(clean(body.organisation, 200)),
    subject: oneLine(clean(body.subject, 200)),
    message: clean(body.message, 5000),
  };

  if (!enquiry.name || !EMAIL_RE.test(enquiry.email) || !enquiry.message || body.consent !== true) {
    return json(422, { ok: false });
  }

  try {
    await sendEmail(env, enquiry);
  } catch (err) {
    console.error("contact: send failed", err);
    return json(502, { ok: false });
  }
  return json(200, { ok: true });
}

async function sendEmail(env: Env, e: Enquiry): Promise<void> {
  if (!env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is not configured");

  const text = [
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Organisation: ${e.organisation || "(not given)"}`,
    `Subject: ${e.subject || "(not given)"}`,
    "Consent to Privacy notice: yes",
    "",
    e.message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM || DEFAULT_FROM,
      to: [env.CONTACT_TO || DEFAULT_TO],
      reply_to: e.email,
      subject: `Website enquiry: ${e.subject || e.organisation || e.name}`,
      text,
    }),
  });
  if (!res.ok) throw new Error(`provider responded ${res.status}`);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact") {
      if (request.method !== "POST") return json(405, { ok: false });
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
