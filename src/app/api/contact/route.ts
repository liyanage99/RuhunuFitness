import { NextResponse } from "next/server";

const MAP: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => MAP[c]);

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot caught a bot

  const s = (k: string, max: number) => String(b[k] ?? "").trim().slice(0, max);
  const name = s("name", 100), email = s("email", 200), phone = s("phone", 30), plan = s("plan", 50), message = s("message", 3000);
  if (name.length < 2) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  if (message.length < 10) return NextResponse.json({ error: "Please write a message of at least 10 characters." }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) { // No email provider configured: log so submissions are visible in server logs
    console.log("[contact]", { name, email, phone, plan, message });
    return NextResponse.json({ ok: true });
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "IronPulse <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? "hello@ironpulse.fit"],
      reply_to: email,
      subject: `New enquiry from ${name}${plan ? ` (${plan})` : ""}`,
      html: `<p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone)}</p><p><b>Interest:</b> ${esc(plan || "General")}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: "We could not send your message. Please try WhatsApp instead." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
