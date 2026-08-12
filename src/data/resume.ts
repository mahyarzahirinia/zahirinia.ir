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
  skills: readonly string[];
};

export type Experience = {
  role: string;
  company?: string;
  project?: string;
  dates?: string;
  type?: string;
  domain?: string;
  highlights: readonly string[];
};

export type Project = {
  title: string;
  type: string;
  description: string;
  link?: string;
  tech: readonly string[];
};

export type Expertise = {
  title: string;
  icon: LucideIcon;
};

export type Locale = "en" | "fa";

export const resume = {
  locale: "en",
  dir: "ltr",
  languageName: "English",
  languageToggleLabel: "فارسی",
  ui: {
    navAria: "Primary navigation",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    themeLightLabel: "Light",
    themeDarkLabel: "Dark",
    menuToggle: "Toggle navigation menu",
    viewProjects: "View Projects",
    downloadResume: "Download Resume",
    contactMe: "Contact Me",
    emailMohammad: "Email Mohammad",
    operatingProfile: "Operating profile",
    operatingTitle: "Product-minded frontend engineering",
    currentFocus: "Current focus",
    careerHighlights: "Career highlights",
    sectionHeaders: {
      skills: {
        eyebrow: "Capability Map",
        title: "A practical frontend toolkit for complex product work.",
        description:
          "Skills are grouped for quick scanning and rendered directly from structured resume data.",
      },
      experience: {
        eyebrow: "Experience",
        title: "Enterprise, commerce, crypto, and PWA work at production scale.",
        description:
          "A readable timeline that emphasizes impact, architecture, performance, team leadership, and delivery quality.",
      },
      projects: {
        eyebrow: "Selected Work",
        title:
          "Projects with reusable architecture and measurable product outcomes.",
        description:
          "Each project card is data-driven, link-aware, and designed to communicate domain, value, and technical scope quickly.",
      },
      knowledge: {
        eyebrow: "Knowledge",
        title:
          "Depth across architecture, delivery, quality, and developer experience.",
        description:
          "Expertise areas are presented as compact cards so recruiters and technical leaders can scan breadth without losing detail.",
      },
      education: {
        eyebrow: "Education",
        title: "Academic foundation and language capability.",
        description:
          "Formal education and working language proficiency are kept editable alongside the rest of the resume data.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Ready for senior frontend product work.",
        description:
          "Contact links are structured, clickable, and easy to update from the resume data file.",
      },
    },
  },
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

export const resumes = {
  en: resume,
  fa: {
    ...resume,
    locale: "fa",
    dir: "rtl",
    languageName: "فارسی",
    languageToggleLabel: "English",
    ui: {
      navAria: "ناوبری اصلی",
      themeLight: "تغییر به حالت روشن",
      themeDark: "تغییر به حالت تاریک",
      themeLightLabel: "روشن",
      themeDarkLabel: "تاریک",
      menuToggle: "باز و بسته کردن منوی ناوبری",
      viewProjects: "مشاهده پروژه‌ها",
      downloadResume: "دانلود رزومه",
      contactMe: "تماس با من",
      emailMohammad: "ارسال ایمیل به محمد",
      operatingProfile: "پروفایل کاری",
      operatingTitle: "مهندسی فرانت‌اند محصول‌محور",
      currentFocus: "تمرکز فعلی",
      careerHighlights: "نکات برجسته مسیر شغلی",
      sectionHeaders: {
        skills: {
          eyebrow: "نقشه توانمندی‌ها",
          title: "جعبه‌ابزار فرانت‌اند کاربردی برای محصولات پیچیده.",
          description:
            "مهارت‌ها برای اسکن سریع گروه‌بندی شده‌اند و مستقیما از داده ساختاریافته رزومه رندر می‌شوند.",
        },
        experience: {
          eyebrow: "تجربه کاری",
          title:
            "تجربه در محصولات سازمانی، فروشگاهی، رمزارز و PWA در مقیاس واقعی.",
          description:
            "تایم‌لاین خوانا با تمرکز بر اثرگذاری، معماری، عملکرد، راهبری تیم و کیفیت تحویل.",
        },
        projects: {
          eyebrow: "کارهای منتخب",
          title: "پروژه‌هایی با معماری قابل استفاده مجدد و نتیجه قابل اندازه‌گیری.",
          description:
            "هر کارت پروژه داده‌محور است و دامنه، ارزش و محدوده فنی را سریع منتقل می‌کند.",
        },
        knowledge: {
          eyebrow: "دانش تخصصی",
          title: "عمق در معماری، تحویل، کیفیت و تجربه توسعه‌دهنده.",
          description:
            "حوزه‌های تخصصی به شکل کارت‌های فشرده ارائه شده‌اند تا مرور سریع و دقیق ممکن باشد.",
        },
        education: {
          eyebrow: "تحصیلات",
          title: "پایه دانشگاهی و توانایی زبانی.",
          description:
            "تحصیلات رسمی و سطح زبان‌ها همراه با سایر داده‌های رزومه قابل ویرایش هستند.",
        },
        contact: {
          eyebrow: "تماس",
          title: "آماده برای نقش‌های ارشد فرانت‌اند محصول‌محور.",
          description:
            "لینک‌های تماس ساختاریافته، قابل کلیک و از فایل داده رزومه قابل ویرایش هستند.",
        },
      },
    },
    personal: {
      ...resume.personal,
      title: "مهندس ارشد فرانت‌اند",
      location: "ایران",
      summary:
        "مهندس فرانت‌اند با بیش از ۵ سال تجربه در ساخت اپلیکیشن‌های سازمانی، پلتفرم‌های SaaS، محصولات رمزارزی و وب‌اپلیکیشن‌های پرفورمنس‌محور با React، Next.js، Vue.js و TypeScript.",
      profile:
        "باتجربه در طراحی معماری‌های فرانت‌اند مقیاس‌پذیر، توسعه سیستم‌های کامپوننت قابل استفاده مجدد، پیاده‌سازی SSR/SSG، بهینه‌سازی عملکرد و همکاری در تیم‌های Agile/Scrum. متمرکز بر نگهداشت‌پذیری، تجربه توسعه‌دهنده، دسترس‌پذیری و تحویل رابط‌های کاربری production-grade.",
    },
    contact: [
      { ...resume.contact[0], label: "ایمیل" },
      { ...resume.contact[1], label: "تلفن" },
      { ...resume.contact[2], label: "لینکدین" },
      { ...resume.contact[3], label: "گیت‌هاب" },
      { ...resume.contact[4], label: "تلگرام" },
    ],
    stats: [
      { value: "۵+", label: "سال تجربه" },
      { value: "۱۰,۰۰۰+", label: "بازدیدکننده ماهانه PWA" },
      { value: "۵۰۰+", label: "کاربر سازمانی" },
      { value: "۱۰۰+", label: "کامپوننت legacy مهاجرت‌داده‌شده" },
    ],
    experience: [
      {
        role: "توسعه‌دهنده Vue.js / Nuxt.js، هم‌رهبر ارشد تیم",
        company: "CSIS Org.",
        dates: "۰۲/۲۰۲۵ - اکنون",
        highlights: [
          "توسعه اپلیکیشن‌های فرانت‌اند سازمانی مورد استفاده بیش از ۵۰۰ کاربر داخلی.",
          "طراحی کامپوننت‌های Vue.js قابل استفاده مجدد و کاهش ۱۵ تا ۲۰ درصدی منطق تکراری UI.",
          "ساخت کامپوننت range-picker سازمانی قابل سفارشی‌سازی برای بیش از ۵ ماژول کسب‌وکار.",
          "جایگزینی ویرایشگر WYSIWYG قدیمی با ویرایشگر مدرن و قابل پیکربندی و کاهش حدود ۴۰ درصدی زمان تولید محتوا.",
          "طراحی معماری shell فرانت‌اند برای سیستم microfrontend با monorepo و کتابخانه‌های مشترک.",
          "منتورینگ اعضای تیم، بازبینی کد، کاهش بدهی فنی و بهبود رویه‌های امنیتی فرانت‌اند.",
          "استفاده از ابزارهای توسعه مبتنی بر AI برای افزایش سرعت توسعه همراه با حفظ استانداردهای تیم.",
        ],
      },
      {
        role: "توسعه‌دهنده Next.js",
        project: "Montazer.ir",
        type: "Progressive Web Application",
        highlights: [
          "توسعه PWA چندزبانه با بیش از ۱۰,۰۰۰ بازدیدکننده ماهانه.",
          "پیاده‌سازی قابلیت‌های PWA و افزایش حدود ۲۰ درصدی تعامل کاربران بازگشتی.",
          "بهبود امتیاز Lighthouse Performance از ۴۵+ به ۷۵+.",
          "کاهش حدود ۳۵ درصدی زمان بارگذاری اولیه صفحه.",
          "ساخت زیرساخت localization برای بیش از ۲ زبان.",
          "اطمینان از رفتار responsive در دسکتاپ، تبلت و موبایل.",
        ],
      },
      {
        role: "توسعه‌دهنده Next.js",
        company: "Whiterose Cosmetics Store",
        dates: "۰۱/۲۰۲۴ - ۱۲/۲۰۲۴",
        highlights: [
          "توسعه و نگهداری قابلیت‌های فرانت‌اند فروشگاهی با Next.js و React.",
          "پیاده‌سازی SSR و SSG و بهبود حدود ۴۰ درصدی سرعت بارگذاری صفحات.",
          "افزایش امتیاز Lighthouse SEO از ۷۵+ به ۹۰+.",
          "ساخت کامپوننت‌های UI قابل استفاده مجدد و کاهش ۲۵ درصدی زمان توسعه قابلیت‌ها.",
          "استفاده از Jest و React Testing Library برای افزایش اطمینان UI.",
          "همکاری با pipelineهای CI/CD و جریان‌های DevOps ابری.",
          "استفاده از Redux، Context API و Zustand برای مدیریت state.",
        ],
      },
      {
        role: "توسعه‌دهنده React.js",
        company: "Novncy Start-up",
        dates: "۰۱/۲۰۲۳ - ۱۲/۲۰۲۳",
        domain: "توسعه پلتفرم رمزارز",
        highlights: [
          "توسعه پلتفرم رمزارزی با هزاران کاربر فعال.",
          "ساخت رابط‌های معاملاتی responsive با React و TypeScript.",
          "کاهش حدود ۲۵ درصدی سربار رندر کامپوننت‌ها.",
          "توسعه سیستم کامپوننت قابل استفاده مجدد و افزایش ۳۰ درصدی سرعت تحویل قابلیت‌ها.",
          "استفاده از استراتژی‌های SSR و CSR.",
          "تحویل UI دقیق، سازگار با مرورگرهای مختلف و مبتنی بر Tailwind CSS.",
        ],
      },
      {
        role: "توسعه‌دهنده React.js",
        company: "Depna.co Org.",
        dates: "۰۱/۲۰۲۲ - ۱۲/۲۰۲۲",
        domain: "نوسازی BPMS سازمانی",
        highlights: [
          "کمک به نوسازی یک پلتفرم BPMS سازمانی بزرگ‌مقیاس.",
          "مهاجرت بیش از ۱۰۰ کامپوننت class-based قدیمی به کامپوننت‌های functional در React.",
          "بهبود نگهداشت‌پذیری از طریق پذیرش TypeScript.",
          "توسعه کامپوننت‌های UI قابل استفاده مجدد و کاهش حدود ۳۵ درصدی پیاده‌سازی تکراری.",
          "سفارشی‌سازی design system مبتنی بر Material UI.",
          "همکاری در تیم فرانت‌اند ۵ نفره.",
        ],
      },
      {
        role: "توسعه‌دهنده Junior React",
        company: "Mazdax.com crypto exchange Company",
        dates: "۰۸/۲۰۲۱ - ۱۲/۲۰۲۱",
        highlights: [
          "مشارکت در توسعه فرانت‌اند صرافی رمزارز.",
          "کمک به پیاده‌سازی بیش از ۲۰ قابلیت کاربرمحور.",
          "همکاری در تیم‌های Agile/Scrum.",
          "مشارکت در بازبینی کد و تضمین کیفیت.",
          "بهبود تجربه کاربری از طریق پیاده‌سازی UI responsive و دسترس‌پذیر.",
        ],
      },
    ],
    skillGroups: [
      {
        title: "توسعه فرانت‌اند",
        icon: Code2,
        skills: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript ES6+"],
      },
      {
        title: "مدیریت State",
        icon: GitBranch,
        skills: ["Redux Toolkit", "Zustand", "Context API", "Vuex", "Pinia"],
      },
      {
        title: "استایل و UI",
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
        title: "معماری و الگوها",
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
        title: "ابزارها",
        icon: PackageCheck,
        skills: ["Git", "GitHub", "npm", "yarn", "pnpm", "Vite", "Webpack"],
      },
      {
        title: "متدولوژی‌ها",
        icon: Users,
        skills: ["Agile", "Scrum", "Component-Driven Development"],
      },
    ],
    expertise: [
      { title: "معماری فرانت‌اند", icon: Blocks },
      { title: "سیستم‌های کامپوننت قابل استفاده مجدد", icon: PackageCheck },
      { title: "توسعه UI سازمانی", icon: BriefcaseBusiness },
      { title: "بهینه‌سازی عملکرد", icon: Gauge },
      { title: "استراتژی‌های رندر SSR / SSG / CSR", icon: MonitorSmartphone },
      { title: "معماری Microfrontend Shell", icon: Layers3 },
      { title: "Design Systems", icon: LayoutTemplate },
      { title: "دسترس‌پذیری", icon: ShieldCheck },
      { title: "معماری فرانت‌اند SEO محور", icon: SearchCheck },
      { title: "توسعه PWA", icon: Rocket },
      { title: "جریان‌های توسعه AI-assisted", icon: BrainCircuit },
      { title: "تست و قابلیت اتکای UI", icon: TestTube2 },
      { title: "بهترین رویه‌های امنیت فرانت‌اند", icon: LockKeyhole },
    ],
    projects: [
      {
        title: "Customized TipTap Editor",
        type: "پروژه عمومی / پکیج npm",
        description:
          "ویرایشگر WYSIWYG قابل سفارشی‌سازی مبتنی بر Vue.js برای جریان‌های مدیریت محتوای سازمانی، ساخته‌شده روی TipTap با extensionهای قابل پیکربندی و معماری قابل استفاده مجدد.",
        link: "https://www.npmjs.com/package/customized-tiptap-editor",
        tech: ["Vue.js", "TipTap", "npm", "TypeScript"],
      },
      {
        title: "Montazer.ir PWA",
        type: "پروژه جانبی",
        description:
          "Progressive Web Application چندزبانه با بیش از ۱۰,۰۰۰ بازدیدکننده ماهانه، همراه با بهبود تعامل، localization و عملکرد.",
        tech: ["Next.js", "PWA", "i18n", "Performance Optimization"],
      },
      {
        title: "Whiterose Cosmetics Store",
        type: "فروشگاه آنلاین",
        description:
          "فرانت‌اند فروشگاهی تجاری با Next.js، SSR/SSG، بهینه‌سازی SEO، کامپوننت‌های قابل استفاده مجدد و تجربه خرید responsive.",
        tech: ["Next.js", "React", "SEO", "Jest", "React Testing Library"],
      },
    ],
    education: {
      ...resume.education,
      degree: "کارشناسی فناوری اطلاعات",
      institution: "دانشگاه شهاب دانش",
      dates: "۰۹/۲۰۱۳ - ۰۲/۲۰۱۹",
    },
    languages: [
      {
        language: "انگلیسی",
        level: "تسلط کاری حرفه‌ای",
        icon: Languages,
      },
      {
        language: "آلمانی",
        level: "متوسط، ۴ ترم گذرانده‌شده",
        icon: Award,
      },
    ],
    sectionNav: [
      { id: "profile", label: "پروفایل" },
      { id: "skills", label: "مهارت‌ها" },
      { id: "experience", label: "تجربه" },
      { id: "projects", label: "پروژه‌ها" },
      { id: "knowledge", label: "دانش" },
      { id: "education", label: "تحصیلات" },
      { id: "contact", label: "تماس" },
    ],
    badges: ["UI سازمانی", "SaaS", "رمزارز", "فروشگاهی", "PWA"],
    availability: "آماده همکاری در نقش‌های ارشد فرانت‌اند و تیم‌های محصول‌محور",
  },
} as const;

export type ResumeData = (typeof resumes)[Locale];
