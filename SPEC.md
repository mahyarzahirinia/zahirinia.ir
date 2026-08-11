# Mohammad Zahirinia Portfolio Spec Kit

## Product Name
Mohammad Zahirinia - Senior Frontend Engineer Portfolio

## Product Type
Premium interactive resume and portfolio web app.

## Primary Goal
Present Mohammad Zahirinia as a senior, product-minded frontend engineer with measurable experience across enterprise applications, SaaS platforms, cryptocurrency products, e-commerce, PWAs, performance optimization, and reusable frontend architecture.

## Target Audience
Recruiters, hiring managers, technical founders, engineering leads, and frontend teams evaluating Mohammad for senior frontend engineering roles.

## Core User Story
As a hiring stakeholder, I want to quickly understand Mohammad's technical strengths, business impact, project history, and contact options so I can decide whether to interview or contact him.

## Content Requirements
- Hero: name, title, location, summary, contact links, CTAs, and career statistics.
- Skills: grouped frontend, state, styling, architecture, tooling, and methodology skills.
- Experience: chronological timeline with role, company/project, dates, domain/type, and highlights.
- Projects: project cards with type, description, technologies, and optional external links.
- Knowledge: compact expertise cards covering architecture, performance, design systems, accessibility, SEO, PWA, AI workflows, testing, and security.
- Education: degree, institution, and dates.
- Languages: English and Deutsch proficiency.
- Contact: clickable email, phone, LinkedIn, GitHub, and Telegram links.

## Data Architecture
All resume content must live in `src/data/resume.ts`. UI components should only render structured data from that file and should not hard-code resume copy. Updating profile text, skills, jobs, projects, education, languages, contact links, or the resume download URL should require editing only `src/data/resume.ts`.

## Suggested `resume.ts` Shape
```ts
export const resume = {
  personal: { name, title, location, phone, email, resumeUrl, summary, profile },
  contact: [{ label, href, kind }],
  stats: [{ value, label }],
  experience: [{ role, company, project, dates, type, domain, highlights }],
  skillGroups: [{ title, icon, skills }],
  expertise: [{ title, icon }],
  projects: [{ title, type, description, link, tech }],
  education: { degree, institution, dates, icon },
  languages: [{ language, level, icon }],
  sectionNav: [{ id, label }],
};
```

## Technical Requirements
- Next.js App Router with TypeScript.
- Tailwind CSS for responsive styling.
- shadcn/ui-inspired reusable primitives.
- lucide-react icons for navigation, CTAs, contact links, categories, and section labels.
- Framer Motion for subtle entrance and hover interactions.
- Dark and light theme support.
- SEO metadata and Open Graph/Twitter metadata.
- Fully responsive mobile, tablet, and desktop behavior.

## UI Requirements
- Sticky navigation with active section highlighting.
- Elegant touch-friendly mobile navigation.
- Strong first viewport with name, value proposition, statistics, and clear CTAs.
- Timeline layout for experience.
- Cards only where they add scannability, such as projects, expertise, skills, education, and contact methods.
- Polished spacing, type hierarchy, accessible contrast, visible focus states, and refined hover states.
- Restrained professional palette with cyan as the primary accent.

## UX Principles
- Make seniority and product impact immediately obvious.
- Keep dense resume content easy to skim.
- Favor direct navigation and clear anchors.
- Avoid generic portfolio-template patterns.
- Ensure every interactive element is keyboard accessible.
- Preserve readable line lengths and stable layouts across screen sizes.

## Visual Direction
Professional, refined, technical, and confident. The interface should feel like a personal operating profile for a senior frontend engineer: restrained, information-rich, fast to scan, and memorable without being cluttered.

## Component Checklist
- `src/components/ResumeApp.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/SkillsSection.tsx`
- `src/components/sections/ExperienceSection.tsx`
- `src/components/sections/ProjectsSection.tsx`
- `src/components/sections/KnowledgeSection.tsx`
- `src/components/sections/EducationSection.tsx`
- `src/components/sections/ContactSection.tsx`
- `src/components/ui/ProjectCard.tsx`
- `src/components/ui/SkillGroup.tsx`
- `src/components/ui/TimelineItem.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/SectionHeader.tsx`

## Accessibility Requirements
- Semantic sections with stable IDs.
- Keyboard-friendly links and buttons.
- Visible focus states.
- Meaningful aria labels for icon-only controls.
- Sufficient color contrast in light and dark modes.
- Responsive text sizing without overlap on small screens.

## SEO Requirements
- Page title and description must describe Mohammad Zahirinia and the senior frontend engineering portfolio.
- Metadata should include relevant keywords, authorship, Open Graph, and Twitter cards.
- Contact and project links should use proper hrefs.
- The first viewport should clearly identify the person, role, and technical focus.

## Acceptance Criteria
- The app runs successfully.
- All resume sections render from `src/data/resume.ts`.
- The design works on mobile, tablet, and desktop.
- Dark and light mode both look polished.
- Contact links are clickable.
- Project links work.
- Resume download button has a clear placeholder path.
- Experience timeline is readable and well-spaced.
- Skills are grouped clearly.
- Metadata is configured for SEO.
- Components are reusable and cleanly organized.
- `SPEC.md` exists and documents the full product and technical plan.
