import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PlanCard from "@/components/PlanCard";
import TrainerCard from "@/components/TrainerCard";
import { plans } from "@/data/plans";
import { trainers } from "@/data/trainers";
import { images } from "@/data/images";
import { waLink } from "@/data/site";

const trial = waLink("Hi! I'd like to book a free trial at IronPulse.");
const stats = [["2,500+", "Active members"], ["24", "Classes every week"], ["15", "Certified coaches"], ["24/7", "Access on Pro and Elite"]];
const perks = [
  ["Pro-grade equipment", "Calibrated racks, plates and cardio machines, replaced before they wear out."],
  ["Coaches who care", "Every member gets a free assessment and a plan with real targets."],
  ["Classes for every level", "From beginner strength to advanced HIIT, every morning and evening."],
  ["Recovery built in", "Stretch zone, sauna and nutrition guidance to help you bounce back faster."],
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <Image src={images.hero} alt="Athlete lifting in the IronPulse gym" fill priority sizes="100vw" className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="container-x relative pt-24">
          <h1 className="heading hero-rise text-[clamp(3.5rem,13vw,10rem)]">Build the<br /><span className="text-brand">strongest</span> you.</h1>
          <p className="hero-rise mt-6 max-w-lg text-lg text-white/75 sm:text-xl" style={{ animationDelay: ".2s" }}>Premium equipment, expert coaching and a community that pushes you further. Your first session is free.</p>
          <div className="hero-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: ".35s" }}>
            <a href={trial} target="_blank" rel="noopener noreferrer" className="btn-primary">Book a free trial</a>
            <Link href="/plans" className="btn-outline">See memberships</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal">
        <dl className="container-x grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map(([n, l]) => (
            <Reveal key={l}><div><dt className="font-display text-5xl text-brand sm:text-6xl">{n}</dt><dd className="mt-1 text-white/60">{l}</dd></div></Reveal>
          ))}
        </dl>
      </section>

      <section className="container-x py-24">
        <Reveal><SectionHeading title="Why train with us" text="Everything is designed to remove excuses and make progress inevitable." /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 p-7 transition duration-300 hover:border-brand hover:bg-charcoal">
                <h3 className="heading text-3xl">{t}</h3><p className="mt-3 text-white/60">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-charcoal py-24">
        <div className="container-x">
          <Reveal><SectionHeading center title="Pick your plan" text="No joining fee. Cancel any time with 30 days notice." /></Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {plans.map((p, i) => <Reveal key={p.id} delay={i * 100}><PlanCard plan={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal><SectionHeading title="Meet your coaches" /></Reveal>
          <Link href="/trainers" className="font-bold text-brand hover:underline">View all trainers</Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => <Reveal key={t.id} delay={i * 80}><TrainerCard trainer={t} /></Reveal>)}
        </div>
      </section>

      <section className="relative overflow-hidden py-28 text-center">
        <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-black/50" />
        <Reveal className="container-x relative">
          <h2 className="heading text-6xl sm:text-8xl">Your first session is on us</h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-white/75">Message us on WhatsApp and we will book a tour and a trial workout this week.</p>
          <a href={trial} target="_blank" rel="noopener noreferrer" className="btn-primary mt-9">Chat on WhatsApp</a>
        </Reveal>
      </section>
    </>
  );
}
