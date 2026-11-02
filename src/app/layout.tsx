import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pearl-X | Running Out of Suitcase Space? Pack 3X More.",
  description:
    "Don't leave your favorite food or clothes behind. Professional vacuum sealing in Colombo that saves up to 80% luggage space, keeps food 100% leak-proof, and guarantees freshness on every flight.",
  keywords: [
    "pearl-x vacuum packing",
    "food vacuum packing colombo",
    "leak proof curry seal sri lanka",
    "luggage space saving vacuum",
    "kirulapone vacuum sealing",
  ],
  icons: {
    icon: "/images/pearl-x-logo.png",
  },
  openGraph: {
    title: "Running Out of Suitcase Space? Pack 3X More. | Pearl-X Vacuum Packing",
    description:
      "Don't leave your favorite food or clothes behind. Professional vacuum sealing that saves up to 80% luggage space, keeps food 100% leak-proof, and guarantees freshness on every flight.",
    siteName: "Pearl-X Vacuum Packing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Running Out of Suitcase Space? Pack 3X More. | Pearl-X Vacuum Packing",
    description:
      "Don't leave your favorite food or clothes behind. Professional vacuum sealing that saves up to 80% luggage space, keeps food 100% leak-proof, and guarantees freshness on every flight.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${poppins.className} font-sans scroll-smooth`}>
      <body className={`${poppins.className} min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-red-600 selection:text-white flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
