import About from "./components/about/page";
import Contact from "./components/contact/index";
import HeroSection from "./components/hero-section/page";
import Projects from "./components/projects/index";
import Skills from "./components/skills/page";
import SectionReveal from "./components/SectionReveal";

import "./css/card.css";
export default function Home() {
  return (
    <>
      <div className="container">
        <HeroSection />

        <SectionReveal>
          <About />
        </SectionReveal>

        {/* PROYECTOS - MUY IMPORTANTE PARA MOSTRAR HABILIDADES */}
        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Skills />
        </SectionReveal>

        {/* EXPERIENCIA LABORAL - Si tenés, descomenta abajo */}
        {/* 
        <SectionReveal>
          <Experience />
        </SectionReveal> 
        */}

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </div>
    </>
  );
}
