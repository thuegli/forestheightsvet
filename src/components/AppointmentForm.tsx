"use client";

import { useState } from "react";

const SERVICES = [
  "Wellness exam / vaccines",
  "Dental cleaning or dental concern",
  "Surgery consultation",
  "Illness or injury",
  "Diagnostics / lab work",
  "Nutrition consultation",
  "Prescription refill",
  "Other",
];

const inputClass =
  "w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest focus:border-forest";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";

export default function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please call us.");
        setStatus("error");
        return;
      }
      setStatus("sent");
      if (typeof window !== "undefined") {
        (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.(
          "event",
          "appointment_request"
        );
      }
    } catch {
      setError(
        "We could not reach the clinic. Please call (503) 291-1757."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-forest-lightest border border-forest rounded-lg p-6">
        <h3 className="font-heading text-xl font-bold text-forest-dark mb-2">
          Request received
        </h3>
        <p className="text-gray-700 text-sm">
          Thank you — we&apos;ll call you back to confirm a time, usually within
          one business day. This is a request, not a confirmed appointment. If
          your pet needs to be seen urgently, please call us at{" "}
          <a className="font-semibold underline" href="tel:+15032911757">
            (503) 291-1757
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="ownerName">
            Your name <span className="text-coral-dark">*</span>
          </label>
          <input id="ownerName" name="ownerName" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone <span className="text-coral-dark">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className={inputClass} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="petName">
            Pet&apos;s name <span className="text-coral-dark">*</span>
          </label>
          <input id="petName" name="petName" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="species">
            Dog or cat? <span className="text-coral-dark">*</span>
          </label>
          <select id="species" name="species" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Dog</option>
            <option>Cat</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="serviceType">
          What do you need?
        </label>
        <select id="serviceType" name="serviceType" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="preferredTime">
          Preferred day and time
        </label>
        <input
          id="preferredTime"
          name="preferredTime"
          placeholder="e.g. Tuesday or Wednesday morning"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="notes">
          Anything we should know?
        </label>
        <textarea id="notes" name="notes" rows={4} className={inputClass} />
      </div>

      {status === "error" && (
        <p className="text-sm text-coral-darkest bg-coral-light border border-coral rounded px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto bg-forest text-white font-semibold px-6 py-3 rounded hover:bg-forest-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request Appointment"}
      </button>

      <p className="text-xs text-gray-500">
        This is a request, not a confirmed appointment — we&apos;ll call to
        confirm. For emergencies, call{" "}
        <a className="underline" href="tel:+15032911757">
          (503) 291-1757
        </a>{" "}
        instead of using this form.
      </p>
    </form>
  );
}
