import { currency, type Plan } from "@/data/plans";
import { waLink } from "@/data/site";
import { formatPrice } from "@/lib/format";

export default function PlanCard({ plan }: { plan: Plan }) {
  const f = plan.featured;
  const muted = f ? "text-black/70" : "text-white/60";
  return (
    <article className={`relative flex h-full flex-col rounded-2xl p-8 transition duration-300 hover:-translate-y-2 ${f ? "bg-brand text-black shadow-[0_0_60px_rgba(34,229,92,.25)]" : "border border-white/15 bg-charcoal hover:border-brand"}`}>
      {f && <span className="absolute -top-3 right-6 rounded-full bg-black px-4 py-1 text-sm font-bold text-brand">Most popular</span>}
      <h3 className="heading text-4xl">{plan.name}</h3>
      <p className={`mt-2 ${muted}`}>{plan.tagline}</p>
      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-sm font-semibold">{currency}</span>
        <span className="font-display text-6xl">{formatPrice(plan.price)}</span>
        <span className={muted}>/ {plan.period}</span>
      </p>
      <ul className="my-8 flex-1 space-y-3">
        {plan.features.map((x) => (
          <li key={x} className="flex gap-3">
            <svg viewBox="0 0 20 20" className={`mt-1 h-4 w-4 shrink-0 fill-current ${f ? "" : "text-brand"}`} aria-hidden="true"><path d="M7.6 14.2 3.4 10l1.4-1.4 2.8 2.8 7.6-7.6L16.6 5.2z" /></svg>
            <span>{x}</span>
          </li>
        ))}
      </ul>
      <a href={waLink(`Hi IronPulse! I'm interested in the ${plan.name} membership (${currency} ${formatPrice(plan.price)}/${plan.period}). Can you share the next steps?`)}
        target="_blank" rel="noopener noreferrer"
        className={`btn ${f ? "bg-black text-white hover:bg-white hover:text-black" : "bg-brand text-black hover:bg-white"}`}>
        Enquire about {plan.name}
      </a>
    </article>
  );
}
