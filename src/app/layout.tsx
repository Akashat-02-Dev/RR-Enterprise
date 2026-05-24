import type { Metadata } from "next";
import { Gelasio, Nunito, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const gelasio = Gelasio({ subsets: ["latin"], variable: "--font-gelasio" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const montserrat = Montserrat({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "RR Enterprise | Premium Sustainability",
  description: "Bulk customizable eco-friendly jute and bamboo products.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${gelasio.variable} ${nunito.variable} ${montserrat.variable} ${roboto.variable} font-nunito bg-eco-100 text-eco-500 antialiased`}>
        {children}
      </body>
    </html>
  );
}