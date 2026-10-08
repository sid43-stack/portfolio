import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/portfolioData';

export const FAQ: React.FC = () => {
  // Open the first item by default for immediate preview
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
            <span>STRUCTURED INTERVIEW DISCUSSIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked HR Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Direct, grounded answers to common interview inquiries regarding competencies, role fit, and customer mindset.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-slate-200/90 dark:border-slate-800/90 rounded-2xl overflow-hidden bg-slate-50/70 dark:bg-[#0c1220] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base">
                    <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      Q{index + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>
                  
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ml-2 ${
                      isOpen ? 'transform rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800 animate-fadeIn">
                    <div className="p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/60 text-slate-700 dark:text-slate-200">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note on Transparency */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
          <span>
            Candidate statement: Factual answers highlighting current academic preparation, realistic expectations, and zero exaggerated claims.
          </span>
        </div>

      </div>
    </section>
  );
};
