"use client";
import { educations } from "@/../utils/Data/educations";
import { GraduationCap, Calendar, School } from "lucide-react";
import SectionReveal from "../SectionReveal";
import Tilt from "react-parallax-tilt";

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 py-16 lg:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Decorative Background Blur - Nuevo tema cyan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-cyan-500"></span>
          <span className="bg-[#030712] border border-cyan-500/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            Formación Académica
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-cyan-500"></span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Right Side: Education List */}
          <div className="flex flex-col gap-8">
            {educations.map((education, index) => (
              <SectionReveal
                key={education.id}
                direction="right"
                delay={index * 0.1}
              >
                <Tilt
                  perspective={1500}
                  glareEnable={true}
                  glareMaxOpacity={0.1}
                  scale={1.02}
                >
                  <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-cyan-500/50 transition-all duration-500 shadow-xl overflow-hidden">
                    <div className="flex items-start gap-6 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                        <GraduationCap className="text-cyan-400 w-7 h-7" />
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                            <Calendar className="w-3 h-3" />
                            {education.duration}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {education.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 text-slate-400 font-medium">
                          <School className="w-4 h-4 text-cyan-700" />
                          {education.institution}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Background Icon */}
                    <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                      <GraduationCap className="w-32 h-32 text-cyan-400" />
                    </div>
                  </div>
                </Tilt>
              </SectionReveal>
            ))}
          </div>

          <div className="order-first lg:order-last">
            <SectionReveal direction="left">
              <div className="relative group p-10 lg:p-16 rounded-[40px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-transparent to-blue-900/5" />
                <div className="relative z-10 flex flex-col gap-8 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                    Construyendo mi <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      Futuro Profesional
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium italic">
                    "La educación es el vehículo más poderoso para cambiar el
                    mundo."
                  </p>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full mx-auto lg:mx-0" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
