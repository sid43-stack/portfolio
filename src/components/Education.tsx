import React from 'react';
import { GraduationCap, Award, School } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
            <span>ACADEMIC FOUNDATION &amp; CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Formal qualification providing analytical foundation, computer applications knowledge, and disciplined problem solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          
          {EDUCATION.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Bullet */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#070b14] border-2 border-blue-600 dark:border-cyan-400 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 group-hover:scale-125 transition-transform"></span>
              </div>

              {/* Education Card */}
              <div className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 shadow-tech-card hover:border-blue-300 dark:hover:border-cyan-500/40 card-modern-hover transition-colors">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-cyan-300">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-900/40">
                    {item.gpaOrStream}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300 mt-1 mb-3">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <School className="w-4 h-4 text-slate-400" />
                    {item.institution}
                  </span>
                  {item.boardOrUniversity && (
                    <>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="text-slate-500 dark:text-slate-400">{item.boardOrUniversity}</span>
                    </>
                  )}
                </div>

                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Award className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
