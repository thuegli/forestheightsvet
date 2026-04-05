import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

// In-memory rate limiting: track failed attempts by IP
const failedAttempts = new Map<string, { count: number; lockedUntil: number }>();

const MAX_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 15;

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const now = Date.now();

  // Check if IP is locked out
  const record = failedAttempts.get(ip);
  if (record && record.lockedUntil > now) {
    const minutesLeft = Math.ceil((record.lockedUntil - now) / 60000);
    return NextResponse.json(
      { error: `Too many failed attempts. Try again in ${minutesLeft} minute${minutesLeft === 1 ? "" : "s"}.` },
      { status: 429 }
    );
  }

  const { password } = await req.json();
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    // Track failed attempt
    const current = failedAttempts.get(ip) || { count: 0, lockedUntil: 0 };
    current.count += 1;

    if (current.count >= MAX_ATTEMPTS) {
      current.lockedUntil = now + LOCKOUT_MINUTES * 60 * 1000;
      failedAttempts.set(ip, current);
      return NextResponse.json(
        { error: `Too many failed attempts. Locked out for ${LOCKOUT_MINUTES} minutes.` },
        { status: 429 }
      );
    }

    failedAttempts.set(ip, current);
    const remaining = MAX_ATTEMPTS - current.count;
    return NextResponse.json(
      { error: `Invalid password. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining.` },
      { status: 401 }
    );
  }

  // Success — clear failed attempts
  failedAttempts.delete(ip);

  const token = createToken();

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400,
    path: "/",
  });

  return res;
}
