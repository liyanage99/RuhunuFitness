"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, waLink } from "@/data/site";

const trial = waLink("Hi! I'd like to book a free trial at IronPulse.");

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? "border-b border-white/10 bg-black/90 backdrop-blur" : "bg-transparent"}`}>
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Main">
        <Link href="/" className="heading text-5xl">රුහුණු<span className="text-brand">Fitness</span></Link>
        <ul className="hidden items-center gap-8 lg:flex">
          {site.nav.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={path === l.href ? "page" : undefined}
                className={`font-semibold transition hover:text-brand ${path === l.href ? "text-brand" : "text-white/80"}`}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <a href={trial} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-2.5 lg:inline-flex">Free trial</a>
        <button onClick={() => setOpen(!open)} className="relative h-10 w-10 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">
          <span className={`absolute left-2 h-0.5 w-6 bg-white transition ${open ? "top-5 rotate-45" : "top-3"}`} />
          <span className={`absolute left-2 top-5 h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-2 h-0.5 w-6 bg-white transition ${open ? "top-5 -rotate-45" : "top-7"}`} />
        </button>
      </nav>
      <div id="mobile-menu" className={`fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] bg-black transition duration-300 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <ul className="container-x flex flex-col pt-6">
          {site.nav.map((l) => (
            <li key={l.href}><Link href={l.href} className={`heading block border-b border-white/10 py-4 text-4xl ${path === l.href ? "text-brand" : ""}`}>{l.label}</Link></li>
          ))}
          <li className="pt-6"><a href={trial} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">Book a free trial</a></li>
        </ul>
      </div>
    </header>
  );
}
