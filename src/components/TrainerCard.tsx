import Image from "next/image";
import type { Trainer } from "@/data/trainers";

export default function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl bg-charcoal">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src={trainer.image} alt={`${trainer.name}, ${trainer.role}`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent" />
        <div className="absolute bottom-0 p-5">
          <h3 className="heading text-3xl">{trainer.name}</h3>
          <p className="font-semibold text-brand">{trainer.role}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-white/60">{trainer.bio}</p>
        <p className="mt-3 text-sm text-white/80">{trainer.experience} of coaching</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {trainer.specialties.map((s) => <li key={s} className="rounded-full border border-brand/50 px-3 py-1 text-sm text-brand">{s}</li>)}
        </ul>
      </div>
    </article>
  );
}
