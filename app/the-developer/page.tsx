import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import HeroSection from "@/components/section/the-developer/hero-section";
import PropertiesSection from "@/components/section/the-developer/properties-section";

export const metadata: Metadata = pageMetadata({
  title: "The Developer — Pakuwon Group",
  description:
    "Elora & Eluna are developed by Pakuwon Group, an Indonesian developer of superblocks, malls, residences, offices and hotels in Jakarta and Surabaya.",
  path: "/the-developer",
});

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">The Developer of Elora & Eluna: Pakuwon Group</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "The Developer", path: "/the-developer" }]))} />
      <HeroSection />
      <PropertiesSection />
    </main>
  );
};

export default page;
