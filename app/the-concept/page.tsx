import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import HeroSection from "@/components/section/the-concept/hero-section";
import IntegratedSection from "@/components/section/the-concept/integrated-section";

export const metadata: Metadata = pageMetadata({
  title: "The Concept — Inspired by the Sun and the Moon",
  description:
    "Elora and Eluna, inspired by the sun and the moon, blend vibrance and tranquility at Kota Kasablanka, integrated with W Hotels and Tribute Portfolio by Marriott.",
  path: "/the-concept",
});

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">The Concept of Elora & Eluna: The Energy of the Sun and the Shimmer of the Moon</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "The Concept", path: "/the-concept" }]))} />
      <HeroSection />
      <IntegratedSection />
    </main>
  );
};

export default page;
