import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://rapido-motorsiklo-garage-web.vercel.app";
const siteTitle =
  "Rapido Motorsiklo Garage — Quick, honest motorcycle repair in Lubao";
const siteDescription =
  "Daily riders trust Rapido Motorsiklo Garage in Lubao, Pampanga for fast, honest motorcycle repair, maintenance, and parts. Message us on Facebook to get help today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "motorcycle repair Lubao",
    "motor parts Pampanga",
    "Rapido Motorsiklo Garage",
    "motorcycle maintenance",
    "motor shop near me",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: siteUrl,
    siteName: "Rapido Motorsiklo Garage",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
