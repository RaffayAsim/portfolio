import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Background />
      <CursorGlow />
      <main className="relative min-h-screen">
        <Nav />
        <Hero />
        <Marquee />
        <Projects />
        <Skills />
        <Capabilities />
        <About />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
