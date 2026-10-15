import { unsplash } from "./images";
export type Trainer = { id: string; name: string; role: string; bio: string; specialties: string[]; experience: string; image: string };
export const trainers: Trainer[] = [
  { id: "kavindu", name: "Kavindu Perera", role: "Head Strength Coach", experience: "12 years", specialties: ["Powerlifting", "Hypertrophy"],
    bio: "Former national lifter who builds strength programmes that people actually stick to.", image: unsplash("photo-1567013127542-490d757e51fc", 800) },
  { id: "nisha", name: "Nisha Fernando", role: "HIIT and Conditioning", experience: "8 years", specialties: ["HIIT", "Fat loss"],
    bio: "High-energy classes that push your limits while keeping form first.", image: unsplash("photo-1594381898411-846e7d193883", 800) },
  { id: "rohan", name: "Rohan de Silva", role: "Functional Training", experience: "10 years", specialties: ["Mobility", "Athletic performance"],
    bio: "Helps you move better, lift safer and stay injury-free for the long run.", image: unsplash("photo-1583454110551-21f2fa2afe61", 800) },
  { id: "ayesha", name: "Ayesha Rahman", role: "Nutrition and Wellness", experience: "7 years", specialties: ["Meal planning", "Weight management"],
    bio: "Practical nutrition coaching that fits real life and local food.", image: unsplash("photo-1518310383802-640c2de311b2", 800) },
];
