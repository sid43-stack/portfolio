import React from 'react';
import { 
  SearchCheck, 
  Brain, 
  MessageSquare, 
  Users2, 
  Shuffle, 
  CheckCircle2, 
  GraduationCap, 
  Layers 
} from 'lucide-react';
import { PROFESSIONAL_STRENGTHS } from '../data/portfolioData';

export const Strengths: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SearchCheck':
        return <SearchCheck className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Users2':
        return <Users2 className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Shuffle':
        return <Shuffle className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
    }
  };

  return (
    <section id="strengths" className="py-16 md:py-24 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
            <span>OPERATIONAL BEHAVIOR &amp; ATTRIBUTES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Professional Strengths
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Work habits and behavioral qualities that support dependable delivery, client clarity, and cross-functional teamwork.
          </p>
        </div>

        {/* 8 Strengths Cards (4x2 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PROFESSIONAL_STRENGTHS.map((strength) => (
            <div
              key={strength.id}
              className="bg-white dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-5 shadow-tech-card hover:border-blue-300 dark:hover:border-cyan-500/40 card-modern-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(strength.iconName)}
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {strength.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {strength.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Notice */}
        <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Evaluated through project deliverables, code reviews, and structured problem troubleshooting.
        </div>

      </div>
    </section>
  );
};
