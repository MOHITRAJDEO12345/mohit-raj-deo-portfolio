"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Database, Cpu, Activity, ShieldCheck, Github, BrainCircuit } from "lucide-react";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex flex-col justify-center items-center text-center px-4 mt-12 z-10">
        <motion.div
          className="absolute inset-0 bg-accent-cyan/10 rounded-[100%] blur-[120px] pointer-events-none -translate-x-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-accent-violet/10 rounded-[100%] blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold tracking-tighter mb-4 text-glow-cyan text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          /projects
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-white/50 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "From concept to prototype to production"
        </motion.p>
      </section>

      {/* Patent Section */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-0 overflow-hidden border-accent-amber/40 shadow-[0_0_30px_rgba(245,158,11,0.15)] group" hoverEffect glowColor="amber">
            {/* Header Badge */}
            <div className="bg-space-800/80 border-b border-accent-amber/20 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-amber/5 to-transparent pointer-events-none"></div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-accent-amber/20 text-accent-amber rounded-lg">
                  <ShieldCheck size={24} />
                </span>
                <div>
                  <div className="text-accent-amber font-mono text-sm tracking-wider font-bold">🏛️ PUBLISHED PATENT — Indian Patent Office</div>
                  <div className="text-white/60 text-xs font-mono mt-1">Application No: 202511089783</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-md font-mono text-sm text-white/80 shrink-0">
                Oct 2025
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white group-hover:text-accent-amber transition-colors">
                AI-Powered Real-Time System Monitoring and Optimization Platform
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6 text-white/70 leading-relaxed">
                  <p>
                    This patented system addresses the critical challenge of real-time system monitoring in modern computing environments. Traditional monitoring approaches rely on manual log review and static thresholds — reactive by nature and unable to detect complex anomalies.
                  </p>
                  <p>
                    Our system integrates OS-level metric collection with machine learning models (Isolation Forest for anomaly detection, KNN for pattern classification) to provide proactive, intelligent monitoring. The system continuously analyzes CPU usage, memory allocation, disk I/O, and network metrics to identify anomalous behavior before it causes downtime.
                  </p>
                  <p>
                    The intelligent resource optimizer automatically identifies overutilized resources and provides actionable recommendations, reducing manual monitoring effort by approximately 90% and preventing an estimated 15-20% compute waste.
                  </p>
                  
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-accent-amber/80">
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">Python</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">Scikit-learn</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">Isolation Forest</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">KNN</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">Streamlit</span>
                    <span className="px-2 py-1 bg-white/5 rounded-md border border-white/5">OS Metrics</span>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  {/* Styled Mock Dashboard Concept */}
                  <div className="bg-space-900 border border-white/10 rounded-xl p-4 overflow-hidden shadow-2xl relative mb-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      <div className="ml-2 font-mono text-xs text-white/30">system_monitor_v2.0</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 flex-grow opacity-60">
                      <div className="bg-white/5 rounded p-3 flex flex-col justify-end">
                        <div className="text-xs text-white/40 mb-1">CPU Anomaly Score</div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-accent-cyan w-[15%]"></div>
                        </div>
                      </div>
                      <div className="bg-white/5 border border-accent-amber/30 rounded p-3 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 bg-accent-amber/10 animate-pulse"></div>
                        <div className="text-xs text-accent-amber z-10">Memory Leak Detected</div>
                        <div className="text-right text-lg font-mono text-accent-amber font-bold z-10">0.982</div>
                      </div>
                      <div className="col-span-2 bg-white/5 rounded p-3 h-24 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
                        <svg className="w-full h-full opacity-50 absolute bottom-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <polyline points="0,80 20,70 40,85 60,40 80,90 100,20" fill="none" stroke="var(--color-accent-amber)" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Impact Metrics Below Mockup */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="text-2xl font-mono font-bold text-accent-amber mb-1">~90%</div>
                      <div className="text-xs text-white/60">Reduction in manual monitoring effort</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <div className="text-2xl font-mono font-bold text-accent-amber mb-1">15-20%</div>
                      <div className="text-xs text-white/60">Compute waste prevented</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Research Project Section */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <motion.h2 
          className="text-2xl font-bold mb-8 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Activity className="text-accent-violet" />
          Research & Academic Systems
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard glowColor="violet" hoverEffect className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Multi-Objective Polypharmacy Optimization System</h3>
                <div className="text-sm font-mono text-white/50 mb-6">August – October 2025</div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-accent-violet/10 text-accent-violet rounded-full text-xs font-semibold uppercase tracking-wider border border-accent-violet/20">Reinforcement Learning</span>
                  <span className="px-3 py-1 bg-accent-cyan/10 text-accent-cyan rounded-full text-xs font-semibold uppercase tracking-wider border border-accent-cyan/20">Healthcare AI</span>
                  <span className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10">Multi-Objective Optimization</span>
                </div>
              </div>

              <div className="lg:w-1/3 w-full bg-space-900 border border-white/10 rounded-xl p-5 text-sm">
                <h4 className="font-bold mb-3 text-white/80 border-b border-white/10 pb-2">Datasets Integrated</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-white/90">MIMIC-III</span>
                    <span className="text-white/40 text-xs text-right">Clinical patient records</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/90">DDInter</span>
                    <span className="text-white/40 text-xs text-right">Drug interactions</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-white/90">SIDER</span>
                    <span className="text-white/40 text-xs text-right">Side effect resource</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white/70 leading-relaxed mb-10 space-y-4">
              <p>
                Polypharmacy — the simultaneous use of multiple drugs — affects millions of patients worldwide and creates exponentially complex interaction spaces that human clinicians cannot fully evaluate. This system uses reinforcement learning with Pareto-based multi-objective optimization to find drug regimens that balance three competing objectives: therapeutic efficacy, adverse drug reaction (ADR) risk, and patient tolerability.
              </p>
              <p>
                We integrated three large-scale healthcare datasets to create a comprehensive interaction model. The RL agent explores the combinatorial space of possible regimens and learns to identify Pareto-optimal treatment strategies.
              </p>
              <p>
                The functional prototype demonstrates multi-objective optimization logic with clinically relevant evaluation metrics, providing decision support for complex medication management scenarios.
              </p>
            </div>

            {/* Architecture Flow Diagram (CSS based) */}
            <div className="bg-space-800/50 rounded-lg p-6 overflow-x-auto">
              <div className="min-w-[700px] flex items-center justify-between font-mono text-xs text-white/80">
                <div className="flex flex-col items-center gap-2">
                  <Database size={24} className="text-white/50" />
                  <span>Patient Data</span>
                </div>
                <div className="h-[2px] w-12 bg-white/20 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-l-4 border-t-4 border-b-4 border-l-white/50 border-t-transparent border-b-transparent"></div></div>
                <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded border border-white/10">
                  <Cpu size={24} className="text-accent-cyan" />
                  <span>Interaction Model</span>
                </div>
                <div className="h-[2px] w-12 bg-white/20 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-l-4 border-t-4 border-b-4 border-l-white/50 border-t-transparent border-b-transparent"></div></div>
                <div className="flex flex-col items-center gap-2 p-4 bg-accent-violet/10 rounded-xl border border-accent-violet/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <BrainCircuit size={28} className="text-accent-violet" />
                  <span className="font-bold text-accent-violet">RL Agent</span>
                </div>
                <div className="h-[2px] w-12 bg-white/20 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-l-4 border-t-4 border-b-4 border-l-white/50 border-t-transparent border-b-transparent"></div></div>
                <div className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded border border-white/10">
                  <Activity size={24} className="text-accent-amber" />
                  <span>Pareto Opt.</span>
                </div>
                <div className="h-[2px] w-12 bg-white/20 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-l-4 border-t-4 border-b-4 border-l-white/50 border-t-transparent border-b-transparent"></div></div>
                <div className="flex flex-col items-center gap-2 text-glow-cyan text-white">
                  <ShieldCheck size={28} className="text-accent-cyan" />
                  <span className="font-bold">Regimens</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

    </div>
  );
}
