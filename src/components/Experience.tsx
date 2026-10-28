"use client";

import React from "react";
import { Briefcase, Trophy, CheckCircle, Sparkles } from "lucide-react";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section className="relative bg-[#0a0a1a] text-white py-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/20 text-[#ecca98] text-sm font-semibold mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Professional &amp; <span className="text-[#ecca98]">Coding Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ecca98] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#ecca98]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <span className="text-xs font-bold text-[#ecca98] px-3 py-1 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/20">
                    {exp.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Trophy className="w-3.5 h-3.5 text-[#ecca98]" />
                    <span>Key Milestones</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {exp.role}
                </h3>
                <h4 className="text-sm font-semibold text-[#E5C9A0] mb-5">
                  {exp.organization}
                </h4>

                <ul className="space-y-3">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#ecca98] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

