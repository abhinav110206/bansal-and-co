import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LegalChatbot from "@/components/LegalChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bansal & Co. | Redefining Justice Through Innovation",
  description: "A premium law firm providing cutting edge corporate, criminal, IP, and cyber law services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-brand-black text-slate-100 antialiased selection:bg-brand-gold/30">
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <LegalChatbot />
      </body>
    </html>
  );
}
