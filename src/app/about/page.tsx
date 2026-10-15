import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { images } from "@/data/images";

export const metadata: Metadata = { title: "About Us", description: "Learn about IronPulse Fitness, our story, values and the team behind Colombo's most motivating gym.", alternates: { canonical: "/about" } };

const values = [["Consistency over intensity", "Small habits repeated weekly beat heroic one-off workouts."], ["Technique first", "Good form protects your body and builds better results."], ["Everyone belongs", "Beginners and athletes train side by side, with no judgement."]];

export default function About() {
  return (
    <>
      <PageHeader title="About us" text="A gym built by lifters, for people who want real results." image={images.about} />
      <section className="container-x grid items-center gap-12 py-24 lg:grid-cols-2">
        <Reveal>
          <h2 className="heading text-5xl sm:text-6xl">Founded on sweat and discipline</h2>
          <div className="mt-6 space-y-4 text-lg text-white/70">
            <p>IronPulse opened in 2016 with one squat rack and a simple promise: honest coaching and no gimmicks. Today we are a 12,000 sq ft training centre serving more than 2,500 members.</p>
            <p>Our coaches hold international certifications and run every programme around your goals, whether that is fat loss, strength, sport performance or simply feeling better every day.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={images.about} alt="Members training together" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </section>
      <section className="bg-charcoal py-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {values.map(([t, d], i) => (
            <Reveal key={t} delay={i * 100}><div className="h-full rounded-2xl border border-white/10 p-8 transition hover:border-brand"><h3 className="heading text-3xl text-brand">{t}</h3><p className="mt-3 text-white/70">{d}</p></div></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
