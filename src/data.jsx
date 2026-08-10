import { nanoid } from "nanoid"
import { FaCode, FaDatabase, FaServer, FaPlug, FaTools, FaBrain } from "react-icons/fa"
import docmind from "./assets/docmind.png"
import meetmind from "./assets/meetmind.png"

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#impact", text: "impact" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "work" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
]

export const engineeringImpact = [
  {
    id: nanoid(),
    value: "60–70%",
    metric: "Customer Onboarding Time Cut",
    description: "Built & automated production 3rd-party integrations (Zenoti via Nango & Zapier).",
  },
  {
    id: nanoid(),
    value: "20–30%",
    metric: "Redundant Network Requests Cut",
    description: "Architected application GraphQL layer with optimized client-side caching.",
  },
  {
    id: nanoid(),
    value: "35–40%",
    metric: "Feature Development Speedup",
    description: "Designed & maintained 20+ reusable production React component system.",
  },
  {
    id: nanoid(),
    value: "20+",
    metric: "Reusable Production Components",
    description: "Enterprise UI component library supporting core business modules.",
  },
]


export const skillCategories = [
  {
    id: nanoid(),
    title: "Frontend Engineering",
    icon: <FaCode className='h-6 w-6 text-violet-400' />,
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux", "Zustand", "HTML5", "CSS3 / SCSS", "Tailwind CSS", "Chakra UI"],
    summary: "5+ years expertise building high-performance SPAs, complex state architectures, custom component design systems, and responsive layouts.",
  },
  {
    id: nanoid(),
    title: "Data & API Layer",
    icon: <FaDatabase className='h-6 w-6 text-violet-400' />,
    skills: ["GraphQL", "React Query", "RESTful APIs", "Apollo Client", "Client-Side Caching", "Data Normalization"],
    summary: "Optimizing data fetching strategies, client-side caching layers, GraphQL schema consumption, and payload size reduction.",
  },
  {
    id: nanoid(),
    title: "Backend & Storage",
    icon: <FaServer className='h-6 w-6 text-violet-400' />,
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "3rd-Party Integrations", "Backend Utilities"],
    summary: "Designing scalable backend services with Node.js and Express, building API routes, MongoDB schemas, third-party integrations, and reusable backend utilities.",
  },

  {
    id: nanoid(),
    title: "Integrations & Automation",
    icon: <FaPlug className='h-6 w-6 text-violet-400' />,
    skills: ["Zenoti API", "Nango Unified API", "Zapier Webhooks", "OAuth 2.0 Workflows", "3rd-Party SDKs"],
    summary: "Engineering production OAuth workflows and webhooks connecting enterprise SaaS tools.",
  },
  {
    id: nanoid(),
    title: "Tooling & Performance",
    icon: <FaTools className='h-6 w-6 text-violet-400' />,
    skills: ["Git", "GitHub", "GitHub Actions CI/CD", "Vite", "Zeplin", "Cursor", "Claude", "Debouncing", "Lazy Loading"],
    summary: "Automating CI/CD pipelines, Core Web Vitals optimization, bundle splitting, and AI-assisted developer workflows.",
  },
  {
    id: nanoid(),
    title: "AI & Modern Engineering",
    icon: <FaBrain className='h-6 w-6 text-violet-400' />,
    skills: ["RAG Architecture", "LLM Integration", "Pinecone Vector DB", "Groq LLM", "Prompt Engineering", "Semantic Search", "Jina Embeddings", "Agentic Workflows"],
    summary: "Building production RAG applications, vector embedding search pipelines, and seamless LLM integrations into modern web products.",
  },
]

export const experiences = [
  {
    id: nanoid(),
    role: "Frontend Developer",
    company: "Delightree",
    location: "Remote",
    period: "Jun 2024 – Present",
    type: "Full-Time",
    signals: ["Ownership", "Architecture", "Performance", "Integrations", "Access Control (RBAC)", "UI Systems"],
    highlights: [
      "Led end-to-end delivery of business-critical features from design handoff to production deployment with minimal supervision.",
      "Built 3 flagship franchise management modules (Compliance, Audits, and Training Paths) using React with complex state management & nested routing.",
      "Engineered role-based access control (RBAC) architecture supporting 6 authentication roles, permission rules, protected routes, and dynamic UI rendering.",
      "Shipped 2 production-grade 3rd-party integrations (Zenoti via Nango and Zapier), cutting customer onboarding time by 60–70%.",
      "Owned application GraphQL layer, optimizing data fetching and caching to reduce redundant network requests by 20–30%.",
      "Built and maintained 20+ reusable React components, accelerating feature development by 35–40%.",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Redux", "Zustand", "RBAC", "Nango", "Zapier", "Tailwind CSS"],
  },
  {
    id: nanoid(),
    role: "SDE I",
    company: "Advanced Voice Research Labs",
    location: "Remote",
    period: "May 2022 – May 2024",
    type: "Full-Time",
    signals: ["AI Integration", "Cloud Deployment", "Documentation Platform", "Full Lifecycle"],
    highlights: [
      "Built and deployed production-ready AI chatbot solutions ensuring high availability and reliable performance on 24x7 cloud-hosted virtual machines.",
      "Designed and developed the company documentation platform from scratch, reducing developer onboarding time and support overhead.",
      "Collaborated with cross-functional teams to resolve production issues, improve platform usability, and deliver customer-facing features.",
    ],
    tech: ["JavaScript", "React", "AI Chatbots", "Cloud VMs", "Developer Docs Platform"],
  },
  {
    id: nanoid(),
    role: "Web Developer",
    company: "Ashriya Infotech Pvt. Ltd.",
    location: "Mohali, Punjab",
    period: "Nov 2020 – Apr 2022",
    type: "Full-Time",
    signals: ["Performance Optimization", "Data Caching", "Front-to-End Build"],
    highlights: [
      "Reduced search API calls by 60% by implementing query debouncing and request optimization.",
      "Improved page-load performance through lazy loading and React Query caching.",
      "Built React.js applications from scratch and enhanced existing legacy codebases.",
    ],
    tech: ["React.js", "JavaScript", "React Query", "Query Debouncing", "Lazy Loading"],
  },
]

export const education = {
  degree: "B.E. in Computer Science Engineering",
  institution: "Sant Longowal Institute of Engineering and Technology (SLIET)",
  location: "Sangrur, Punjab",
  graduation: "Graduated May 2020",
}

export const certifications = [
  {
    id: nanoid(),
    title: "HackerRank Problem Solving",
    detail: "5 Stars rating in Problem Solving",
  },
  {
    id: nanoid(),
    title: "Udemy Certified",
    detail: "Complete Web Developer Certification",
  },
]

export const projects = [
  {
    id: nanoid(),
    img: meetmind,
    url: "https://p4avinash-meet-mind-ai.netlify.app/dashboard",
    github: "https://github.com/p4avinash/meet-mind-ai",
    title: "MeetMind AI",
    subtitle: "AI Meeting Assistant & Transcript Intelligence",
    text: "Production AI meeting intelligence application featuring automated transcript analysis, meeting summaries, action item extraction, and smart contextual insights built with React and modern AI workflows.",
    tags: ["React", "AI Workflows", "Transcript Analytics", "Tailwind CSS", "Vite"],
    highlights: [
      "Automated meeting summary generation & key action item extraction",
      "Real-time transcript processing & speaker insights",
      "Modern dashboard interface with clean data visualization",
    ],
    featured: true,
  },
  {
    id: nanoid(),
    img: docmind,
    url: "https://p4avinash-doc-mind-ai.netlify.app/",
    github: "https://github.com/p4avinash",
    title: "DocMind AI",
    subtitle: "RAG Document Intelligence & Semantic Search",
    text: "Production Retrieval-Augmented Generation (RAG) document chat platform built with React, Express, MongoDB, Pinecone Vector DB, Jina Embeddings, and Groq LLM. Upload documents, generate vector embeddings, and perform instant semantic chat.",
    tags: ["React", "RAG Pipeline", "Pinecone Vector DB", "Groq LLM", "MongoDB", "Express"],
    highlights: [
      "RAG architecture with vector embedding generation via Jina",
      "Sub-second document queries powered by Groq LLM & Pinecone",
      "Multi-document upload & contextual chat interface",
    ],
    featured: true,
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65e2d852459a380008f6bbde/screenshot_2024-03-02-07-43-29-0000.webp",
    url: "https://p4avinash-movie-recommendation.netlify.app/",
    github: "https://github.com/p4avinash/netflix",
    title: "Netflix & AI Recommender",
    subtitle: "Multi-Language Media Platform & OpenAI Engine",
    text: "React application cloning Netflix with multi-language support (English, Hindi & Spanish) and an AI movie recommendation assistant powered by OpenAI API to suggest tailored media based on user mood and preferences.",
    tags: ["React", "OpenAI API", "Multi-Language i18n", "Redux Toolkit", "Tailwind CSS"],
    highlights: [
      "OpenAI integration for mood-based film suggestions",
      "Multi-language dynamic localization (English, Hindi, Spanish)",
      "Redux store for global user state & movie catalog management",
    ],
    featured: true,
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65210642306fd30008c1bb1f/screenshot_2023-10-07-07-19-14-0000.png",
    url: "https://p4avinash-comfy-store.netlify.app/",
    github: "https://github.com/p4avinash/comfy-store",
    title: "Comfy E-Commerce Platform",
    subtitle: "Enterprise Shopping & Auth Flow",
    text: "E-commerce platform featuring user authentication, shopping cart state management, protected checkout routes, dark theme mode, order tracking, and instant multi-criteria product filtering.",
    tags: ["React", "Authentication", "Protected Routes", "Cart State", "Tailwind"],
    highlights: [
      "Secure authentication & protected route guards",
      "Persistent cart state & checkout summary workflow",
    ],
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65db23213f139c00081f6bf5/screenshot_2024-02-25-11-24-23-0000.webp",
    url: "https://p4avinash-youtube.netlify.app/",
    github: "https://github.com/p4avinash/youtube",
    title: "YouTube Data API Client",
    subtitle: "Debounced API Search & Performance Optimization",
    text: "High-performance video streaming client consuming the official YouTube Data API. Implemented query debouncing and memoization for search suggestions to optimize response times and eliminate redundant API calls.",
    tags: ["React", "YouTube Data API", "Query Debouncing", "Memoization", "REST API"],
    highlights: [
      "Implemented query debouncing to reduce unnecessary API calls",
      "Memoized search suggestions for instant client-side autocomplete",
    ],
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/650fe9de6b39eb0008c1a177/screenshot_2023-09-24-07-49-10-0000.png",
    url: "https://p4avinash-unsplash-images.netlify.app/",
    github: "https://github.com/p4avinash/unsplash-images",
    title: "Unsplash Image Explorer",
    subtitle: "React Query Client-Side Caching",
    text: "Dynamic media gallery application consuming the Unsplash REST API. Leverages React Query for automatic client-side caching, background refetching, and zero bandwidth waste.",
    tags: ["React", "React Query", "Unsplash API", "Client Caching", "Responsive Grid"],
    highlights: [
      "React Query caching for zero-redundancy network requests",
      "Infinite scroll search gallery with responsive grid layout",
    ],
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/651511dedecf990008a9b669/screenshot_2023-09-28-05-41-04-0000.png",
    url: "https://p4avinash-mix-master.netlify.app/",
    github: "https://github.com/p4avinash/mix-master",
    title: "MixMaster Directory",
    subtitle: "Dynamic Single-Item Views & API Filtering",
    text: "Recipe directory web application fetching mixology data with dynamic single-item routing, search filtering, and clean modular component layout.",
    tags: ["React", "Cocktail DB API", "React Router", "CSS Modules"],
    highlights: [
      "Nested React Router navigation for detailed recipe views",
      "Instant search filtering & custom loading states",
    ],
  },
]
