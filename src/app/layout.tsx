import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { BackgroundElements } from "@/components/effects/BackgroundElements";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Raj Deo | Backend & Distributed Systems Engineer",
  description: "Portfolio of Mohit Raj Deo — I build systems that scale, deploy themselves, and don't go down.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`} style={{ scrollBehavior: "smooth" }}>
      <body className="antialiased min-h-screen relative flex flex-col bg-space-900 text-foreground overflow-x-hidden selection:bg-accent-cyan/30">
        <div className="noise-bg pointer-events-none" />
        <CustomCursor />
        <BackgroundElements />
        <Navbar />
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
