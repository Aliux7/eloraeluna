import type { MetadataRoute } from "next";
import { newsData } from "@/constants/news";
import { absoluteUrl } from "@/lib/site";

const pages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/the-design", priority: 0.9, changeFrequency: "monthly" },
  { path: "/the-concept", priority: 0.8, changeFrequency: "monthly" },
  { path: "/facilities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
  { path: "/location-map", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kota-kasablanka", priority: 0.7, changeFrequency: "monthly" },
  { path: "/the-developer", priority: 0.6, changeFrequency: "monthly" },
  { path: "/news-events", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      changeFrequency,
      priority,
    })),
    ...newsData.map((article) => ({
      url: absoluteUrl(`/news-detail/${article.id}`),
      lastModified: article.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
      images: [absoluteUrl(article.ogImage.src)],
    })),
  ];
}
