import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import ConclusionSection from "@/components/section/the-design/conclusion-section";
import HeroSection from "@/components/section/the-design/hero-section";
import MapSection from "@/components/section/the-design/map-section";
import MasterplanSection from "@/components/section/the-design/masterplan-section";
import TowerSection from "@/components/section/the-design/tower-section";

export const metadata: Metadata = pageMetadata({
  title: "The Design — Masterplan, Towers & Floor Plans",
  description:
    "Explore the 12.9 ha Kota Kasablanka masterplan, the Eluna tower, its facility floors and floor plans for 2 and 3 bedroom units on floors M1–M6 and 2–35.",
  path: "/the-design",
});

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">The Design of Eluna: Kota Kasablanka Masterplan, Towers and Floor Plans</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "The Design", path: "/the-design" }]))} />
      <HeroSection />
      <MasterplanSection />
      <TowerSection />
      <MapSection />
      <ConclusionSection />
    </main>
  );
};

export default page;
