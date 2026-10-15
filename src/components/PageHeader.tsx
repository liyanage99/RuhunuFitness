import Image from "next/image";

export default function PageHeader({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden pb-14 pt-32">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="container-x relative">
        <h1 className="heading hero-rise text-6xl sm:text-8xl">{title}</h1>
        <p className="hero-rise mt-5 max-w-xl text-lg text-white/70" style={{ animationDelay: ".15s" }}>{text}</p>
      </div>
    </section>
  );
}
