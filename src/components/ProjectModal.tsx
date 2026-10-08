import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Sparkles, BookOpen, Layers, Target, Compass, Workflow } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Handle ESC key press and body overflow lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-5 sm:p-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Project Case Study &amp; Problem-Solving Analysis
            </span>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* HR Takeaway Highlight Banner */}
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/60 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-blue-700 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                HR &amp; Recruiter Takeaway
              </p>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                {project.hrTakeaway}
              </p>
            </div>
          </div>

          {/* Technology Used */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Technology Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-md border border-slate-200/80 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>The Problem</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>My Approach</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* System Architecture & Workflow Pipeline */}
          {project.pipelineSteps && project.pipelineSteps.length > 0 && (
            <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-3">
                <Workflow className="w-4 h-4" />
                <span>System Architecture &amp; Workflow Pipeline</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {project.pipelineSteps.map((step, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">
                      Stage 0{idx + 1}
                    </span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What I Built */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>What I Built</span>
            </div>
            <ul className="space-y-2">
              {project.whatIBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Challenges Overcome</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Outcome / Purpose */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Outcome / Purpose</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-lg border border-slate-200/70 dark:border-slate-700/60 font-medium">
              {project.outcomePurpose}
            </p>
          </div>

          {/* What I Learned */}
          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>What I Learned &amp; Professional Growth</span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.whatILearned}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Factual project breakdown • No fabricated metrics
          </p>
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
