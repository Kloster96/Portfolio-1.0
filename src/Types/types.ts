import { ReactNode } from "react";

export interface AnimationLottieProps {
  animationPath: object; // JSON object for the animation data.
  width?: string | number; // Optional width prop for customization.
}
export interface GlowCardProps {
  children: ReactNode;
  identifier: string;
}
interface Project {
  id: number;
  name: string;
  tools: string[];
  role?: string;
  description?: string;
  code: string;
  demo: string;
  date: string;
  images: string[];
  videos?: string[];
  // Translated fields
  description_es?: string;
  description_en?: string;
  role_es?: string;
  role_en?: string;
  highlights_es?: string[];
  highlights_en?: string[];
}
export interface ProjectCardProps {
  project: Project;
}
export interface Props {
  children: ReactNode;
}
