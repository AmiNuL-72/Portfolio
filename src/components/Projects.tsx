"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-20 text-white bg-[#0a0a1a] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ecca98]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/20 text-[#ecca98] text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Showcase Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-[#ecca98]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ecca98] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Projects Cards List */}
        <div className="flex flex-col gap-10 md:gap-14 w-full">
          {projectsData.map((project, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#ecca98]/30 backdrop-blur-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ecca98]/10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Screenshot / Image Container */}
                  <div
                    className={`lg:col-span-7 overflow-hidden rounded-2xl border border-white/10 group-hover:border-[#ecca98]/40 transition-colors duration-300 ${
                      isReverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="block relative w-full h-64 sm:h-80 md:h-96 overflow-hidden bg-[#0c0c20]"
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                    </Link>
                  </div>

                  {/* Project Info & Actions */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isReverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Category Badge & Emoji */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl">{project.emoji}</span>
                        <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#ecca98]/15 text-[#ecca98] border border-[#ecca98]/20">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Name */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#ffd18b] transition-colors leading-snug">
                        <Link href={`/projects/${project.id}`}>
                          {project.name}
                        </Link>
                      </h3>

                      {/* Short Description */}
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techBadges.slice(0, 6).map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                        {project.techBadges.length > 6 && (
                          <span className="text-xs px-2 py-1 rounded-lg bg-[#ecca98]/10 text-[#ecca98] font-medium">
                            +{project.techBadges.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-wrap pt-2">
                      <Link
                        href={`/projects/${project.id}`}
                        className="flex items-center gap-2 bg-gradient-to-r from-[#E5C9A0] via-[#c3a270] to-[#997a5c] text-gray-950 px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:opacity-95 transition-all active:scale-95"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-[#ecca98] text-[#ecca98] px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-[#ecca98] hover:text-gray-950 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Site</span>
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-[#ecca98] hover:bg-white/5 transition-colors"
                        title="View GitHub Repository (Client)"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
