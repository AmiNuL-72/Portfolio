"use client";

import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiDaisyui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiVite,
  SiLinux,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaShieldAlt,
  FaNetworkWired,
  FaProjectDiagram,
  FaCode,
  FaCube,
} from "react-icons/fa";

export function TechIcon({
  iconId,
  className = "w-5 h-5",
  color,
}: {
  iconId: string;
  className?: string;
  color?: string;
}) {
  const style = color ? { color } : undefined;

  switch (iconId) {
    case "react":
      return <SiReact className={className} style={{ color: color || "#61DAFB" }} />;
    case "nextjs":
      return <SiNextdotjs className={className} style={{ color: color || "#FFFFFF" }} />;
    case "typescript":
      return <SiTypescript className={className} style={{ color: color || "#3178C6" }} />;
    case "javascript":
      return <SiJavascript className={className} style={{ color: color || "#F7DF1E" }} />;
    case "tailwindcss":
      return <SiTailwindcss className={className} style={{ color: color || "#06B6D4" }} />;
    case "html5":
      return <SiHtml5 className={className} style={{ color: color || "#E34F26" }} />;
    case "css3":
    case "css":
      return <SiCss className={className} style={{ color: color || "#1572B6" }} />;
    case "daisyui":
      return <SiDaisyui className={className} style={{ color: color || "#1AD1A5" }} />;
    case "nodejs":
      return <SiNodedotjs className={className} style={{ color: color || "#5FA04E" }} />;
    case "express":
      return <SiExpress className={className} style={{ color: color || "#E5E5E5" }} />;
    case "mongodb":
      return <SiMongodb className={className} style={{ color: color || "#47A248" }} />;
    case "cplusplus":
      return <SiCplusplus className={className} style={{ color: color || "#00599C" }} />;
    case "c":
      return <SiC className={className} style={{ color: color || "#A8B9CC" }} />;
    case "codeforces":
      return <CodeforcesIcon className={className} />;
    case "codechef":
      return <SiCodechef className={className} style={{ color: color || "#D4B483" }} />;
    case "leetcode":
      return <SiLeetcode className={className} style={{ color: color || "#FFA116" }} />;
    case "git":
      return <SiGit className={className} style={{ color: color || "#F05032" }} />;
    case "github":
      return <SiGithub className={className} style={{ color: color || "#F0F6FC" }} />;
    case "vscode":
      return <VscVscode className={className} style={{ color: color || "#007ACC" }} />;
    case "vercel":
      return <SiVercel className={className} style={{ color: color || "#FFFFFF" }} />;
    case "netlify":
      return <SiNetlify className={className} style={{ color: color || "#00C7B7" }} />;
    case "vite":
      return <SiVite className={className} style={{ color: color || "#646CFF" }} />;
    case "linux":
      return <SiLinux className={className} style={{ color: color || "#FCC624" }} />;
    case "postman":
      return <SiPostman className={className} style={{ color: color || "#FF6C37" }} />;
    case "betterauth":
      return <FaShieldAlt className={className} style={{ color: color || "#E5C9A0" }} />;
    case "restapi":
      return <FaNetworkWired className={className} style={{ color: color || "#F59E0B" }} />;
    case "json":
      return <FaCode className={className} style={{ color: color || "#0284C7" }} />;
    case "dsa":
      return <FaProjectDiagram className={className} style={{ color: color || "#10B981" }} />;
    default:
      return <FaCube className={className} style={style} />;
  }
}

// Brand Social Icons
export function GithubIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return <FaGithub className={className} {...(props as any)} />;
}

export function LinkedinIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return <FaLinkedin className={className} {...(props as any)} />;
}

export function WhatsappIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return <FaWhatsapp className={className} {...(props as any)} />;
}

// Official 3-Bar Codeforces Logo
export function CodeforcesIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={className} {...props}>
      <rect x="2" y="8" width="5.5" height="13" rx="1.5" fill="#FFD18B" />
      <rect x="9.25" y="3" width="5.5" height="18" rx="1.5" fill="#3B82F6" />
      <rect x="16.5" y="11" width="5.5" height="10" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

// Official CodeChef Logo
export function CodeChefIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return <SiCodechef className={className} {...(props as any)} />;
}

// Official LeetCode Logo
export function LeetCodeIcon({ className = "w-5 h-5", ...props }: React.SVGProps<SVGSVGElement>) {
  return <SiLeetcode className={className} {...(props as any)} />;
}
