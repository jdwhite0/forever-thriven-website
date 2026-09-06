/** Apex origin used by sitemap locs and per-page canonicals. No trailing slash. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thrive-abilities.com"
).replace(/\/$/, "");

/**
 * Absolute HTTPS URL matching sitemap `<loc>` values.
 * Homepage → `https://thrive-abilities.com` (no trailing slash).
 * Other routes → `https://thrive-abilities.com/about` (no trailing slash).
 */
export function canonicalUrl(path: string = ""): string {
  if (!path || path === "/") return SITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized.replace(/\/$/, "")}`;
}
