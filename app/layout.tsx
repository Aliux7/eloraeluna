import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import { League_Spartan } from "next/font/google";
import FloatingContact from "@/components/layout/floating-contact";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elora Eluna",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Header />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
