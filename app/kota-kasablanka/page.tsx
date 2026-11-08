import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import HeroSection from "@/components/section/kota-kasablanka/hero-section";
import DiscoverSection from "@/components/section/kota-kasablanka/discover-section";
import PremiumSection from "@/components/section/kota-kasablanka/premium-section"; 

export const metadata: Metadata = pageMetadata({
  title: "Kota Kasablanka Phase 4 — A World-Class Lifestyle",
  description:
    "Elora & Eluna are part of Kota Kasablanka Phase 4, with direct access to Mall Kota Kasablanka's fashion, dining, entertainment and family attractions in South Jakarta.",
  path: "/kota-kasablanka",
});

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#464948]">
      <h1 className="sr-only">Kota Kasablanka Phase 4: A World-Class Lifestyle</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "Kota Kasablanka", path: "/kota-kasablanka" }]))} />
      <HeroSection />
      <DiscoverSection />
      <PremiumSection />
    </main>
  );
}

export default page;