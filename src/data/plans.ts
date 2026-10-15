export type Plan = { id: string; name: string; price: number; period: string; tagline: string; features: string[]; featured?: boolean };
export const currency = "Rs.";
export const plans: Plan[] = [
  { id: "starter", name: "Starter", price: 6500, period: "month", tagline: "Everything you need to begin.",
    features: ["Full gym floor access", "Locker room and showers", "Free fitness assessment", "Off-peak group classes"] },
  { id: "pro", name: "Pro", price: 11500, period: "month", tagline: "Our most popular membership.", featured: true,
    features: ["24/7 gym access", "Unlimited group classes", "2 personal training sessions", "Nutrition guide and body scan", "Bring a friend, 2 days a month"] },
  { id: "elite", name: "Elite", price: 19500, period: "month", tagline: "Coaching built around your goals.",
    features: ["Everything in Pro", "8 personal training sessions", "Custom training and meal plan", "Recovery zone and sauna", "Priority class booking"] },
];
