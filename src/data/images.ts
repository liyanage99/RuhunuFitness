// Swap these for your own photos in /public/images for production.
const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
export const images = {
  hero: u("photo-1534438327276-14e5300c3a48", 2000),
  about: u("photo-1571019613454-1cb2f99b2d8b"),
  cta: u("photo-1517836357463-d25dfeac3438", 2000),
  gallery: [
    { src: u("photo-1534438327276-14e5300c3a48"), alt: "Free weights rack" },
    { src: u("photo-1540497077202-7c8a3999166f"), alt: "Member lifting barbell" },
    { src: u("photo-1581009146145-b5ef050c2e1e"), alt: "Personal training session" },
    { src: u("photo-1571019613454-1cb2f99b2d8b"), alt: "Group workout" },
    { src: u("photo-1593079831268-3381b0db4a77"), alt: "Cardio floor" },
    { src: u("photo-1517836357463-d25dfeac3438"), alt: "Strength training" },
  ],
};
export { u as unsplash };
