"use client";

import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "spanish" ? "english" : "spanish");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
      title={language === "spanish" ? "Cambiar a inglés" : "Switch to Spanish"}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === "spanish" ? "EN" : "ES"}
      </span>
    </button>
  );
}
