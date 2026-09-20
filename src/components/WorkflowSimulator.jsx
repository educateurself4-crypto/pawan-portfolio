import React, { useState, useEffect } from 'react';
import { 
  Play, 
  RotateCcw, 
  Clock, 
  Database, 
  Cpu, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  Code, 
  ChevronRight, 
  Info,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { workflowSimulation } from '../data/portfolioData';

const iconMap = {
  Clock: Clock,
  Database: Database,
  Cpu: Cpu,
  ShieldAlert: ShieldAlert,
  Send: Send
};

export default function WorkflowSimulator() {
  const [activeStep, setActiveStep] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState('node-1');
  const [logs, setLogs] = useState([
    '[13:20:01] System ready. Ready for trigger simulation.'
  ]);

  const currentNode = workflowSimulation.nodes.find(n => n.id === selectedNodeId) || workflowSimulation.nodes[0];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(1);
    setSelectedNodeId('node-1');
    setLogs(['[SIMULATION STARTED] Initiating n8n execution pipeline...']);

    const sequence = [
      { step: 1, id: 'node-1', log: '[13:20:02] [Trigger] Cron schedule fired (every 4h). Initializing context payload.' },
      { step: 2, id: 'node-2', log: '[13:20:03] [RAG] Google Sheets DB queried: 14 unprocessed UPSC topic records retrieved.' },
      { step: 3, id: 'node-3', log: '[13:20:05] [LLM] OpenAI GPT-4 called: Generated bilingual MCQs with JSON schema validation.' },
      { step: 4, id: 'node-4', log: '[13:20:06] [Logic] Validation passed: Answer key verified, no missing schema fields.' },
      { step: 5, id: 'node-5', log: '[13:20:08] [Dispatch] Telegram Bot posted native interactive poll. Sheet status updated to PUBLISHED.' },
    ];

    sequence.forEach((item, index) => {
      setTimeout(() => {
        setActiveStep(item.step);
        setSelectedNodeId(item.id);
        setLogs(prev => [...prev, item.log]);

        if (index === sequence.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setLogs(prev => [...prev, '[SUCCESS] Workflow execution completed in 2.84s with 0 errors.']);
          }, 800);
        }
      }, (index + 1) * 1100);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setActiveStep(1);
    setSelectedNodeId('node-1');
    setLogs(['[RESET] Workflow state reset. Select any node or click Run Simulation.']);
  };

  return (
    <section id="workflow-simulator" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/70 border border-brand-800/60 text-xs font-mono text-brand-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>Interactive Architecture Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            n8n Automation <span className="gradient-text">Workflow Visualizer</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience the real-world architecture behind Pawan's autonomous AI publishing pipeline. 
            Click <strong className="text-brand-300">"Run Simulation"</strong> to watch data flow across nodes, or click any node to inspect raw JSON payloads.
          </p>
        </div>

        {/* Simulator Control Bar */}
        <div className="glass-card rounded-2xl p-4 sm:p-6 mb-8 border border-slate-800 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <h3 className="text-sm font-semibold text-white">{workflowSimulation.name}</h3>
                <p className="text-xs text-slate-400 font-mono">Current Step: {activeStep} of {workflowSimulation.nodes.length}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isRunning 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30 hover:scale-[1.02]'
                }`}
              >
                <Play className={`w-3.5 h-3.5 fill-white ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Executing Pipeline...' : 'Run Simulation'}</span>
              </button>

              <button
                onClick={resetSimulation}
                disabled={isRunning}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Node Flow Diagram Canvas */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[760px] gap-2 px-2">
              {workflowSimulation.nodes.map((node, idx) => {
                const IconComponent = iconMap[node.icon] || Cpu;
                const isSelected = selectedNodeId === node.id;
                const isActive = activeStep >= node.step;
                const isCurrentPulse = activeStep === node.step && isRunning;

                return (
                  <React.Fragment key={node.id}>
                    {/* Node Card */}
                    <div 
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`relative flex-1 cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-slate-850 border-2 border-brand-500 shadow-xl shadow-brand-500/20 scale-105' 
                          : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                      } ${isCurrentPulse ? 'ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-950 animate-pulse' : ''}`}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          isActive 
                            ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60' 
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}>
                          Step {node.step}
                        </span>
                        {isActive && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div className={`p-2 rounded-lg ${
                          isSelected ? 'bg-brand-500/20 text-brand-400' : 'bg-slate-800 text-slate-300'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-semibold text-white leading-tight">{node.title}</h4>
                      </div>

                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 font-sans">
                        {node.summary}
                      </p>

                      <div className="mt-2 text-[10px] font-mono text-brand-400/90 truncate">
                        {node.badge}
                      </div>
                    </div>

                    {/* Connector Arrow */}
                    {idx < workflowSimulation.nodes.length - 1 && (
                      <div className="flex items-center justify-center px-1 text-slate-600">
                        <ArrowRight className={`w-4 h-4 transition-colors ${
                          activeStep > node.step ? 'text-emerald-400 animate-pulse' : 'text-slate-600'
                        }`} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* Node Inspector & Live Log Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Node Inspector (Left) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4 text-brand-400" />
                <h4 className="text-sm font-semibold text-white font-mono">
                  Node Inspector: <span className="text-brand-300">{currentNode.title}</span>
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                {currentNode.type}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-slate-300 mb-1">Functional Architecture:</p>
                <p className="text-xs text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                  {currentNode.summary}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono text-slate-300">Simulated JSON Payload & Parameters:</span>
                  <span className="text-[10px] font-mono text-emerald-400">application/json</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto max-h-56">
                  <pre>{JSON.stringify(currentNode.details, null, 2)}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Live Execution Logs (Right) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
                  <h4 className="text-sm font-semibold text-white font-mono">Execution Log Trace</h4>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Auto-scrolling</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-2 max-h-52 overflow-y-auto">
                {logs.map((log, i) => (
                  <div 
                    key={i} 
                    className={`${
                      log.includes('[SUCCESS]') 
                        ? 'text-emerald-400 font-semibold' 
                        : log.includes('[Trigger]')
                        ? 'text-cyan-400'
                        : log.includes('[LLM]')
                        ? 'text-purple-400'
                        : log.includes('[Logic]')
                        ? 'text-amber-400'
                        : log.includes('[Dispatch]')
                        ? 'text-emerald-300'
                        : 'text-slate-400'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span>Failover Strategy: <strong className="text-slate-200">Exponential Backoff & Telegram Alerts</strong></span>
              <span className="font-mono text-emerald-400">99.9% Reliable</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
