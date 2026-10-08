import React, { useState, useEffect } from 'react';
import { Copy, Check, Clock, Volume2, Play, Square } from 'lucide-react';
import { QUICK_HR_INTRO } from '../data/portfolioData';

export const HRIntroduction: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasSpeechSupport, setHasSpeechSupport] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
      setHasSpeechSupport(false);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(QUICK_HR_INTRO);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); // clean existing
      const utterance = new SpeechSynthesisUtterance(QUICK_HR_INTRO);
      utterance.rate = 0.98; // natural steady pacing
      utterance.pitch = 1.0;
      
      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      // Select natural English voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David') || v.name.includes('Guy')))) || voices.find(v => v.lang.startsWith('en'));
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  return (
    <section id="hr-intro" className="py-16 md:py-24 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200/80 dark:border-slate-800/80 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 dark:text-cyan-400 mb-2">
              <span>AUDIO &amp; TRANSCRIPT ELEVATOR PITCH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Quick Introduction
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              A 30–45 second spoken overview structured for campus placement and HR discussions.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/40">
              <Clock className="w-3.5 h-3.5" />
              <span>DURATION: ~35 SECONDS</span>
            </span>
          </div>
        </div>

        {/* Introduction Container */}
        <div className="relative bg-white dark:bg-[#0c1220] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-tech-card card-modern-hover">
          
          {/* Action Bar: Audio Player & Clipboard Copy */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/60 text-blue-700 dark:text-blue-400">
                <Volume2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-white block">
                  Audio &amp; Text Elevator Pitch
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {isPlaying ? 'Synthesizing voice playback...' : 'Listen or read transcript below'}
                </span>
              </div>
            </div>

            {/* Buttons & Live Visualizer */}
            <div className="flex items-center gap-2.5 flex-wrap">
              
              {/* Audio Wave Visualizer when playing */}
              {isPlaying && (
                <div className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 rounded-lg h-8">
                  <span className="w-1 bg-blue-600 rounded-full animate-audio-bar-1"></span>
                  <span className="w-1 bg-blue-600 rounded-full animate-audio-bar-2"></span>
                  <span className="w-1 bg-blue-600 rounded-full animate-audio-bar-3"></span>
                  <span className="w-1 bg-blue-600 rounded-full animate-audio-bar-4"></span>
                  <span className="w-1 bg-blue-600 rounded-full animate-audio-bar-5"></span>
                </div>
              )}

              {/* Play Audio Button */}
              {hasSpeechSupport && (
                <button
                  onClick={handleToggleAudio}
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isPlaying
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-900 hover:bg-blue-100 dark:hover:bg-blue-900/80'
                  }`}
                  aria-label={isPlaying ? "Stop audio introduction" : "Listen to audio introduction"}
                >
                  {isPlaying ? (
                    <>
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>Stop Audio</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Listen (35s)</span>
                    </>
                  )}
                </button>
              )}

              {/* Copy Transcript Button */}
              <button
                onClick={handleCopy}
                type="button"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                aria-label="Copy introduction to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Transcript</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Transcript Paragraphs */}
          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {QUICK_HR_INTRO.split('\n\n').map((para, idx) => (
              <p key={idx} className={idx === 0 ? "font-semibold text-slate-900 dark:text-slate-100" : ""}>
                "{para}"
              </p>
            ))}
          </div>

          {/* Bottom helper note */}
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Ready for campus placement rounds &amp; HR screening</span>
            <span className="hidden sm:inline">Clear • Professional • Factual</span>
          </div>

        </div>

      </div>
    </section>
  );
};
