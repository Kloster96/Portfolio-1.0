"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, to: "about" },
    { label: t.nav.projects, to: "projects" },
    { label: t.nav.skills, to: "skills" },
    { label: t.nav.contact, to: "contact" },
  ];

  const renderLink = (
    item: { label: string; to: string },
    isMobile = false,
  ) => {
    const isHomePage = pathname === "/";

    const baseClasses = isMobile
      ? "block cursor-pointer py-3 text-lg font-semibold transition-all duration-300 border-b border-white/5"
      : "cursor-pointer transition-all duration-300 relative group px-2 py-1 text-sm lg:text-base font-medium";

    if (isHomePage) {
      return (
        <ScrollLink
          key={item.to}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          activeClass="text-cyan-400 !font-bold"
          className={`${baseClasses} text-slate-300 hover:text-white`}
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
        >
          {item.label}
          {!isMobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full [.text-cyan-400_&]:w-full" />
          )}
        </ScrollLink>
      );
    }

    return (
      <Link
        key={item.to}
        href={`/#${item.to}`}
        className={`${baseClasses} text-slate-300 hover:text-white`}
        onClick={() => isMobile && setIsMenuOpen(false)}
      >
        {item.label}
        {!isMobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
        )}
      </Link>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto px-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
        >
          Luciano Kloster
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => renderLink(item))}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 md:hidden animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-6 py-8 flex flex-col space-y-2">
            {navItems.map((item) => renderLink(item, true))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
