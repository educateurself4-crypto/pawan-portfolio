import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Check, 
  Copy, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Award,
  Play
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyber-emerald/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyber-violet/15 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="flex items-center justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs text-slate-300 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-medium text-emerald-400">Available</span>
            <span className="text-slate-500">•</span>
            <span>Open to Remote & Hybrid AI Automation Roles</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Pitch */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Architecting <span className="gradient-text">Intelligent AI Workflows</span> & Scalable EdTech Systems
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">Pawan Kumar</strong>. 
              A <strong className="text-brand-300 font-medium">Mechanical Engineering GATE Ranker (99.71%ile)</strong> with 
              over 8 years of blended leadership in operations (ex-NTPC), academic content strategy (ex-Physics Wallah), and cutting-edge 
              <strong className="text-cyber-cyan font-medium"> n8n & LLM-driven automation engineering</strong>.
            </p>

            {/* Quick Badges / Competency Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-950/60 border border-brand-800/60 text-xs font-mono text-brand-300">
                <Cpu className="w-3.5 h-3.5 text-brand-400" /> n8n Orchestration
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-800/60 text-xs font-mono text-purple-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" /> LLM Prompt & RAG
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-300">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" /> Docker & Qwen Local
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-950/60 border border-amber-800/60 text-xs font-mono text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" /> GATE 99.71%ile
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start pt-3">
              <a
                href="#workflow-simulator"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Test Interactive Workflow</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 font-medium text-sm transition-all hover:border-slate-600"
              >
                <Layers className="w-4 h-4 text-slate-400" />
                <span>View Projects & Apps</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/60 text-slate-300 border border-slate-800 font-medium text-sm transition-all"
              >
                <span>Read CV</span>
              </button>
            </div>

            {/* Quick Contact & Copy Bar */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-400">
              {/* Email */}
              {personalInfo.email && (
                <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Mail className="w-3.5 h-3.5 text-brand-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                    {personalInfo.email}
                  </a>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="text-slate-500 hover:text-white transition-colors"
                    title="Copy email"
                  >
                    {copiedItem === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}

              {/* Phone */}
              {personalInfo.phone && (
                <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                    {personalInfo.phone}
                  </a>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="text-slate-500 hover:text-white transition-colors"
                    title="Copy phone"
                  >
                    {copiedItem === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}

              {/* LinkedIn Link */}
              <a 
                href={personalInfo.linkedIn}
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 bg-slate-900/90 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Stats Badge */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Terminal Window Mockup */}
            <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/30">
              {/* Terminal Title Bar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-brand-400" />
                  <span>pawan@automation-core:~$</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  ONLINE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-3 text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="text-brand-400 font-bold">$</span>
                  <span className="text-slate-100">n8n --version && docker ps</span>
                </div>
                <div className="text-slate-400 pl-4 space-y-1">
                  <p>✔ n8n-workflow-engine: <span className="text-emerald-400 font-semibold">Active (Multi-Step Event Driven)</span></p>
                  <p>✔ container: <span className="text-cyan-400">qwen2.5-local-inference</span> (Running 8000:8000)</p>
                  <p>✔ open-webui: <span className="text-purple-400">Connected</span> to localhost:3000</p>
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <span className="text-brand-400 font-bold">$</span>
                  <span className="text-slate-100">curl -X POST /api/pipeline/status</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                  <p><span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"OPERATIONAL"</span>,</p>
                  <p><span className="text-purple-400">"primaryStack"</span>: <span className="text-amber-300">["n8n", "OpenAI", "React", "MongoDB"]</span>,</p>
                  <p><span className="text-purple-400">"academicBackground"</span>: <span className="text-brand-300">"GATE 99.71%ile • ex-NTPC • ex-PW"</span>,</p>
                  <p><span className="text-purple-400">"mission"</span>: <span className="text-slate-200">"Eliminate repetitive manual ops with self-healing AI workflows"</span></p>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-emerald-400 pt-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Webhook listener awaiting payload triggers...</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-3.5 rounded-xl border border-slate-800/80 hover:border-brand-500/40 transition-colors">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-mono truncate">
                    {stat.highlight}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
