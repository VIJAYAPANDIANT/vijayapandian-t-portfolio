/**
 * Featured projects with categories, detailed problem/solution descriptions,
 * tech stacks, key features, and live/code links for the modal.
 */
export const projectCategories = ["All", "Full Stack", "AI", "Frontend"];

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
