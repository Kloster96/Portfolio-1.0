"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";
import { User, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

function About() {
  const { t } = useLanguage();

  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".about-description", {
      type: "lines,words",
      linesClass: "overflow-hidden",
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 30,
      rotateX: -45,
      stagger: 0.015,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-description",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.fromTo(
      ".about-image-card",
      { opacity: 0, scale: 0.9, x: 50 },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-image-card",
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <div id="about" className="relative py-24 lg:py-48 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-cyan-400 mb-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                  <User className="w-5 h-5 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.3em]">
                  {t.about.subtitle}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                {t.about.title}
              </h2>
            </div>

            <div className="relative group p-8 lg:p-10 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Sparkles className="w-24 h-24 text-cyan-400" />
              </div>

              <div className="about-description text-slate-300 text-lg lg:text-xl leading-relaxed font-medium">
                {t.about.description}
              </div>

              {/* Decorative Accent */}
              <div className="absolute w-1 h-20 bg-gradient-to-b from-cyan-500 to-transparent left-0 top-10 rounded-full" />
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Frames */}
              <div className="absolute -inset-4 border border-cyan-500/20 rounded-3xl opacity-50" />
              <div className="absolute -inset-8 border border-blue-950/10 rounded-[40px] opacity-30" />

              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-[#030712]">
                <Image
                  src={personalData.profile}
                  fill
                  alt={personalData.name}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
