import React, { useState } from 'react';
import { 
  Cpu, 
  Brain, 
  Code2, 
  Briefcase, 
  Workflow, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  'Workflow Automation & Orchestration': Workflow,
  'AI & Large Language Models': Brain,
  'Development & Systems': Code2,
  'Operations & Leadership': Briefcase
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-xs font-mono text-emerald-300 mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical & Domain <span className="gradient-text">Skills Matrix</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            A rare intersection of high-order engineering aptitude (GATE 99.71%ile), PSU operations leadership, and modern AI agent engineering.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.title] || Cpu;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-brand-600/30 scale-[1.02]'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-400'}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 max-w-5xl mx-auto shadow-2xl shadow-indigo-950/20">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white">
                {skillCategories[activeTab].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                {skillCategories[activeTab].description}
              </p>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/60">
              Verified Hands-On
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeTab].skills.map((skill) => (
              <div 
                key={skill.name}
                className="bg-slate-900/70 p-5 rounded-xl border border-slate-800/80 hover:border-brand-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-sm sm:text-base text-white">{skill.name}</span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-brand-950 text-brand-300 border border-brand-800">
                    {skill.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-3 font-sans">
                  {skill.desc}
                </p>

                {/* Level Progress Bar */}
                <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-brand-500 to-cyber-cyan h-2 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
