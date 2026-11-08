import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { League_Spartan } from "next/font/google";
import FloatingContact from "@/components/layout/floating-contact";
import Footer from "@/components/layout/footer";
import { JsonLd, graph, organizationSchema, websiteSchema } from "@/components/seo/json-ld";
import { site } from "@/lib/site";


const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: site.company }],
  creator: site.developer.name,
  publisher: site.company,
  category: "real estate",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    locale: site.locale,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
  // Icons come from app/favicon.ico, app/icon.svg, app/icon.png and app/apple-icon.png.
};

export const viewport: Viewport = {
  themeColor: "#464948",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <JsonLd data={graph(organizationSchema, websiteSchema)} />
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
