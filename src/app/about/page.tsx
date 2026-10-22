"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MonitorPlay, Cloud, BrainCircuit, Activity, Pickaxe, Award, ShieldCheck, Database, Server } from "lucide-react";

export default function About() {
  const journeySteps = [
    { date: "Aug 2023", title: "Started B.Tech CSE at Lovely Professional University", description: "Began computer science engineering fundamentals, data structures, and distributed systems (CGPA: 9.09)." },
    { date: "Mar 2025", title: "Engineered AI System Monitoring Platform", description: "Built ML-powered anomaly detection using Isolation Forest and KNN on OS metrics." },
    { date: "Jun 2025", title: "Patent Published (Indian Patent Office)", description: "Patent #202511089783 officially published for AI-driven real-time system monitoring." },
    { date: "Jul 2025", title: "Cloud Certifications (Oracle, AWS, NPTEL)", description: "Validated deep cloud architecture fundamentals with verified credentials." },
    { date: "Aug 2025", title: "Multi-Objective Polypharmacy Optimization Research", description: "Applied Pareto-based Reinforcement Learning across clinical datasets (MIMIC-III, DDInter, SIDER)." },
    { date: "Oct 2025", title: "Software Engineer @ Eduniketan (TheEduCode)", description: "Architected distributed code execution sandboxes, self-hosted backend storage (Aurora + B2), and automated CI/CD." },
    { date: "Present", title: "Engineering EduLive Distributed Streaming Infrastructure", description: "Scaling LiveKit WebRTC media servers on AWS EKS with Kubernetes pod auto-scaling for 500+ streams." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex flex-col justify-center items-center text-center px-4 mt-12 z-10">
        <motion.div
          className="absolute inset-0 bg-accent-violet/10 rounded-[100%] blur-[120px] pointer-events-none translate-x-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold tracking-tighter mb-4 text-glow-cyan"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          about://mohit-raj-deo
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-white/50 italic max-w-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Architecting systems that scale, self-heal, and don't go down."
        </motion.p>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-amber rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden glass-card border border-white/20 p-2 bg-space-900/80">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                  <img
                    src="/avatar.jpeg"
                    alt="Mohit Raj Deo"
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-space-900 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-accent-cyan bg-space-900/80 backdrop-blur-md px-3 py-2 rounded-lg border border-accent-cyan/30">
                    <span>MOHIT RAJ DEO</span>
                    <span className="text-white/60">LPU_CSE_9.09</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 space-y-6 text-white/80 leading-relaxed text-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-mono mb-2">
              <ShieldCheck size={14} /> Systems Architect & Backend Engineer
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">
              I'm <span className="text-accent-cyan font-bold">Mohit Raj Deo</span> — a Computer Science undergraduate at Lovely Professional University with deep technical passion for high-concurrency backends, distributed systems, and cloud infrastructure.
            </p>
            <p>
              I don't just write code — I build production platforms. As a Software Engineer at <strong>Eduniketan Private Limited (TheEduCode)</strong>, I engineered our distributed code execution engine replacing single-server bottlenecks, reducing latency by <strong>~40%</strong> while doubling concurrent capacity with Redis caching and AWS Auto Scaling.
            </p>
            <p>
              I also designed a self-hosted Supabase alternative using <strong>Amazon Aurora (PostgreSQL)</strong> and <strong>Backblaze B2</strong>, slashing cloud storage overhead by <strong>~60%</strong> with zero downtime.
            </p>
            <p>
              In intellectual property, I hold a <strong>published patent at the Indian Patent Office (#202511089783)</strong> for an AI-powered system monitoring platform utilizing Isolation Forest and KNN on OS-level metrics to prevent compute waste and predict resource exhaustion.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border-l-4 border-accent-cyan text-white/90 italic font-mono text-base">
              "The best systems aren't just fast — they are mathematically isolated, resilient to partial failures, and designed to heal themselves under heavy production load."
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center font-mono text-glow-cyan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          &lt; trajectory_and_milestones /&gt;
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-accent-cyan/20 shadow-[0_0_8px_rgba(0,240,255,0.4)]"></div>

          {journeySteps.map((step, idx) => (
            <motion.div 
              key={idx}
              className={`relative flex items-center justify-between mb-8 md:mb-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-row`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-space-900 border-2 border-accent-cyan z-20 shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                <div className="absolute inset-0 bg-accent-cyan/50 rounded-full animate-ping"></div>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%] w-full">
                <GlassCard className="p-5 hover:border-accent-cyan/30 transition-colors">
                  <span className="font-mono text-accent-cyan text-sm mb-2 block">{step.date}</span>
                  <h3 className="text-lg font-bold text-white/90 mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="container mx-auto px-6 pb-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Pickaxe size={18} className="text-accent-amber" />
            <span className="text-sm font-medium">Distributed System Design</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Cloud size={18} className="text-accent-cyan" />
            <span className="text-sm font-medium">AWS Cloud Architecture</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <BrainCircuit size={18} className="text-accent-violet" />
            <span className="text-sm font-medium">Machine Learning Research</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Server size={18} className="text-green-400" />
            <span className="text-sm font-medium">High-Concurrency Backend APIs</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <MonitorPlay size={18} className="text-accent-cyan" />
            <span className="text-sm font-medium">Zero-Downtime CI/CD Pipelines</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
