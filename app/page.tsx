import type { Metadata } from "next";
import { pageMetadata, site } from "@/lib/site";
import { JsonLd, graph, residenceSchema } from "@/components/seo/json-ld";
import HeroSection from "@/components/section/home/hero-section";
import DiscoverSection from "@/components/section/home/discover-section";
import DesignSection from "@/components/section/home/design-section";
import ConceptSection from "@/components/section/home/concept-section";
import FacilitiesSection from "@/components/section/home/facilities-section";
import LocationSection from "@/components/section/home/location-section";
import DeveloperSection from "@/components/section/home/developer-section";
import NewsSection from "@/components/section/home/news-section";

export const metadata: Metadata = pageMetadata({
  description: site.description,
  path: "/",
});

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">Elora & Eluna — Luxury Residences at Kota Kasablanka, South Jakarta</h1>
      <JsonLd data={graph(residenceSchema)} />
      <HeroSection />
      <DiscoverSection />
      <DesignSection />
      <ConceptSection />
      <FacilitiesSection />
      <LocationSection />
      <DeveloperSection />
      <NewsSection />
    </main>
  );
}
