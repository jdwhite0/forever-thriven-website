/** @type {import('next').NextConfig} */
const nextConfig = {
  // Indexable paths have no trailing slash (matches sitemap). `/about/` 308s to `/about`.
  // The homepage is one HTTP resource (`/`); both host spellings return 200.
  // Canonical for `/` is the no-slash origin: https://thrive-abilities.com
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
