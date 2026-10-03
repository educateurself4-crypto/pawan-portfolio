import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  ExternalLink,
  Sparkles,
  Clock,
  Loader2,
  AlertCircle,
  Github,
  Workflow
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', roleType: 'Freelance Automation' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "415cef7f-fd17-426a-9897-4f6e5146c34e";

    // If Web3Forms access key is configured, submit via Web3Forms API
    if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: `Portfolio Inquiry from ${formData.name} (${formData.roleType})`,
            message: formData.message,
            roleType: formData.roleType,
            from_name: "Pawan Kumar Portfolio",
          }),
        });

        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
        } else {
          setErrorMessage(data.message || "Failed to send message. Please try again or connect via LinkedIn.");
        }
      } catch (err) {
        setErrorMessage("Network connection error. Please try again or reach out on LinkedIn.");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback to mailto if access key is not yet set
      setTimeout(() => {
        if (personalInfo.email) {
          const subject = encodeURIComponent(`Inquiry from ${formData.name} regarding ${formData.roleType}`);
          const body = encodeURIComponent(`Hi Pawan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
          window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
        }
        setSubmitted(true);
        setIsSubmitting(false);
      }, 800);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/70 border border-brand-800/60 text-xs font-mono text-brand-300 mb-3">
            <Send className="w-3.5 h-3.5 text-brand-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Looking to automate complex workflows, deploy private LLM pipelines, or scale EdTech operations? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Contact Details & Quick Links (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Direct Channels</h3>
                <p className="text-xs text-slate-400">
                  Feel free to connect directly on LinkedIn or send an inquiry below.
                </p>
              </div>

              {/* Email Card */}
              {personalInfo.email && (
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-brand-950 text-brand-400 border border-brand-800">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-brand-300 transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    title="Copy email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              )}

              {/* Phone Card */}
              {personalInfo.phone && (
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Phone</div>
                      <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                      title="Copy phone"
                    >
                      {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* LinkedIn Card */}
              {personalInfo.linkedIn && (
                <a
                  href={personalInfo.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-blue-950 text-blue-400 border border-blue-800">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        pawan-kumar-729565b9
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400" />
                </a>
              )}

              {/* GitHub Card */}
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-600 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-slate-950 text-slate-300 border border-slate-800">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                        educateurself4-crypto
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                </a>
              )}

              {/* n8n Verified Creator Card */}
              {personalInfo.n8nCreator && (
                <a
                  href={personalInfo.n8nCreator}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-orange-950/30 via-slate-900/90 to-red-950/30 border border-orange-700/50 hover:border-orange-500 transition-colors group shadow-sm shadow-orange-950/30"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-lg bg-orange-950 text-orange-400 border border-orange-800">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-orange-400 flex items-center gap-1.5">
                        <span>n8n Verified Creator</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-orange-300 transition-colors">
                        gladiator (@n8n.io)
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-orange-400/70 group-hover:text-orange-400" />
                </a>
              )}

              {/* Location Card */}
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 font-mono">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Availability Box */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800 bg-gradient-to-r from-slate-900 via-brand-950/20 to-slate-900">
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Response Time: Usually within 2-4 hours</span>
              </div>
              <p className="text-xs text-slate-400">
                Available for contract-based automation architecture, full-time AI engineering, or technical leadership.
              </p>
            </div>

          </div>

          {/* Interactive Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below and I'll get back to you promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'there'}</strong>. Your inquiry has been delivered directly to Pawan. You will receive a response at <strong>{formData.email || 'your email'}</strong> shortly.
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-2">
                    {personalInfo.linkedIn && (
                      <a
                        href={personalInfo.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-600 text-white hover:bg-brand-500 transition-colors shadow-md shadow-brand-600/30"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '', roleType: 'Freelance Automation' });
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Project / Role Scope</label>
                    <select
                      value={formData.roleType}
                      onChange={(e) => setFormData({ ...formData, roleType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-500 transition-colors"
                    >
                      <option value="Freelance Automation">Freelance n8n / AI Workflow Automation</option>
                      <option value="Full-Time AI Engineering">Full-Time AI / Automation Role</option>
                      <option value="EdTech Content Strategy">EdTech Content & Platform Operations</option>
                      <option value="LLM / RAG Consulting">Private LLM / Local Qwen Setup</option>
                      <option value="Other Inquiry">Other Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Message / Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your workflow bottleneck, platform requirements, or project details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-brand-600/30 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Connect</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
