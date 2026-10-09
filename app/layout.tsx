import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { League_Spartan } from "next/font/google";
import FloatingContact from "@/components/layout/floating-contact";
import Footer from "@/components/layout/footer";


const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elora Eluna",
  description: "",
  icons: {
    icon: "/Logo.svg",
  },
};

const HERO_VIDEO_SRC =
  "https://firebasestorage.googleapis.com/v0/b/dupi-aad53.firebasestorage.app/o/Elora%20Eluna-Web-Y-%20D20263009_1.mp4?alt=media&token=d0eb4c5a-7efb-4e95-aef0-f299074c4da8";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="video"
          href={HERO_VIDEO_SRC}
          type="video/mp4"
          // @ts-expect-error - fetchpriority is a valid HTML attribute not yet in React types
          fetchpriority="high"
        />
      </head>
      <body className={leagueSpartan.className}>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
