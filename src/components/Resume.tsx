import React, { useState } from 'react';
import { FileText, Download, Eye, AlertCircle, Mail, X, ShieldCheck, Terminal, ExternalLink } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showFallbackModal, setShowFallbackModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleViewResume = () => {
    setShowPreviewModal(true);
  };

  const handleDownloadResume = async () => {
    try {
      const response = await fetch(CANDIDATE_INFO.resumePath, { method: 'HEAD' });
      if (!response.ok) {
        setModalMessage("Resume currently unavailable.");
        setShowFallbackModal(true);
        return;
      }
    } catch {
      // Allow direct download even if HEAD request is restricted
    }
    const link = document.createElement('a');
    link.href = CANDIDATE_INFO.resumePath;
    link.download = 'Siddharth_Goyal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 md:py-24 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            My Resume
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            View my resume for a concise overview of my education, skills, projects, and professional profile.
          </p>
        </div>

        {/* Resume Action Card with Tech Elevation */}
        <div className="bg-white dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-tech-card card-modern-hover">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
            
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shrink-0 shadow-sm">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Siddharth Goyal — Professional Resume
                  </h3>
                  <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900/40">
                    <ShieldCheck className="w-3 h-3" />
                    <span>VERIFIED</span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Formatted for Campus Placement &amp; B2B Customer Services evaluation
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">B2B CSR Protocol</span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">BCA (GPA: 8.4)</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
              <button
                onClick={handleViewResume}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 active:scale-[0.98] shadow-sm hover:shadow-tech-glow transition-all focus:outline-none"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleDownloadResume}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#070b14] border border-slate-300 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all focus:outline-none"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Quick Resume Highlights */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white block mb-1 font-sans">Education</span>
              <span className="text-slate-600 dark:text-slate-300">BCA, GGSIPU (2024–2027)</span>
              <span className="text-emerald-700 dark:text-emerald-400 block mt-1">Cumulative GPA: 8.4 / 10</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white block mb-1 font-sans">Core Competencies</span>
              <span className="text-slate-600 dark:text-slate-300">Clear Communication &amp; Follow-up</span>
              <span className="text-blue-700 dark:text-cyan-400 block mt-1">Systematic Triage Framework</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white block mb-1 font-sans">Technical Stack</span>
              <span className="text-slate-600 dark:text-slate-300">Python, SQL, JavaScript, React</span>
              <span className="text-indigo-700 dark:text-indigo-400 block mt-1">FastAPI, PostgreSQL, AI APIs</span>
            </div>
          </div>

        </div>

      </div>

      {/* Graceful Fallback Modal when PDF is not present */}
      {showFallbackModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-5 h-5" />
                <span className="text-sm font-bold font-mono">STATUS: NOTICE</span>
              </div>
              <button
                onClick={() => setShowFallbackModal(false)}
                type="button"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <p className="text-base font-bold text-slate-900 dark:text-white">
                {modalMessage}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
                Target configuration path: <code className="text-cyan-600 dark:text-cyan-400 bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded">{CANDIDATE_INFO.resumePath}</code>
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                The document is configured for placement upload prior to submission. You can review all verified project architectures and credentials directly on this portfolio or reach out via email for an immediate copy.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-2">
              <a
                href={`mailto:${CANDIDATE_INFO.email}?subject=Resume%20Request%20-%20Siddharth%20Goyal`}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-700 to-indigo-600 rounded-xl"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request via Email</span>
              </a>
              <button
                onClick={() => setShowFallbackModal(false)}
                type="button"
                className="px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Official Resume Document Preview Modal */}
      {showPreviewModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white dark:bg-[#0c1220] border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                    Siddharth Goyal — Official Resume
                  </h3>
                  <p className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                    PDF Document • Verified Candidate Profile
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={CANDIDATE_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <button
                  onClick={handleDownloadResume}
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  type="button"
                  className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Embed Container */}
            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-2 sm:p-4 overflow-hidden">
              <iframe
                src={`${CANDIDATE_INFO.resumePath}#toolbar=1&navpanes=0`}
                className="w-full h-full rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white shadow-inner"
                title="Siddharth Goyal Official Resume Document"
              />
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
