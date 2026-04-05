import type { MetadataRoute } from "next";
import posts from "./blog/posts";

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

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}/`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...blogPages];
}
