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
      // Wix RSS feed — still returns 200 on the old site, so it may be linked.
      {
        source: "/blog-feed.xml",
        destination: "/blog/",
        permanent: true,
      },
      // Empty placeholder page that Wix published into its sitemap.
      {
        source: "/blank",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blank/",
        destination: "/",
        permanent: true,
      },
      // Specific legacy blog post slugs — must precede the catch-alls below.
      // Slugs taken verbatim from the live Wix blog-posts-sitemap.xml.
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
      // The real Wix slug contains a literal ellipsis. Both spellings are
      // mapped: the true one, and the guess that was here previously in case
      // anything already links to it.
      {
        source: "/post/spring-has-sprung...-and-so-have-some-parasites-and-pests",
        destination: "/blog/spring-parasites-portland/",
        permanent: true,
      },
      {
        source: "/blog-1/spring-has-sprung...-and-so-have-some-parasites-and-pests",
        destination: "/blog/spring-parasites-portland/",
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
      // Catch-alls last. The retired COVID action plan lands here, as does any
      // Wix post slug not explicitly mapped above.
      {
        source: "/post/:slug*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog-1/:slug*",
        destination: "/blog/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
