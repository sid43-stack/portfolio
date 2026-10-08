import React from 'react';
import { Building2, Headset, Workflow, HelpCircle } from 'lucide-react';
import { CAREER_DIRECTION } from '../data/portfolioData';

export const CareerDirection: React.FC = () => {
  const roleBadges = [
    { title: "B2B Customer Support & Process Operations", icon: <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { title: "Technical Support & Client Service", icon: <Headset className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { title: "Business Process Services (BPS)", icon: <Workflow className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { title: "Problem Resolution & Technical Liaison", icon: <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
  ];

  return (
    <section id="career-direction" className="py-16 md:py-24 bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
            <span>TARGET PROFESSIONAL HORIZON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            {CAREER_DIRECTION.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Open to entry-level professional opportunities combining technical competence, analytical thinking, and client communication.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-tech-card card-modern-hover">
          
          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
              I'm looking for an entry-level opportunity where I can work in a professional, technology-driven environment, interact with people, understand business requirements, solve problems, and continuously develop my communication and professional skills.
            </p>
            <p>
              I am particularly interested in customer-facing, business-process, technology-support, and operations-oriented opportunities where my technical background can complement my communication and analytical abilities.
            </p>
          </div>

          {/* Alignment Attributes */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              Preferred Work Domains &amp; Opportunities
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roleBadges.map((badge, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-sm"
                >
                  <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-950/60 shrink-0">
                    {badge.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
