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
      {
        source: "/blog-1/:slug*",
        destination: "/blog/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
