import React from 'react';
import { Briefcase, Building2, Calendar, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-xs font-mono text-blue-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Experience Timeline</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Over 8 years bridging heavy engineering operations, high-volume EdTech content leadership, and modern AI automation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Center/Side Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-500 via-purple-500 to-slate-800"></div>

          <div className="space-y-10 relative">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 z-10">
                    <div className="w-4 h-4 rounded-full bg-brand-500 ring-4 ring-slate-950 shadow-md shadow-brand-500/50"></div>
                  </div>

                  {/* Content Box */}
                  <div className="ml-10 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 relative">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-brand-950/90 text-brand-300 border border-brand-800">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-brand-400 mt-0.5 mb-4">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{item.company}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-2">
                        {item.highlights.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
