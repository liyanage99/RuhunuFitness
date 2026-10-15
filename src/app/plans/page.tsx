import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PlanCard from "@/components/PlanCard";
import Reveal from "@/components/Reveal";
import { plans } from "@/data/plans";
import { images } from "@/data/images";

export const metadata: Metadata = { title: "Membership Plans", description: "Compare IronPulse membership plans: Starter, Pro and Elite. No joining fee, flexible monthly terms.", alternates: { canonical: "/plans" } };

export default function Plans() {
  return (
    <>
      <PageHeader title="Membership" text="Simple monthly plans with no joining fee. Upgrade or pause any time." image={images.gallery[1].src} />
      <section className="container-x py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => <Reveal key={p.id} delay={i * 100}><PlanCard plan={p} /></Reveal>)}
        </div>
        <p className="mt-10 text-center text-white/50">Prices are in Sri Lankan rupees. Student and corporate discounts available on request.</p>
      </section>
    </>
  );
}
