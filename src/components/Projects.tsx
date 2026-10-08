import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2, Layers, Workflow, Terminal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const getTechnicalSpecTag = (id: string) => {
    switch (id) {
      case 'echo':
        return 'SYS.MODULE // SPEECH-AI & STATEFUL WEBSOCKETS';
      case 'cybercctv':
        return 'SYS.MODULE // LOG STREAMING & INCIDENT CORRELATION';
      case 'secureassure':
        return 'SYS.MODULE // YOLOV11 VISION & TEMPORAL TRACKING';
      case 'edgesage':
        return 'SYS.MODULE // HARDWARE EMBEDDINGS & OFFLINE VECTOR INDEX';
      default:
        return 'SYS.MODULE // PRODUCTION WORKFLOW';
    }
  };

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => {
        if (filter === 'ai') return p.id === 'echo' || p.id === 'secureassure';
        if (filter === 'telemetry') return p.id === 'cybercctv';
        if (filter === 'resilience') return p.id === 'edgesage';
        return true;
      });

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>PRACTICAL IMPLEMENTATIONS &amp; ARCHITECTURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Selected Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Demonstrating structured problem solving, technical reliability, user-centered thinking, and analytical rigor.
            </p>
          </div>

          {/* Filter Pills with Tech Styling */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end font-mono">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white dark:bg-[#0d1424] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              ALL (4)
            </button>
            <button
              type="button"
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'ai'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white dark:bg-[#0d1424] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              CONVERSATIONAL &amp; VISION AI
            </button>
            <button
              type="button"
              onClick={() => setFilter('telemetry')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'telemetry'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white dark:bg-[#0d1424] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              INCIDENT TELEMETRY
            </button>
            <button
              type="button"
              onClick={() => setFilter('resilience')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'resilience'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white dark:bg-[#0d1424] text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              OFFLINE RESILIENCE
            </button>
          </div>
        </div>

        {/* 2x2 Grid of Projects with Modern Color Grading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 shadow-tech-card card-modern-hover flex flex-col justify-between"
            >
              <div>
                {/* High-Tech Spec Header */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                    {getTechnicalSpecTag(project.id)}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 telemetry-beacon shrink-0"></span>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-cyan-300 rounded-md border border-slate-200/80 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Main Short Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Points Bullet List */}
                <ul className="space-y-1.5 mb-4">
                  {project.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Pipeline Step Preview */}
                {project.pipelineSteps && (
                  <div className="mb-4 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <Workflow className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
                      <span>ARCHITECTURE WORKFLOW:</span>
                    </span>
                    <span className="text-slate-600 dark:text-slate-300 line-clamp-1">
                      {project.pipelineSteps.join(' ➔ ')}
                    </span>
                  </div>
                )}
              </div>

              <div>
                {/* HR Takeaway Box with Modern Accent */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 mb-4 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-blue-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="text-blue-800 dark:text-cyan-300">HR Takeaway:</strong> {project.hrTakeaway}
                  </p>
                </div>

                {/* Action Button to Open Modal */}
                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-600 hover:text-white dark:hover:from-blue-600 dark:hover:to-cyan-600 dark:hover:text-white rounded-xl transition-all group/btn shadow-2xs"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Inspect Problem-Solving Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
