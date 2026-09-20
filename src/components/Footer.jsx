import React from 'react';
import { Bot, ArrowUp, Mail, Phone, Linkedin, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyber-cyan flex items-center justify-center text-white font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-white">Pawan Kumar</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              AI Automation & Workflow Specialist | EdTech Content Leader. 
              Engineering scalable n8n pipelines, LLM-powered knowledge engines, and serverless applications.
            </p>
            <div className="flex items-center space-x-3 text-slate-400">
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors" title="Email">
                  <Mail className="w-4 h-4" />
                </a>
              )}
              {personalInfo.phone && (
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors" title="Phone">
                  <Phone className="w-4 h-4" />
                </a>
              )}
              {personalInfo.linkedIn && (
                <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" className="hover:text-white p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors" title="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs text-slate-200 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About & Overview</a></li>
              <li><a href="#workflow-simulator" className="hover:text-white transition-colors">n8n Workflow Demo</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills Matrix</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience Timeline</a></li>
            </ul>
          </div>

          {/* Quick Actions & Live Portal */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs text-slate-200 uppercase tracking-wider">Live Deployments</h4>
            <p className="text-slate-400">
              Explore the live UPSC platform built with React, Serverless Vercel APIs, MongoDB, and n8n webhook sync.
            </p>
            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              <a
                href="https://educateurselfias.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 text-xs font-semibold hover:border-slate-700 transition-colors"
              >
                <span>educateurselfias.vercel.app</span>
              </a>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-brand-600/20 text-brand-300 hover:bg-brand-600/30 border border-brand-500/30 text-xs font-semibold transition-colors"
              >
                <span>Full Resume</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Pawan Kumar. All rights reserved. Built with React & Tailwind.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
