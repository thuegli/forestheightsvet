import crypto from "crypto";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

function hmacSign(data: string): string {
  return crypto
    .createHmac("sha256", ADMIN_PASSWORD)
    .update(data)
    .digest("base64url");
}

function base64urlEncode(str: string): string {
  return Buffer.from(str).toString("base64url");
}

function base64urlDecode(str: string): string {
  return Buffer.from(str, "base64url").toString();
}

export function createToken(): string {
  const header = base64urlEncode(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = base64urlEncode(
    JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 86400 })
  );
  const signature = hmacSign(`${header}.${payload}`);
  return `${header}.${payload}.${signature}`;
}

export function verifyToken(token: string): boolean {
  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [header, payload, signature] = parts;
  const expected = hmacSign(`${header}.${payload}`);

  if (signature !== expected) return false;

  try {
    const decoded = JSON.parse(base64urlDecode(payload));
    if (
      typeof decoded.exp === "number" &&
      decoded.exp < Math.floor(Date.now() / 1000)
    ) {
      return false;
    }
  } catch {
    return false;
  }

  return true;
}

export function getTokenFromCookies(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("admin_token="));
  return match ? match.substring("admin_token=".length) : null;
}
