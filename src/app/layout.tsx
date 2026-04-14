import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
import { LanguageProvider } from "./components/LanguageProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Luciano Kloster | Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack con más de 3 años de experiencia. Técnico en Electrónica y estudiante de Técnico en Programación en la UTN. Especializado en JavaScript/TypeScript y Python.",
  keywords: [
    "portfolio",
    "desarrollador",
    "estudiante",
    "UTN",
    "Ingeniería en Sistemas",
  ],
  authors: [{ name: "Luciano Kloster" }],
  openGraph: {
    title: "Luciano Kloster | Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack. Técnico en Electrónica y estudiante de Técnico en Programación en la UTN.",
    url: "https://lucianokloster.vercel.app",
    siteName: "Luciano Kloster Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Luciano Kloster Portfolio",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luciano Kloster | Desarrollador Full Stack",
    description: "Desarrollador Full Stack - UTN",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="text-white">
            <div className="container">{children}</div>
          </main>
          <ScrollToTopButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
