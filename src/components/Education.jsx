import React from 'react';
import { GraduationCap, Award, BookOpen, Languages, Sparkles } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-800/60 text-xs font-mono text-amber-300 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Scholastic Distinctions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Background & <span className="gradient-text">Honors</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Backed by national-level analytical excellence and foundational engineering principles.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 relative overflow-hidden"
            >
              {/* Highlight bar for GATE */}
              {item.degree.includes('99.71') && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600"></div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-amber-300 border border-slate-700">
                    {item.badge}
                  </span>
                  {item.degree.includes('99.71') ? (
                    <Award className="w-5 h-5 text-amber-400" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-brand-400" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                  {item.degree}
                </h3>
                <p className="text-xs font-mono text-brand-300 mb-4">
                  {item.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {item.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Verified Credential</span>
                <span className="text-emerald-400">Honors</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bilingual Edge Banner */}
        <div className="mt-10 max-w-4xl mx-auto glass-card rounded-2xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5 text-left">
            <div className="p-3 rounded-xl bg-purple-950/80 text-purple-300 border border-purple-800/60">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">Bilingual Expertise (English & Hindi)</h4>
              <p className="text-xs text-slate-400">
                Extensive track record designing bilingual learning modules, question banks, and AI prompt pipelines for nationwide demographics.
              </p>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-purple-900/50 text-purple-300 border border-purple-700 whitespace-nowrap">
            English • हिन्दी
          </span>
        </div>

      </div>
    </section>
  );
}
