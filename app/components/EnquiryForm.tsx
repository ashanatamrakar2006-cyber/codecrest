"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-brand-light bg-brand-soft px-4 py-3 outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/15";
  const labelClass = "mb-1.5 block text-sm font-medium text-brand-ink";

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-brand-light bg-white p-10 text-center shadow-xl shadow-brand/10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-light text-3xl text-brand-dark">✓</div>
        <h3 className="mt-5 text-2xl font-semibold">Thank you!</h3>
        <p className="mt-2 text-brand-muted">Our team will contact you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-medium text-brand-dark underline">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-brand-light bg-white p-8 shadow-xl shadow-brand/10">
      <div>
        <label htmlFor="name" className={labelClass}>Full Name</label>
        <input id="name" name="name" placeholder="e.g. Rahul Sharma" required minLength={2} className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>Mobile Number</label>
        <input
          id="phone" name="phone" type="tel" inputMode="numeric"
          placeholder="10-digit mobile number" required maxLength={10}
          pattern="[6-9][0-9]{9}" title="Enter a valid 10-digit Indian mobile number"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="course" className={labelClass}>Course Interested In</label>
        <select id="course" name="course" required defaultValue="" className={inputClass}>
          <option value="" disabled>Select a course</option>
          <option>Full Stack Development</option>
          <option>Python & Data Structures</option>
          <option>Data Science with AI</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-md shadow-brand/30 transition hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Request a Call Back"}
      </button>
      {status === "error" && (
        <p className="text-center text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}