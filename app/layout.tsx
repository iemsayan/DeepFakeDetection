import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Starfield from "@/components/ui/Starfield";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sayandeep Ghosh — Freelance Developer",
    template: "%s · Sayandeep Ghosh",
  },
  description:
    "Freelance Frontend Developer building fast, scalable, and production-ready web experiences for startups and modern businesses.",
  keywords: [
    "Sayandeep Ghosh",
    "Frontend Developer",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
  ],
  authors: [{ name: "Sayandeep Ghosh" }],
  creator: "Sayandeep Ghosh",
  metadataBase: new URL("https://your-portfolio.vercel.app"),
  openGraph: {
    title: "Sayandeep Ghosh — Freelance Frontend Developer",
    description:
      "I build fast, scalable, and conversion-focused web experiences for startups and modern businesses.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Sayandeep Ghosh",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sayandeep Ghosh — Freelance Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sayandeep Ghosh — Freelance Frontend Developer",
    description:
      "Building fast, scalable, and production-ready web experiences.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[var(--bg-main)] text-[var(--text-primary)] antialiased overflow-x-hidden">
        {/* Background */}
        <Starfield />

        {/* Navigation */}
        <Navbar />

        {/* Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
