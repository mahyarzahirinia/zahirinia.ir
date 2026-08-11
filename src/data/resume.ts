import {
  Award,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Gauge,
  GitBranch,
  GraduationCap,
  Languages,
  Layers3,
  LayoutTemplate,
  LockKeyhole,
  LucideIcon,
  MonitorSmartphone,
  PackageCheck,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Users,
} from "lucide-react";

export type ContactLink = {
  label: string;
  href: string;
  kind: "email" | "phone" | "linkedin" | "github" | "telegram";
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Experience = {
  role: string;
  company?: string;
  project?: string;
  dates?: string;
  type?: string;
  domain?: string;
  highlights: string[];
};

export type Project = {
  title: string;
  type: string;
  description: string;
  link?: string;
  tech: string[];
};

export type Expertise = {
  title: string;
  icon: LucideIcon;
};

export const resume = {
  personal: {
    name: "Mohammad Zahirinia",
    title: "Senior Frontend Engineer",
    location: "Iran",
    phone: "+989052550418",
    email: "zahiriniamahyar@gmail.com",
    resumeUrl: "/resume-mohammad-zahirinia.pdf",
    summary:
      "Frontend Engineer with 5+ years of experience building enterprise applications, SaaS platforms, cryptocurrency products, and high-performance web applications using React, Next.js, Vue.js, and TypeScript.",
    profile:
      "Experienced in designing scalable frontend architectures, developing reusable component systems, implementing SSR/SSG solutions, optimizing application performance, and collaborating within Agile/Scrum teams. Strong focus on maintainability, developer experience, accessibility, and delivering production-grade user interfaces.",
  },
  contact: [
    {
      label: "Email",
      href: "mailto:zahiriniamahyar@gmail.com",
      kind: "email",
    },
    {
      label: "Phone",
      href: "tel:+989052550418",
      kind: "phone",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/mohammad-zahirinia",
      kind: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/mahyarzahirinia",
      kind: "github",
    },
    {
      label: "Telegram",
      href: "https://t.me/zahirinia_mohammad",
      kind: "telegram",
    },
  ] satisfies ContactLink[],
  stats: [
    { value: "5+", label: "Years experience" },
    { value: "10,000+", label: "Monthly PWA visitors" },
    { value: "500+", label: "Enterprise users" },
    { value: "100+", label: "Legacy components migrated" },
  ],
  experience: [
    {
      role: "Vue.js / Nuxt.js Developer, Senior Co-Team Lead",
      company: "CSIS Org.",
      dates: "02/2025 - Present",
      highlights: [
        "Developed enterprise-grade frontend applications used by 500+ internal users.",
        "Designed reusable Vue.js components, reducing duplicated UI logic by 15-20%.",
        "Built a customizable enterprise range-picker component used across 5+ business modules.",
        "Replaced a legacy WYSIWYG editor with a modern configurable editor, reducing content creation time by about 40%.",
        "Designed frontend shell architecture for a microfrontend system using a monorepo and shared component libraries.",
        "Mentored team members, reviewed code, reduced technical debt, and improved frontend security practices.",
        "Used AI-powered developer tools to accelerate development while aligning outputs with team standards.",
      ],
    },
    {
      role: "Next.js Developer",
      project: "Montazer.ir",
      type: "Progressive Web Application",
      highlights: [
        "Developed a multilingual PWA serving 10,000+ monthly visitors.",
        "Implemented PWA capabilities, increasing returning-user engagement by about 20%.",
        "Improved Lighthouse Performance score from 45+ to 75+.",
        "Reduced initial page load time by about 35%.",
        "Built localization infrastructure for 2+ languages.",
        "Ensured responsive behavior across desktop, tablet, and mobile.",
      ],
    },
    {
      role: "Next.js Developer",
      company: "Whiterose Cosmetics Store",
      dates: "01/2024 - 12/2024",
      highlights: [
        "Developed and maintained e-commerce frontend features using Next.js and React.",
        "Implemented SSR and SSG strategies that improved page load speed by about 40%.",
        "Increased Lighthouse SEO score from 75+ to 90+.",
        "Built reusable UI components, reducing feature implementation time by 25%.",
        "Used Jest and React Testing Library for UI reliability.",
        "Worked with CI/CD pipelines and cloud-based DevOps workflows.",
        "Used Redux, Context API, and Zustand for state management.",
      ],
    },
    {
      role: "React.js Developer",
      company: "Novncy Start-up",
      dates: "01/2023 - 12/2023",
      domain: "Cryptocurrency platform development",
      highlights: [
        "Developed a cryptocurrency platform serving thousands of active users.",
        "Built responsive trading interfaces with React and TypeScript.",
        "Reduced component rendering overhead by about 25%.",
        "Developed reusable component systems that accelerated feature delivery by 30%.",
        "Used SSR and CSR rendering strategies.",
        "Delivered pixel-perfect UI with Tailwind CSS and cross-browser compatibility.",
      ],
    },
    {
      role: "React.js Developer",
      company: "Depna.co Org.",
      dates: "01/2022 - 12/2022",
      domain: "Enterprise BPMS modernization",
      highlights: [
        "Helped modernize a large-scale enterprise BPMS platform.",
        "Migrated 100+ legacy class-based components to React functional components.",
        "Improved maintainability through TypeScript adoption.",
        "Developed reusable UI components, reducing duplicate implementation by about 35%.",
        "Customized Material UI design systems.",
        "Collaborated in a 5-member frontend team.",
      ],
    },
    {
      role: "Junior React Developer",
      company: "Mazdax.com crypto exchange Company",
      dates: "08/2021 - 12/2021",
      highlights: [
        "Contributed to cryptocurrency exchange frontend development.",
        "Assisted in implementation of 20+ user-facing features.",
        "Collaborated in Agile/Scrum teams.",
        "Participated in code reviews and quality assurance.",
        "Improved UX through responsive and accessible UI implementations.",
      ],
    },
  ] satisfies Experience[],
  skillGroups: [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript ES6+"],
    },
    {
      title: "State Management",
      icon: GitBranch,
      skills: ["Redux Toolkit", "Zustand", "Context API", "Vuex", "Pinia"],
    },
    {
      title: "Styling & UI",
      icon: LayoutTemplate,
      skills: [
        "Tailwind CSS",
        "Material UI",
        "Styled Components",
        "JSS",
        "Bootstrap",
        "Vuetify",
      ],
    },
    {
      title: "Architecture & Patterns",
      icon: Layers3,
      skills: [
        "Component Design",
        "Design Systems",
        "SSR",
        "SSG",
        "CSR",
        "Responsive Design",
        "Accessibility WCAG",
        "Performance Optimization",
      ],
    },
    {
      title: "Tools",
      icon: PackageCheck,
      skills: ["Git", "GitHub", "npm", "yarn", "pnpm", "Vite", "Webpack"],
    },
    {
      title: "Methodologies",
      icon: Users,
      skills: ["Agile", "Scrum", "Component-Driven Development"],
    },
  ] satisfies SkillGroup[],
  expertise: [
    { title: "Frontend Architecture", icon: Blocks },
    { title: "Reusable Component Systems", icon: PackageCheck },
    { title: "Enterprise UI Development", icon: BriefcaseBusiness },
    { title: "Performance Optimization", icon: Gauge },
    { title: "SSR / SSG / CSR Rendering Strategies", icon: MonitorSmartphone },
    { title: "Microfrontend Shell Architecture", icon: Layers3 },
    { title: "Design Systems", icon: LayoutTemplate },
    { title: "Accessibility", icon: ShieldCheck },
    { title: "SEO-focused Frontend Architecture", icon: SearchCheck },
    { title: "PWA Development", icon: Rocket },
    { title: "AI-assisted Development Workflows", icon: BrainCircuit },
    { title: "Testing and UI Reliability", icon: TestTube2 },
    { title: "Frontend Security Best Practices", icon: LockKeyhole },
  ] satisfies Expertise[],
  projects: [
    {
      title: "Customized TipTap Editor",
      type: "Public Project / npm Package",
      description:
        "A customizable Vue.js-based WYSIWYG editor for enterprise content management workflows, built on top of TipTap with configurable extensions and reusable architecture.",
      link: "https://www.npmjs.com/package/customized-tiptap-editor",
      tech: ["Vue.js", "TipTap", "npm", "TypeScript"],
    },
    {
      title: "Montazer.ir PWA",
      type: "Side Project",
      description:
        "A multilingual Progressive Web Application serving 10,000+ monthly visitors with improved engagement, localization, and performance.",
      tech: ["Next.js", "PWA", "i18n", "Performance Optimization"],
    },
    {
      title: "Whiterose Cosmetics Store",
      type: "E-commerce",
      description:
        "A commercial Next.js e-commerce frontend with SSR/SSG, SEO optimization, reusable components, and responsive shopping experiences.",
      tech: ["Next.js", "React", "SEO", "Jest", "React Testing Library"],
    },
  ] satisfies Project[],
  education: {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of Shahab Danesh",
    dates: "09/2013 - 02/2019",
    icon: GraduationCap,
  },
  languages: [
    {
      language: "English",
      level: "Professional Working Proficiency",
      icon: Languages,
    },
    {
      language: "Deutsch",
      level: "Intermediate, 4 semesters completed",
      icon: Award,
    },
  ],
  sectionNav: [
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "knowledge", label: "Knowledge" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
  badges: ["Enterprise UI", "SaaS", "Crypto", "E-commerce", "PWA"],
  availability: "Open to senior frontend roles and product-focused teams",
  accentIcon: Sparkles,
} as const;
