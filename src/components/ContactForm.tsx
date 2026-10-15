"use client";
import { useState, type FormEvent } from "react";
import { plans } from "@/data/plans";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending"); setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      form.reset(); setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send your message. Please try WhatsApp instead.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block"><span className="mb-2 block font-semibold">Full name</span><input name="name" required minLength={2} autoComplete="name" className="input" placeholder="Your name" /></label>
        <label className="block"><span className="mb-2 block font-semibold">Phone</span><input name="phone" type="tel" autoComplete="tel" className="input" placeholder="+94 77 000 0000" /></label>
      </div>
      <label className="block"><span className="mb-2 block font-semibold">Email</span><input name="email" type="email" required autoComplete="email" className="input" placeholder="you@example.com" /></label>
      <label className="block"><span className="mb-2 block font-semibold">Interested in</span>
        <select name="plan" className="input" defaultValue="">
          <option value="">General enquiry</option>
          {plans.map((p) => <option key={p.id} value={p.name}>{p.name} membership</option>)}
          <option value="Personal training">Personal training</option>
        </select>
      </label>
      <label className="block"><span className="mb-2 block font-semibold">Message</span><textarea name="message" required minLength={10} rows={5} className="input resize-none" placeholder="Tell us your goals" /></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60 sm:w-auto">{status === "sending" ? "Sending..." : "Send message"}</button>
      <div aria-live="polite">
        {status === "success" && <p className="rounded-lg border border-brand/40 bg-brand/10 p-4 text-brand">Message sent. We will reply within one working day.</p>}
        {status === "error" && <p className="rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-red-300">{error}</p>}
      </div>
    </form>
  );
}
