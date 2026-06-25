import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { COMPANY_NAME, TAGLINE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${COMPANY_NAME} — ${TAGLINE}`,
  description:
    "Professional auto detailing, carpet and sofa deep cleaning, and commercial home/office cleaning services in Machakos, Kenya. Reliable, eco-friendly, and details-obsessed.",
  openGraph: {
    title: `${COMPANY_NAME} — Premium Cleaning in Machakos`,
    description:
      "Eco-friendly, professional-grade car detailing and home/office cleaning services in Machakos, Kenya. Spotless results, every single time.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} Home and Office Cleaning Services`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — Premium Cleaning in Machakos`,
    description:
      "Eco-friendly, professional-grade car detailing and home/office cleaning services in Machakos, Kenya.",
    images: [
      "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?w=1200&q=80",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB", // Theme color for mobile browser bars
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", inter.variable)}>
      <body className="font-sans antialiased text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
