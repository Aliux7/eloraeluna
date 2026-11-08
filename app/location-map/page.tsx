import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import HeroSection from "@/components/section/location/hero-section";
import MapSection from "@/components/section/location/map-section";

export const metadata: Metadata = pageMetadata({
  title: "Location — Infinite Connectivity in South Jakarta",
  description:
    "Elora & Eluna at Kota Kasablanka, South Jakarta: close to MRT and LRT stations, the Inner Ring Road toll, international schools, embassies, hospitals, hotels and top malls.",
  path: "/location-map",
});

const page = () => {
  return (
    <main className="overflow-x-hidden bg-[#F3F0E8]">
      <h1 className="sr-only">Location of Elora & Eluna: Infinite Connectivity in South Jakarta</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "Location Map", path: "/location-map" }]))} />
      <HeroSection />
      <MapSection />
    </main>
  );
};

export default page;
