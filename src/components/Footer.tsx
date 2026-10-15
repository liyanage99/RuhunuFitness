import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="heading text-3xl">රුහුණු<span className="text-brand">Fitness</span></p>
          <p className="mt-4 max-w-sm text-white/60">Train hard, recover well and get stronger with coaches who know your name.</p>
        </div>
        <div>
          <h2 className="font-bold">Explore</h2>
          <ul className="mt-4 space-y-2 text-white/60">
            {site.nav.map((l) => <li key={l.href}><Link href={l.href} className="transition hover:text-brand">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-bold">Visit us</h2>
          <address className="mt-4 space-y-2 not-italic text-white/60">
            <p>{site.address}</p>
            <p><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a></p>
            {site.hours.map((h) => <p key={h}>{h}</p>)}
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/40">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
