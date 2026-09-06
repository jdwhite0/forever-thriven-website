import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/site";

const routes = ["/", "/about", "/services", "/why-us", "/get-started", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((r) => ({
    url: canonicalUrl(r),
    lastModified: now,
    changeFrequency: r === "/" ? "weekly" : "monthly",
    priority: r === "/" ? 1 : 0.7,
  }));
}
