import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TrainerCard from "@/components/TrainerCard";
import Reveal from "@/components/Reveal";
import { trainers } from "@/data/trainers";
import { images } from "@/data/images";

export const metadata: Metadata = { title: "Our Trainers", description: "Meet the certified IronPulse coaches in strength, HIIT, functional training and nutrition.", alternates: { canonical: "/trainers" } };

export default function Trainers() {
  return (
    <>
      <PageHeader title="Trainers" text="Certified coaches who build programmes around you." image={images.gallery[2].src} />
      <section className="container-x grid gap-6 py-24 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.map((t, i) => <Reveal key={t.id} delay={i * 80}><TrainerCard trainer={t} /></Reveal>)}
      </section>
    </>
  );
}
