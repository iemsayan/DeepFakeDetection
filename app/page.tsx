import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing"; // Models
import Process from "@/components/sections/Process"; // Pipeline
import Projects from "@/components/sections/Projects"; // Research / Work
import QnA from "@/components/sections/qna";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* MODELS (Image / Video Deepfake Detection) */}
      <Pricing />

      {/* PIPELINE — HOW THE SYSTEM WORKS */}
      <Process />

      {/* RESEARCH & IMPLEMENTATION */}
      <Projects />

      {/* FAQ */}
      <QnA />

      {/* CONTACT */}
      <Contact />

      <Footer />
    </main>
  );
}
