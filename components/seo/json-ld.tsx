import { absoluteUrl, site } from "@/lib/site";

type Thing = Record<string, unknown>;

/** Renders schema.org structured data. `<` is escaped so content can't close the script tag. */
export function JsonLd({ data }: { data: Thing | Thing[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
const RESIDENCE_ID = `${site.url}/#residence`;

const address = (a: typeof site.marketingGallery | typeof site.office) => ({
  "@type": "PostalAddress",
  ...a,
});

export const organizationSchema: Thing = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.name,
  legalName: site.company,
  url: site.url,
  logo: absoluteUrl("/icon.png"),
  telephone: site.phone,
  address: address(site.office),
  parentOrganization: { "@type": "Organization", name: site.developer.name, url: site.developer.url },
  sameAs: [site.instagram],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phone,
      areaServed: "ID",
      availableLanguage: ["en", "id"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.whatsapp,
      url: `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`,
      areaServed: "ID",
      availableLanguage: ["en", "id"],
    },
  ],
};

export const websiteSchema: Thing = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: site.url,
  name: site.name,
  alternateName: [site.shortName, "Eluna Kota Kasablanka"],
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": ORG_ID },
};

const amenities = [
  "Main Lobby",
  "Lobby Lounge",
  "Library",
  "Private Dining",
  "Pool Lounge",
  "Function Hall",
  "Sky View Terrace",
  "Zen Garden",
  "Lagoon Pool",
  "Blue Lagoon",
  "Cabana",
  "BBQ Lawn",
  "Kids Pool & Playground",
  "Kids Room",
  "Gym",
  "Tennis Court",
  "Jogging Track",
  "Pet Park",
];

export const residenceSchema: Thing = {
  "@type": ["ApartmentComplex", "Residence"],
  "@id": RESIDENCE_ID,
  name: "Eluna Tower — Elora & Eluna, Kota Kasablanka",
  alternateName: ["Eluna", "Elora & Eluna", "Elora Eluna"],
  description:
    "Eluna is a luxury residential tower in Kota Kasablanka Phase IV, South Jakarta, developed by Pakuwon Group. It offers 2 and 3 bedroom residences on typical floors 2–35 and mezzanine floors M1–M6, with resort-style facilities and direct access to Mall Kota Kasablanka. Its sister tower Elora is coming soon as Phase II.",
  url: site.url,
  image: absoluteUrl("/opengraph-image.jpg"),
  address: address(site.marketingGallery),
  hasMap: site.googleMaps,
  telephone: site.phone,
  containedInPlace: {
    "@type": "Place",
    name: "Kota Kasablanka",
    description: "A 12.9 hectare superblock in South Jakarta by Pakuwon Group.",
    url: "https://www.kotakasablanka.co.id/",
  },
  amenityFeature: amenities.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  numberOfBedrooms: { "@type": "QuantitativeValue", minValue: 2, maxValue: 3 },
  publicAccess: false,
};

export function breadcrumbSchema(items: { name: string; path: string }[]): Thing {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Wraps nodes in a single @graph so they can reference each other by @id. */
export const graph = (...nodes: Thing[]): Thing => ({ "@context": "https://schema.org", "@graph": nodes });
