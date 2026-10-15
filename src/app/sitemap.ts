import type { MetadataRoute } from "next";
import { site } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return site.nav.map((l) => ({ url: `${site.url}${l.href === "/" ? "" : l.href}`, lastModified: new Date(), priority: l.href === "/" ? 1 : 0.7 }));
}
