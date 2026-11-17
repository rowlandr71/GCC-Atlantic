"use client";

import { useEffect, useState } from "react";

/**
 * Copyright year. The static export renders the build year; on load it is
 * replaced with the visitor's current year, so it never needs manual updates.
 */
export default function CurrentYear() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
