export interface Project {
  id: string;
  slug: string;
  name: string;
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
  resumePath: "/resume.pdf",
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
      { name: "Better-Auth", iconId: "betterauth", color: "#E5C9A0", level: "Proficient" },
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
  { name: "Node.js", iconId: "nodejs", color: "#5FA04E" },
  { name: "Express.js", iconId: "express", color: "#E5E5E5" },
  { name: "MongoDB", iconId: "mongodb", color: "#47A248" },
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
  {
    id: "2",
    slug: "fitlog",
    name: "FitLog – Workout Tracking & Fitness Companion",
    category: "FRONTEND / APP",
    emoji: "🏋️",
    headline: "Modern gym companion to pick lifts, log sets, and track weekly progress",
    description:
      "FitLog is a dark-themed, modern, no-nonsense gym companion web application built with Next.js 16, React 19, and Tailwind CSS v4. Pick your lifts, lock them into today's workout plan, track your session metrics live, and watch your weekly progress add up!",
    fullDescription:
      "FitLog delivers an empowering workout logging workflow tailored for gym-goers and athletes who want quick set tracking without unnecessary friction. Built with Next.js 16 App Router, React 19, and Tailwind CSS v4, FitLog features client-side state persistence, exercise routines categorizer, metric counters (reps, weight, sets), and motivational progress indicators designed with a high-contrast dark aesthetic.",
    images: [
      "/assets/projects/fitlog-1.png",
      "/assets/projects/fitlog-2.png",
    ],
    techBadges: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "DaisyUI",
      "Context API",
      "localStorage Persistence",
      "Vercel",
    ],
    keyFeatures: [
      {
        icon: "📋",
        text: "Customizable Workout Routine Builder: select muscle groups and targeted exercises instantly.",
      },
      {
        icon: "⏱️",
        text: "Live Session Metrics: log reps, weights, and rest intervals effortlessly between sets.",
      },
      {
        icon: "💾",
        text: "Persistent Local Storage: all active sessions and completed workout history persist across reloads.",
      },
      {
        icon: "🎯",
        text: "Weekly Consistency & Goal Tracking: visual indicators to celebrate completed workout milestones.",
      },
      {
        icon: "🌙",
        text: "Modern Dark-Themed UI: designed specifically for high-contrast visibility on mobile screens inside the gym.",
      },
      {
        icon: "⚡",
        text: "Ultra-Fast Client Interactions: zero-latency state updates powered by React 19 Context API.",
      },
    ],
    challenges: [
      "Synchronizing active workout state across multi-step flows without losing in-progress set logs upon page refresh.",
      "Optimizing Tailwind CSS v4 styling rules and typography for seamless visual consistency across mobile and desktop devices.",
      "Structuring clean modular component hierarchies for reusable workout cards and input counter steppers.",
      "Ensuring high touch-target accessibility for gym users interacting with mobile screens during intense workouts.",
    ],
    futurePlans: [
      "Integrate cloud database sync (MongoDB/Supabase) to support multi-device user accounts and cross-platform access.",
      "Add interactive audio rest-timer countdowns with custom sound cues.",
      "Provide 1-Rep Max (1RM) calculators and personal record (PR) milestone badges.",
      "Export workout histories to CSV and PDF formats for personal coaches.",
    ],
    liveLink: "https://ph-as06-fit-log-project-next-js.vercel.app",
    github: "https://github.com/AmiNuL-72/PH_As06-FitLog-Project-NextJS",
  },
  {
    id: "3",
    slug: "devstack",
    name: "DevStack – Tech Stack Explorer",
    category: "FRONTEND / REACT",
    emoji: "🧑‍💻",
    headline: "Explore modern web technologies and curate your personalized tech stack",
    description:
      "DevStack is a responsive React application for exploring modern web technologies and building a personal technology stack. Users can browse technology cards, add their favorite tools, and manage their selected stack in one place.",
    fullDescription:
      "DevStack helps developers, students, and tech enthusiasts discover modern developer tools, libraries, and frameworks across frontend, backend, database, and devops categories. Built with React, TypeScript, Vite, and Tailwind CSS, it features interactive category filtering, duplicate-selection guards, real-time stack analytics, and toast notifications.",
    images: [
      "/assets/projects/devstack-1.png",
      "/assets/projects/devstack-2.png",
    ],
    techBadges: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "Netlify",
    ],
    keyFeatures: [
      {
        icon: "🔍",
        text: "Explore Technologies by Category: browse frontend, backend, tools, and databases with interactive filters.",
      },
      {
        icon: "➕",
        text: "Personal Stack Builder: add technologies to your stack with automated duplicate-prevention checks.",
      },
      {
        icon: "🔔",
        text: "Interactive Toast Notifications: instant visual feedback on adding, removing, or clearing stack items.",
      },
      {
        icon: "📊",
        text: "Curated Stack Overview: real-time summary counter of tools selected across technical domains.",
      },
      {
        icon: "📱",
        text: "Fully Responsive Card Grid: fluid layout with rich hover transitions and badge indicators.",
      },
      {
        icon: "🗑️",
        text: "Flexible Stack Management: quick single-item removal or complete stack reset in one click.",
      },
    ],
    challenges: [
      "Managing complex client state for technology selection with duplicate prevention logic in TypeScript.",
      "Implementing efficient category filtering while maintaining snappy search transitions.",
      "Styling clean, responsive card grids that scale gracefully from smartphone viewports to ultra-wide monitors.",
      "Optimizing bundle size and lightning-fast loading speeds using Vite and Tailwind CSS utility classes.",
    ],
    futurePlans: [
      "Allow users to export their curated stack configuration as a `README.md` badge set or JSON boilerplate.",
      "Add community upvoting and popularity rankings for trending developer tools.",
      "Integrate GitHub API to display real-time repository stars, issues, and release activity for each tool.",
      "Provide recommended learning roadmaps tailored to the selected technologies.",
    ],
    liveLink: "https://devstack-a05-reactproject.netlify.app/",
    github: "https://github.com/AmiNuL-72/As-05-DevStack-ReactProject",
  },
];
