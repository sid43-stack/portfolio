import React, { useState } from 'react';
import { 
  MessageSquareCheck, 
  Compass, 
  Cpu, 
  Zap, 
  Users, 
  FileCheck,
  Workflow,
  ArrowRight
} from 'lucide-react';
import { VALUE_CARDS } from '../data/portfolioData';

interface Scenario {
  id: string;
  tag: string;
  title: string;
  context: string;
  steps: {
    stage: string;
    action: string;
    detail: string;
  }[];
  resolutionTakeaway: string;
}

export const WhyMe: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);

  const scenarios: Scenario[] = [
    {
      id: "incident-triage",
      tag: "Urgent Incident Resolution",
      title: "Client Reports Unexpected Data Inconsistency",
      context: "An enterprise client alerts that their automated data sync returned missing records during a critical daily reporting cycle.",
      steps: [
        {
          stage: "1. Acknowledge & Stabilize",
          action: "Immediate Calm Response",
          detail: "Validate client concern, establish clear communication cadence, and avoid speculative blame."
        },
        {
          stage: "2. Isolate & Triage",
          action: "Technical Telemetry Inspection",
          detail: "Cross-reference timestamps with ingestion logs and API responses to isolate the exact divergence point."
        },
        {
          stage: "3. Transparent Update",
          action: "Plain-English Clarification",
          detail: "Translate the backend finding into business terms and outline the corrective patch timeline."
        },
        {
          stage: "4. Preventative Follow-up",
          action: "Root-Cause Documentation",
          detail: "File a structured post-incident summary with schema guardrails to prevent identical recurrence."
        }
      ],
      resolutionTakeaway: "Combines technical root-cause investigation with empathetic, panic-free client communication."
    },
    {
      id: "scope-alignment",
      tag: "Cross-Functional Alignment",
      title: "Unclear Client Requirement for New Integration",
      context: "A business partner submits a feature request with conflicting terminology and vague operational parameters.",
      steps: [
        {
          stage: "1. Active Listening",
          action: "Goal Deconstruction",
          detail: "Identify what the partner is trying to achieve rather than just fixating on their requested phrasing."
        },
        {
          stage: "2. Plain-English Questions",
          action: "Jargon-Free Clarification",
          detail: "Pose structured clarifying questions with concrete examples to establish system boundaries."
        },
        {
          stage: "3. Visual Mapping",
          action: "Step-by-Step Flowchart",
          detail: "Document expected inputs, outputs, error conditions, and SLAs in a clear reference document."
        },
        {
          stage: "4. Consensus Signoff",
          action: "Milestone Agreement",
          detail: "Obtain mutual confirmation from client stakeholders before handoff to technical teams."
        }
      ],
      resolutionTakeaway: "Prevents rework and builds trust by bridging the divide between business intent and technical realities."
    },
    {
      id: "workflow-optimization",
      tag: "Process Rigor",
      title: "Recurring Operational Bottleneck in Ticket Handling",
      context: "Support queries regarding recurring authentication resets are taking disproportionate team bandwidth.",
      steps: [
        {
          stage: "1. Data Audit",
          action: "Pattern Identification",
          detail: "Group 30 days of resolution logs to identify repetitive manual intervention points."
        },
        {
          stage: "2. Standardized Playbook",
          action: "Self-Service SOP & Canned Guides",
          detail: "Draft clear, verified step-by-step diagnostic checklists for common failure modes."
        },
        {
          stage: "3. Team Synchronization",
          action: "Knowledge Transfer",
          detail: "Train team on standardized triage pathways so every client receives consistent, high-speed support."
        },
        {
          stage: "4. Continuous Feedback",
          action: "Impact Measurement",
          detail: "Monitor resolution velocity and client feedback to iteratively refine documentation."
        }
      ],
      resolutionTakeaway: "Demonstrates proactive initiative, structured documentation, and long-term process optimization."
    }
  ];

  const currentScenario = scenarios[selectedScenarioIndex];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareCheck':
        return <MessageSquareCheck className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
      default:
        return <MessageSquareCheck className="w-5 h-5 text-blue-700 dark:text-blue-400" />;
    }
  };

  return (
    <section id="why-me" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why I Can Add Value
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A combination of customer communication rigor, technical understanding, and reliable execution for corporate workflows.
          </p>
        </div>

        {/* 6 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VALUE_CARDS.map((card, index) => (
            <div 
              key={card.id}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm card-modern-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400 dark:text-slate-600">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>Practical Workplace Quality</span>
              </div>
            </div>
          ))}
        </div>

        {/* Out-of-the-Box Modern Feature: Interactive Problem Resolution Simulation */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm card-modern-hover">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-1">
                <Workflow className="w-3.5 h-3.5" />
                <span>Modern Systems Thinking</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                How I Think: Interactive Scenario Resolution Walkthrough
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Select a real-world enterprise situation to see how I deconstruct and resolve problems systematically.
              </p>
            </div>

            {/* Scenario Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {scenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => setSelectedScenarioIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedScenarioIndex === idx
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Scenario 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Scenario Card */}
          <div className="space-y-6">
            
            {/* Context Header */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/50">
                  {currentScenario.tag}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {currentScenario.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                "{currentScenario.context}"
              </p>
            </div>

            {/* Step-by-Step Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentScenario.steps.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 block mb-1">
                      {step.stage}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                      {step.action}
                    </h5>
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 text-[10px] text-slate-400">
                    <span>Stage verified</span>
                    <ArrowRight className="w-2.5 h-2.5 ml-auto text-blue-600" />
                  </div>
                </div>
              ))}
            </div>

            {/* Takeaway Banner */}
            <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-slate-700 dark:text-slate-300">
                <strong className="text-blue-800 dark:text-blue-300">Strategic Takeaway:</strong> {currentScenario.resolutionTakeaway}
              </span>
              <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400">
                Siddharth's Problem-Solving Standard
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
