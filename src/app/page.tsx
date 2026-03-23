"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowDown,
  MonitorPlay,
  Cloud,
  BrainCircuit,
  Activity,
  Pickaxe,
  ExternalLink,
  Database,
  Cpu,
  ShieldCheck,
  Github,
  Server,
  LineChart,
  ShieldAlert,
  GraduationCap,
  Award,
  CheckCircle2,
  CopySlash as Code
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const roles = [
  "Backend Engineer",
  "Distributed Systems Architect",
  "Cloud Infrastructure Builder",
  "AI/ML Practitioner",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const journeySteps = [
    { date: "Aug 2023", title: "Started B.Tech CSE at LPU (CGPA: 9.09)", description: "Began university education and foundational engineering concepts." },
    { date: "Mar 2025", title: "Built AI System Monitoring Platform", description: "Created ML-powered monitoring system detecting compute waste." },
    { date: "Jun 2025", title: "Patent Published (Indian Patent Office)", description: "Patent #202511089783 published for real-time monitoring platform." },
    { date: "Jul 2025", title: "AWS & Cloud Computing Certifications", description: "Validated cloud architecture capabilities with official credentials." },
    { date: "Aug 2025", title: "Started Polypharmacy Optimization Research", description: "Applied advanced RL techniques to healthcare interaction models." },
    { date: "Oct 2025", title: "Joined TheEduCode as Software Engineering Intern", description: "Started working on production distributed systems." },
    { date: "Present", title: "Engineering EduLive Streaming Infrastructure", description: "Building distributed LiveKit media servers on AWS EKS." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center py-20 px-6 gap-12 overflow-hidden section-blob">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-mono text-sm text-white/50 mb-6 flex items-center justify-center lg:justify-start"
          >
            {"> initializing master_terminal..."} <span className="w-2 h-4 bg-accent-cyan ml-2 animate-pulse" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-accent-cyan mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            MOHIT RAJ DEO
          </motion.h1>

          <motion.div
            className="h-8 mb-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              key={roleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-accent-violet font-mono"
            >
              {roles[roleIndex]}
            </motion.div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            "Architecting resilient systems that scale, self-heal, and drive impact."
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 relative z-20 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-white/10 glass-card-hover border border-accent-cyan/50 text-white rounded-md font-medium text-glow-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)] text-center"
            >
              [Explore System Ops ↓]
            </a>
            <a
              href="/Mohit_Raj_Deo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/20 glass-card-hover text-white rounded-md font-medium hover:border-white transition-colors cursor-pointer text-center"
            >
              [Download Resume]
            </a>
          </motion.div>
        </div>

        {/* Hero Photo with Futuristic Frame */}
        <motion.div
          className="flex-1 relative max-w-md w-full aspect-square"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Decorative Rings */}
          <div className="absolute inset-0 border-2 border-accent-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border border-accent-violet/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          {/* Scanning Beam */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent z-20 opacity-50"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <GlassCard className="w-full h-full p-2 border-accent-cyan/30 rounded-full overflow-hidden relative group" hoverEffect>
            <div className="absolute inset-0 bg-accent-cyan/5 group-hover:bg-accent-cyan/10 transition-colors z-10 pointer-events-none" />
            <img
              src="/avatar.jpeg"
              alt="Mohit Raj Deo"
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
            />
            {/* HUD Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 text-[10px] font-mono text-accent-cyan/40">
              <div className="absolute top-10 left-10">SRVC_ID: MRD_9.09</div>
              <div className="absolute bottom-10 right-10">LOC: LPU_NODES</div>
              <div className="absolute top-1/2 left-4 -translate-y-1/2 [writing-mode:vertical-rl] tracking-[1em]">SYSTEM_ADMIN</div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span className="text-xs tracking-widest uppercase mb-2">scroll to explore systems</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-12 space-y-6 text-white/80 leading-relaxed text-lg text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">The Person Behind the Systems</h2>
            <p className="text-xl text-white/90">
              I'm Mohit Raj Deo — an engineer obsessed with building systems that are resilient, scalable, and self-healing.
            </p>
            <p>
              I don't just write code — I architect infrastructure. From building distributed platforms that cut latency by 40%, to engineering backend systems that reduce cloud costs by 60%, I focus on systems that solve real problems at real scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              {[
                { icon: Pickaxe, label: "System Design", color: "text-accent-amber" },
                { icon: Cloud, label: "Cloud Architecture", color: "text-accent-cyan" },
                { icon: BrainCircuit, label: "AI Research", color: "text-accent-violet" },
                { icon: MonitorPlay, label: "Infra Buildouts", color: "text-green-400" },
              ].map((interest, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                  <interest.icon size={18} className={interest.color} />
                  <span className="text-sm font-medium">{interest.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="w-full border-y border-white/10 bg-white/5 backdrop-blur-sm py-8 relative z-10 mt-[15vh]">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-white/10 lg:divide-x interactive">
          {[
            { value: "~40%", label: "Latency Reduction Achieved" },
            { value: "~60%", label: "Cloud Cost Savings" },
            { value: "9.09", label: "CGPA" },
            { value: "1", label: "Published Patent" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="px-4"
            >
              <div className="text-3xl md:text-4xl font-mono text-accent-cyan font-bold mb-2 text-glow-cyan">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <motion.h2
          className="text-3xl font-mono text-center mb-16 text-glow-cyan text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {"< capabilities />"}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard glowColor="cyan" hoverEffect>
            <div className="text-accent-cyan mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><circle cx="12" cy="14" r="2"></circle><path d="M12 11v-1"></path><path d="M12 16v1"></path><path d="M15 14h1"></path><path d="M8 14h1"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Distributed Systems</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              I design and build systems that handle thousands of concurrent operations — from distributed code execution engines to real-time streaming infrastructure. I think in terms of fault tolerance, horizontal scaling, and job orchestration.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-accent-cyan/80">
              <span className="px-2 py-1 bg-white/5 rounded-md">Judge0 CE</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">Redis</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">Aurora</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">ASG</span>
            </div>
          </GlassCard>

          <GlassCard glowColor="amber" hoverEffect>
            <div className="text-accent-amber mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1856 20.2464 10.2831 18 10.0381C17.5 6.6917 14.6366 4 11.25 4C7.52208 4 4.5 7.02208 4.5 10.75C2.567 10.75 1 12.317 1 14.25C1 16.183 2.567 17.75 4.5 17.75"></path><path d="M8 19v-4"></path><path d="M14 19v-4"></path><path d="M12 21v-3"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Cloud Architecture & DevOps</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              I architect production infrastructure on AWS — auto-scaling groups, load balancers, container orchestration with EKS, and fully automated CI/CD pipelines. Zero-downtime deployments are my standard, not my goal.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-accent-amber/80">
              <span className="px-2 py-1 bg-white/5 rounded-md">AWS</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">Docker</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">Kubernetes</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">GitHub Actions</span>
            </div>
          </GlassCard>

          <GlassCard glowColor="violet" hoverEffect>
            <div className="text-accent-violet mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Backend Engineering</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              I build backend platforms from scratch — REST APIs, database architecture, storage abstraction layers, and authentication systems. I've replicated core Supabase functionality with custom infrastructure.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-accent-violet/80">
              <span className="px-2 py-1 bg-white/5 rounded-md">FastAPI</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">Flask</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">PostgreSQL</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">REST APIs</span>
            </div>
          </GlassCard>

          <GlassCard glowColor="default" hoverEffect>
            <div className="text-white mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path><path d="M12 12h10"></path><path d="m14 8-2 4 2 4"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">AI & Machine Learning</h3>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              From anomaly detection systems to reinforcement learning for healthcare optimization — I apply ML to solve real problems. My AI-powered monitoring system is a published patent.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-white/80">
              <span className="px-2 py-1 bg-white/5 rounded-md">Scikit-learn</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">TensorFlow</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">Isolation Forest</span>
              <span className="px-2 py-1 bg-white/5 rounded-md">RL</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-6 py-24 relative z-10">
        <motion.h2 
          className="text-3xl font-mono text-center mb-16 text-glow-amber text-accent-amber"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {"< operations_log />"}
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-0 overflow-hidden border-white/20 bg-space-800/40 backdrop-blur-xl group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-amber"></div>
            
            <div className="p-8 border-b border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white/90 mb-2 font-heading">Eduniketan Private Limited (TheEduCode)</h2>
                  <div className="text-lg text-white/70 font-medium mb-4">Software Engineering Intern</div>
                  <div className="flex flex-col sm:flex-row gap-4 text-xs font-mono text-white/50">
                    <span className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      Oct 2025 – Present
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      India (Remote)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-md font-mono text-xs shadow-[0_0_15px_rgba(34,197,94,0.1)] self-start">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  ● ACTIVE
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6 bg-space-900/50">
              {[
                {
                  title: "Distributed Code Execution Platform",
                  problem: "Single-server execution couldn't handle concurrent users — high latency.",
                  solution: "Built a distributed system using Judge0 CE, Aurora DB, Redis, and EC2 Auto Scaling.",
                  metrics: ["~40% latency reduction", "2x concurrent capacity"],
                  tech: ["Judge0", "Aurora", "Redis", "ASG", "ALB"],
                  color: "accent-cyan"
                },
                {
                  title: "Self-Hosted Backend Platform",
                  problem: "Managed Supabase/S3 costs were high and created vendor lock-in.",
                  solution: "Replicated core functionality with Backblaze B2 and SSH tunneling for secure access.",
                  metrics: ["~60% cloud savings", "Full compatability"],
                  tech: ["Backblaze B2", "PostgreSQL", "Supabase REST", "SSH"],
                  color: "accent-violet"
                }
              ].map((proj, idx) => (
                <div key={idx} className={`relative border border-${proj.color}/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors`}>
                  <div className={`absolute top-0 left-0 w-1 h-full bg-${proj.color} rounded-l-xl`}></div>
                  <h3 className="text-xl font-bold mb-4 text-white">{proj.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 text-sm leading-relaxed">
                    <p className="text-white/60"><span className="text-white/40 font-mono">/ Problem:</span> {proj.problem}</p>
                    <p className="text-white/70"><span className="text-white/40 font-mono">/ Solution:</span> {proj.solution}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs font-mono mb-4">
                    {proj.metrics.map((m, i) => (
                      <span key={i} className={`text-${proj.color} font-bold`}>{m}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono opacity-50">
                    {proj.tech.map(t => <span key={t} className="px-2 py-0.5 bg-black/40 rounded">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Projects Section (Patent & Research) */}
      <section id="projects" className="container mx-auto px-6 py-24 relative z-10">
        <motion.h2 
          className="text-3xl font-mono text-center mb-16 text-glow-cyan text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {"< research_lab />"}
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Patent Card */}
          <GlassCard className="p-0 overflow-hidden border-accent-amber/40 shadow-[0_0_30px_rgba(245,158,11,0.15)] group" hoverEffect glowColor="amber">
            <div className="bg-space-800/80 border-b border-accent-amber/20 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-accent-amber" size={24} />
                <span className="text-accent-amber font-mono text-sm font-bold">🏛️ PUBLISHED PATENT #202511089783</span>
              </div>
              <span className="text-xs font-mono text-white/40 uppercase">Oct 2025</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">AI-Powered Real-Time System Monitoring Platform</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Addresses real-time monitoring challenges using Isolation Forest and KNN models to proactively detect anomalies and memory leaks, preventing an estimated 15-20% compute waste.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <div className="text-accent-amber font-bold text-xl mb-1">~90%</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Effort Reduced</div>
                </div>
                <div className="bg-white/5 p-4 rounded-lg text-center">
                  <div className="text-accent-amber font-bold text-xl mb-1">20%</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-wider">Waste Saved</div>
                </div>
                <div className="col-span-2 flex items-center gap-3 px-4">
                   <div className="flex flex-wrap gap-2 text-[10px] font-mono opacity-60">
                    <span className="px-2 py-1 bg-white/5 rounded">Python</span>
                    <span className="px-2 py-1 bg-white/5 rounded">Scikit-learn</span>
                    <span className="px-2 py-1 bg-white/5 rounded">OS Metrics</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Research Card */}
          <GlassCard glowColor="violet" hoverEffect className="p-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Multi-Objective Polypharmacy Optimization</h3>
                <div className="text-accent-violet font-mono text-xs mb-6">REINFORCEMENT LEARNING RESEARCH</div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Balancing therapeutic efficacy against ADR risk and tolerability using Pareto-optimal treatments across MIMIC-III and DDInter datasets.
                </p>
                <div className="flex flex-wrap gap-2">
                   {['MIMIC-III', 'DDInter', 'RL', 'Pareto Opt.'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-accent-violet/10 text-accent-violet rounded-full text-[10px] font-bold border border-accent-violet/20">{tag}</span>
                   ))}
                </div>
              </div>
              <div className="md:w-1/3 p-4 bg-white/5 rounded-xl border border-white/10 text-xs font-mono space-y-3">
                <div className="text-white/40 border-b border-white/10 pb-2 flex justify-between">
                  <span>SYSTEM_FLOW</span>
                  <Activity size={12} />
                </div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></div> Patient Data</div>
                <div className="flex items-center gap-2 border-l-2 border-white/10 ml-[5px] pl-3 py-1 bg-white/5">RL Agent Analysis</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-amber"></div> Optimal Regimen</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Skills Arsenal */}
      <section id="skills" className="container mx-auto px-6 py-24 relative z-10">
        <motion.h2 
          className="text-3xl font-mono text-center mb-16 text-glow-cyan text-white/90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {"< arsenal />"}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Languages */}
          <GlassCard glowColor="cyan" className="p-6">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Code size={20} className="text-accent-cyan" /> Core</h3>
            <div className="space-y-4">
              {[{n: "Python", v: "90%"}, {n: "Java", v: "70%"}, {n: "C++", v: "75%"}].map(l => (
                <div key={l.n}>
                  <div className="flex justify-between text-xs mb-1 font-mono"><span>{l.n}</span><span>{l.v}</span></div>
                  <div className="h-1 w-full bg-white/5 rounded-full"><div className="h-full bg-accent-cyan" style={{width: l.v}}></div></div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Backend */}
          <GlassCard glowColor="violet" className="p-6">
             <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Server size={20} className="text-accent-violet" /> Backend</h3>
             <div className="flex flex-wrap gap-2 overflow-hidden max-h-40">
                {['FastAPI', 'Flask', 'Redis', 'PostgreSQL', 'Microservices', 'Supabase', 'SSH'].map(s => (
                  <span key={s} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono">{s}</span>
                ))}
             </div>
          </GlassCard>

          {/* Cloud */}
          <GlassCard glowColor="amber" className="p-6">
             <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><Cloud size={20} className="text-accent-amber" /> Cloud</h3>
             <div className="flex flex-wrap gap-2">
                {['AWS (EC2, S3, RDS, EKS)', 'Docker', 'Kubernetes', 'CI/CD', 'ASG', 'ALB'].map(s => (
                  <span key={s} className="px-2 py-1 bg-accent-amber/5 border border-accent-amber/20 text-accent-amber/80 rounded text-[10px] font-mono">{s}</span>
                ))}
             </div>
          </GlassCard>
        </div>

        {/* Philosophy Card */}
        <GlassCard className="p-8 border-white/10 bg-space-800/40 relative overflow-hidden group">
          <div className="absolute inset-0 grid-overlay opacity-10"></div>
          <div className="flex items-center gap-4 mb-8">
            <Cpu className="text-white" size={32} />
            <h3 className="text-2xl font-bold">Resilience-First Operating Philosophy</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono text-xs opacity-70">
            <div>
              <div className="text-accent-violet mb-2 font-bold">01_RESILIENCE</div>
              Every system assumes failure. Health checks and rollbacks are standard infrastructure requirements.
            </div>
            <div>
              <div className="text-accent-amber mb-2 font-bold">02_COST_OPTS</div>
              Infrastructure should be lean. I optimize for the right tool at the lowest cloud overhead.
            </div>
            <div>
              <div className="text-accent-cyan mb-2 font-bold">03_ZERO_DOWNTIME</div>
              Deployments should be invisible. PM2 clusters and ASG ensure services never drop a request.
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Education & Certs */}
      <section id="certifications" className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3"><GraduationCap className="text-accent-cyan" /> Academic Base</h2>
            <div className="space-y-6">
              <GlassCard glowColor="cyan" className="p-6 border-t-2 border-t-accent-cyan/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-white">Lovely Professional University</h3>
                    <div className="text-accent-cyan text-[10px] font-mono">B.Tech in CSE | 2023 - Present</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent-cyan font-mono">9.09</div>
                    <div className="text-[8px] text-white/30 uppercase tracking-tighter">CGPA</div>
                  </div>
                </div>
                <div className="text-[10px] text-white/50">Focus: Distributed Systems, Scalable Backend Architecture & AI Monitoring.</div>
              </GlassCard>
              <GlassCard glowColor="amber" className="p-6 border-t-2 border-t-accent-amber/50">
                 <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-white">Red Rose School</h3>
                    <div className="text-accent-amber text-[10px] font-mono">12th Science | 94%</div>
                  </div>
                  <span className="text-[10px] text-white/30 font-mono">2022</span>
                </div>
              </GlassCard>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3"><Award className="text-accent-violet" /> Verified Credentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { n: "Oracle Cloud Infrastructure 2025", p: "Oracle" },
                { n: "AWS Cloud Computing", p: "CipherSchool" },
                { n: "Cloud Foundations", p: "NPTEL" }
              ].map(c => (
                <GlassCard key={c.n} className="p-4 group">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 size={16} className="text-accent-violet" />
                    <h4 className="text-xs font-bold leading-tight">{c.n}</h4>
                  </div>
                  <div className="text-[10px] text-white/40">{c.p}</div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
