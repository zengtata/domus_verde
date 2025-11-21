import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import FloatingCTA from "./components/FloatingCTA";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["600", "700"],
    variable: "--font-cormorant",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Domus Verde - Exkluzív Kertek Alkotója",
    description: "Exkluzív, prémium kertek tervezése és teljeskörű kivitelezése.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="hu" className={`${inter.variable} ${cormorant.variable}`}>
        <body>{children}
        <FloatingCTA /></body>
        </html>
    );
}