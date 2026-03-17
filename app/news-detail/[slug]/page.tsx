import { notFound } from "next/navigation";
import { newsData } from "@/constants/news";

import HeroSection from "@/components/section/news-and-events/detail/hero-section";
import NewsOneSection from "@/components/section/news-and-events/detail/news-one-section";
import NewsTwoSection from "@/components/section/news-and-events/detail/news-two-section";
import NewsThreeSection from "@/components/section/news-and-events/detail/news-three-section";
import NewsFourSection from "@/components/section/news-and-events/detail/news-four-section";

type Props = {
  params: Promise<{ slug: string }>;
};

async function page({ params }: Props) {
  const { slug } = await params;

  const article = newsData.find((item) => String(item.id) === slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <HeroSection article={article} />
      {article.id === 1 && <NewsOneSection />}
      {article.id === 2 && <NewsTwoSection />}
      {article.id === 3 && <NewsThreeSection />}
      {article.id === 4 && <NewsFourSection />}
    </main>
  );
}

export default page;
