"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  ArrowUp,
  Code2,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import {
  GithubIcon,
  LinkedinIcon,
  CodeforcesIcon,
  WhatsappIcon,
} from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070714] text-white pt-16 pb-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-center">
          {/* Brand & Bio */}
          <div className="md:col-span-5 text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-3 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ecca98] via-[#c3a270] to-[#997a5c] p-[1.5px]">
                <div className="w-full h-full bg-[#0a0a1a] rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-[#ecca98]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#ecca98]">Aminul</span>{" "}
                <span className="text-[#F5EBDD] font-medium">.dev</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              Aspiring Full-Stack Developer &amp; Competitive Programmer. Crafting performant, beautiful web applications with Next.js, React, and modern TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-300">
              <li>
                <a href="#hero" className="hover:text-[#ecca98] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ecca98] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#ecca98] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#ecca98] transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#ecca98] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ecca98] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col md:items-end items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 hover:border-[#ecca98]/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                title="Codeforces"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#E5C9A0] hover:text-white hover:bg-[#ecca98]/20 hover:border-[#ecca98]/40 transition-colors"
              >
                <CodeforcesIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-colors"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#E5C9A0] hover:text-white hover:bg-[#ecca98]/20 hover:border-[#ecca98]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="p-2.5 rounded-xl bg-[#ecca98]/20 border border-[#ecca98]/40 text-[#ecca98] hover:bg-[#ecca98] hover:text-gray-950 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js 16, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
