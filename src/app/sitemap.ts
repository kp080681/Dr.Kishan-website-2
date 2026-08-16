import type { MetadataRoute } from "next";
import { conditionPages } from "@/content/conditions";
import { getBlogIndex } from "@/lib/blogs";
import { absoluteUrl } from "@/lib/seo";

const canonicalizedConditionSlugs = new Set(["varicose-veins-evla", "hernia-surgery"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blogs"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getBlogIndex().map((post) => ({
    url: absoluteUrl(`/blogs/${post.slug}`),
    lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const conditionRoutes: MetadataRoute.Sitemap = conditionPages
    .filter((condition) => !canonicalizedConditionSlugs.has(condition.slug))
    .map((condition) => ({
      url: absoluteUrl(`/conditions/${condition.slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...conditionRoutes, ...blogRoutes];
}
