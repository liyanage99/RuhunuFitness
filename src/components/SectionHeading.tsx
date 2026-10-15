export default function SectionHeading({ title, text, center = false }: { title: string; text?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <h2 className="heading text-5xl sm:text-6xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-white/60">{text}</p>}
    </div>
  );
}
