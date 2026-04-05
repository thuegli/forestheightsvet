import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.forestheightsvet.com";

  const staticPages = [
    "",
    "/about",
    "/staff",
    "/services",
    "/wellness",
    "/dentistry",
    "/surgery",
    "/diagnostics",
    "/nutrition",
    "/pharmacy",
    "/emergency",
    "/euthanasia",
    "/contact",
    "/blog",
  ];

  const blogSlugs = [
    "coronavirus-action-plan",
    "pet-first-aid-awareness-month",
    "spring-parasites-and-pests",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...blogPages];
}
