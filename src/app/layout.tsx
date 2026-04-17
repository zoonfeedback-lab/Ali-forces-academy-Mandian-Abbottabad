import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pasban-E-Wattan Forces Academy | Mandian, Abbottabad",
  description:
    "Pakistan's premier forces preparation academy in Abbottabad. Expert-led training for Initial Tests, ISSB, Army, Navy & PAF selection. Located at Mandian, Abbottabad.",
  keywords:
    "Pasban-E-Wattan, Ali Forces Academy, ISSB preparation, military test Pakistan, Army selection, Abbottabad forces academy, Mandian Abbottabad",
  openGraph: {
    title: "Pasban-E-Wattan Forces Academy — Abbottabad",
    description:
      "Transforming Aspirations Into Excellence. Specialized, disciplined training for the future leaders of Pakistan's Armed Forces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
