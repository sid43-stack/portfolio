import React, { useState } from 'react';
import { 
  ArrowDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  Workflow, 
  Cpu, 
  MessageSquare,
  Terminal,
  Activity
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { CANDIDATE_INFO, HERO_INTRO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'intersection' | 'framework' | 'telemetry'>('intersection');

  const scrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 78;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200/80 dark:border-slate-800/80 bg-tech-mesh bg-grid-pattern overflow-hidden">
      
      {/* Subtle Ambient Glow Orbs (Modern Color Grading) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-blue-600/10 via-indigo-500/10 to-cyan-400/10 dark:from-blue-500/15 dark:via-indigo-500/10 dark:to-cyan-400/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Primary Narrative & Human Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* High-Tech Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/90 dark:bg-[#0d1424]/90 text-slate-800 dark:text-blue-300 border border-slate-200 dark:border-blue-900/60 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-500 dark:text-slate-400">SYS.STATUS:</span>
              <span className="text-blue-700 dark:text-blue-400 font-bold">BCA (2024–2027) • GGSIPU • GPA 8.4</span>
            </div>

            {/* Main Headline with Modern Gradient Grading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                <span className="text-slate-900 dark:text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
                  Siddharth Goyal
                </span>
                <span className="text-blue-600">.</span>
              </h1>

              {/* Subheading */}
              <p className="mt-3 text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
                {CANDIDATE_INFO.title}
              </p>

              {/* Supporting statement */}
              <p className="mt-2 text-sm sm:text-base font-semibold text-blue-700 dark:text-blue-400">
                "{CANDIDATE_INFO.supportingStatement}"
              </p>
            </div>

            {/* Short Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {HERO_INTRO}
            </p>

            {/* CTAs with Modern Gradient & Tech Elevation */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 active:scale-[0.98] shadow-sm hover:shadow-tech-glow transition-all group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0d1424] border border-slate-300 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-xs hover:border-blue-400 dark:hover:border-blue-600 transition-all group"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <span>About Me</span>
              </button>
            </div>

            {/* Credibility & Contact Strip */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{CANDIDATE_INFO.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                  <span>IITM Janakpuri (GGSIPU)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${CANDIDATE_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{CANDIDATE_INFO.email}</span>
                  <span className="sm:hidden">Email</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  href={CANDIDATE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <a
                  href={CANDIDATE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Out-of-the-Box "Candidate Systems Console" with High-Tech Telemetry */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 dark:bg-[#0b101d]/95 border border-slate-200/90 dark:border-blue-900/50 rounded-2xl p-5 sm:p-6 shadow-tech-card card-modern-hover relative overflow-hidden backdrop-blur-md">
              
              {/* High-Tech Terminal Top Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800/90">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    <span>Candidate Diagnostic Console</span>
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/50">
                  <Activity className="w-3 h-3" />
                  <span>LIVE • LATENCY &lt;15ms</span>
                </span>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 gap-1 bg-slate-100/90 dark:bg-slate-900/90 p-1 rounded-xl mb-4 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('intersection')}
                  className={`py-1.5 px-2 rounded-lg transition-all ${
                    activeConsoleTab === 'intersection'
                      ? 'bg-white dark:bg-[#070b14] text-blue-700 dark:text-cyan-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Intersection
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('framework')}
                  className={`py-1.5 px-2 rounded-lg transition-all ${
                    activeConsoleTab === 'framework'
                      ? 'bg-white dark:bg-[#070b14] text-blue-700 dark:text-cyan-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Resolution DNA
                </button>
                <button
                  type="button"
                  onClick={() => setActiveConsoleTab('telemetry')}
                  className={`py-1.5 px-2 rounded-lg transition-all ${
                    activeConsoleTab === 'telemetry'
                      ? 'bg-white dark:bg-[#070b14] text-blue-700 dark:text-cyan-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  Tech Telemetry
                </button>
              </div>

              {/* Tab 1: Intersection */}
              {activeConsoleTab === 'intersection' && (
                <div className="space-y-3.5 animate-fadeIn">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Operating at the critical junction where digital systems connect with client needs:
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-400">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">People &amp; Communication</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Active Listening</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-400">
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Technology Systems</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">APIs, Logic, Data</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-400">
                          <Workflow className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Business Processes</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">B2B Workflow Rigor</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>STATUS: HIGH STAKEHOLDER TRUST</span>
                    <span className="font-semibold text-blue-600 dark:text-cyan-400">ZERO GAPS</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Resolution DNA */}
              {activeConsoleTab === 'framework' && (
                <div className="space-y-3 animate-fadeIn">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Systematic 4-step issue triage methodology:
                  </p>
                  
                  <div className="space-y-1.5 font-mono">
                    {[
                      { step: "01", name: "Deconstruct", desc: "Isolate root cause from surface telemetry noise" },
                      { step: "02", name: "Validate", desc: "Test hypotheses against logs and system state" },
                      { step: "03", name: "Communicate", desc: "Provide clear, calm, transparent status updates" },
                      { step: "04", name: "Prevent", desc: "Document process to ensure repeatable resolution" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 text-xs">
                        <span className="font-bold text-cyan-600 dark:text-cyan-400">{item.step}</span>
                        <div>
                          <span className="font-bold text-slate-800 dark:text-slate-200 mr-1.5 font-sans">{item.name}:</span>
                          <span className="text-slate-600 dark:text-slate-400 font-sans text-[11px]">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Tech Telemetry (Hint of Technical Advancements) */}
              {activeConsoleTab === 'telemetry' && (
                <div className="space-y-3 animate-fadeIn">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Live Technical Capabilities &amp; Architecture Snapshot:
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900 dark:bg-[#060a12] border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-800 pb-1.5">
                      <span>payload.diagnostic.json</span>
                      <span className="text-emerald-400">HTTP 200 OK</span>
                    </div>

                    <div className="text-[11px] space-y-1 text-slate-300">
                      <div><span className="text-cyan-400">"candidate"</span>: <span className="text-amber-300">"Siddharth Goyal"</span>,</div>
                      <div><span className="text-cyan-400">"academic_gpa"</span>: <span className="text-emerald-400">8.4</span>,</div>
                      <div><span className="text-cyan-400">"ai_experience"</span>: [<span className="text-amber-300">"WebSpeech"</span>, <span className="text-amber-300">"YOLOv11"</span>, <span className="text-amber-300">"LLMs"</span>],</div>
                      <div><span className="text-cyan-400">"incident_triage"</span>: <span className="text-emerald-400">true</span>,</div>
                      <div><span className="text-cyan-400">"client_empathy"</span>: <span className="text-emerald-400">true</span></div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Combines modern engineering rigor with customer-centric service delivery.
                  </p>
                </div>
              )}

              {/* Console Footnote */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-blue-600 dark:text-cyan-400">
                  <Sparkles className="w-3 h-3" />
                  <span>INTERACTIVE CONSOLE</span>
                </span>
                <span>Click tabs to inspect</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
