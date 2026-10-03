import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { personalInfo, projects, experience, education, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = `
PAWAN KUMAR
AI Automation & Workflow Specialist | EdTech Content & Strategy Professional
${personalInfo.email ? `Email: ${personalInfo.email} | ` : ''}Location: ${personalInfo.location}
LinkedIn: ${personalInfo.linkedIn} | GitHub: ${personalInfo.github}
n8n Creator: ${personalInfo.n8nCreator}

PROFESSIONAL SUMMARY
${personalInfo.summary}

CORE SKILLS
- n8n Workflow Automation (multi-step, conditional, event-driven, error handling)
- Agentic AI & Multi-Agent Systems (autonomous loops, tool calling, cognitive architectures)
- LLM-Based Systems & Prompt Engineering (structured outputs, difficulty calibration)
- API Integration & JSON Handling (REST, webhooks, authentication)
- AI Content Orchestration (automated MCQs, Telegram polls, adaptive assessments)
- Vector Database & RAG Concepts (Google Sheets RAG, retrieval workflows)
- Claude Code & Modern AI Tooling (agentic CLI development, rapid prototyping)
- Python (Automation & Scripting)
- Docker & Local LLM Deployment (Qwen, self-hosted endpoints)
- Bilingual Communication (Hindi & English)

INDEPENDENT AI AUTOMATION PROJECTS
1. Automated MCQ Generation & Telegram Poll Posting Workflow with AI (Educate UrSelf)
Role: Creator & Automation Architect
- Designed and deployed an AI-driven Telegram education channel using n8n, OpenAI APIs, and Telegram Bot API.
- Built multi-step workflows for automatic generation and publishing of MCQs, summaries, and topic-wise content.
- Implemented conditional routing, retries, alerts, and error-handling mechanisms for reliability.
- Integrated Google Sheets RAG Database and APIs for content tracking and basic analytics.

2. Exam Prep Portal - React, Serverless APIs, MongoDB, n8n Automation
Live: https://educateurselfias.vercel.app/
- Built a full-stack educational platform for UPSC aspirants featuring daily notes, bilingual interactive quizzes, and an AI-based study mentor.
- Developed a serverless backend connecting Vercel Functions to MongoDB for real-time analytics and dynamic content retrieval.
- Engineered a custom n8n automation pipeline, allowing administrators to push daily website updates directly from Google Sheets via webhooks.

3. Local LLM Deployment & Interface Setup (Qwen)
- Pulled and deployed the Qwen LLM locally using Docker for self-hosted inference.
- Configured Open WebUI as a front-end interface for prompt testing and response evaluation.
- Experimented with prompt structuring, context handling, and output refinement for educational workflows.

4. Daily Current Affairs Scraper – Apify Actor (Python)
GitHub: https://github.com/educateurself4-crypto/current-affairs-scraper
- Engineered an automated Apify Actor in Python to scrape, clean, and structure daily current affairs pages.
- Configured request queues, input validation schemas, and dataset storage for automated AI ingestion.

PROFESSIONAL EXPERIENCE
- Freelance AI Automation Engineer (Independent Client Engagements / Upwork)
- Associate Manager: PWOnlyIAS – Physics Wallah
- Assistant Manager: NTPC Ltd
- Content Developer: Vajiram | KSG | ToppersNotes | KalamIAS Academy
- Educator: Unacademy & Chahal Academy

EDUCATION
- B.Tech – Mechanical Engineering, SASTRA University, Thanjavur
- GATE Ranker (99.71 Percentile) – Mechanical Engineering
- M.E. (Mechanical Engg) – Indian Institute of Science (IISc) Bangalore (pursued briefly)
    `.trim();

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-6 print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Action Header (Hidden when printing) */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
            <span className="text-xs sm:text-sm font-bold text-white font-mono">Pawan_Kumar_Resume.pdf</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand-600 hover:bg-brand-500 text-white transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible text-slate-200 print:text-slate-900 bg-slate-900 print:bg-white text-xs sm:text-sm space-y-6 leading-relaxed font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
              PAWAN KUMAR
            </h1>
            <p className="text-brand-400 print:text-slate-800 font-medium text-sm mt-1">
              AI Automation & Workflow Specialist | EdTech Content & Strategy Professional
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-400 print:text-slate-600 font-mono">
              {personalInfo.email && <span>📧 {personalInfo.email}</span>}
              <span>📍 {personalInfo.location}</span>
              <span>🔗 linkedin.com/in/pawan-kumar-729565b9</span>
              <span>💻 github.com/educateurself4-crypto</span>
              <span>⚡ n8n.io/creators/gladiator</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-400 print:text-black font-bold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 print:text-slate-800 leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-400 print:text-black font-bold mb-2">
              CORE SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-slate-300 print:text-slate-800">
              <p>● <strong>n8n Workflow Automation</strong> (multi-step, event-driven, error handling)</p>
              <p>● <strong>Agentic AI & Multi-Agent Systems</strong> (autonomous loops, tool calling)</p>
              <p>● <strong>LLM Prompt Engineering</strong> (structured outputs, chain-of-thought)</p>
              <p>● <strong>API Integration & Webhooks</strong> (REST, auth, schema parsing)</p>
              <p>● <strong>AI Content Orchestration</strong> (automated MCQs, Telegram polls)</p>
              <p>● <strong>RAG & Vector Concepts</strong> (Sheets RAG, retrieval workflows)</p>
              <p>● <strong>Claude Code & GenAI Tooling</strong> (agentic CLI, rapid prototyping)</p>
              <p>● <strong>Docker & Local LLM Deployment</strong> (Qwen on Docker)</p>
              <p>● <strong>Python</strong> (Automation & Scripting)</p>
              <p>● <strong>Bilingual Communication</strong> (Hindi & English)</p>
            </div>
          </div>

          {/* Independent AI Automation Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-400 print:text-black font-bold mb-3">
              INDEPENDENT AI AUTOMATION PROJECTS
            </h2>
            <div className="space-y-4">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white print:text-black">
                    Automated MCQ Generation & Telegram Poll Posting Workflow with AI (Educate UrSelf)
                  </h3>
                  <span className="text-xs text-brand-400 print:text-slate-600 font-mono">Creator & Automation Architect</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-1 mt-1 text-xs">
                  <li>Designed and deployed an AI-driven Telegram education channel using n8n, OpenAI APIs, and Telegram Bot API.</li>
                  <li>Built multi-step workflows for automatic generation and publishing of MCQs, summaries, and topic-wise content.</li>
                  <li>Implemented conditional routing, retries, alerts, and error-handling mechanisms for reliability.</li>
                  <li>Integrated Google Sheets RAG Database and APIs for content tracking and basic analytics.</li>
                  <li>Created a scalable, low-maintenance system enabling continuous content delivery with minimal manual effort.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white print:text-black">
                    Exam Prep Portal – React, Serverless APIs, MongoDB, n8n Automation
                  </h3>
                  <a href="https://educateurselfias.vercel.app/" target="_blank" rel="noreferrer" className="text-xs text-brand-400 print:text-blue-600 underline">
                    educateurselfias.vercel.app
                  </a>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-1 mt-1 text-xs">
                  <li>Built a full-stack educational platform for UPSC aspirants featuring daily notes, bilingual interactive quizzes, and an AI-based study mentor.</li>
                  <li>Developed a serverless backend connecting Vercel Functions to MongoDB for real-time analytics and dynamic content retrieval.</li>
                  <li>Engineered a custom n8n automation pipeline, allowing administrators to push daily website updates directly from Google Sheets via webhooks.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white print:text-black">
                    Local LLM Deployment & Interface Setup (Qwen)
                  </h3>
                  <span className="text-xs text-brand-400 print:text-slate-600 font-mono">Independent Project</span>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-1 mt-1 text-xs">
                  <li>Pulled and deployed the Qwen LLM locally using Docker for self-hosted inference.</li>
                  <li>Configured Open WebUI as a front-end interface for prompt testing and response evaluation.</li>
                  <li>Experimented with prompt structuring, context handling, and output refinement for educational workflows.</li>
                  <li>Explored feasibility of integrating the local model with n8n-based automation pipelines.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white print:text-black">
                    Daily Current Affairs Scraper – Apify Actor (Python)
                  </h3>
                  <a href="https://github.com/educateurself4-crypto/current-affairs-scraper" target="_blank" rel="noreferrer" className="text-xs text-brand-400 print:text-blue-600 underline">
                    GitHub Repo
                  </a>
                </div>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-1 mt-1 text-xs">
                  <li>Engineered an automated Apify Actor in Python to crawl, structure, and store daily exam current affairs.</li>
                  <li>Configured request queues, input schema validation, and dataset extraction for downstream AI workflows.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-400 print:text-black font-bold mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white print:text-black">
                  Freelance AI Automation Engineer (Independent Client Engagements / Upwork)
                </h3>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-1 mt-1 text-xs">
                  <li>Design and develop production-grade automation workflows and AI agents using n8n for client use cases.</li>
                  <li>Build API-driven pipelines integrating LLMs, data sources, and external tools for content and business automation.</li>
                  <li>Implement error handling, logging, retries, and documentation to ensure workflow stability and maintainability.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white print:text-black">
                  Associate Manager: PWOnlyIAS – Physics Wallah
                </h3>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-1 mt-1 text-xs">
                  <li>Development and review of UPSC Prelims & Mains content (articles, notes, and tests).</li>
                  <li>Conducted in-depth research to create bilingual (English/Hindi) learning modules, test series, and model answers.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white print:text-black">
                  Assistant Manager: NTPC Ltd
                </h3>
                <ul className="list-disc list-inside text-slate-300 print:text-slate-800 space-y-1 mt-1 text-xs">
                  <li>Worked on large-scale technical and administrative operations in India's leading power PSU.</li>
                  <li>Managed manpower, task allocation, and performance monitoring in a high-pressure environment.</li>
                  <li>Strengthened leadership, coordination, and analytical decision-making skills.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-white print:text-black">
                  Content Developer: Vajiram | KSG | ToppersNotes | KalamIAS Academy
                </h3>
                <p className="text-slate-300 print:text-slate-800 text-xs mt-0.5">
                  Authored UPSC-focused articles, practice sets, and explanatory notes. Designed model question papers and strengthened test evaluation frameworks.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white print:text-black">
                  Educator: Unacademy & Chahal Academy
                </h3>
                <p className="text-slate-300 print:text-slate-800 text-xs mt-0.5">
                  Delivered bilingual (Hindi & English) classes in History, Geography, Polity, and Current Affairs using structured teaching methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-brand-400 print:text-black font-bold mb-2">
              EDUCATION
            </h2>
            <div className="space-y-1 text-slate-300 print:text-slate-800 text-xs">
              <p>● <strong>B.Tech – Mechanical Engineering</strong>, SASTRA University, Thanjavur</p>
              <p>● <strong>GATE Ranker (99.71 Percentile)</strong> – Mechanical Engineering</p>
              <p>● <strong>M.E. (Mechanical Engg)</strong> – Indian Institute of Science (IISc) Bangalore (pursued briefly)</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
