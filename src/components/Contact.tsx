"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import { WhatsappIcon } from "@/components/Icons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Message from ${formState.name} via Portfolio`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(mailtoLink, "_blank");
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 text-white bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] overflow-hidden"
    >
      {/* Floating Animated Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-[#ecca98]/8 blur-3xl pointer-events-none animate-move1" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#997a5c]/8 blur-3xl pointer-events-none animate-move2" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-[#c3a270]/6 blur-3xl pointer-events-none animate-move3" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecca98]/10 border border-[#ecca98]/20 text-[#ecca98] text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Contact <span className="text-[#ecca98]">Information</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#ecca98] to-transparent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#E5C9A0] mb-3">
                Get In Touch
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                I am actively open to full-stack, frontend, and software engineering opportunities, internships, competitive collaborations, or open-source projects. Feel free to reach out directly through any channel!
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ecca98]/40 hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Email Address</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#ffd18b] transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#ecca98]/40 hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Phone Number</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#ffd18b] transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Card with Actual Green WhatsApp Icon */}
                <a
                  href={personalInfo.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsappIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">WhatsApp (Instant Chat)</span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#25D366] transition-colors">
                      {personalInfo.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ecca98]/15 flex items-center justify-center text-[#ecca98] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-medium">Location</span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Fill out the form below to initiate direct email contact.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-300 text-sm max-w-md mb-6">
                    Your message draft has been prepared and opened in your email client. I will respond to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs text-[#ecca98] underline font-semibold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#ecca98] focus:ring-1 focus:ring-[#ecca98] transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#ecca98] focus:ring-1 focus:ring-[#ecca98] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#ecca98] focus:ring-1 focus:ring-[#ecca98] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Hi Aminul, I came across your portfolio and would love to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#ecca98] focus:ring-1 focus:ring-[#ecca98] transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#E5C9A0] via-[#c3a270] to-[#997a5c] text-gray-950 font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-[#ecca98]/20 hover:opacity-95 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
