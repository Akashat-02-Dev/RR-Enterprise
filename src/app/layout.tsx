import type { Metadata } from "next";
import { Alegreya, Nunito, Poppins } from "next/font/google";
// CRITICAL: This import must exist for Tailwind to work
import "./globals.css";

const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "EcoExport | Premium Sustainability",
  description: "Bulk customizable eco-friendly jute and bamboo products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${alegreya.variable} ${nunito.variable} ${poppins.variable} font-nunito bg-eco-100 text-eco-500 antialiased`}>
        {children}
      </body>
    </html>
  );
}