import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import DesignSection from "@/components/section/facilities/design-section";
import HeroSection from "@/components/section/facilities/hero-section";
import OverviewSection from "@/components/section/facilities/overview-section";
import QuotesSection from "@/components/section/facilities/quotes-section";
import SharedSection from "@/components/section/facilities/shared-section";

export const metadata: Metadata = pageMetadata({
  title: "Facilities — Lagoon Pool, Gym, Sky View Terrace & More",
  description:
    "Resort-style facilities at Eluna: main lobby, library, private dining, function hall, lagoon pool, cabanas, gym, tennis court, jogging track, pet park and more.",
  path: "/facilities",
});

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">Eluna Facilities: A Lifestyle of Distinction</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "Facilities", path: "/facilities" }]))} />
      <HeroSection />
      <OverviewSection /> 
      <DesignSection />
      <SharedSection />
      <QuotesSection />
    </main>
  );
};

export default page;
