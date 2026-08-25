import { NextRequest, NextResponse } from "next/server";

const CLINIC_EMAIL = "forestheightsvet@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Simple in-memory throttle. Resets on cold start, which is fine — this exists
// to blunt bulk submissions, not to be an authoritative rate limiter.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  submissions.set(ip, recent);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

const FIELDS = [
  "ownerName",
  "phone",
  "email",
  "petName",
  "species",
  "serviceType",
  "preferredTime",
  "notes",
] as const;

type Field = (typeof FIELDS)[number];

const LABELS: Record<Field, string> = {
  ownerName: "Owner",
  phone: "Phone",
  email: "Email",
  petName: "Pet",
  species: "Species",
  serviceType: "Service requested",
  preferredTime: "Preferred time",
  notes: "Notes",
};

const REQUIRED: Field[] = ["ownerName", "phone", "petName", "species"];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please call us at (503) 291-1757." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real person never fills this in.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const values = {} as Record<Field, string>;
  for (const field of FIELDS) {
    const raw = body[field];
    values[field] = typeof raw === "string" ? raw.trim().slice(0, 2000) : "";
  }

  const missing = REQUIRED.filter((f) => !values[f]);
  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Please fill in: ${missing.map((f) => LABELS[f]).join(", ")}.` },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.APPOINTMENT_FROM_EMAIL;

  // Fail loudly rather than silently swallowing an appointment request.
  if (!apiKey || !fromAddress) {
    console.error(
      "Appointment request received but RESEND_API_KEY / APPOINTMENT_FROM_EMAIL are not configured."
    );
    return NextResponse.json(
      {
        error:
          "Our online request form is temporarily unavailable. Please call us at (503) 291-1757.",
      },
      { status: 503 }
    );
  }

  const rows = FIELDS.filter((f) => values[f])
    .map(
      (f) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#555;">${LABELS[f]}</td>` +
        `<td style="padding:4px 0;"><strong>${escapeHtml(values[f])}</strong></td></tr>`
    )
    .join("");

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [CLINIC_EMAIL],
      reply_to: values.email || undefined,
      subject: `Appointment request — ${values.petName} (${values.ownerName})`,
      html:
        `<h2 style="font-family:sans-serif;">New appointment request</h2>` +
        `<table style="font-family:sans-serif;font-size:14px;">${rows}</table>` +
        `<p style="font-family:sans-serif;font-size:12px;color:#888;">` +
        `Submitted from forestheightsvet.com</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend rejected appointment email:", await res.text());
    return NextResponse.json(
      {
        error:
          "We could not send your request. Please call us at (503) 291-1757.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
