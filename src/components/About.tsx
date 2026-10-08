import React from 'react';
import { UserCheck, Layers, Award, Terminal, ShieldCheck } from 'lucide-react';
import { ABOUT_TEXT, CANDIDATE_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            <span>Background &amp; Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            A technology-oriented student focused on analytical problem solving, clear communication, and business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Main Narrative (Verbatim as required) */}
          <div className="lg:col-span-8 space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {ABOUT_TEXT.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "text-lg font-medium text-slate-900 dark:text-slate-100" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Profile Summary Card for Recruiter Scanning */}
          <div className="lg:col-span-4 bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl p-5 space-y-4 shadow-sm card-modern-hover">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-200 dark:border-slate-700">
              Profile At A Glance
            </h3>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 mt-0.5">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Degree &amp; Score</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">BCA (2024–2027) • GPA: {CANDIDATE_INFO.gpa}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">IITM Janakpuri, GGSIPU</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 mt-0.5">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Primary Intersection</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">People + Technology + Communication</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Practical &amp; business process mindset</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 mt-0.5">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Technical Foundation</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">Python, SQL, React, APIs, AI Workflows</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Hands-on practical development</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 mt-0.5">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Target Direction</p>
                <p className="text-xs text-slate-600 dark:text-slate-300">Customer Support &amp; B2B Process Roles</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Root-cause resolution &amp; client communication</p>
              </div>
            </div>

          </div>

        </div>

        {/* Modern Workplace Principles Bar */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Core Workplace Principles</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">01 • Listen Before Deciding</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Prioritize full comprehension of client intent and technical facts before jumping to conclusions or premature answers.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">02 • Explain Without Jargon</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Translate engineering diagnostics into transparent, human-first business updates that inspire client confidence.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">03 • Build For Repeatability</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Document every resolution pathway so colleagues and future operations never have to troubleshoot the same defect from scratch.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
