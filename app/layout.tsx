import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", weight: ["400", "500", "600"] });
const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", display: "swap", weight: ["500", "600", "700"] });
const tamil = Noto_Sans_Tamil({ subsets: ["tamil"], variable: "--font-tamil", display: "swap", weight: ["400", "500", "600", "700"] });
export const metadata: Metadata = { title: "Irugur Gnanamani Ammayar Charitable Trust", description: "A caring and dignified home for elders in Irugur, Coimbatore.", metadataBase: new URL("https://www.irugurgmarcharitabletrust.com") };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${poppins.variable} ${tamil.variable}`}><body><Layout>{children}</Layout></body></html>; }
