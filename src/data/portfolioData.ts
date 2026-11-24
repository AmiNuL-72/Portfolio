export interface Project {
  id: string;
  slug: string;
  name: string;
  period?: string;
  category: string;
  emoji: string;
  headline: string;
  description: string;
  fullDescription: string;
  images: string[];
  techBadges: string[];
  keyFeatures: { icon: string; text: string }[];
  challenges: string[];
  futurePlans: string[];
  liveLink: string;
  github: string;
  githubServer?: string;
}

export interface SkillItem {
  name: string;
  iconId: string;
  color: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export const personalInfo = {
  name: "Md Aminul Islam",
  nickname: "Amin",
  designation: "Aspiring Full-Stack Developer",
  typewriterRoles: [
    "Aspiring Full-Stack Developer",
    "Next.js & React Developer",
    "Specialist @ Codeforces (Rating 1400+)",
    "3★ Coder @ CodeChef",
    "Competitive Programmer & Problem Solver",
  ],
  bio: "Motivated Computer Science undergraduate at University of Barishal with a solid foundation in data structures & algorithms and modern full-stack web engineering. Turning complex algorithmic thinking into responsive, user-friendly, and performant web applications.",
  email: "aminul.cse8.bu@gmail.com",
  phone: "+8801705730622",
  whatsapp: "+8801705730622",
  location: "Rajshahi, Bangladesh",
  resumePath: "https://drive.google.com/file/d/1tpUAz0Wdg1tWu-FujyCnpFUUrDRYlI1d/view?usp=drive_link",
  photoUrl: "/assets/profile.jpg",
  socialLinks: {
    github: "https://github.com/AmiNuL-72",
    linkedin: "https://www.linkedin.com/in/aminul72/",
    codeforces: "https://codeforces.com/profile/JustCode0rCode__YLN_---",
    codechef: "https://www.codechef.com/users/aminul_72",
    leetcode: "https://leetcode.com/u/AmiNuL_72/",
    atcoder: "https://atcoder.jp/users/AmiNuL72",
    toph: "https://toph.co/u/AmiNuL72",
    whatsapp: "https://wa.me/8801705730622",
  },
  stats: [
    { label: "Problems Solved", value: "3000+" },
    { label: "Codeforces Rank", value: "Specialist" },
    { label: "CodeChef Rating", value: "3-Star" },
    { label: "Web Projects", value: "10+" },
  ],
};

export const aboutData = {
  journey:
    "My journey into technology began with an intense curiosity for how computation solves real-world challenges. As a Computer Science undergraduate at the University of Barishal, I dedicated myself to competitive programming, mastering C and C++ and building a deep intuition for Data Structures and Algorithms. Achieving the Specialist tier on Codeforces and 3-Star status on CodeChef sharpened my analytical thinking and perseverance. With that rock-solid foundation, I expanded into full-stack web engineering, embracing React, Next.js 16, TypeScript, Tailwind CSS, and Node.js to architect high-performance, accessible, and user-centric web applications.",
  whatIEnjoy:
    "I genuinely enjoy translating complex logic into clean, intuitive, and interactive interfaces. Building full-stack architectures with Next.js App Router, implementing bulletproof authentication workflows, and optimizing rendering performance give me immense satisfaction. I also love writing maintainable, type-safe code that scales gracefully.",
  hobbies:
    "Outside the world of code and algorithms, I enjoy playing outdoor sports like cricket and badminton, studying tactical chess matches, diving into technology and software architecture articles, and exploring creative visual designs.",
  personality:
    "I am an analytical, self-driven, and disciplined engineer who thrives in collaborative environments. I embrace challenging problems with curiosity and persistence, constantly learning emerging technologies and holding my work to high standards of clean code and reliability.",
  highlights: [
    { label: "Degree", value: "B.Sc. in Computer Science & Engineering" },
    { label: "University", value: "University of Barishal, Bangladesh" },
    { label: "Location", value: "Rajshahi, Bangladesh" },
    { label: "Open for", value: "Full-Stack & Frontend Opportunities" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", iconId: "react", color: "#61DAFB", level: "Advanced" },
      { name: "Next.js 16", iconId: "nextjs", color: "#FFFFFF", level: "Advanced" },
      { name: "TypeScript", iconId: "typescript", color: "#3178C6", level: "Proficient" },
      { name: "JavaScript (ES6+)", iconId: "javascript", color: "#F7DF1E", level: "Advanced" },
      { name: "Tailwind CSS", iconId: "tailwindcss", color: "#06B6D4", level: "Expert" },
      { name: "HTML5", iconId: "html5", color: "#E34F26", level: "Expert" },
      { name: "CSS3", iconId: "css3", color: "#1572B6", level: "Expert" },
      { name: "DaisyUI", iconId: "daisyui", color: "#1AD1A5", level: "Proficient" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", iconId: "nodejs", color: "#5FA04E", level: "Intermediate" },
      { name: "Express.js", iconId: "express", color: "#E5E5E5", level: "Intermediate" },
      { name: "MongoDB", iconId: "mongodb", color: "#47A248", level: "Intermediate" },
      { name: "Mongoose", iconId: "mongoose", color: "#880000", level: "Intermediate" },
      { name: "JWT", iconId: "jwt", color: "#D63AFF", level: "Proficient" },
      { name: "Better-Auth", iconId: "betterauth", color: "#E5C9A0", level: "Proficient" },
      { name: "Stripe", iconId: "stripe", color: "#635BFF", level: "Proficient" },
      { name: "RESTful APIs", iconId: "restapi", color: "#F59E0B", level: "Proficient" },
      { name: "JSON & Web APIs", iconId: "json", color: "#0284C7", level: "Advanced" },
    ],
  },
  {
    title: "Problem Solving & Core",
    skills: [
      { name: "C++", iconId: "cplusplus", color: "#00599C", level: "Advanced" },
      { name: "C Language", iconId: "c", color: "#A8B9CC", level: "Advanced" },
      { name: "Codeforces (Specialist)", iconId: "codeforces", color: "#1F8ACB", level: "Active" },
      { name: "CodeChef (3-Star)", iconId: "codechef", color: "#5B4638", level: "Active" },
      { name: "LeetCode", iconId: "leetcode", color: "#FFA116", level: "Active" },
      { name: "Data Structures & Algorithms", iconId: "dsa", color: "#10B981", level: "Advanced" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", iconId: "git", color: "#F05032", level: "Advanced" },
      { name: "GitHub", iconId: "github", color: "#F0F6FC", level: "Advanced" },
      { name: "VS Code", iconId: "vscode", color: "#007ACC", level: "Expert" },
      { name: "Vercel", iconId: "vercel", color: "#FFFFFF", level: "Proficient" },
      { name: "Netlify", iconId: "netlify", color: "#00C7B7", level: "Proficient" },
      { name: "Vite", iconId: "vite", color: "#646CFF", level: "Proficient" },
      { name: "Linux / Bash", iconId: "linux", color: "#FCC624", level: "Proficient" },
      { name: "Postman", iconId: "postman", color: "#FF6C37", level: "Proficient" },
    ],
  },
];

export const marqueeSkillItems = [
  { name: "Next.js 16", iconId: "nextjs", color: "#FFFFFF" },
  { name: "React.js", iconId: "react", color: "#61DAFB" },
  { name: "TypeScript", iconId: "typescript", color: "#3178C6" },
  { name: "Tailwind CSS", iconId: "tailwindcss", color: "#06B6D4" },
  { name: "C++", iconId: "cplusplus", color: "#00599C" },
  { name: "JavaScript", iconId: "javascript", color: "#F7DF1E" },
  { name: "Codeforces Specialist", iconId: "codeforces", color: "#1F8ACB" },
  { name: "CodeChef 3★", iconId: "codechef", color: "#D4B483" },
  { name: "LeetCode", iconId: "leetcode", color: "#FFA116" },
  { name: "Better-Auth", iconId: "betterauth", color: "#E5C9A0" },
  { name: "Stripe", iconId: "stripe", color: "#635BFF" },
  { name: "Node.js", iconId: "nodejs", color: "#5FA04E" },
  { name: "Express.js", iconId: "express", color: "#E5E5E5" },
  { name: "MongoDB", iconId: "mongodb", color: "#47A248" },
  { name: "Mongoose", iconId: "mongoose", color: "#880000" },
  { name: "JWT", iconId: "jwt", color: "#D63AFF" },
  { name: "Git & GitHub", iconId: "github", color: "#F0F6FC" },
  { name: "VS Code", iconId: "vscode", color: "#007ACC" },
  { name: "Vercel", iconId: "vercel", color: "#FFFFFF" },
  { name: "Netlify", iconId: "netlify", color: "#00C7B7" },
  { name: "Vite", iconId: "vite", color: "#646CFF" },
  { name: "DaisyUI", iconId: "daisyui", color: "#1AD1A5" },
  { name: "Linux", iconId: "linux", color: "#FCC624" },
];

// User requirement: Keep ONLY university card in education section
export const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "University of Barishal",
    location: "Barishal, Bangladesh",
    period: "2022 – Present (Undergraduate)",
    department: "Department of Computer Science & Engineering",
    description:
      "Comprehensive undergraduate curriculum with strong emphasis on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Web Engineering, Software Engineering, and Computer Networks.",
    highlight: "Specialist at Codeforces, 3-Star at CodeChef & Academic Coding Lab Leader",
    keyCourses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
      "Web Engineering & Systems",
      "Operating Systems & Linux Lab",
      "Artificial Intelligence & Machine Learning",
    ],
  },
];

export const experienceData = [
  {
    role: "Competitive Programmer & Algorithmic Problem Solver",
    organization: "Codeforces, CodeChef & Online Judges",
    period: "2022 – 2025",
    points: [
      "Attained Specialist rank on Codeforces (max rating 1400+) and 3-Star coder status on CodeChef.",
      "Solved 1500+ algorithmic problems across Codeforces, CodeChef, LeetCode, AtCoder, and Toph.",
      "Proficient in Dynamic Programming, Graph Theory, Greedy Algorithms, Number Theory, and Segment Trees.",
      "Consistently participated in weekly contests under intense time constraints to refine problem-solving speed.",
    ],
  },
  {
    role: "Frontend & Full-Stack Developer",
    organization: "Personal & Academic Projects",
    period: "2025 – Present",
    points: [
      "Developed production-ready web apps using Next.js 16 App Router, TypeScript, React 19, and Tailwind CSS.",
      "Integrated secure authentication protocols with Better-Auth and session management.",
      "Built responsive, mobile-first interfaces with intuitive user journeys and accessibility best practices.",
      "Collaborated using Git version control and deployed production applications to Vercel and Netlify.",
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "1",
    slug: "salonbook",
    name: "SalonBook — Luxury Salon Appointment Booking Platform",
    period: "Nov 2026 - Present",
    category: "FULL STACK",
    emoji: "✂️",
    headline: "Bespoke salon service booking, conflict-free scheduling & Stripe payments",
    description:
      "A modern, high-end salon appointment booking platform built with Next.js 16, TypeScript, Tailwind CSS, and Better Auth. Customers can explore bespoke salon services, book time slots without conflict, manage booking requests, and securely complete payments via Stripe.",
    fullDescription:
      "SalonBook delivers a luxury concierge reservation experience tailored for modern salons and beauty studios. Customers can browse dynamic service dossiers, search and filter treatments, schedule conflict-free appointments, and pay securely with Stripe Checkout. Administrators have a dedicated executive suite for full service CRUD, appointment confirmations, customer moderation, and immutable transaction audit logs.",
    images: [
      "/assets/projects/salonbook/salonbook-1.jpg",
      "/assets/projects/salonbook/salonbook-2.jpg",
      "/assets/projects/salonbook/salonbook-3.jpg",
      "/assets/projects/salonbook/salonbook-4.png",
      "/assets/projects/salonbook/salonbook-5.png",
      "/assets/projects/salonbook/salonbook-6.png",
      "/assets/projects/salonbook/salonbook-7.png",
    ],
    techBadges: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "Google OAuth",
      "Stripe",
      "Axios",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Vercel",
    ],
    keyFeatures: [
      {
        icon: "✨",
        text: "Luxury Landing & Service Discovery: Real-time search, category filters, and price sorting across treatments.",
      },
      {
        icon: "📅",
        text: "Conflict-Free Smart Scheduling: Automatic detection and prevention of duplicate appointments for overlapping time slots.",
      },
      {
        icon: "💳",
        text: "Stripe Checkout & Instant Confirmation: Secure payment redirection with automated status reconciliation.",
      },
      {
        icon: "🔐",
        text: "Better Auth with Dual Provider: Email/password credential login plus Google OAuth with protected routes.",
      },
      {
        icon: "👤",
        text: "Customer Concierge Dashboard: Track appointment requests, review treatment states, cancel pending slots, and complete payments.",
      },
      {
        icon: "🛡️",
        text: "Executive Admin Operations: Live KPI analytics, full service CRUD with image hosting, customer access moderation, and transaction logs.",
      },
    ],
    challenges: [
      "Implementing atomic booking concurrency guards to eliminate race conditions and avoid double-booking active appointment slots.",
      "Securing cross-origin authentication and protected route middleware using Better Auth with Next.js 16 App Router.",
      "Synchronizing Stripe Checkout Webhook events with MongoDB appointment states to prevent inconsistent payment records.",
      "Designing an accessible luxury dark/gold aesthetic with treatment dossiers and seamless mobile modals.",
    ],
    futurePlans: [
      "Integrate SMS and automated WhatsApp appointment reminders with direct reschedule links.",
      "Add multi-staff calendar allocation and individual stylist preference selection.",
      "Implement customer loyalty reward points, gift cards, and promotional discount codes.",
      "Introduce AI-powered hairstyle recommendation based on uploaded customer portraits.",
    ],
    liveLink: "https://salonbook-as09.vercel.app/",
    github: "https://github.com/AmiNuL-72/SalonBook-client",
    githubServer: "https://github.com/AmiNuL-72/SalonBook-server",
  },
  {
    id: "2",
    slug: "studiospace",
    name: "StudioSpace – Peer-to-Peer Creative Workspace Marketplace",
    period: "Nov 2026 - Nov 2026",
    category: "FULL STACK",
    emoji: "🎬",
    headline: "Discover, list & book creative production studios, podcasts lounges & photo suites by the hour",
    description:
      "A full-stack platform that connects creators with production studio owners. Filmmakers, photographers, podcasters, and musicians can discover and book creative spaces by the hour — while hosts list and manage their studios from one dashboard.",
    fullDescription:
      "StudioSpace is a production-ready, peer-to-peer workspace marketplace engineered end-to-end with Next.js, TypeScript, Tailwind CSS, Express.js, MongoDB, and Mongoose. It delivers an Airbnb-style reservation experience tailored for the creative industry. The platform features secure JWT authentication stored in HTTPOnly cookies, real-time double-booking prevention, automated booking invoice generation, interactive search with multi-criteria filters, and a dedicated host management dashboard.",
    images: [
      "/assets/projects/studiospace/studiospace-1.jpg",
      "/assets/projects/studiospace/studiospace-2.jpg",
      "/assets/projects/studiospace/studiospace-3.jpg",
      "/assets/projects/studiospace/studiospace-4.jpg",
    ],
    techBadges: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Sonner",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Vercel",
    ],
    keyFeatures: [
      {
        icon: "🔍",
        text: "Dynamic Studio Discovery: Search, filter by studio category (Podcast Lounge, Film Stage, Music Suite, Photo Studio), and sort by hourly pricing or capacity.",
      },
      {
        icon: "📅",
        text: "Double-Booking Prevention: Bulletproof reservation scheduling system preventing overlapping time-slot conflicts across studio spaces.",
      },
      {
        icon: "🔐",
        text: "Secure JWT Authentication: Token-based auth stored securely in HTTPOnly cookies with strict server-side protected route middleware.",
      },
      {
        icon: "🛠️",
        text: "Full Host Listing CRUD: Studio owners can create, update, inspect, and manage studio amenities, hourly rates, crew sizes, and cover photos.",
      },
      {
        icon: "📊",
        text: "Host & Creator Dashboard: Centralized portal to monitor active reservations, revenue summaries, booking statuses, and guest details.",
      },
      {
        icon: "🧾",
        text: "Downloadable Booking Invoices & Wishlist: Instant PDF invoice generation upon booking confirmation and favorites wishlist for quick booking.",
      },
      {
        icon: "🌙",
        text: "Seamless Light & Dark Themes: Carefully styled theme switcher providing high-contrast visual clarity across desktop and mobile devices.",
      },
    ],
    challenges: [
      "Implementing atomic booking concurrency to eliminate race conditions and avoid double-booking the same studio at overlapping hourly windows.",
      "Securing cross-origin authentication between independent Vercel frontend deployments and Express API backend using HTTPOnly SameSite cookies.",
      "Structuring multi-image galleries with high visual fidelity while preserving snappy page render speeds and zero layout shifts.",
      "Building unified host analytics and user booking state management with Axios interceptors and Sonner toast notifications.",
    ],
    futurePlans: [
      "Integrate Stripe & SSLCommerz payment gateways for automatic escrow deposits and instant host payouts.",
      "Incorporate interactive 360-degree virtual studio walk-through tours and live studio availability calendars.",
      "Add direct in-app messaging and real-time push notifications between studio hosts and creators via WebSockets.",
      "Introduce verified creator reviews and badge verification for top-tier production equipment.",
    ],
    liveLink: "https://studiospace-client-as8.vercel.app/",
    github: "https://github.com/AmiNuL-72/studiospace-client",
    githubServer: "https://github.com/AmiNuL-72/studiospace-server",
  },
  {
    id: "3",
    slug: "bazardor",
    name: "BazarDor – Daily Market Price Tracker & Analytics",
    category: "FULL STACK",
    emoji: "🛒",
    headline: "Daily essential commodities price tracker with live trends & authentication",
    description:
      "BazarDor (বাজার দর) is a modern web application designed to help users track and compare the daily market prices of essential commodities in Bangladesh. It provides real-time insights, price trends, and historical data analysis for everyday items like rice, oil, vegetables, and more.",
    fullDescription:
      "BazarDor is engineered with Next.js 16, TypeScript, Better-Auth, and Tailwind CSS. The platform solves the real-world challenge of fluctuating commodity prices by presenting users with immediate daily price changes (increase/decrease indicators), an interactive price ticker, category-based filtering, and deep market analytics. Users can register securely via Better-Auth to save favorites and track historical trends.",
    images: [
      "/assets/projects/bazardor-1.png",
      "/assets/projects/bazardor-2.png",
    ],
    techBadges: [
      "Next.js 16",
      "TypeScript",
      "React 19",
      "Better-Auth",
      "Tailwind CSS",
      "Server Actions",
      "Lucide Icons",
      "Vercel",
    ],
    keyFeatures: [
      {
        icon: "📈",
        text: "Daily Price Tracking & Trends with real-time ▲ price up and ▼ price down indicators.",
      },
      {
        icon: "🏷️",
        text: "Category-Based Filtering & Sorting across essential commodities (Rice, Oil, Vegetables, Fish).",
      },
      {
        icon: "📊",
        text: "Detailed Market Analysis showcasing minimum, maximum, and average price ranges.",
      },
      {
        icon: "🔐",
        text: "Robust & Secure User Authentication implemented using Better-Auth.",
      },
      {
        icon: "⚡",
        text: "Live scrolling marquee ticker for quick market glance and high-frequency updates.",
      },
      {
        icon: "📱",
        text: "Pixel-perfect responsive layout designed for smartphones, tablets, and wide displays.",
      },
    ],
    challenges: [
      "Architecting efficient data fetching with Next.js 16 App Router while preserving live updates for fluctuating commodity prices.",
      "Integrating Better-Auth seamlessly with Next.js server components and client authentication states.",
      "Building an intuitive bilingual UI that represents Bengali commodity terms alongside clear numeric data visualizations.",
      "Managing responsive layouts across varied mobile viewports without sacrificing data readability.",
    ],
    futurePlans: [
      "Integrate interactive chart visualizations (Recharts) for 30-day and 1-year historical price comparisons.",
      "Implement crowdsourced price reporting where verified local community members submit neighborhood market rates.",
      "Add automated push notifications and email alerts when tracked grocery items drop below target price thresholds.",
      "Introduce an AI-powered grocery basket budget estimator for weekly family shopping.",
    ],
    liveLink: "https://as-07-bazar-dor.vercel.app",
    github: "https://github.com/AmiNuL-72/As-07-BazarDor--NextJS-Authentication",
  },
];
