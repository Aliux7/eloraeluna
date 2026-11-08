import type { Metadata } from "next";

// Single source of truth for SEO metadata, structured data, sitemap and llms.txt.
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://elora-eluna.com").replace(/\/$/, ""),
  name: "Elora & Eluna",
  shortName: "Elora Eluna",
  tagline: "Luxury Residences at Kota Kasablanka, South Jakarta",
  description:
    "Elora & Eluna: twin luxury residential towers by Pakuwon Group at Kota Kasablanka Phase IV, South Jakarta. 2 & 3 bedroom residences with resort facilities.",
  locale: "en_US",
  developer: { name: "Pakuwon Group", url: "https://www.pakuwon.com/" },
  company: "PT Elite Prima Hutama",
  phone: "+62-21-8370-9880",
  whatsapp: "+6281189996968",
  instagram: "https://www.instagram.com/elora.eluna/",
  googleMaps:
    "https://www.google.com/maps/place/Elora+%26+Eluna/data=!4m2!3m1!1s0x0:0x48f82199a0b90713",
  marketingGallery: {
    streetAddress: "Pakuwon Tower Lt. 47, Kota Kasablanka, Jl. Casablanca Raya Kav 88, Menteng Dalam, Tebet",
    addressLocality: "Jakarta Selatan",
    addressRegion: "DKI Jakarta",
    postalCode: "12870",
    addressCountry: "ID",
  },
  office: {
    streetAddress: "Gandaria 8 Office Tower Lt. 32, Gandaria City, Jl. Sultan Iskandar Muda No. 8, Kebayoran Lama",
    addressLocality: "Jakarta Selatan",
    addressRegion: "DKI Jakarta",
    postalCode: "12240",
    addressCountry: "ID",
  },
  keywords: [
    "Elora Eluna",
    "Eluna Kota Kasablanka",
    "Elora Kota Kasablanka",
    "Kota Kasablanka Phase 4",
    "apartemen Kota Kasablanka",
    "luxury apartment South Jakarta",
    "apartemen mewah Jakarta Selatan",
    "Pakuwon Group residence",
    "2 bedroom apartment Jakarta",
    "3 bedroom apartment Jakarta",
  ],
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

/**
 * Per-page metadata. Next.js replaces (not merges) nested objects like
 * `openGraph`, so every page needs the full set, not just the fields it changes.
 * Pages with an `opengraph-image.jpg` next to them get that image automatically.
 */
export function pageMetadata({
  title,
  description,
  path,
  images,
  type = "website",
}: {
  title?: string;
  description: string;
  path: string;
  images?: NonNullable<Metadata["openGraph"]>["images"];
  type?: "website" | "article";
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
