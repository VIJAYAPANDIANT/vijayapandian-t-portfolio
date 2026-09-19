/**
 * Featured projects with categories, detailed problem/solution descriptions,
 * tech stacks, key features, and live/code links for the modal.
 */
export const projectCategories = ["All", "Full Stack", "AI", "Frontend", "Database"];

export const projectsData = [
  {
    id: "intellisphere",
    title: "IntelliSphere",
    tagline: "AI Decision Intelligence Platform",
    shortDescription:
      "AI-powered Decision Intelligence Platform designed to analyze data and provide actionable insights across multiple domains.",
    categories: ["Full Stack", "AI"],
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Gemini AI"],
    image: "/assets/images/intellisphere.svg",
    githubUrl: "https://github.com/vijayapandiant/intellisphere",
    liveUrl: "https://intellisphere-demo.vercel.app",
    problem:
      "Modern enterprises and analysts struggle to sift through high-volume, multi-source telemetry data to extract actionable decisions quickly, leading to costly analytical latency.",
    solution:
      "Architected a scalable decision intelligence pipeline using a Spring Boot backend, PostgreSQL for optimized indexing, and Google Gemini AI for contextual automated reasoning and predictive insight generation.",
    keyFeatures: [
      "Dynamic executive telemetry dashboard with interactive charts and KPI widgets",
      "Gemini AI reasoning engine producing actionable executive briefings",
      "Robust RESTful backend in Spring Boot with enterprise-grade PostgreSQL schemas",
      "Granular role-based access control and high-concurrency event stream ingestion"
    ]
  },
  {
    id: "placement-portal-application",
    title: "Placement Portal Application",
    tagline: "Enterprise Campus Recruitment & AI Resume Screening Platform",
    shortDescription:
      "A comprehensive, decoupled full-stack platform streamlining campus placements with automated CGPA/Branch filtering, Groq AI ATS resume parsing, and multi-role workflows.",
    categories: ["Full Stack", "AI"],
    technologies: ["Flask", "Python", "React", "Groq AI (LLaMA-3.3)", "SQLAlchemy ORM", "Redis", "Celery", "JWT Auth"],
    image: "/assets/images/placement-portal.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/placement-portal-application",
    liveUrl: "https://github.com/VIJAYAPANDIANT/placement-portal-application",
    problem:
      "Traditional university placement drives suffer from manual resume screening bottlenecks, disjointed student-company communications, administrative grading overhead, and a lack of real-time application tracking.",
    solution:
      "Engineered a production-ready decoupled architecture with a Python/Flask backend and React frontend. Integrated Groq AI (llama-3.3-70b-versatile) for real-time PDF resume ATS parsing, Redis query caching, Celery workers for async background reporting, and 30-day persistent JWT role-based security across Student, Recruiter, and Admin portals.",
    keyFeatures: [
      "Groq AI LLaMA-3.3-70B automated PDF resume parsing with instant ATS compatibility scoring",
      "Multi-role portal for Students (applications & tracking), Corporate Recruiters (drive publishing & screening), and Placement Cell Admins",
      "High-performance caching with Redis (300s/600s TTLs) and asynchronous CSV reports via Celery workers",
      "Persistent 30-day JWT authentication with zero raw SQL vulnerabilities via strict SQLAlchemy ORM",
      "Unified topbar notification drawer and Chart.js placement analytics telemetry",
      "Pre-seeded database with 16+ enterprise corporate profiles (Google, Microsoft, Amazon) for immediate verification"
    ]
  },
  {
    id: "college-discovery-platform",
    title: "UniScope College Discovery Platform",
    tagline: "Full-Stack University Search, Comparison & Review Engine",
    shortDescription:
      "A premium, full-stack college search, discovery, and comparison platform helping students evaluate and compare 67+ top-tier global universities with interactive multi-selection comparison matrices and authentic student reviews.",
    categories: ["Full Stack", "Frontend"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "REST APIs"],
    image: "/assets/images/college-discovery.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/college-discovery-platform",
    liveUrl: "https://college-discovery-platform-mfqh.vercel.app/",
    problem:
      "Prospective students face fragmented information, misleading rankings, and cumbersome multi-tab research when attempting to evaluate and compare global higher education institutions.",
    solution:
      "Architected a unified search and comparison platform using Next.js, Prisma ORM, and PostgreSQL. Engineered an interactive matrix to evaluate tuition fees, placement averages, and student reviews side-by-side with live sorting and filtering.",
    keyFeatures: [
      "67+ comprehensive world-class university profiles with detailed tuition fees, ratings, and placement metrics",
      "Interactive Side-by-Side Comparison Engine comparing up to 3 colleges simultaneously across 10+ criteria",
      "Multi-criteria filtering & instant sorting by Rank, Rating, and Tuition Fee ranges",
      "Authenticated student rating and qualitative review system with pre-seeded alumni accounts",
      "Decoupled architecture with Next.js 16 Edge proxy, Prisma ORM, and PostgreSQL database",
      "Deployed on Vercel with live client frontend and serverless REST API endpoints"
    ]
  },
  {
    id: "testforge",
    title: "TESTFORGE",
    tagline: "No-Code Test Automation Platform",
    shortDescription:
      "No-Code Test Automation Platform that converts visual testing workflows into executable browser tests.",
    categories: ["Full Stack"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Playwright"],
    image: "/assets/images/testforge.svg",
    githubUrl: "https://github.com/vijayapandiant/testforge",
    liveUrl: "https://testforge-demo.vercel.app",
    problem:
      "Quality assurance teams and non-technical stakeholders often spend excessive hours writing repetitive test automation scripts or conducting error-prone manual web regression checks.",
    solution:
      "Engineered an intuitive drag-and-drop visual testing canvas that automatically compiles flowcharts into executable Playwright end-to-end browser test suites with live execution logs.",
    keyFeatures: [
      "Visual workflow builder for user actions, assertions, API checks, and navigation",
      "Automated code transpilation producing deterministic Playwright test suites",
      "Asynchronous worker execution with screenshot step diffs and video recordings",
      "MongoDB test run history, failure analytics, and regression trends"
    ]
  },
  {
    id: "sql-projects",
    title: "SQL Projects Portfolio",
    tagline: "Enterprise Database Architecture & Analytics Suite",
    shortDescription:
      "A comprehensive collection of 4 enterprise-grade relational database systems and data analytics projects featuring 3NF normalization, advanced SQL queries, and interactive dashboards.",
    categories: ["Full Stack", "Database"],
    technologies: ["SQL (PostgreSQL / MySQL)", "Database Normalization (3NF)", "Window Functions", "CTEs", "Chart.js"],
    image: "/assets/images/sql-projects.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/sql-projects",
    liveUrl: "https://covid-19-data-analytics.vercel.app/",
    problem:
      "Enterprise software systems face severe performance degradation, data redundancy anomalies, and inaccurate analytical reporting when relational database schemas lack proper normalization, indexing, and scalable query architecture.",
    solution:
      "Designed and optimized 4 enterprise database architectures (Airline Reservation, Online Retail 3NF, COVID-19 Analytics, Hospital Management) implementing 3NF normalization, CTEs, Window Functions, Stored Procedures, and dynamic Chart.js dashboards.",
    keyFeatures: [
      "✈️ Airline Reservation System: Complex aviation booking, seat configurations, and PNR generation",
      "🛒 Online Retail Sales: Strict 3NF normalized schema, historical price tracking, and sales analytics views",
      "📊 COVID-19 Data Analytics: Advanced SQL Window Functions & CTEs with live responsive web dashboard",
      "🏥 Hospital Management: Enterprise medical records, doctor scheduling, treatment logs, and billing",
      "Comprehensive documentation including complete schema scripts, ERD diagrams, and analytical queries"
    ]
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    tagline: "Smart ATS-Optimized Resume Engine",
    shortDescription:
      "AI-powered resume builder designed to help users create structured and ATS-friendly resumes.",
    categories: ["AI", "Frontend"],
    technologies: ["React", "JavaScript", "Gemini AI", "CSS3"],
    image: "/assets/images/ai-resume-builder.svg",
    githubUrl: "https://github.com/vijayapandiant/ai-resume-builder",
    liveUrl: "https://ai-resume-builder-demo.vercel.app",
    problem:
      "Candidates frequently get filtered out by automated Applicant Tracking Systems (ATS) due to improper formatting, missing role keywords, and poorly phrased impact metrics.",
    solution:
      "Created a modern, interactive resume studio powered by Gemini AI that evaluates resume content against target job descriptions in real-time, rewriting bullet points into quantified impact statements.",
    keyFeatures: [
      "AI bullet point enhancer transforming passive tasks into quantified achievements",
      "Live ATS compatibility scoring engine with keyword gap analysis",
      "Multiple clean, recruiter-approved, parser-friendly modern templates",
      "Instant client-side high-resolution PDF rendering with real-time preview"
    ]
  },
  {
    id: "javascript-mini-projects",
    title: "JavaScript Mini Projects Collection",
    tagline: "13 Interactive Vanilla JS Web Applications",
    shortDescription:
      "A comprehensive collection of 13 interactive web applications built with Vanilla JavaScript, HTML5, and CSS3, featuring weather APIs, precision timers, calculators, and games.",
    categories: ["Frontend"],
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "DOM Manipulation"],
    image: "/assets/images/javascript-mini-projects.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/javascript-mini-projects",
    liveUrl: "https://github.com/VIJAYAPANDIANT/javascript-mini-projects",
    problem:
      "Aspiring developers often struggle with core JavaScript fundamentals like DOM manipulation, asynchronous Fetch APIs, timer state management, and algorithmic game logic due to fragmented, non-practical tutorials.",
    solution:
      "Engineered a curated suite of 13 standalone web applications in Vanilla JavaScript with zero external build tools, featuring live Open-Meteo weather data, precision timers, calculators, and responsive glassmorphism UI.",
    keyFeatures: [
      "13 standalone, single-file runnable web applications covering beginner to advanced concepts",
      "Live Weather App integrating Open-Meteo Geocoding & Weather APIs with async/await",
      "Precision millisecond Stopwatch, Glassmorphism Digital Clock, and Financial Interest Calculator",
      "Interactive algorithmic mini-games including Rock Paper Scissors and Number Guessing Game",
      "Customizable Password Generator, Dice Simulator, and Arithmetic Grid Calculator",
      "Modern responsive design using Flexbox, CSS Grid, and custom glassmorphic styling"
    ]
  }
];
