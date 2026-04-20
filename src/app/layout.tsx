import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Forces Academy Abbottabad | Pakistan's Premier Academy",
  description:
    "Pakistan's premier forces preparation academy in Abbottabad. Expert-led training for Initial Tests, ISSB, Army, Navy & PAF selection.",
  keywords:
    "Ali Forces Academy, Abbottabad, ISSB preparation, military test Pakistan, Army selection, Mandian Abbottabad",
  openGraph: {
    title: "Ali Forces Academy Abbottabad — Excellence in Training",
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
