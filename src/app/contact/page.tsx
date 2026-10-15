import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { images } from "@/data/images";
import { site, waLink } from "@/data/site";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with IronPulse Fitness. Book a free trial, ask about memberships or visit us in Colombo.", alternates: { canonical: "/contact" } };

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact" text="Questions about memberships or training? We reply within one working day." image={images.cta} />
      <section className="container-x grid gap-14 py-24 lg:grid-cols-5">
        <div className="lg:col-span-3"><ContactForm /></div>
        <aside className="space-y-8 lg:col-span-2">
          <div>
            <h2 className="heading text-3xl">Prefer to chat?</h2>
            <a href={waLink("Hi IronPulse! I have a question.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4">Message on WhatsApp</a>
          </div>
          <address className="space-y-3 not-italic text-white/70">
            <p>{site.address}</p>
            <p><a className="hover:text-brand" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>
            <p><a className="hover:text-brand" href={`mailto:${site.email}`}>{site.email}</a></p>
            {site.hours.map((h) => <p key={h}>{h}</p>)}
          </address>
          <iframe title="Map of IronPulse Fitness" loading="lazy" className="h-64 w-full rounded-2xl border-0 grayscale" src="https://maps.google.com/maps?q=Galle%20Road%20Colombo%203&output=embed" />
        </aside>
      </section>
    </>
  );
}
