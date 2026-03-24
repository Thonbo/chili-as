import type { Metadata } from "next";
import { Syne, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHILI A/S — Årsrapport 2026",
  description:
    "Anden generation. Høj profil. Lav likviditet. En fødselsdagshilsen til William, 17 år.",
  openGraph: {
    title: "CHILI A/S — Årsrapport 2026",
    description: "Anden generation. Høj profil. Lav likviditet.",
    images: ["/images/civilian/IMG20260309120721.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="da"
      className={`${syne.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-chili-black text-chili-text-primary font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
