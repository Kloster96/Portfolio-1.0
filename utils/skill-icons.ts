import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;
    case "javascript":
      return SiJavascript;
    case "js":
      return SiJavascript;
    case "typescript":
      return SiTypescript;
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;
    case "bootstrap":
      return SiBootstrap;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "illustrator":
      return SiAdobeillustrator;
    case "photoshop":
      return SiAdobephotoshop;
    default:
      return SiFreelancer;
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#06b6d4"; // Cyan-500
    case "css":
      return "#0891b2"; // Cyan-600
    case "javascript":
      return "#0e7490"; // Cyan-700
    case "typescript":
      return "#06b6d4"; // Cyan-500
    case "react":
      return "#06b6d4"; // Cyan-500
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff"; // White for contrast
    case "tailwind":
      return "#0891b2"; // Cyan-600
    case "node js":
    case "nodejs":
    case "node.js":
      return "#0e7490"; // Cyan-700
    case "mongodb":
      return "#164e63"; // Cyan-900
    case "mysql":
      return "#0891b2"; // Cyan-600
    case "firebase":
      return "#f59e0b"; // Amber for Firebase
    case "git":
      return "#06b6d4"; // Cyan-500
    case "figma":
      return "#0e7490"; // Cyan-700
    case "bootstrap":
      return "#0891b2"; // Cyan-600
    case "materialui":
    case "mui":
      return "#06b6d4"; // Cyan-500
    case "canva":
      return "#06b6d4"; // Cyan-500
    case "illustrator":
    case "photoshop":
      return "#06b6d4"; // Cyan-500
    default:
      return "#06b6d4"; // Default Cyan
  }
};
