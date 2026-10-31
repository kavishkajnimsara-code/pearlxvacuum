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
  title: "Pearl-X | Export Quality Vacuum Packing & Travel Sealing Colombo",
  description:
    "Export quality vacuum packing in Colombo for food, curries, spices, dry fish, and luggage clothing. 100% leak-proof, airport customs compliant, open 7 days a week.",
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
