import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import NewsSection from "@/components/section/news-and-events/news-section";

export const metadata: Metadata = pageMetadata({
  title: "News & Events",
  description:
    "Latest news, insights and events from Elora & Eluna at Kota Kasablanka — integrated living, luxury and urban lifestyle in Jakarta.",
  path: "/news-events",
});

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">Elora & Eluna News & Events</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "News & Events", path: "/news-events" }]))} />
      <NewsSection />
    </main>
  );
};

export default page;
