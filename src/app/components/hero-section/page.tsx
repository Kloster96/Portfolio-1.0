"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../LanguageProvider";
import { personalData } from "@/../utils/Data/PersonalData";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const designationRef = useRef<HTMLElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const [animatedWord, setAnimatedWord] = useState(t.hero.animatedWords[0]);

  // Update animated word when language changes
  useEffect(() => {
    setAnimatedWord(t.hero.animatedWords[0]);
  }, [language, t]);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const titles = t.hero.animatedWords;
      let index = 0;

      // Initial Intro Animation
      const introTl = gsap.timeline();
      introTl
        .fromTo(
          ".hero-heading",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" },
        )
        .fromTo(
          codeCardRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" },
        );

      // Designation Rotation Animation
      const runDesignationAnimation = () => {
        const el = designationRef.current;
        if (!el) return;

        const tl = gsap.timeline({
          onComplete: () => {
            index = (index + 1) % titles.length;
            runDesignationAnimation();
          },
        });

        el.textContent = titles[index];
        const split = new SplitText(el, { type: "chars" });

        tl.from(split.chars, {
          opacity: 0,
          y: 10,
          rotateX: -90,
          stagger: 0.04,
          duration: 0.6,
          ease: "back.out(1.7)",
        }).to(split.chars, {
          opacity: 0,
          y: -10,
          rotateX: 90,
          stagger: 0.02,
          duration: 0.5,
          ease: "back.in(1.7)",
          delay: 2,
          onComplete: () => split.revert(),
        });
      };

      runDesignationAnimation();

      // Floating animation for social icons
      gsap.to(".social-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef, dependencies: [language] },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 lg:py-24 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/10 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight lg:leading-[1.1]">
              {t.hero.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.hero.name}
              </span>
            </h1>
            {/* Contenedor con altura mínima reservada para el texto animado */}
            <div className="min-h-[40px] sm:min-h-[50px] flex items-center justify-center lg:justify-start">
              <span
                className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-bold"
                ref={designationRef}
              >
                {animatedWord}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {personalData.github && (
                <Link
                  href={personalData.github}
                  target="_blank"
                  className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
                >
                  <BsGithub size={24} />
                </Link>
              )}
              {personalData.linkedIn && (
                <Link
                  href={personalData.linkedIn}
                  target="_blank"
                  className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
                >
                  <BsLinkedin size={24} />
                </Link>
              )}
              {personalData.leetcode && (
                <Link
                  href={personalData.leetcode}
                  target="_blank"
                  className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
                >
                  <SiLeetcode size={24} />
                </Link>
              )}
              {personalData.twitter && (
                <Link
                  href={personalData.twitter}
                  target="_blank"
                  className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
                >
                  <FaTwitterSquare size={24} />
                </Link>
              )}
            </div>

            <div className="hero-cta flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/#contact"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold uppercase tracking-wider overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  {t.hero.ctaContact} <RiContactsFill />
                </span>
              </Link>

              {personalData.resume && (
                <Link
                  href={personalData.resume}
                  target="_blank"
                  className="group px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-bold uppercase tracking-wider transition-all hover:bg-white/10 hover:border-cyan-500/50 flex items-center gap-2"
                >
                  {t.hero.ctaResume}{" "}
                  <MdDownload className="group-hover:translate-y-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Animated Code Card */}
        <div className="order-1 lg:order-2 flex justify-center">
          <Tilt
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.1}
            scale={1.02}
            className="w-full max-w-[550px]"
          >
            <div
              ref={codeCardRef}
              className="relative rounded-3xl border border-white/10 bg-[#030712]/80 backdrop-blur-xl overflow-hidden shadow-2xl group"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500" />
                  <div className="w-3 h-3 rounded-full bg-cyan-400/50" />
                  <div className="w-3 h-3 rounded-full bg-cyan-300/20" />
                </div>
                <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  {t.hero.codeCard.title}
                </div>
              </div>

              <div className="p-6 lg:p-10">
                <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">01</span>
                    <p>
                      <span className="text-cyan-500">
                        {t.hero.codeCard.const}
                      </span>{" "}
                      <span className="text-white">
                        {t.hero.codeCard.variable}
                      </span>{" "}
                      = {"{"}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">02</span>
                    <p className="ml-4">
                      <span className="text-slate-200">
                        {t.hero.codeCard.nombre}:
                      </span>{" "}
                      <span className="text-cyan-300">'Luciano Kloster'</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">03</span>
                    <p className="ml-4">
                      <span className="text-slate-200">
                        {t.hero.codeCard.universidad}:
                      </span>{" "}
                      <span className="text-cyan-300">'UTN'</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">04</span>
                    <p className="ml-4">
                      <span className="text-slate-200">
                        {t.hero.codeCard.carrera}:
                      </span>{" "}
                      <span className="text-cyan-300">
                        {language === "spanish"
                          ? "'Técnico en Programación'"
                          : "'Programming Technician'"}
                      </span>
                      ,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">05</span>
                    <p className="ml-4">
                      <span className="text-slate-200">
                        {t.hero.codeCard.buscando}:
                      </span>{" "}
                      <span className="text-cyan-400">
                        {language === "spanish"
                          ? "'Primera Oportunidad'"
                          : "'First Opportunity'"}
                      </span>
                      ,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">06</span>
                    <p className="ml-4">
                      <span className="text-slate-200">
                        {t.hero.codeCard.dispuesto_a}:
                      </span>{" "}
                      <span className="text-cyan-400">
                        {language === "spanish"
                          ? "['Aprender', 'Crecer', 'Aportar']"
                          : "['Learn', 'Grow', 'Contribute']"}
                      </span>
                      ,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 italic">07</span>
                    <p>{"};"}</p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <span className="text-slate-600 italic">08</span>
                    <p>
                      <span className="text-cyan-500">
                        {t.hero.codeCard.variable}
                      </span>
                      .
                      <span className="text-white">
                        {t.hero.codeCard.disponible}
                      </span>
                      ;
                    </p>
                  </div>
                </code>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
