"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Download,
  Mail,
  Send,
  Trophy,
  Code,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import {
  GithubIcon,
  LinkedinIcon,
  CodeforcesIcon,
  CodeChefIcon,
  LeetCodeIcon,
  WhatsappIcon,
} from "@/components/Icons";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Particle Canvas effect matching template's tsparticles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(Math.floor(width / 15), 100);
    const colors = ["#E5C9A0", "#ffffff", "#f5e5c0", "#c3a270"];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.12;
            ctx.strokeStyle = "#E5C9A0";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const roles = personalInfo.typewriterRoles;
    const currentWord = roles[currentRoleIndex];

    const typeSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCurrentText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause before starting backspace
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:px-8 bg-[#0a0a1a] pt-24 pb-16 overflow-hidden"
    >
      {/* Interactive Background Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-80"
      />

      {/* Radial soft background illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ecca98]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#c3a270]/6 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/25 text-[#ecca98] text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ecca98] animate-ping" />
            <span>Hello, I&apos;m</span>
          </div>

          {/* Main Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3 leading-tight">
            {personalInfo.name}{" "}
            <span className="bg-gradient-to-r from-[#ecca98] via-[#c3a270] to-[#997a5c] bg-clip-text text-transparent">
              {personalInfo.nickname}
            </span>
          </h1>

          {/* Dynamic Typewriter Heading */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#D4B483] flex items-center">
              <span>{currentText}</span>
              <span className="inline-block w-0.5 h-6 sm:h-7 bg-[#ecca98] ml-1 animate-pulse" />
            </h2>
          </div>

          {/* Bio Description */}
          <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Passionate Full-Stack Developer &amp; Competitive Programmer studying CSE at University of Barishal. Specializing in Next.js 16, TypeScript, React, and robust algorithmic architecture. Turning complex ideas into responsive, user-friendly, and memorable digital experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
            <a
              href={personalInfo.resumePath}
              download="Md_Aminul_Islam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#E5C9A0] via-[#c3a270] to-[#997a5c] text-gray-950 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-[#ecca98]/20 hover:opacity-95 hover:shadow-xl hover:shadow-[#ecca98]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-[#ecca98] text-[#ecca98] hover:bg-[#ecca98] hover:text-gray-950 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Send className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Links Row with Actual Brand Icons */}
          <div className="flex items-center gap-3 justify-center lg:justify-start text-gray-300 flex-wrap">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold mr-1">
              Connect:
            </span>

            {/* GitHub */}
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-white/10 hover:border-[#ecca98]/40 transition-all duration-200 hover:-translate-y-1"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40 transition-all duration-200 hover:-translate-y-1"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            {/* Codeforces */}
            <a
              href={personalInfo.socialLinks.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              title="Codeforces (Specialist)"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#E5C9A0] hover:text-white hover:bg-[#ecca98]/20 hover:border-[#ecca98]/40 transition-all duration-200 hover:-translate-y-1 flex items-center gap-1.5 text-xs font-bold"
            >
              <CodeforcesIcon className="w-4 h-4" />
              <span>CF: Specialist</span>
            </a>

            {/* CodeChef */}
            <a
              href={personalInfo.socialLinks.codechef}
              target="_blank"
              rel="noopener noreferrer"
              title="CodeChef (3-Star)"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#D4B483] hover:text-white hover:bg-[#D4B483]/20 hover:border-[#D4B483]/40 transition-all duration-200 hover:-translate-y-1 flex items-center gap-1.5 text-xs font-bold"
            >
              <CodeChefIcon className="w-4 h-4" />
              <span>CC: 3★</span>
            </a>

            {/* LeetCode */}
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#FFA116] hover:bg-[#FFA116]/20 hover:border-[#FFA116]/40 transition-all duration-200 hover:-translate-y-1"
            >
              <LeetCodeIcon className="w-5 h-5" />
            </a>

            {/* WhatsApp */}
            <a
              href={personalInfo.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-200 hover:-translate-y-1"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              title="Email"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#E5C9A0] hover:text-white hover:bg-[#ecca98]/20 hover:border-[#ecca98]/40 transition-all duration-200 hover:-translate-y-1"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Photo with Glowing Aura & Badges */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Outer animated gradient glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#ecca98] via-[#c3a270] to-[#997a5c] rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulseGlow" />

            {/* Photo Circular Frame */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-b from-[#ecca98] via-[#997a5c] to-transparent shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0c0c20] border-4 border-[#0a0a1a]">
                <Image
                  src={personalInfo.photoUrl}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-top filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                />
              </div>
            </div>

            {/* Floating Pill: Codeforces Specialist with Official 3-Bar Logo */}
            <div className="absolute -bottom-2 -left-4 sm:left-0 bg-[#0e0e24]/90 backdrop-blur-md border border-[#ecca98]/30 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform duration-200">
              <div className="w-9 h-9 rounded-xl bg-black/40 flex items-center justify-center p-1.5 border border-white/10">
                <CodeforcesIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase font-semibold">Rank Status</p>
                <p className="text-sm font-bold text-[#E5C9A0]">CF Specialist &amp; 3★</p>
              </div>
            </div>

            {/* Floating Pill: Problem Solving */}
            <div className="absolute -top-3 -right-2 sm:right-2 bg-[#0e0e24]/90 backdrop-blur-md border border-[#ecca98]/30 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-3 transform hover:scale-105 transition-transform duration-200">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-gray-400 uppercase font-semibold">Algorithms</p>
                <p className="text-sm font-bold text-emerald-300">1.5k+ Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
