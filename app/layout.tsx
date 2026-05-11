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

export const metadata: Metadata = {
  title: "Rapido Motorsiklo Garage — Quick, honest motorcycle repair in Lubao",
  description:
    "Daily riders trust Rapido Motorsiklo Garage in Lubao, Pampanga for fast, honest motorcycle repair, maintenance, and parts. Message us on Facebook to get help today.",
  keywords: [
    "motorcycle repair Lubao",
    "motor parts Pampanga",
    "Rapido Motorsiklo Garage",
    "motorcycle maintenance",
    "motor shop near me",
  ],
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
