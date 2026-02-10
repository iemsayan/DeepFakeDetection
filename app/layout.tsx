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
    default: "Deepfake Detection",
    template: "%s · Deepfake Detection",
  },
  description:
    "A research-driven deepfake detection system leveraging deep learning to identify AI-generated facial imagery through spatial and frequency-based analysis.",
  keywords: [
    "Deepfake Detection",
    "AI Generated Images",
    "Computer Vision",
    "Deep Learning",
    "ConvNeXt",
    "Face Manipulation Detection",
    "Image Forensics",
    "FastAPI Deep Learning",
    "Deepfake Research",
  ],
  authors: [
    { name: "Sayandeep Ghosh" },
    { name: "Ajay" },
    { name: "Harsh" },
    { name: "Naveen" },
  ],
  creator: "Deepfake Detection Lab",
  metadataBase: new URL("https://deepfake-detection-lab.vercel.app"),

  openGraph: {
    title: "Deepfake Detection Lab",
    description:
      "An open research system for detecting AI-generated facial imagery using modern deep learning architectures.",
    url: "https://deepfake-detection-lab.vercel.app",
    siteName: "Deepfake Detection Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Deepfake Detection Lab — AI Image Forensics",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Deepfake Detection Lab",
    description:
      "Research-driven deepfake detection using spatial and frequency-domain deep learning.",
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

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}
