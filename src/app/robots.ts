import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The admin dashboard and the API routes behind it are not public
      // surfaces. Note this only stops crawling — the noindex in
      // src/app/admin/layout.tsx is what keeps /admin out of the index.
      disallow: ["/admin", "/api/"],
    },
    sitemap: "https://www.forestheightsvet.com/sitemap.xml",
  };
}
