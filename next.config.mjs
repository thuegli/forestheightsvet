/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Legacy Wix URLs — preserve link equity from old site
      {
        source: "/meet-our-staff",
        destination: "/staff/",
        permanent: true,
      },
      {
        source: "/meet-our-staff/",
        destination: "/staff/",
        permanent: true,
      },
      {
        source: "/blog-1",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog-1/",
        destination: "/blog/",
        permanent: true,
      },
      // Specific legacy blog post slugs — must precede the catch-all below.
      // Wix slugs guessed from preserved titles in PROJECT_INSTRUCTIONS.md.
      {
        source: "/blog-1/april-pet-first-aid-awareness-month",
        destination: "/blog/pet-first-aid-essentials/",
        permanent: true,
      },
      {
        source: "/post/april-pet-first-aid-awareness-month",
        destination: "/blog/pet-first-aid-essentials/",
        permanent: true,
      },
      {
        source: "/blog-1/spring-has-sprung-and-so-have-some-parasites-and-pests",
        destination: "/blog/spring-parasites-portland/",
        permanent: true,
      },
      {
        source: "/post/spring-has-sprung-and-so-have-some-parasites-and-pests",
        destination: "/blog/spring-parasites-portland/",
        permanent: true,
      },
      // COVID action plan is retired — falls through to /blog/ via catch-all.
      {
        source: "/blog-1/:slug*",
        destination: "/blog/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
