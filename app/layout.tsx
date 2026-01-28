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
  title: "Sayandeep Ghosh | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[var(--bg-main)] text-[var(--text-primary)] antialiased overflow-x-hidden font-sans">
        <Starfield />
        <Navbar />
        <main className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
