import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Spenzies Cleaning | House, Commercial & Move-Out Cleaning in Niagara and the GTA",
  description:
    "Residential, commercial, new-build and move-in/move-out deep cleaning, plus garden clean-ups, lawn care and snow removal. Owner Spencer and crew. 4.9 stars from 42 Google reviews. Call (905) 687-2884.",
  openGraph: {
    title: "Spenzies Cleaning | Cleaning & Yard Care in Niagara and the GTA",
    description: "One trusted crew for deep cleans, garden clean-ups, lawn care and snow removal. 4.9 stars from 42 Google reviews. Call (905) 687-2884.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
