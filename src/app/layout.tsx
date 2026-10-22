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
  metadataBase: new URL("https://mohit-raj-deo-portfolio.vercel.app"),
  title: {
    default: "Mohit Raj Deo | Backend & Distributed Systems Engineer",
    template: "%s | Mohit Raj Deo",
  },
  description:
    "Official portfolio of Mohit Raj Deo — Backend and Distributed Systems Engineer. Architecting fault-tolerant infrastructure, high-concurrency platforms, and AI monitoring systems. Published Patent #202511089783.",
  keywords: [
    "Mohit Raj Deo",
    "Mohit Raj",
    "Mohit Raj Dev",
    "Backend Engineer",
    "Distributed Systems Architect",
    "Cloud Infrastructure Engineer",
    "Lovely Professional University",
    "LPU CSE",
    "Eduniketan",
    "TheEduCode",
    "Patent 202511089783",
    "System Design",
    "AWS",
    "Judge0",
    "PostgreSQL Aurora",
    "Redis",
    "FastAPI",
  ],
  authors: [{ name: "Mohit Raj Deo", url: "https://mohit-raj-deo-portfolio.vercel.app" }],
  creator: "Mohit Raj Deo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohit Raj Deo | Backend & Distributed Systems Engineer",
    description:
      "Portfolio of Mohit Raj Deo — Backend & Distributed Systems Engineer. Architecting resilient, self-healing cloud infrastructure.",
    url: "https://mohit-raj-deo-portfolio.vercel.app",
    siteName: "Mohit Raj Deo Portfolio",
    images: [
      {
        url: "/avatar.jpeg",
        width: 800,
        height: 800,
        alt: "Mohit Raj Deo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Raj Deo | Backend & Distributed Systems Engineer",
    description:
      "Backend & Distributed Systems Engineer | Software Engineer at TheEduCode | Published Patent #202511089783",
    images: ["/avatar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohit Raj Deo",
  alternateName: ["Mohit Raj", "MRD"],
  url: "https://mohit-raj-deo-portfolio.vercel.app",
  image: "https://mohit-raj-deo-portfolio.vercel.app/avatar.jpeg",
  jobTitle: "Backend & Distributed Systems Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Eduniketan Private Limited (TheEduCode)",
    url: "https://www.theeducode.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Lovely Professional University",
    location: "Phagwara, Punjab, India",
  },
  sameAs: [
    "https://github.com/MOHITRAJDEO12345",
    "https://www.linkedin.com/in/mohit-raj-deo/",
    "https://www.kaggle.com/mohitrajdeo",
    "https://leetcode.com/u/edgrfrtfqa/",
    "https://auth.geeksforgeeks.org/user/mohitrajdeoidn2/",
  ],
  knowsAbout: [
    "Distributed Systems",
    "Cloud Architecture",
    "AWS",
    "System Design",
    "PostgreSQL",
    "Redis",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`} style={{ scrollBehavior: "smooth" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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
