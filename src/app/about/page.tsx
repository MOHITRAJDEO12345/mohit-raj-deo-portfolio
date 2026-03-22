"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { MonitorPlay, Cloud, BrainCircuit, Activity, Pickaxe } from "lucide-react";

export default function About() {
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
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex flex-col justify-center items-center text-center px-4 mt-12 z-10">
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
          className="text-lg md:text-xl text-white/50 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "The person behind the systems"
        </motion.p>
      </section>

      {/* Bio Section */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            className="lg:col-span-4 lg:sticky top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-accent-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="route-avatar rotate-2 shadow-2xl overflow-hidden glass-card border-accent-cyan/30 border-2">
                <div className="aspect-[3/4] bg-space-800 flex items-center justify-center relative">
                  <div className="absolute inset-0 scanline opacity-30"></div>
                  <span className="font-mono text-white/20 rotate-90 scale-150 absolute right-4 tracking-widest leading-none select-none">M R D</span>
                 
                  <img src="/avatar.jpeg" alt="Mohit Raj Deo" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  <div className="w-full h-full bg-gradient-to-b from-space-800 to-space-900 border-4 border-space-900 m-2 flex items-center justify-center relative z-10">
                    <span className="text-white/20 font-mono text-sm [writing-mode:vertical-rl]">{"// SYS_ADMIN_PROFILE"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-8 space-y-6 text-white/80 leading-relaxed text-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-white/90">
              I'm Mohit Raj Deo — a Computer Science undergraduate at Lovely Professional University with a deep obsession for building systems that are resilient, scalable, and self-healing.
            </p>
            <p>
              I don't just write code — I architect infrastructure. From building distributed code execution platforms that handle concurrent workloads with 40% less latency, to engineering self-hosted backend platforms that cut cloud costs by 60%, I focus on systems that solve real problems at real scale.
            </p>
            <p>
              My work spans distributed systems, cloud infrastructure (AWS), real-time streaming, and applied AI/ML. I hold a published patent for an AI-powered system monitoring platform, and I'm currently engineering a distributed live-streaming infrastructure on Kubernetes.
            </p>
            <p>
              When I'm not building systems, I'm probably reading about system design patterns, exploring new cloud architectures, or thinking about how to make something fail-proof.
            </p>
            <p className="pl-4 border-l-2 border-accent-violet text-white italic font-medium">
              "I believe the best engineers don't just know how to build — they know why systems break."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 py-24 relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Journey So Far
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
                  <p className="text-white/60 text-sm">{step.description}</p>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Interests */}
      <section className="container mx-auto px-6 pb-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Pickaxe size={18} className="text-accent-amber" />
            <span className="text-sm font-medium">System Design</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Cloud size={18} className="text-accent-cyan" />
            <span className="text-sm font-medium">Cloud Architecture</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <BrainCircuit size={18} className="text-accent-violet" />
            <span className="text-sm font-medium">AI Research</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <Activity size={18} className="text-red-400" />
            <span className="text-sm font-medium">Problem Solving</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur border border-white/10 rounded-full hover:bg-white/10 transition-colors">
            <MonitorPlay size={18} className="text-green-400" />
            <span className="text-sm font-medium">Building Infra from Scratch</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
