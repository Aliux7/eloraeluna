import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsData } from "@/constants/news";
import { absoluteUrl, pageMetadata, site } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";

import HeroSection from "@/components/section/news-and-events/detail/hero-section";
import NewsOneSection from "@/components/section/news-and-events/detail/news-one-section";
import NewsTwoSection from "@/components/section/news-and-events/detail/news-two-section";
import NewsThreeSection from "@/components/section/news-and-events/detail/news-three-section";
import NewsFourSection from "@/components/section/news-and-events/detail/news-four-section";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return newsData.map((item) => ({ slug: String(item.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsData.find((item) => String(item.id) === slug);
  if (!article) return {};

  const path = `/news-detail/${article.id}`;
  const base = pageMetadata({
    title: article.title,
    description: article.description,
    path,
    type: "article",
    images: [{ url: article.ogImage.src, width: 1200, height: 630, alt: article.title }],
  });
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article", publishedTime: article.date },
  };
}

async function page({ params }: Props) {
  const { slug } = await params;

  const article = newsData.find((item) => String(item.id) === slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">{article.title}</h1>
      <JsonLd
        data={graph(
          {
            "@type": "Article",
            headline: article.title,
            description: article.description,
            image: absoluteUrl(article.ogImage.src),
            datePublished: article.date,
            mainEntityOfPage: absoluteUrl(`/news-detail/${article.id}`),
            inLanguage: "en",
            author: { "@id": `${site.url}/#organization` },
            publisher: { "@id": `${site.url}/#organization` },
          },
          breadcrumbSchema([
            { name: "News & Events", path: "/news-events" },
            { name: article.title, path: `/news-detail/${article.id}` },
          ]),
        )}
      />
      <HeroSection article={article} />
      {article.id === 1 && <NewsOneSection />}
      {article.id === 2 && <NewsTwoSection />}
      {article.id === 3 && <NewsThreeSection />}
      {article.id === 4 && <NewsFourSection />}
    </main>
  );
}

export default page;
