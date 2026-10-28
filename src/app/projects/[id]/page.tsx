import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { GithubIcon, TechIcon } from "@/components/Icons";
import ProjectImageGallery from "./ProjectImageGallery";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

function getTechIconId(badge: string): string {
  const b = badge.toLowerCase();
  if (b.includes("next")) return "nextjs";
  if (b.includes("react")) return "react";
  if (b.includes("type")) return "typescript";
  if (b.includes("tail")) return "tailwindcss";
  if (b.includes("better") || b.includes("auth")) return "betterauth";
  if (b.includes("node")) return "nodejs";
  if (b.includes("express")) return "express";
  if (b.includes("mongo")) return "mongodb";
  if (b.includes("vite")) return "vite";
  if (b.includes("daisy")) return "daisyui";
  if (b.includes("vercel")) return "vercel";
  if (b.includes("netlify")) return "netlify";
  if (b.includes("git")) return "github";
  if (b.includes("action") || b.includes("api")) return "restapi";
  return "json";
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id || p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-12 selection:bg-[#ecca98] selection:text-[#0a0a1a]">
      {/* Back button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#ecca98] hover:text-[#ffd18b] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Header & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left: Info & Links */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-[#ecca98]/15 border border-[#ecca98]/30 text-[#ecca98] text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full mb-4">
              <span>{project.emoji}</span>
              <span>{project.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#E5C9A0] mb-4 leading-tight">
              {project.name}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
              {project.headline}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#E5C9A0] via-[#c3a270] to-[#997a5c] text-gray-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:opacity-95 transition-all active:scale-95 text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Live Project</span>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-[#ecca98] text-[#ecca98] hover:bg-[#ecca98] hover:text-gray-950 px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Image Gallery */}
          <div className="lg:col-span-6">
            <ProjectImageGallery images={project.images} title={project.name} />
          </div>
        </div>

        {/* Section: Technologies Used with Actual Icons */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#ecca98]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E5C9A0]">
              Technologies Used
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {project.techBadges.map((tech, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-sm sm:text-base font-semibold hover:border-[#ecca98]/40 transition-colors"
              >
                <TechIcon iconId={getTechIconId(tech)} className="w-4 h-4" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Section: Key Features */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#E5C9A0] mb-6">
            Key Features &amp; Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border-l-4 border-l-[#ffd18b] border-y border-r border-white/5 flex items-start gap-3 backdrop-blur-sm hover:bg-white/[0.05] transition-all"
              >
                <span className="text-xl shrink-0 mt-0.5">{feature.icon}</span>
                <span className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Challenges Faced */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-[#ffd18b]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E5C9A0]">
              Challenges Faced
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border-l-4 border-l-[#ecca98] border-y border-r border-white/5 backdrop-blur-sm text-gray-300 text-sm sm:text-base leading-relaxed hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-[#ecca98] font-bold text-sm">0{idx + 1}.</span>
                  <span>{challenge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Future Improvements & Potential Plans */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="w-6 h-6 text-[#ffd18b]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#E5C9A0]">
              Potential Improvements &amp; Future Plans
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.futurePlans.map((plan, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border-l-4 border-l-[#997a5c] border-y border-r border-white/5 backdrop-blur-sm text-gray-300 text-sm sm:text-base leading-relaxed hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-[#ffd18b] font-bold text-sm">✦</span>
                  <span>{plan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Quick Nav */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/#projects"
            className="text-sm font-semibold text-[#ecca98] hover:underline"
          >
            ← View All Projects
          </Link>
          <div className="flex items-center gap-3">
            {projectsData.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.id}`}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                  p.id === project.id
                    ? "bg-[#ecca98]/20 border-[#ecca98] text-[#ecca98] font-bold"
                    : "border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {p.name.split("–")[0].trim()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
