import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Radio, 
  Server, 
  Bot,
  Zap
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI Automation', 'Full-Stack + Automation', 'LLMs & DevOps'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs font-mono text-indigo-300 mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects & <span className="gradient-text">Production Pipelines</span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
              End-to-end automation architectures, full-stack educational platforms, and private local LLM infrastructures designed and deployed for scale.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800 self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative group overflow-hidden"
            >
              {/* Top Accent Gradient Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color}`}></div>

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800/80 text-brand-300 border border-slate-700/80">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-4">
                  Role: <span className="text-slate-300 font-medium">{project.role}</span>
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-6 font-sans">
                  {project.summary}
                </p>

                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800 text-center">
                      <div className="text-xs sm:text-sm font-bold text-white font-mono">{metric.value}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Architecture Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
