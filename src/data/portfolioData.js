export const personalInfo = {
  name: "Pawan Kumar",
  title: "AI Automation & Workflow Specialist",
  subTitle: "EdTech Content & Strategy Professional | GATE 99.71%ile Engineer",
  email: "",
  phone: "",
  location: "India (Open to Remote / Hybrid Roles)",
  linkedIn: "https://www.linkedin.com/in/pawan-kumar-729565b9",
  summary: `Mechanical Engineering graduate and GATE ranker (99.71 Percentile) with over 8 years of blended experience spanning academic content leadership, operations management, and AI-driven automation. Former Assistant Manager at NTPC Ltd with hands-on experience in manpower management and system operations, and Associate Manager at PWOnlyIAS (Physics Wallah) overseeing academic workflows and quality. Independently design and deploy n8n-based automation systems, LLM-powered workflows, and API-driven pipelines to streamline content delivery and knowledge operations. Currently working as a freelance Automation Engineer, delivering end-to-end automation solutions for content, data processing, and business workflows.`,
  availability: "Available for Projects & Full-Time AI Engineering Roles",
  stats: [
    { label: "GATE Percentile", value: "99.71%", highlight: "Mechanical Engineering" },
    { label: "Blended Experience", value: "8+ Yrs", highlight: "Ops, EdTech & AI" },
    { label: "Automation Reliability", value: "99.9%", highlight: "Retries & Error Routing" },
    { label: "Live EdTech Portal", value: "10k+", highlight: "Aspirant Reach" }
  ]
};

export const workflowSimulation = {
  name: "Autonomous AI Learning & Publishing Pipeline",
  description: "Live architecture demo of the multi-step n8n workflow orchestrating Telegram Bot API, OpenAI GPT-4, Google Sheets RAG, and automated error recovery.",
  nodes: [
    {
      id: "node-1",
      step: 1,
      title: "Schedule / Webhook Trigger",
      type: "Trigger",
      badge: "n8n Cron & Webhook",
      icon: "Clock",
      summary: "Fires every 4 hours or on-demand via webhook from admin dashboard.",
      details: {
        method: "CRON schedule ('0 */4 * * *')",
        payload: {
          triggerSource: "Scheduled_Cron_Job",
          batchId: "batch_2026_09_001",
          targetChannel: "@EducateUrSelfUPSC",
          timestamp: "2026-09-19T13:20:00Z"
        }
      }
    },
    {
      id: "node-2",
      step: 2,
      title: "Google Sheets RAG Fetch",
      type: "Data Layer",
      badge: "Google Sheets API / Vector",
      icon: "Database",
      summary: "Queries curated curriculum database, retrieves unused questions, and checks previous test history.",
      details: {
        operation: "Read Untracked Rows + Metadata Filter",
        payload: {
          sheetId: "1pX_UPSC_Syllabus_Bank",
          subjectFilter: "Polity & Governance / Modern History",
          unprocessedRecordsFound: 14,
          retrievalLatency: "180ms"
        }
      }
    },
    {
      id: "node-3",
      step: 3,
      title: "LLM Content Generation",
      type: "AI Engine",
      badge: "OpenAI GPT-4 / Qwen Local",
      icon: "Cpu",
      summary: "Generates bilingual (English/Hindi) MCQs, explanatory notes, and elimination strategies with strict JSON schema.",
      details: {
        model: "gpt-4o / Qwen-2.5-7B (Self-hosted)",
        promptStrategy: "Few-shot Chain-of-Thought with UPSC difficulty calibration",
        payload: {
          questionEn: "Consider the following statements regarding the Writ Jurisdiction of High Courts...",
          questionHi: "उच्च न्यायालयों के रिट क्षेत्राधिकार के संबंध में निम्नलिखित कथनों पर विचार कीजिए...",
          options: ["1 only", "2 and 3 only", "1 and 3 only", "All of the above"],
          correctOption: "3",
          detailedExplanation: "High Court writ jurisdiction under Article 226 is wider than Supreme Court under Article 32..."
        }
      }
    },
    {
      id: "node-4",
      step: 4,
      title: "Validation & Error Handling",
      type: "Logic & Routing",
      badge: "Conditional Check & Alert",
      icon: "ShieldAlert",
      summary: "Validates JSON structure, verifies answer key integrity, and handles auto-retries with Telegram alert if failure occurs.",
      details: {
        status: "Passed - Schema 100% Valid",
        checks: ["JSON syntax valid", "All 4 options present", "Bilingual text alignment verified"],
        retryPolicy: "Exponential backoff (3 attempts, max 60s delay)"
      }
    },
    {
      id: "node-5",
      step: 5,
      title: "Telegram Bot & Webhook Dispatch",
      type: "Destination",
      badge: "Telegram Bot API & Webhook",
      icon: "Send",
      summary: "Dispatches native interactive poll to Telegram channel and updates web portal database.",
      details: {
        destinations: ["Telegram Bot API /sendPoll", "Vercel Webhook /api/content/sync", "Google Sheets status=PUBLISHED"],
        response: {
          telegramMessageId: 94821,
          deliveredToSubscribers: 12450,
          sheetSyncStatus: "SUCCESS",
          executionTimeTotal: "2.84s"
        }
      }
    }
  ]
};

export const projects = [
  {
    id: "educate-urself",
    title: "Educate UrSelf – Autonomous AI-Powered Learning System",
    subtitle: "AI-Driven Automated Telegram Education Ecosystem",
    category: "AI Automation",
    badge: "Featured Automation",
    role: "Creator & Automation Architect",
    summary: "An autonomous educational delivery engine operating on Telegram using n8n, OpenAI APIs, and Telegram Bot API. Publishes high-yield MCQs, summaries, and bilingual UPSC study materials with zero manual daily effort.",
    highlights: [
      "Designed and deployed an AI-driven Telegram education channel using n8n, OpenAI APIs, and Telegram Bot API",
      "Built multi-step workflows for automatic generation and publishing of MCQs, summaries, and topic-wise content",
      "Implemented conditional routing, retries, alerts, and error-handling mechanisms for 99.9% uptime",
      "Integrated Google Sheets RAG Database and APIs for content tracking, spaced repetition, and analytics",
      "Created a scalable, low-maintenance architecture enabling continuous content delivery with minimal human overhead"
    ],
    techStack: ["n8n", "OpenAI GPT-4", "Telegram Bot API", "Google Sheets API", "Webhooks", "JSON"],
    metrics: [
      { label: "Content Automation", value: "100% Hands-free" },
      { label: "Workflow Steps", value: "12+ Nodes" },
      { label: "Reliability", value: "Zero Unhandled Errors" }
    ],
    demoUrl: null,
    githubUrl: null,
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "exam-prep-portal",
    title: "UPSC Exam Prep Portal – Full-Stack & n8n Sync",
    subtitle: "React, Serverless APIs, MongoDB, n8n Automation",
    category: "Full-Stack + Automation",
    badge: "Live Production App",
    role: "Full-Stack Developer & Automation Engineer",
    summary: "A production-grade educational platform built for civil services aspirants featuring daily notes, bilingual interactive quizzes, and an AI-based study mentor with automated Google Sheets-to-web sync.",
    highlights: [
      "Built a full-stack educational platform for UPSC aspirants featuring daily notes, bilingual interactive quizzes, and an AI-based study mentor",
      "Developed a serverless backend connecting Vercel Functions to MongoDB for real-time analytics and dynamic content retrieval",
      "Engineered a custom n8n automation pipeline, allowing administrators to push daily website updates directly from Google Sheets via webhooks",
      "Implemented interactive quiz engines with real-time scoring, explanation modals, and category filtering"
    ],
    techStack: ["React", "Vercel Serverless", "MongoDB", "n8n Automation", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "Platform Status", value: "Live on Vercel" },
      { label: "Backend", value: "Serverless + Mongo" },
      { label: "Content Pipeline", value: "Google Sheets Webhook" }
    ],
    demoUrl: "https://educateurselfias.vercel.app/",
    githubUrl: null,
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: "local-llm-deployment",
    title: "Local LLM Deployment & Testbed (Qwen + Docker)",
    subtitle: "Self-Hosted Private AI Inference & Open WebUI Setup",
    category: "LLMs & DevOps",
    badge: "Independent AI Project",
    role: "AI Systems Engineer",
    summary: "Self-hosted deployment of Qwen LLM using Docker and Open WebUI for prompt structuring, privacy-centric inference, and n8n workflow integration experiments.",
    highlights: [
      "Pulled and deployed the Qwen LLM locally using Docker for cost-free, private, self-hosted inference",
      "Configured Open WebUI as a responsive front-end interface for rapid prompt testing and output evaluation",
      "Experimented with prompt structuring, context handling, and output refinement for educational workflows",
      "Explored feasibility of integrating the local model with n8n-based automation pipelines via local API endpoints"
    ],
    techStack: ["Docker", "Qwen LLM", "Open WebUI", "Python", "Local API", "n8n"],
    metrics: [
      { label: "Deployment", value: "Docker Containerized" },
      { label: "Privacy", value: "100% Local Inference" },
      { label: "API Compatibility", value: "OpenAI-compatible" }
    ],
    demoUrl: null,
    githubUrl: null,
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: "client-automation-pipelines",
    title: "Production Business Automation & AI Agents",
    subtitle: "Client Solutions via The Cobalt Partners (Upwork)",
    category: "AI Automation",
    badge: "Client Work",
    role: "Freelance AI Automation Engineer",
    summary: "Architecting and implementing enterprise-grade automation workflows, LLM agents, and cross-platform integrations for international business clients.",
    highlights: [
      "Design and develop production-grade automation workflows and AI agents using n8n for diverse client use cases",
      "Build API-driven pipelines integrating LLMs, heterogeneous data sources, and external SaaS tools for content and business automation",
      "Implement robust error handling, structured logging, automatic retries, and comprehensive documentation for workflow maintainability"
    ],
    techStack: ["n8n", "REST APIs", "Webhooks", "OpenAI", "Zapier/Make", "JSON/Data Parsing"],
    metrics: [
      { label: "Deliverables", value: "Production Workflows" },
      { label: "Platform", value: "Upwork Verified" },
      { label: "Focus", value: "AI Agents & Pipelines" }
    ],
    demoUrl: null,
    githubUrl: null,
    color: "from-amber-600 to-orange-600"
  }
];

export const skillCategories = [
  {
    title: "Workflow Automation & Orchestration",
    icon: "Workflow",
    description: "Designing end-to-end resilient, event-driven pipelines",
    skills: [
      { name: "n8n Workflow Automation", level: 95, tag: "Expert", desc: "Multi-step, conditional routing, error handling, sub-workflows" },
      { name: "API Integration & Webhooks", level: 92, tag: "Advanced", desc: "REST APIs, webhook triggers, OAuth, API authentication" },
      { name: "JSON & Data Transformation", level: 90, tag: "Advanced", desc: "Complex payload parsing, mapping, schema formatting" },
      { name: "Workflow Optimization & Debugging", level: 92, tag: "Advanced", desc: "Execution log tracing, bottleneck removal, self-healing retries" }
    ]
  },
  {
    title: "AI & Large Language Models",
    icon: "Brain",
    description: "Harnessing foundation models for content and reasoning",
    skills: [
      { name: "LLM-Based Systems & Agents", level: 90, tag: "Advanced", desc: "Prompt engineering, function calling, structured outputs" },
      { name: "AI Content Orchestration", level: 95, tag: "Specialist", desc: "Automated MCQ generation, summaries, adaptive learning modules" },
      { name: "RAG & Vector Concepts", level: 85, tag: "Proficient", desc: "Knowledge retrieval, context augmentation, Google Sheets RAG" },
      { name: "Local LLM Deployment (Qwen)", level: 85, tag: "Hands-on", desc: "Dockerized inference, Open WebUI, self-hosted endpoints" }
    ]
  },
  {
    title: "Development & Systems",
    icon: "Code2",
    description: "Solid technical foundations for web and scripting",
    skills: [
      { name: "Python (Automation & Scripting)", level: 88, tag: "Advanced", desc: "Data processing, script triggers, API clients" },
      { name: "React & Web Development", level: 82, tag: "Proficient", desc: "Full-stack UI, responsive interfaces, client routing" },
      { name: "Serverless APIs & MongoDB", level: 80, tag: "Proficient", desc: "Vercel Serverless Functions, NoSQL database modeling" },
      { name: "Docker & Containerization", level: 80, tag: "Hands-on", desc: "Container lifecycle, local inference setups, volume management" }
    ]
  },
  {
    title: "Operations & Leadership",
    icon: "Briefcase",
    description: "Engineering rigor, team coordination, and domain strategy",
    skills: [
      { name: "Academic Content Leadership", level: 95, tag: "Expert", desc: "UPSC Prelims/Mains syllabus mastery, quality control" },
      { name: "Operations & Manpower Management", level: 92, tag: "Former NTPC AM", desc: "High-pressure decision making, resource allocation" },
      { name: "Bilingual Delivery (Hindi & English)", level: 98, tag: "Native", desc: "Bilingual content generation, pedagogical research" },
      { name: "Problem Solving & Analytical Rigor", level: 96, tag: "GATE 99.71%ile", desc: "Engineering mindset, system optimization" }
    ]
  }
];

export const experience = [
  {
    role: "Freelance AI Automation Engineer",
    company: "The Cobalt Partners (via Upwork)",
    period: "Present",
    badge: "Current Engagement",
    type: "Freelance / Remote",
    highlights: [
      "Design and develop production-grade automation workflows and autonomous AI agents using n8n for diverse international clients.",
      "Build API-driven pipelines integrating LLMs, live data sources, Google Workspace, and external CRM/productivity tools.",
      "Implement robust error handling, monitoring, structured logging, retries, and technical documentation ensuring high reliability."
    ]
  },
  {
    role: "Associate Manager",
    company: "PWOnlyIAS (Physics Wallah)",
    period: "Past",
    badge: "EdTech Leadership",
    type: "Full-time",
    highlights: [
      "Led end-to-end development and quality review of UPSC Prelims & Mains content (in-depth articles, specialized notes, and mock tests).",
      "Conducted extensive academic research to create bilingual (English/Hindi) learning modules, test series, and model answers.",
      "Streamlined academic workflow pipelines, improving turnaround time and content consistency across editorial teams."
    ]
  },
  {
    role: "Assistant Manager",
    company: "NTPC Ltd",
    period: "Past",
    badge: "Maharatna PSU",
    type: "Full-time",
    highlights: [
      "Managed large-scale technical and administrative operations in India's leading power generation PSU.",
      "Oversaw manpower allocation, shift management, and performance monitoring in high-stakes operational environments.",
      "Honed rigorous analytical decision-making, safety protocol execution, and team coordination capabilities."
    ]
  },
  {
    role: "Senior Content Developer",
    company: "Vajiram & Ravi | KSG | ToppersNotes | KalamIAS",
    period: "Past",
    badge: "Premier EdTech",
    type: "Contract / Specialist",
    highlights: [
      "Authored high-yield UPSC-focused articles, practice sets, and detailed analytical explanatory notes.",
      "Designed model question papers and strengthened standard evaluation frameworks for competitive examinations."
    ]
  },
  {
    role: "Educator (History, Geography, Polity)",
    company: "Unacademy & Chahal Academy",
    period: "Past",
    badge: "Pedagogy",
    type: "Educator",
    highlights: [
      "Delivered bilingual (Hindi & English) live classes in History, Geography, Indian Polity, and Current Affairs.",
      "Applied structured teaching methodologies and interactive visual frameworks to significantly boost learner engagement and retention."
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Mechanical Engineering",
    institution: "SASTRA University, Thanjavur",
    badge: "Engineering Degree",
    details: "Strong foundation in engineering mathematics, systems modeling, thermodynamics, and analytical problem solving."
  },
  {
    degree: "GATE Ranker – 99.71 Percentile",
    institution: "Graduate Aptitude Test in Engineering (Mechanical)",
    badge: "National 99.71%ile",
    details: "Achieved top 0.29% nationwide in one of India's most rigorous engineering competitive assessments."
  },
  {
    degree: "M.E. in Mechanical Engineering (Pursued briefly)",
    institution: "Indian Institute of Science (IISc) Bangalore",
    badge: "Premier Research Institute",
    details: "Admitted to India's top scientific institution following exceptional GATE performance before transitioning to leadership roles."
  }
];
