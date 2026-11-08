import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { JsonLd, breadcrumbSchema, graph } from "@/components/seo/json-ld";
import { FadeSlide } from "@/components/animation/fade-slide";
import HeroSection from "@/components/section/gallery/hero-section";
import RoomsSection from "@/components/section/gallery/rooms-section";
import illustration_bottom from "@/app/assets/home/illustration_bottom.webp";
import Image from "next/image";

export const metadata: Metadata = pageMetadata({
  title: "Show Unit Gallery — 2BC & 3BC Interiors",
  description:
    "Tour the Eluna show units: the 2BC residence designed by Metaphor and the 3BC residence by HBA — living and dining, master bedroom, kids rooms and more.",
  path: "/gallery",
});

const page = () => {
  return (
    <main className="overflow-x-hidden relative bg-[#464948] pt-30 sm:pt-34 xl:pt-40 space-y-5 sm:space-y-10 xl:space-y-16 pb-5 sm:pb-10 xl:pb-16">
      <h1 className="sr-only">Show Unit Gallery of Eluna</h1>
      <JsonLd data={graph(breadcrumbSchema([{ name: "Gallery", path: "/gallery" }]))} />
      <FadeSlide
        direction="right"
        className="absolute top-7 -right-13 sm:-right-20 z-0 pointer-events-none"
      >
        <Image
          src={illustration_bottom}
          alt=""
          className="w-68 sm:w-96 md:w-120"
          sizes="(min-width: 768px) 480px, (min-width: 640px) 384px, 272px"
        />
      </FadeSlide>
      <HeroSection />
      <RoomsSection />
    </main>
  );
};

export default page;
