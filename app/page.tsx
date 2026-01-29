import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import QnA from "@/components/sections/QnA";
import Tools from "@/components/sections/Tools";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Process />
      <Pricing />
      <QnA />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
