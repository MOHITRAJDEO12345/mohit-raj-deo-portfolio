"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex flex-col justify-center items-center text-center px-4 mt-12 z-10">
        <motion.div
          className="absolute inset-0 bg-accent-amber/10 rounded-[100%] blur-[120px] pointer-events-none -translate-y-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold tracking-tighter mb-4 text-glow-amber text-accent-amber"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          /experience
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-white/50 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Real systems. Real infrastructure. Real impact."
        </motion.p>
      </section>

      <section className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Glass Mega-Card for Internship */}
          <GlassCard className="p-0 overflow-hidden border-white/20 bg-space-800/40 backdrop-blur-xl group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-amber"></div>
            
            {/* Header */}
            <div className="p-8 border-b border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none"></div>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-2 font-heading">Eduniketan Private Limited (TheEduCode)</h2>
                  <div className="text-xl text-white/70 font-medium mb-4">Software Engineering Intern</div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm font-mono text-white/50">
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                      October 2025 – Present
                    </span>
                    <span className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Remote / India
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-md font-mono text-sm shadow-[0_0_15px_rgba(34,197,94,0.1)] self-start">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  ● ACTIVE
                </div>
              </div>
            </div>

            {/* Project Cards Inside Mega Card */}
            <div className="p-8 space-y-8 bg-space-900/50">
              
              {/* Project 1 */}
              <div className="relative border border-accent-cyan/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-cyan rounded-l-xl"></div>
                <h3 className="text-xl font-bold mb-4 text-white">Distributed Code Execution Platform</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-mono text-accent-cyan mb-2">/ The Problem</h4>
                    <p className="text-sm text-white/60">Single-server code execution couldn't handle concurrent users — high latency, frequent timeouts, zero fault tolerance.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-accent-cyan mb-2">/ What I Built</h4>
                    <p className="text-sm text-white/70">A distributed compilation system using Judge0 CE with Aurora DB for persistent storage, Redis for caching and job queue management, EC2 Auto Scaling Groups for elastic compute, and Application Load Balancer for traffic distribution.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 mb-6 py-4 border-y border-white/5">
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-cyan font-bold">~40%</span>
                    <span className="text-xs text-white/50">latency reduction</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-cyan font-bold">2x</span>
                    <span className="text-xs text-white/50">concurrent capacity</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-cyan font-bold">Zero</span>
                    <span className="text-xs text-white/50">single points of failure</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/40">
                  <span className="px-2 py-1 bg-black/40 rounded">Judge0 CE</span>
                  <span className="px-2 py-1 bg-black/40 rounded">Aurora PostgreSQL</span>
                  <span className="px-2 py-1 bg-black/40 rounded">Redis</span>
                  <span className="px-2 py-1 bg-black/40 rounded">ASG</span>
                  <span className="px-2 py-1 bg-black/40 rounded">ALB</span>
                  <span className="px-2 py-1 bg-black/40 rounded">EC2</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="relative border border-accent-violet/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-violet rounded-l-xl"></div>
                <h3 className="text-xl font-bold mb-4 text-white">Self-Hosted Backend Platform (Supabase Alternative)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-mono text-accent-violet mb-2">/ The Problem</h4>
                    <p className="text-sm text-white/60">Using managed Supabase with AWS S3 storage was expensive and created vendor lock-in.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-accent-violet mb-2">/ What I Built</h4>
                    <p className="text-sm text-white/70">A self-hosted backend platform connecting Supabase REST layer to Aurora DB, replacing S3 with Backblaze B2 for object storage, and replicating the functional dashboard using SSH tunneling for secure access.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 mb-6 py-4 border-y border-white/5">
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-violet font-bold">~60%</span>
                    <span className="text-xs text-white/50">cloud storage savings</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-violet font-bold">Full</span>
                    <span className="text-xs text-white/50">API compatibility</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-violet font-bold">Complete</span>
                    <span className="text-xs text-white/50">dashboard replicated</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/40">
                  <span className="px-2 py-1 bg-black/40 rounded">Aurora</span>
                  <span className="px-2 py-1 bg-black/40 rounded">Backblaze B2</span>
                  <span className="px-2 py-1 bg-black/40 rounded">Supabase REST</span>
                  <span className="px-2 py-1 bg-black/40 rounded">SSH Tunneling</span>
                </div>
              </div>

              {/* Project 3 */}
              <div className="relative border border-accent-amber/20 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-amber rounded-l-xl"></div>
                <h3 className="text-xl font-bold mb-4 text-white">CI/CD Pipeline & Deployment Automation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-mono text-accent-amber mb-2">/ The Problem</h4>
                    <p className="text-sm text-white/60">Manual deployments were slow, error-prone, and caused downtime during updates.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-accent-amber mb-2">/ What I Built</h4>
                    <p className="text-sm text-white/70">End-to-end automated deployment pipeline — code push to GitHub triggers CodeDeploy, which rolls updates across Auto Scaling Group instances running PM2 in cluster mode, with health checks and automatic rollback.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 mb-6 py-4 border-y border-white/5">
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-amber font-bold">Zero</span>
                    <span className="text-xs text-white/50">downtime deployments</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-amber font-bold">100%</span>
                    <span className="text-xs text-white/50">manual release elimination</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-accent-amber font-bold">Auto</span>
                    <span className="text-xs text-white/50">rollback on failure</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/40">
                  <span className="px-2 py-1 bg-black/40 rounded">GitHub Actions</span>
                  <span className="px-2 py-1 bg-black/40 rounded">CodeDeploy</span>
                  <span className="px-2 py-1 bg-black/40 rounded">ASG</span>
                  <span className="px-2 py-1 bg-black/40 rounded">PM2 Cluster</span>
                  <span className="px-2 py-1 bg-black/40 rounded">EC2</span>
                </div>
              </div>

              {/* Project 4 */}
              <div className="relative border border-green-500/30 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="absolute top-4 right-4 text-xs font-mono bg-green-500/20 text-green-400 px-3 py-1 rounded border border-green-500/30">
                  IN DEVELOPMENT
                </div>
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500 rounded-l-xl"></div>
                <h3 className="text-xl font-bold mb-4 text-white pr-32">EduLive — Distributed Streaming Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-mono text-green-400/80 mb-2">/ The Vision</h4>
                    <p className="text-sm text-white/60">A scalable live-streaming platform for educational content delivery.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-green-400/80 mb-2">/ What I'm Building</h4>
                    <p className="text-sm text-white/70">Distributed LiveKit media servers deployed on AWS EKS (Kubernetes), with Backblaze B2 for recording storage and BunnyCDN + BlazingCDN for global content delivery with minimal latency.</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 mb-6 py-4 border-y border-white/5">
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-green-400 font-bold">500+</span>
                    <span className="text-xs text-white/50">projected capacity</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-green-400 font-bold">Global</span>
                    <span className="text-xs text-white/50">CDN delivery</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-mono text-green-400 font-bold">Auto</span>
                    <span className="text-xs text-white/50">scaling K8s pods</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/40">
                  <span className="px-2 py-1 bg-black/40 rounded">LiveKit</span>
                  <span className="px-2 py-1 bg-black/40 rounded">AWS EKS</span>
                  <span className="px-2 py-1 bg-black/40 rounded">Kubernetes</span>
                  <span className="px-2 py-1 bg-black/40 rounded">BunnyCDN</span>
                  <span className="px-2 py-1 bg-black/40 rounded">BlazingCDN</span>
                  <span className="px-2 py-1 bg-black/40 rounded">Backblaze B2</span>
                </div>
              </div>

            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
}
