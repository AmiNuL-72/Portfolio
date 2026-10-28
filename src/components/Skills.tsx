"use client";

import React, { useState } from "react";
import { Sparkles, Layers } from "lucide-react";
import { skillCategories, marqueeSkillItems } from "@/data/portfolioData";
import { TechIcon } from "@/components/Icons";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section
      id="skills"
      className="relative bg-[#0a0a1a] text-white py-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ecca98]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/20 text-[#ecca98] text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-[#ecca98]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ecca98] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Infinite Scrolling Ticker with Actual Brand Icons */}
        <div className="relative w-full overflow-hidden mb-16 py-4 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm">
          <div className="flex animate-marquee space-x-6 sm:space-x-8">
            {[...marqueeSkillItems, ...marqueeSkillItems].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-[#ecca98]/20 text-sm sm:text-base font-semibold text-gray-200 whitespace-nowrap shadow-sm hover:border-[#ecca98] transition-all duration-200 group"
              >
                <div className="transition-transform group-hover:scale-110">
                  <TechIcon iconId={item.iconId} color={item.color} className="w-5 h-5 shrink-0" />
                </div>
                <span className="group-hover:text-[#ffd18b] transition-colors">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#E5C9A0] via-[#c3a270] to-[#997a5c] text-gray-950 shadow-lg shadow-[#ecca98]/20 scale-105"
                  : "bg-white/[0.04] text-gray-300 border border-white/10 hover:border-[#ecca98]/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid with Authentic Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#ecca98]/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#E5C9A0]">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs text-gray-400 font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#ecca98]/40 hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-black/40 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#ecca98]/30 transition-colors">
                        <TechIcon
                          iconId={skill.iconId}
                          color={skill.color}
                          className="w-4 h-4 transition-transform group-hover:scale-110"
                        />
                      </div>
                      <span className="font-semibold text-sm text-gray-200 group-hover:text-[#ffd18b] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {skill.level && (
                      <span className="text-[11px] font-medium text-[#c3a270] bg-[#ecca98]/10 px-2 py-0.5 rounded-md">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
