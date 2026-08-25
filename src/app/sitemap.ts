import type { MetadataRoute } from "next";
import posts from "./blog/posts";

const baseUrl = "https://www.forestheightsvet.com";

// Hand-maintained per-page modification dates (YYYY-MM-DD).
//
// This used to be `new Date()`, which stamped every page with the build time on
// every deploy. Crawlers discount a lastmod that is always "now", which costs
// the signal on the pages that genuinely did change. Update the entry here when
// you make a substantive content change to a page.
const pageUpdated: Record<string, string> = {
  "": "2026-04-06",
  "/about": "2026-04-06",
  "/staff": "2026-04-06",
  "/services": "2026-04-06",
  "/wellness": "2026-04-06",
  "/dentistry": "2026-04-06",
  "/surgery": "2026-04-06",
  "/diagnostics": "2026-04-06",
  "/nutrition": "2026-04-06",
  "/pharmacy": "2026-08-25",
  "/emergency": "2026-04-06",
  "/euthanasia": "2026-04-06",
  "/contact": "2026-08-25",
  "/blog": "2026-04-06",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = Object.entries(pageUpdated).map(
    ([path, updated]) => ({
      url: `${baseUrl}${path}/`,
      lastModified: new Date(updated),
      changeFrequency: path === "/blog" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
    })
  );

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...blogPages];
}
