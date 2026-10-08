import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, Send, Terminal } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CANDIDATE_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CANDIDATE_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            I'm always open to conversations about opportunities, technology, projects, and professional growth.
          </p>
        </div>

        {/* Contact Cards Grid with Modern Tech Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
          
          {/* Email Card */}
          <div className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-5 shadow-tech-card card-modern-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={copyEmail}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500">ENDPOINT: SMTP</p>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 break-all">
                {CANDIDATE_INFO.email}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
              <a
                href={`mailto:${CANDIDATE_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-cyan-400 hover:underline"
              >
                <span>Send Direct Email</span>
                <Send className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-5 shadow-tech-card card-modern-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={copyPhone}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500">ENDPOINT: VOIP / MOBILE</p>
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
                {CANDIDATE_INFO.phone}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
              <a
                href={`tel:${CANDIDATE_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 hover:underline"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-5 shadow-tech-card card-modern-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-400">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">NETWORK</span>
              </div>
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500">ENDPOINT: LINKEDIN</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                {CANDIDATE_INFO.linkedinDisplay}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
              <a
                href={CANDIDATE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-cyan-400 hover:underline"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-5 shadow-tech-card card-modern-hover flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">REPOSITORIES</span>
              </div>
              <p className="text-[10px] font-mono font-bold uppercase text-slate-400 dark:text-slate-500">ENDPOINT: GITHUB</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                {CANDIDATE_INFO.githubDisplay}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800">
              <a
                href={CANDIDATE_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:underline"
              >
                <span>View GitHub Repositories</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href={`mailto:${CANDIDATE_INFO.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 shadow-sm transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>

          <a
            href={CANDIDATE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0c1220] border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-2xs transition-all"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-700 dark:text-cyan-400" />
            <span>Connect on LinkedIn</span>
          </a>

          <a
            href={CANDIDATE_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0c1220] border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-2xs transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub</span>
          </a>
        </div>

      </div>
    </section>
  );
};
