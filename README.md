# Vijayapandian T - Modern Developer Portfolio

A modern, high-performance, and responsive personal developer portfolio website built for **Vijayapandian T** (Aspiring Software Development Engineer | Full-Stack Developer | AI Enthusiast).

Designed with a professional dark theme, subtle tech gradients, glassmorphism, responsive Three.js 3D visual interaction, and structured data-driven components.

---

## Tech Stack

* **React 18** (Modern component-driven UI architecture)
* **Vite** (Next-generation high-speed build tool and dev server)
* **Three.js & @react-three/fiber & @react-three/drei** (Hardware-accelerated 3D abstract visualization)
* **Lucide React** (Clean, minimalist developer icons)
* **Modern CSS** (Custom design system, glassmorphism, responsive grid, and zero bloated CSS frameworks)

---

## Project Folder Structure

```text
c:/Portfolio/
├── index.html                   # HTML entry point with SEO meta & fonts
├── package.json                 # Dependency and script configuration
├── vite.config.js               # Vite bundler configuration
├── .gitignore                   # Standard git exclusions
├── README.md                    # Project documentation & run guide
│
├── public/                      # Static assets served as-is
│   └── assets/
│       ├── resume/
│       │   └── Vijayapandian_T_Resume.pdf    # Downloadable resume PDF
│       └── images/
│           ├── intellisphere.svg             # Project 1 preview graphic
│           ├── testforge.svg                 # Project 2 preview graphic
│           └── ai-resume-builder.svg         # Project 3 preview graphic
│
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main page layout coordinating all sections
    ├── index.css                # Global design system, glassmorphism & responsive CSS
    │
    ├── data/                    # Central data store (Easy to update)
    │   ├── personalInfo.js      # Name, roles, bios, stats, contact links
    │   ├── skills.js            # Technical skills categorized with proficiency & icons
    │   ├── projects.js          # Featured projects with problem, solution & features
    │   ├── experience.js        # Professional internships & timeline details
    │   ├── education.js         # College degree, CGPA, coursework & honors
    │   ├── achievements.js      # Verified metrics (DSA, Hackathons, Quizzes)
    │   └── services.js          # Freelance web development offerings & deliverables
    │
    └── components/              # Modular, reusable React components
        ├── Navbar.jsx           # Sticky nav with scroll-spy & mobile drawer
        ├── Hero.jsx             # Hero text, CTAs, social profiles
        ├── HeroScene.jsx        # Isolated Three.js/R3F interactive visual
        ├── About.jsx            # Engineering background, metrics & resume action
        ├── Skills.jsx           # Category-filtered skill grid
        ├── Projects.jsx         # Project grid with category filters & modal state
        ├── ProjectCard.jsx      # Interactive project card with demo/github buttons
        ├── ProjectModal.jsx     # Deep-dive modal (Problem, Solution, Tech, Features)
        ├── Experience.jsx       # Interactive accordion timeline
        ├── Education.jsx        # Academic card with expandable coursework
        ├── Achievements.jsx     # Metric cards with hover animations
        ├── Services.jsx         # Freelance service packages & CTA
        ├── Contact.jsx          # Validated contact form & direct social links
        └── Footer.jsx           # Quick links, back-to-top & copyright
```

---

## Getting Started

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed.

### 2. Installation
Install project dependencies:
```bash
npm install
```

### 3. Development Server
Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000`.

### 4. Production Build
To create an optimized production bundle:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Packages Used

| Package | Purpose |
| :--- | :--- |
| `react` & `react-dom` | Core React library (v18.3.1 for rock-solid R3F compatibility) |
| `three` | 3D graphics library |
| `@react-three/fiber` | Declarative Three.js wrapper for React |
| `@react-three/drei` | Useful helpers and abstractions for React Three Fiber |
| `lucide-react` | Clean, modern developer icons |
| `vite` & `@vitejs/plugin-react` | Ultra-fast development server & production bundler |

---

## Component Overview

1. **Navbar (`Navbar.jsx`)**: Sticky header with scroll detection, active section indicator via scroll position, quick links to Resume, GitHub, and LinkedIn, and a mobile sliding hamburger menu.
2. **Hero (`Hero.jsx`)**: High-impact introduction with status badge, role presentation, primary action buttons, social links, and the 3D scene integration.
3. **HeroScene (`HeroScene.jsx`)**: Lightweight React Three Fiber scene featuring a floating wireframe icosahedron, glowing core, orbital ring, and interactive particle field responsive to cursor movements. Automatically adapts to mobile screens.
4. **About (`About.jsx`)**: Concise developer bio, 4 key metrics (300+ DSA, 7+ Projects, 10+ Hackathons, 3+ Internships), and a direct "View Full Resume" button.
5. **Skills (`Skills.jsx`)**: Categorized technical competencies with instant category switching (All, Programming, Frontend, Backend, Database, AI, Tools).
6. **Projects (`Projects.jsx`, `ProjectCard.jsx`, `ProjectModal.jsx`)**: Showcase of IntelliSphere, TESTFORGE, and AI Resume Builder with category filtering, live demo links, github links, and a modal view providing problem/solution architectures and key features.
7. **Experience (`Experience.jsx`)**: Interactive accordion timeline detailing roles at Infosys Springboard, Elevate Labs, and 1M1B.
8. **Education (`Education.jsx`)**: Easwari Engineering College card showcasing 8.49 CGPA and an interactive toggle displaying coursework and academic activities.
9. **Achievements (`Achievements.jsx`)**: Verified accomplishment cards with hover micro-interactions.
10. **Services (`Services.jsx`)**: 6 freelance offerings (Portfolio Websites, Frontend Websites, Website Bug Fixing, Responsive Design, GitHub Setup, Vercel Deployment) with a "Let's Work Together" CTA.
11. **Contact (`Contact.jsx`)**: Client-validated contact form (name, email, subject, message) with error states, success notification, and a direct "Email Me Directly" button.
12. **Footer (`Footer.jsx`)**: Brand tagline, social links, back-to-top button, and copyright notice.

---

## Customization Guide

All information is separated into `src/data/`:
* To update personal details, bio, or links: Edit `src/data/personalInfo.js`.
* To update your resume: Replace `public/assets/resume/Vijayapandian_T_Resume.pdf`.
* To add or modify skills: Edit `src/data/skills.js`.
* To add new projects: Edit `src/data/projects.js`.
* To update work experience: Edit `src/data/experience.js`.
* To update services: Edit `src/data/services.js`.

---

## Day 3 Checklist: GitHub + Vercel Deployment

- [ ] **Push Latest Code**: Ensure all local commits are pushed to `https://github.com/VIJAYAPANDIANT/vijayapandian-t-portfolio`.
- [ ] **Import to Vercel**:
  1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
  2. Click **Add New...** -> **Project**.
  3. Select `vijayapandian-t-portfolio`.
  4. Framework Preset: **Vite** (auto-detected).
  5. Build Command: `npm run build`.
  6. Output Directory: `dist`.
  7. Click **Deploy**.
- [ ] **Configure Custom Domain (Optional)**:
  - Under Project Settings -> Domains, add your domain (e.g. `vijayapandian.dev` or `vijayapandiant.in`).
  - Follow DNS CNAME / A record instructions.
- [ ] **Connect Email Backend**:
  - Connect Formspree or EmailJS endpoint to `src/components/Contact.jsx` for direct email delivery.
- [ ] **Verify Production URL**:
  - Test live responsive layouts, 3D Hero canvas, resume downloads, and modal dialogs on mobile and desktop.
