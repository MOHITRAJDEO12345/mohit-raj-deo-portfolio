"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex flex-col justify-center items-center -mt-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-sm text-white/50 mb-6 flex items-center"
        >
          {"> initializing portfolio..."} <span className="w-2 h-4 bg-accent-cyan ml-2 animate-pulse" />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-accent-cyan mb-4"
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
          "I build systems that scale, deploy themselves, and don't go down."
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 relative z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-white/10 glass-card-hover border border-accent-cyan/50 text-white rounded-md font-medium text-glow-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            [View My Work →]
          </Link>
          <a
            href="/Mohit_Raj_Deo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white/20 glass-card-hover text-white rounded-md font-medium hover:border-white transition-colors cursor-pointer"
          >
            [Download Resume]
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <span className="text-xs tracking-widest uppercase mb-2">scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats Bar */}
      <section className="w-full border-y border-white/10 bg-white/5 backdrop-blur-sm py-8 relative z-10 mt-[15vh]">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-8 text-center divide-white/10 lg:divide-x interactive">
          {[
            { value: "~40%", label: "Latency Reduction Achieved" },
            { value: "~60%", label: "Cloud Cost Savings" },
            { value: "500+", label: "Concurrent Streams" },
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

      {/* Featured Work Preview */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold">Featured Systems</h2>
          <Link href="/projects" className="text-accent-cyan hover:underline hidden sm:block interactive">
            [See All Projects →]
          </Link>
        </div>
        
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x">
          <Link href="/projects" className="min-w-[300px] md:min-w-[400px] snap-center block">
            <GlassCard className="h-full hover:-translate-y-2 hover:border-accent-cyan/40 transition-all cursor-pointer group flex-shrink-0">
              <div className="h-48 bg-space-800 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-accent-cyan/20">
                <span className="font-mono text-white/30 text-sm group-hover:text-accent-cyan/50 transition-colors">{"<terminal_preview />"}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent opacity-60"></div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent-cyan transition-colors">Distributed Code Execution</h3>
              <p className="text-white/60 text-sm">A scalable platform executing untrusted code with zero-downtime.</p>
            </GlassCard>
          </Link>

          <Link href="/projects" className="min-w-[300px] md:min-w-[400px] snap-center block">
            <GlassCard className="h-full hover:-translate-y-2 hover:border-accent-amber/40 transition-all cursor-pointer group flex-shrink-0">
              <div className="h-48 bg-space-800 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-accent-amber/20">
                <span className="font-mono text-white/30 text-sm group-hover:text-accent-amber/50 transition-colors">{"[dashboard_prototype]"}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent opacity-60"></div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent-amber transition-colors">AI System Monitoring (Patent)</h3>
              <p className="text-white/60 text-sm">Real-time anomaly detection preventing compute waste.</p>
            </GlassCard>
          </Link>

          <Link href="/projects" className="min-w-[300px] md:min-w-[400px] snap-center block">
            <GlassCard className="h-full hover:-translate-y-2 hover:border-accent-violet/40 transition-all cursor-pointer group flex-shrink-0">
              <div className="h-48 bg-space-800 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-accent-violet/20">
                <span className="font-mono text-white/30 text-sm group-hover:text-accent-violet/50 transition-colors">{"{stream_node_cluster}"}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-space-900 to-transparent opacity-60"></div>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-accent-violet transition-colors">EduLive Streaming Infra</h3>
              <p className="text-white/60 text-sm">Distributed LiveKit media servers on AWS EKS.</p>
            </GlassCard>
          </Link>
        </div>
        
        <Link href="/projects" className="text-accent-cyan hover:underline block text-center sm:hidden mt-4 interactive">
          [See All Projects →]
        </Link>
      </section>
    </div>
  );
}
