import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { images } from "@/data/images";

export const metadata: Metadata = { title: "Gallery", description: "Take a look inside IronPulse Fitness: equipment, classes and our training community.", alternates: { canonical: "/gallery" } };

export default function Gallery() {
  return (
    <>
      <PageHeader title="Gallery" text="A look inside the gym, the classes and the people." image={images.gallery[4].src} />
      <section className="container-x grid auto-rows-[240px] gap-4 py-24 sm:grid-cols-2 lg:grid-cols-3">
        {images.gallery.map((img, i) => (
          <Reveal key={img.src} delay={(i % 3) * 80} className={`h-full ${i === 0 || i === 3 ? "sm:row-span-2" : ""}`}>
            <figure className="group relative h-full min-h-[240px] overflow-hidden rounded-2xl">
              <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black p-4 font-semibold transition duration-300 group-hover:translate-y-0">{img.alt}</figcaption>
            </figure>
          </Reveal>
        ))}
      </section>
    </>
  );
}
