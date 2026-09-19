/**
 * Featured projects with categories, detailed problem/solution descriptions,
 * tech stacks, key features, and live/code links for the modal.
 */
export const projectCategories = ["All", "Full Stack", "AI", "Frontend", "Database"];

export const projectsData = [
  {
    id: "ai-test-case-agent",
    title: "TestGen AI - Test Generation Agent",
    tagline: "Autonomous AI Multi-Framework Test Suite Generator",
    shortDescription:
      "An autonomous AI test engineering agent powered by Google Gemini API that analyzes source code, API schemas, and functional specifications to instantly generate copy-paste ready unit, integration, edge-case, and vulnerability test suites across Jest, PyTest, Mocha, Playwright, and Cypress.",
    categories: ["AI", "Full Stack"],
    technologies: ["Google Gemini AI", "Next.js 15", "React 19", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Vercel"],
    image: "/assets/images/ai-test-case-agent.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/ai-test-case-generation-agent",
    liveUrl: "https://ai-test-case-generation-agent.vercel.app",
    problem:
      "Software engineering teams spend up to 40% of sprint capacity manually writing boilerplate assertions, edge cases, and vulnerability mock tests, leading to brittle test suites and delayed release cycles.",
    solution:
      "Engineered an autonomous AI testing agent utilizing Google Gemini 1.5 with progressive thinking sequencers. Automatically structures comprehensive test suites including unit assertions, boundary checks, SQL injection/XSS safety tests, and performance benchmarks with single-click PDF/JSON export.",
    keyFeatures: [
      "Google Gemini API (gemini-1.5-flash) automated reasoning engine producing multi-framework test suites (Jest, PyTest, Mocha, Playwright)",
      "Comprehensive Test Matrix generation: Unit tests, Integration pipelines, Vulnerability & Security checks, and Edge cases",
      "Progressive 0–99% real-time AI thinking sequencer with instant syntax-highlighted code output cards",
      "One-click export capabilities for PDF reports, structured JSON test suites, and direct clipboard copying",
      "Pre-built sample prompt templates for fast test suite bootstrapping across REST APIs and frontend components",
      "Full-stack decoupled architecture deployed on Vercel with Next.js 15 App Router and Express API Gateway"
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
    id: "online-examination-system",
    title: "Online Examination System with AI Proctoring",
    tagline: "Full-Stack Remote Assessment & AI Proctoring Platform",
    shortDescription:
      "A cutting-edge, full-stack examination platform with integrated AI proctoring, multi-language real-time code compiler, RabbitMQ concurrent submission queues, and automated anti-cheat violation tracking.",
    categories: ["Full Stack", "AI"],
    technologies: ["Spring Boot", "React", "Docker", "RabbitMQ", "Redis", "MySQL", "WebSocket", "Vite"],
    image: "/assets/images/online-examination.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/online-examination-system",
    liveUrl: "https://online-examination-system-m6sf.vercel.app/",
    problem:
      "Remote academic examinations face widespread cheating risks such as tab switching, unauthorized copy-pasting, and systemic backend latency during simultaneous candidate submissions.",
    solution:
      "Built an enterprise-grade testing architecture using Spring Boot microservices, RabbitMQ for high-throughput asynchronous submission queues, Redis for real-time leaderboards, and an AI proctoring restriction suite with WebSocket live alerts.",
    keyFeatures: [
      "AI Proctoring Suite with point-based violation tracking, tab switching detection, and auto-termination",
      "In-browser Multi-Language Code Compiler supporting JavaScript, Python, Java, C, and C++",
      "High-throughput asynchronous submission queues powered by RabbitMQ to prevent concurrency spikes",
      "Redis caching for instant real-time global leaderboard and score computation",
      "Administrator monitoring dashboard with WebSocket alerts and full CRUD exam content authoring",
      "Containerized deployment using Docker Compose, Nginx reverse proxy, and live Vercel frontend"
    ]
  },
  {
    id: "smart-waste-mapping",
    title: "AI-Powered Smart Waste Mapping Platform",
    tagline: "Geospatial AI Waste Prediction & Municipal Route Optimization Engine",
    shortDescription:
      "A community-driven, gamified full-stack platform combining React, Node.js, MongoDB GeoJSON indexing, and a Python Flask AI microservice (Random Forest) for real-time waste hotspot mapping, risk prediction, and truck route optimization.",
    categories: ["AI", "Full Stack"],
    technologies: ["React", "Node.js", "Express", "MongoDB (GeoJSON)", "Python (Flask)", "Scikit-Learn", "Socket.io", "Leaflet"],
    image: "/assets/images/smart-waste-mapping.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/ai-powered-smart-waste-mapping-platform",
    liveUrl: "https://github.com/VIJAYAPANDIANT/ai-powered-smart-waste-mapping-platform",
    problem:
      "Urban municipalities face uncoordinated waste collection, severe vehicle routing inefficiencies resulting in excess fuel consumption, and delayed responses to hazardous illegal dumping.",
    solution:
      "Engineered an interactive geospatial mapping client with React Leaflet and MongoDB 2dsphere indexing, backed by a Python AI microservice predicting waste tonnage via Random Forest and optimizing truck routes via shortest-path algorithms.",
    keyFeatures: [
      "Geospatial Waste Mapping with React Leaflet & MongoDB 2dsphere indexing for real-time GPS reports",
      "Machine Learning Waste Volume & Risk Predictor using Scikit-Learn Random Forest Regressor",
      "Shortest-Path Municipal Route Solver reducing vehicle transit distance and carbon emissions",
      "Automated Priority Classification tagging hazardous or pathway-blocking incidents",
      "Gamified Eco-Points Marketplace with Socket.io live alerts, community cleanup events, and leaderboards",
      "Multi-tier decoupled architecture: React frontend, Node/Express backend, and Python Flask AI microservice"
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
    githubUrl: "https://github.com/VIJAYAPANDIANT/sql-internship-portfolio",
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
      "An intelligent, ATS-optimized resume builder powered by Google Gemini AI that transforms candidate draft experiences into high-impact, quantified achievement bullet points. Features real-time keyword gap analysis against target job descriptions, multiple recruiter-vetted modern templates, and instant client-side high-resolution PDF export.",
    categories: ["AI", "Frontend"],
    technologies: ["React", "JavaScript", "Gemini AI", "CSS3", "jspdf", "HTML5"],
    image: "/assets/images/ai-resume-builder.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/ai-resume-builder",
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
    id: "premium-weather-dashboard",
    title: "Atmosphere Weather Dashboard",
    tagline: "Glassmorphic Weather Analytics & Forecast Station",
    shortDescription:
      "A sleek, responsive single-page weather analytics dashboard engineered with Vanilla JavaScript, HTML5, and CSS3. Features real-time Open-Meteo API integrations, dynamic weather atmospheric gradient theming, 24-hour hourly timelines, 7-day daily trends, and unit conversion.",
    categories: ["Frontend"],
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3 (Glassmorphism)", "Open-Meteo REST APIs", "DOM Manipulation"],
    image: "/assets/images/weather-dashboard.svg",
    githubUrl: "https://github.com/VIJAYAPANDIANT/premium-weather-dashboard",
    liveUrl: "https://github.com/VIJAYAPANDIANT/premium-weather-dashboard",
    problem:
      "Most weather web applications are bloated with ads, require paid API keys with restrictive rate limits, and lack modern, responsive glassmorphism visual design systems.",
    solution:
      "Built a zero-dependency, ultra-fast weather station using Vanilla JavaScript and Open-Meteo APIs. Implemented real-time geocoding, 24-hour scrollable hourly predictions, 7-day forecasting, dynamic atmospheric ambient gradient shifting, and instant °C/°F unit toggling.",
    keyFeatures: [
      "Live atmospheric data, 24-hour scrollable timeline, and 7-day forecast via free Open-Meteo REST APIs",
      "Dynamic Weather Theming adapting background gradients to current sky conditions (Clear, Rain, Snow, Thunderstorm)",
      "Smart City & Regional Geocoding filter with administrative suffix matching (e.g. 'Miami, FL', 'Chennai, IN')",
      "Instant Metric/Imperial unit switching (°C/km/h vs °F/mph) with synchronized DOM state",
      "Persistent localStorage search history with rapid city recall and deletion controls",
      "Pure Vanilla Web Technologies (zero external JS/CSS dependencies) with frosty backdrop-filter glassmorphism"
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
