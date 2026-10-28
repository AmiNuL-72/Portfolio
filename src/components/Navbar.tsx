"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHomePage) return;

      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-md border-b border-[#ecca98]/15 shadow-lg shadow-black/30"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ecca98] via-[#c3a270] to-[#997a5c] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0a0a1a] rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[#ecca98]" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-[#ecca98]">Aminul</span>{" "}
              <span className="text-[#F5EBDD] font-medium">.dev</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#ecca98] bg-[#ecca98]/10 shadow-sm"
                      : "text-[#E5C9A0]/80 hover:text-[#ffd18b] hover:bg-[#ecca98]/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Resume Download CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={personalInfo.resumePath}
              download="Md_Aminul_Islam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#E5C9A0] via-[#c3a270] to-[#997a5c] text-gray-950 px-4 py-2 rounded-lg font-bold text-sm shadow-md shadow-[#ecca98]/10 hover:shadow-[#ecca98]/25 hover:opacity-95 transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-[#E5C9A0] hover:bg-white/5 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0c0c20]/95 backdrop-blur-xl border-b border-[#ecca98]/15 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "text-[#ecca98] bg-[#ecca98]/10 font-bold"
                      : "text-gray-300 hover:text-[#ecca98] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2">
              <a
                href={personalInfo.resumePath}
                download="Md_Aminul_Islam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#E5C9A0] via-[#c3a270] to-[#997a5c] text-gray-950 px-4 py-3 rounded-lg font-bold text-base shadow-md hover:opacity-95 transition-opacity"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

