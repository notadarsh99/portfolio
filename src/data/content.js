// Central place to edit portfolio content.
// Replace placeholder values (marked with TODO) with your real details.

export const profile = {
  name: "Adarsh",
  role: "Aspiring Cybersecurity Engineer",
  tagline: "Building. Breaking. Learning. Securing.",
  subtitle:
    "Aspiring Cybersecurity Engineer • Developer • Linux Enthusiast • Builder",
   location: "India/UP " ,
  email: "adrxshwho@gmail.com", 
  github: "https://github.com/notadarsh99", 
  linkedin: "https://www.instagram.com/dev_enderhere/", 
};

export const about = {
  summary:
    "I'm a technology enthusiast and aspiring Cybersecurity Engineer who loves learning by building, experimenting, and breaking things down to understand how they work.",
  body: [
    "My journey in technology spans cybersecurity, software development, web development, Linux, AI, automation, cloud deployment, game/server administration, and system troubleshooting. Rather than only learning theory, I enjoy turning ideas into working projects and solving problems when things inevitably break.",
    "I work primarily with Python, JavaScript, HTML, CSS, React, Node.js, Java, and Linux, and I'm continuously expanding my knowledge of networking, cybersecurity, system administration, and modern web technologies.",
  ],
  howILearn:
    "I'm a hands-on learner. When I find something interesting, I prefer to build it, test it, troubleshoot it, and understand why it works rather than simply reading about it. A broken installation, confusing terminal error, failed deployment, or server crash is usually another problem to solve — and another opportunity to learn.",
  goal:
    "My long-term goal is to become a Cybersecurity Engineer, with strong foundations in programming, networking, Linux, cloud infrastructure, and system security. I want to develop the ability to not only build software, but also understand how systems can fail, identify security weaknesses ethically, and design more secure technology.",
  currentlyExploring: [
    "Cybersecurity & ethical security testing",
    "Networking",
    "Linux & system administration",
    "Python development",
    "Web development",
    "Cloud infrastructure",
    "AI & automation",
    "Backend development",
    "DevOps concepts",
    "Secure software development",
  ],
};

// Skills modeled as a "findings board" — severity = proficiency/depth.
// CRITICAL = core strength, HIGH = strong working knowledge,
// MEDIUM = comfortable/building depth, LOW = exploring/early stage.
export const skillCategories = [
  {
    id: "programming",
    label: "Programming",
    findings: [
      { name: "Python", severity: "CRITICAL" },
      { name: "JavaScript", severity: "CRITICAL" },
      { name: "Java", severity: "MEDIUM" },
      { name: "HTML", severity: "CRITICAL" },
      { name: "CSS", severity: "HIGH" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    findings: [
      { name: "React", severity: "HIGH" },
      { name: "Vite", severity: "HIGH" },
      { name: "Tailwind CSS", severity: "HIGH" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    findings: [
      { name: "Node.js", severity: "HIGH" },
      { name: "Express", severity: "MEDIUM" },
      { name: "Python (backend)", severity: "HIGH" },
    ],
  },
  {
    id: "security",
    label: "Cybersecurity & Systems",
    findings: [
      { name: "Linux", severity: "HIGH" },
      { name: "Kali Linux", severity: "MEDIUM" },
      { name: "Networking", severity: "MEDIUM" },
      { name: "System Administration", severity: "HIGH" },
      { name: "Security Fundamentals", severity: "MEDIUM" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    findings: [
      { name: "Git", severity: "HIGH" },
      { name: "GitHub", severity: "HIGH" },
      { name: "VS Code", severity: "CRITICAL" },
      { name: "Cloudflare", severity: "MEDIUM" },
      { name: "Vercel", severity: "HIGH" },
      { name: "Render", severity: "MEDIUM" },
    ],
  },
  {
    id: "automation",
    label: "Automation & Bots",
    findings: [
      { name: "Discord Bots", severity: "HIGH" },
      { name: "Telegram Bots", severity: "MEDIUM" },
      { name: "Python Automation", severity: "HIGH" },
      { name: "API Integration", severity: "HIGH" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    findings: [
      { name: "Minecraft Server Administration", severity: "CRITICAL" },
      { name: "Paper", severity: "HIGH" },
      { name: "Pterodactyl", severity: "MEDIUM" },
      { name: "Plugin Configuration", severity: "HIGH" },
      { name: "Server Performance", severity: "MEDIUM" },
    ],
  },
];

// Projects modeled as "case files". Replace with your real project details —
// links, real outcomes, screenshots, etc.
export const projects = [
  {
    id: "DGR-2026-001",
    title: "AI Voice Assistant",
    status: "DEPLOYED",
    category: "AI & Automation",
    summary:
      "TODO: Python-based voice assistant with speech recognition, command automation, and system control.", // TODO
    stack: ["Python", "Automation", "API Integration"],
    link: "", // TODO
  },
  {
    id: "DGR-2026-002",
    title: "Minecraft Server Infrastructure",
    status: "IN PRODUCTION",
    category: "Infrastructure",
    summary:
      "TODO: Managed Minecraft server infrastructure — Paper, plugin configuration, permissions, performance tuning, and Pterodactyl-based deployment.", // TODO
    stack: ["Paper", "Pterodactyl", "Linux", "Server Performance"],
    link: "", // TODO
  },
  {
    id: "DGR-2026-003",
    title: "Discord & Telegram Bot Suite",
    status: "DEPLOYED",
    category: "Automation & Bots",
    summary:
      "TODO: Cross-platform automation and integration tools connecting Discord and Telegram with backend services.", // TODO
    stack: ["Node.js", "Python", "Discord API", "Telegram API"],
    link: "", // TODO
  },
  {
    id: "DGR-2026-004",
    title: "Web Application Interfaces",
    status: "RESOLVED",
    category: "Web Development",
    summary:
      "TODO: Responsive web interfaces built with React, Vite, and Tailwind, deployed via Vercel/Render/Cloudflare.", // TODO
    stack: ["React", "Vite", "Tailwind CSS", "Vercel"],
    link: "", // TODO
  },
];
