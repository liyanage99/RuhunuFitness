export const site = {
  name: "Ruhunu Fitness",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ironpulse-fitness.vercel.app",
  description: "IronPulse Fitness is a premium gym in Colombo with expert trainers, 24 classes a week and flexible memberships. Book a free trial today.",
  phone: "+94 77 123 4567",
  whatsapp: "94771234567", // international format, digits only
  email: "hello@ironpulse.fit",
  address: "123 Galle Road, Colombo 03, Sri Lanka",
  hours: ["Mon to Sat: 5:00 am to 10:00 pm", "Sunday: 7:00 am to 6:00 pm"],
  nav: [
    { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/plans", label: "Membership" },
    { href: "/trainers", label: "Trainers" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" },
  ],
};
export const waLink = (msg: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
