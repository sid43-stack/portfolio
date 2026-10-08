import React, { useState } from 'react';
import { 
  MessagesSquare, 
  Briefcase, 
  LineChart, 
  Code2, 
  BrainCircuit, 
  CheckCircle,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Terminal
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

interface TranslationItem {
  skill: string;
  technicalCapability: string;
  businessApplication: string;
  impactBadge: string;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'standard' | 'translation'>('standard');

  const translations: TranslationItem[] = [
    {
      skill: "Python & Automated Scripts",
      technicalCapability: "Log parsing, regex filtering, incident classification (CYBERCCTV)",
      businessApplication: "Converts chaotic system logs into clean, readable incident summaries for enterprise clients during service outages.",
      impactBadge: "Rapid Incident Triage"
    },
    {
      skill: "SQL & Relational Data (PostgreSQL)",
      technicalCapability: "Structured querying, record verification, schema integrity",
      businessApplication: "Directly verifies ground-truth record state during client billing, sync, or inventory disputes without guessing.",
      impactBadge: "Data-Backed Truth"
    },
    {
      skill: "REST APIs & Asynchronous Flow",
      technicalCapability: "HTTP status codes (4xx/5xx), payload contracts, endpoint testing",
      businessApplication: "Rapidly identifies if an integration error is due to authentication, missing parameters, or network timeouts.",
      impactBadge: "Integration Support"
    },
    {
      skill: "AI & LLM Workflows",
      technicalCapability: "Prompt structuring, state preservation, speech pipelines (ECHO)",
      businessApplication: "Synthesizes multi-thread client correspondence into clear action items; crafts empathetic, structured responses.",
      impactBadge: "Communication Efficiency"
    },
    {
      skill: "React & User Interface Architecture",
      technicalCapability: "Client-side state, event handling, component lifecycle",
      businessApplication: "Pinpoints exactly where an end-user is experiencing browser confusion; provides patient, step-by-step navigation guidance.",
      impactBadge: "User Empathy"
    },
    {
      skill: "Documentation & Version Control (Git)",
      technicalCapability: "Structured commits, markdown wikis, changelog tracking",
      businessApplication: "Maintains exhaustive standard operating procedures (SOPs) ensuring repeatable team resolution and flawless shift handovers.",
      impactBadge: "Operational Continuity"
    }
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessagesSquare':
        return <MessagesSquare className="w-4 h-4" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4" />;
      case 'LineChart':
        return <LineChart className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const filteredGroups = activeCategory === 'all' 
    ? SKILL_GROUPS 
    : SKILL_GROUPS.filter(g => g.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>SKILL MATRIX &amp; VALUE TRANSLATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Core Skills
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Categorized proficiencies spanning client communication, analytical problem solving, business processes, and software tools.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl self-start md:self-end font-mono">
            <button
              type="button"
              onClick={() => setViewMode('standard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'standard'
                  ? 'bg-white dark:bg-[#0c1220] text-blue-700 dark:text-cyan-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Categorized Groups
            </button>
            <button
              type="button"
              onClick={() => setViewMode('translation')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'translation'
                  ? 'bg-white dark:bg-[#0c1220] text-blue-700 dark:text-cyan-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-cyan-500" />
              <span>Tech ⟷ B2B Value</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Standard Grouped Skills */}
        {viewMode === 'standard' && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 pb-2 font-mono">
              {['all', 'communication', 'customer', 'analytical', 'technology'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-blue-700 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800/80'
                  }`}
                >
                  {cat === 'all' ? 'All Skills' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Grouped Skills Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGroups.map((group) => (
                <div 
                  key={group.category}
                  className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-5 shadow-tech-card card-modern-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-slate-200/80 dark:border-slate-800">
                      <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-400">
                        {getCategoryIcon(group.iconName)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          {group.category}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-white dark:bg-[#070b14] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs"
                        >
                          <CheckCircle className="w-3 h-3 text-blue-600 dark:text-cyan-400 shrink-0" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category Footer Note */}
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>{group.skills.length} core capabilities documented</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* View Mode 2: Tech to B2B Value Translation (Modern Out-of-the-Box Perspective) */}
        {viewMode === 'translation' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200/80 dark:border-blue-900/50 text-xs text-blue-900 dark:text-blue-200 flex items-center justify-between flex-wrap gap-2">
              <span className="flex items-center gap-2 font-medium">
                <Zap className="w-4 h-4 text-blue-700 dark:text-cyan-400 shrink-0" />
                <span><strong>The Technical Translation Matrix:</strong> Mapping computer applications depth directly into corporate customer &amp; operational outcomes.</span>
              </span>
              <span className="font-mono font-bold text-blue-700 dark:text-cyan-400 text-[11px]">
                [TRANSFERABLE ASSETS]
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {translations.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50/70 dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-5 shadow-tech-card card-modern-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.skill}
                      </h4>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50">
                        {item.impactBadge}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                          Technical Capability:
                        </span>
                        <p className="text-slate-600 dark:text-slate-300 font-mono text-[11px] bg-white dark:bg-[#070b14] p-1.5 rounded border border-slate-200/60 dark:border-slate-800">
                          {item.technicalCapability}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-400 block">
                          B2B Customer &amp; Process Value:
                        </span>
                        <p className="text-slate-700 dark:text-slate-200 font-medium leading-relaxed mt-0.5">
                          {item.businessApplication}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Direct Workplace Transferability</span>
                    <ArrowRight className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Note on Skill Evaluation */}
        <div className="mt-8 p-4 bg-slate-50 dark:bg-[#0c1220]/80 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between flex-wrap gap-2">
          <span>
            <strong>Evaluation Standard:</strong> Skills are evaluated through practical application in structured projects, documentation quality, and problem resolution rather than arbitrary self-ratings.
          </span>
          <span className="font-mono font-semibold text-blue-700 dark:text-cyan-400">
            [ZERO INVENTED PERCENTAGES]
          </span>
        </div>

      </div>
    </section>
  );
};
