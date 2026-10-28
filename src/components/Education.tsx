"use client";

import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { educationData } from "@/data/portfolioData";

export default function Education() {
  const uni = educationData[0];

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-white bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] overflow-hidden"
    >
      {/* Background Floating Orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#ecca98]/8 blur-3xl pointer-events-none animate-move2" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#997a5c]/8 blur-3xl pointer-events-none animate-move1" />

      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/20 text-[#ecca98] text-sm font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Educational <span className="text-[#ecca98]">Qualification</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ecca98] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Prominent University Education Card */}
        <div className="relative group">
          {/* Ambient Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#ecca98]/20 via-[#c3a270]/10 to-[#997a5c]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-[#ecca98]/30 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-[#ecca98]/50">
            {/* Top Row: Degree & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ecca98] via-[#c3a270] to-[#997a5c] p-[2px] shrink-0 shadow-lg shadow-[#ecca98]/20">
                  <div className="w-full h-full bg-[#0c0c20] rounded-[14px] flex items-center justify-center text-[#ecca98]">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {uni.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#E5C9A0] font-semibold mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{uni.institution}</span>
                  </div>
                </div>
              </div>

              {/* Period Pill */}
              <div className="inline-flex items-center gap-2 self-start sm:self-center px-4 py-2 rounded-xl bg-[#ecca98]/10 border border-[#ecca98]/30 text-[#ffd18b] text-xs sm:text-sm font-bold shadow-sm">
                <Calendar className="w-4 h-4 text-[#ecca98]" />
                <span>{uni.period}</span>
              </div>
            </div>

            {/* Department & Location */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300 mb-6 flex-wrap">
              <span className="text-gray-300 font-medium">{uni.department}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#ecca98]" />
                {uni.location}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              {uni.description}
            </p>

            {/* Key Focus & Coursework */}
            {uni.keyCourses && (
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#ecca98]" />
                  <span>Key Coursework &amp; Competencies</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {uni.keyCourses.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ecca98] shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Honors / Highlight Banner */}
            {uni.highlight && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#ecca98]/15 via-[#c3a270]/10 to-transparent border border-[#ecca98]/25 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ecca98]/20 flex items-center justify-center text-[#ecca98] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium block">Academic &amp; Coding Distinction</span>
                  <span className="text-sm font-bold text-[#ffd18b]">{uni.highlight}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
