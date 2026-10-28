import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Aminul Islam | Portfolio - Aspiring Full-Stack Developer",
  description:
    "Portfolio of Md Aminul Islam (Amin) - Aspiring Full-Stack Developer, Competitive Programmer (Codeforces Specialist, CodeChef 3-Star), Computer Science undergraduate at University of Barishal.",
  keywords: [
    "Md Aminul Islam",
    "Aminul Islam",
    "AmiNuL-72",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Competitive Programmer",
    "Codeforces Specialist",
    "University of Barishal",
  ],
  authors: [{ name: "Md Aminul Islam" }],
  openGraph: {
    title: "Md Aminul Islam | Portfolio",
    description:
      "Aspiring Full-Stack Developer & Competitive Programmer building modern web applications with Next.js 16, React, TypeScript, and Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a1a] text-gray-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
