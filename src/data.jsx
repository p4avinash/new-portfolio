import { nanoid } from "nanoid"
import { FaBrain, FaReact, FaServer, FaTools } from "react-icons/fa"
import docmind from "./assets/docmind.png"
import meetmind from "./assets/meetmind.png"

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
]

export const heroMetrics = [
  { id: nanoid(), label: "Years Experience", value: "5+" },
  { id: nanoid(), label: "Production Components", value: "20+" },
  { id: nanoid(), label: "Onboarding Time Saved", value: "60-70%" },
  { id: nanoid(), label: "Network Overhead Cut", value: "20-30%" },
]

export const skills = [
  {
    id: nanoid(),
    title: "Frontend Engineering",
    icon: <FaReact className='h-12 w-12 text-emerald-400' />,
    tags: ["React.js", "TypeScript", "JavaScript", "Redux", "Zustand", "React Query", "GraphQL", "Tailwind CSS", "Chakra UI"],
    text: "5+ years expertise building high-performance SPAs, complex state management architectures, secure authentication systems, custom component libraries, and optimized GraphQL fetching layers.",
  },
  {
    id: nanoid(),
    title: "AI Engineering & LLMs",
    icon: <FaBrain className='h-12 w-12 text-emerald-400' />,
    tags: ["RAG Architecture", "Prompt Engineering", "Vector DB (Pinecone)", "Jina Embeddings", "Groq LLM", "Semantic Search"],
    text: "Building production RAG pipelines, semantic search over complex document sets, vector embedding generation, and high-performance LLM integration into modern web apps.",
  },
  {
    id: nanoid(),
    title: "Backend & Integrations",
    icon: <FaServer className='h-12 w-12 text-emerald-400' />,
    tags: ["Node.js", "Express.js", "MongoDB", "Nango", "Zapier", "Zenoti API", "RESTful APIs"],
    text: "Designing robust serverless & Express backend services, MongoDB schemas, and 3rd-party webhook/OAuth integrations automated across platforms.",
  },
  {
    id: nanoid(),
    title: "Tooling & Optimization",
    icon: <FaTools className='h-12 w-12 text-emerald-400' />,
    tags: ["Git", "GitHub", "GitHub Actions", "Vite", "CI/CD", "Debouncing", "Lazy Loading", "Cursor", "Claude"],
    text: "Setting up CI/CD automation with GitHub Actions, optimizing web performance, reducing network overhead by 20-30%, debouncing search queries, and leveraging modern AI-assisted developer workflows.",
  },
]

export const experiences = [
  {
    id: nanoid(),
    role: "Frontend Developer",
    company: "Delightree",
    location: "Remote",
    period: "Jun 2024 – Present",
    highlights: [
      "Led end-to-end delivery of business-critical features from design handoff to production deployment with minimal supervision.",
      "Built 3 flagship franchise management modules (Compliance, Audits, and Training Paths) using React with complex state management & nested routing.",
      "Engineered streamlined document workflows, employee training modules, and real-time performance tracking features.",
      "Shipped 2 production-grade 3rd-party integrations (Zenoti via Nango and Zapier), cutting customer onboarding time by 60–70%.",
      "Owned application GraphQL layer, optimizing data fetching and caching to reduce redundant network requests by 20–30%.",
      "Built and maintained 20+ reusable React components, accelerating feature development by 35–40%.",
    ],
    tech: ["React", "TypeScript", "GraphQL", "Redux", "Zustand", "Compliance & Audits", "Nango", "Zapier", "Tailwind CSS"],
  },
  {
    id: nanoid(),
    role: "SDE I",
    company: "Advanced Voice Research Labs",
    location: "Remote",
    period: "May 2022 – May 2024",
    highlights: [
      "Built and deployed production-ready AI chatbot solutions ensuring high availability and reliable performance.",
      "Designed and developed the company documentation platform from scratch, reducing developer onboarding time and support overhead.",
      "Collaborated with cross-functional teams to resolve production issues and improve platform usability.",
    ],
    tech: ["JavaScript", "AI Chatbots", "Developer Docs"],
  },
  {
    id: nanoid(),
    role: "Web Developer",
    company: "Ashriya Infotech Pvt. Ltd.",
    location: "Mohali, Punjab",
    period: "Nov 2020 – Apr 2022",
    highlights: [
      "Reduced search API calls by 60% by implementing query debouncing.",
      "Improved page-load performance through lazy loading and React Query caching.",
      "Built React.js applications from scratch and enhanced existing codebases.",
    ],
    tech: ["React.js", "JavaScript", "React Query", "Debouncing", "Performance Optimization"],
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
    text: "An AI-powered meeting assistant and intelligence application featuring automated transcript analysis, meeting summaries, action item extraction, and smart insights built with React and AI workflows.",
    tags: ["React", "AI Integration", "Transcript Analytics", "Tailwind CSS", "Vite"],
    featured: true,
  },
  {
    id: nanoid(),
    img: docmind,
    url: "https://p4avinash-doc-mind-ai.netlify.app/",
    github: "https://github.com/p4avinash",
    title: "DocMind AI",
    text: "An AI-powered document chat application built using React, Express, MongoDB, Pinecone, Jina Embeddings and Groq LLM. Upload PDFs, generate embeddings, perform semantic search using RAG, and chat with documents in real time.",
    tags: ["React", "RAG Pipeline", "Pinecone Vector DB", "Groq LLM", "MongoDB", "Express"],
    featured: true,
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65e2d852459a380008f6bbde/screenshot_2024-03-02-07-43-29-0000.webp",
    url: "https://p4avinash-movie-recommendation.netlify.app/",
    github: "https://github.com/p4avinash/netflix",
    title: "Netflix Clone & AI Recommender",
    text: "React application cloning Netflix with multi-language support (English, Hindi & Spanish) and an AI movie recommendation assistant powered by OpenAI to suggest films based on user mood.",
    tags: ["React", "OpenAI", "Multi-Language", "Redux", "Tailwind CSS"],
    featured: true,
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65210642306fd30008c1bb1f/screenshot_2023-10-07-07-19-14-0000.png",
    url: "https://p4avinash-comfy-store.netlify.app/",
    github: "https://github.com/p4avinash/comfy-store",
    title: "Comfy E-Commerce Store",
    text: "E-commerce platform featuring user authentication, shopping cart management, protected routes, dark theme mode, checkout workflow, and instant product filters.",
    tags: ["React", "Authentication", "Protected Routes", "Cart State", "Tailwind"],
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/65db23213f139c00081f6bf5/screenshot_2024-02-25-11-24-23-0000.webp",
    url: "https://p4avinash-youtube.netlify.app/",
    github: "https://github.com/p4avinash/youtube",
    title: "YouTube API Client",
    text: "YouTube clone client consuming the official YouTube Data API. Implemented debouncing and memoization for search suggestions to optimize performance and reduce redundant API calls.",
    tags: ["React", "YouTube Data API", "Debouncing", "Memoization", "REST API"],
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/650fe9de6b39eb0008c1a177/screenshot_2023-09-24-07-49-10-0000.png",
    url: "https://p4avinash-unsplash-images.netlify.app/",
    github: "https://github.com/p4avinash/unsplash-images",
    title: "Unsplash Image Explorer",
    text: "Dynamic image gallery powered by Unsplash API. Leverages React Query for client-side caching, minimizing API bandwidth while providing smooth infinite search capabilities.",
    tags: ["React", "React Query", "Unsplash API", "Caching", "Responsive Grid"],
  },
  {
    id: nanoid(),
    img: "https://d33wubrfki0l68.cloudfront.net/651511dedecf990008a9b669/screenshot_2023-09-28-05-41-04-0000.png",
    url: "https://p4avinash-mix-master.netlify.app/",
    github: "https://github.com/p4avinash/mix-master",
    title: "MixMaster Cocktails",
    text: "Cocktail directory app fetching drink recipes and mixology instructions with detailed single-item views and search filters.",
    tags: ["React", "Cocktail DB API", "React Router", "CSS Modules"],
  },
]
