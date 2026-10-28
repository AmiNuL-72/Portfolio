"use client";

import React from "react";
import {
  Compass,
  Code2,
  Heart,
  Smile,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { aboutData, personalInfo } from "@/data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-white bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] overflow-hidden"
    >
      {/* Floating Animated Gradient Orbs matching template */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#ecca98]/10 blur-3xl pointer-events-none animate-move1" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#997a5c]/10 blur-3xl pointer-events-none animate-move2" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#c3a270]/8 blur-3xl pointer-events-none animate-move3" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/20 text-[#ecca98] text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-[#ecca98]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ecca98] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Top Highlight Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center backdrop-blur-sm hover:border-[#ecca98]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#ecca98] to-[#F5EBDD] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Programming Journey & Work I Enjoy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Journey Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#ecca98]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E5C9A0]">
                  My Programming Journey
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                {aboutData.journey}
              </p>
            </div>

            {/* Type of Work I Enjoy Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#ecca98]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98]">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E5C9A0]">
                  The Work I Enjoy
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                {aboutData.whatIEnjoy}
              </p>
            </div>
          </div>

          {/* Right Column: Hobbies, Personality & Quick Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Personality & Approach */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#ecca98]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98]">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E5C9A0]">
                  Personality & Values
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {aboutData.personality}
              </p>
            </div>

            {/* Hobbies & Interests Outside Code */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#ecca98]/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98]">
                  <Heart className="w-5 h-5 text-rose-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#E5C9A0]">
                  Hobbies & Beyond Code
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {aboutData.hobbies}
              </p>
            </div>

            {/* Key Information Summary */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#121228] to-[#181830] border border-[#ecca98]/20 shadow-xl">
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <GraduationCap className="w-5 h-5 text-[#ecca98] shrink-0" />
                  <div>
                    <span className="text-gray-400 text-xs block">Education</span>
                    <span className="font-medium text-white">
                      B.Sc. in CSE, University of Barishal
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#ecca98] shrink-0" />
                  <div>
                    <span className="text-gray-400 text-xs block">Location</span>
                    <span className="font-medium text-white">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#ecca98] shrink-0" />
                  <div>
                    <span className="text-gray-400 text-xs block">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-[#ecca98] hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#ecca98] shrink-0" />
                  <div>
                    <span className="text-gray-400 text-xs block">Phone & WhatsApp</span>
                    <span className="font-medium text-white">{personalInfo.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

