"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { CopySlash as Code, Server, Cloud, BrainCircuit, Activity, LineChart, ShieldAlert, Cpu } from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex flex-col justify-center items-center text-center px-4 mt-12 z-10">
        <motion.div
          className="absolute inset-0 bg-accent-cyan/15 rounded-[100%] blur-[120px] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold tracking-tighter mb-4 text-glow-cyan text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          /skills
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-white/50 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Tools I build with. Systems I think in."
        </motion.p>
      </section>

      {/* Skill Categories */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Category 1: Languages */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
            <GlassCard glowColor="cyan" hoverEffect className="p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Code className="text-accent-cyan" /> Core Languages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Python", val: 90, color: "bg-accent-cyan" },
                  { name: "C++", val: 75, color: "bg-accent-violet" },
                  { name: "Java", val: 65, color: "bg-accent-amber" },
                ].map((lang) => (
                  <div key={lang.name} className="bg-space-900 border border-white/10 rounded-lg p-5">
                    <div className="flex justify-between items-end mb-3">
                      <span className="font-bold text-lg">{lang.name}</span>
                      <span className="text-xs font-mono text-white/50">{lang.val}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className={`h-full ${lang.color} relative overflow-hidden`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-[5px] translate-x-1/2"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Category 2: Backend & Systems */}
          <motion.div variants={itemVariants}>
            <GlassCard glowColor="violet" hoverEffect className="h-full p-8 flex flex-col justify-between group">
              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Server className="text-accent-violet group-hover:animate-pulse" /> Backend & Systems
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['FastAPI', 'Flask', 'REST APIs', 'Distributed Systems', 'System Design', 'Microservices', 'PostgreSQL'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 hover:border-accent-violet/40 hover:bg-accent-violet/10 transition-colors rounded-md text-sm font-mono text-white/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4 italic border-l-2 border-accent-violet/50 pl-3">
                "I design backend architectures that prioritize scalability, fault tolerance, and clean API contracts."
              </p>
            </GlassCard>
          </motion.div>

          {/* Category 3: Cloud & DevOps */}
          <motion.div variants={itemVariants}>
            <GlassCard glowColor="amber" hoverEffect className="h-full p-8 group">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Cloud className="text-accent-amber" /> Cloud & DevOps
              </h3>
              
              <div className="space-y-6 relative">
                <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-white/10"></div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-space-900 border border-accent-amber/50 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-accent-amber"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white/80 mb-2">AWS Services</h4>
                  <div className="flex flex-wrap gap-2 group-hover:text-white/90 transition-colors">
                    {['EC2', 'S3', 'RDS', 'EKS', 'ASG', 'ALB', 'CodeDeploy'].map(s => (
                      <span key={s} className="text-xs font-mono bg-accent-amber/10 text-accent-amber/90 px-2 py-0.5 rounded border border-accent-amber/20 hover:scale-105 transition-transform cursor-help" title={`Used for ${s} workloads`}>{s}</span>
                    ))}
                  </div>
                </div>

                <div className="relative pl-8">
                   <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-space-900 border border-white/30 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white/80 mb-2">Containers</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/10">Docker</span>
                    <span className="text-xs font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/10">Kubernetes</span>
                  </div>
                </div>

                <div className="relative pl-8">
                   <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-space-900 border border-white/30 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  </div>
                  <h4 className="text-sm font-bold text-white/80 mb-2">CI/CD</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/10">GitHub Actions</span>
                    <span className="text-xs font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/10">CodeDeploy</span>
                    <span className="text-xs font-mono bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/10">PM2</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Category 4: Data & Machine Learning */}
          <motion.div variants={itemVariants}>
            <GlassCard glowColor="default" hoverEffect className="h-full p-8 group">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <BrainCircuit className="text-white group-hover:text-accent-cyan transition-colors" /> Data & Machine Learning
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Hugging Face'].map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-space-800 border border-white/5 rounded-full text-xs font-medium text-white/90">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3 font-mono">Specialized In</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/30"></div><span className="text-sm text-white/70">Isolation Forest</span></div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/30"></div><span className="text-sm text-white/70">KNN</span></div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/30"></div><span className="text-sm text-white/70">Random Forest</span></div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 shadow-[0_0_5px_rgba(0,240,255,0.5)]"></div><span className="text-sm text-white">Reinforcement Learning</span></div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Category 5 & 6 Column */}
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <GlassCard glowColor="cyan" hoverEffect className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Activity className="text-accent-cyan" /> Streaming & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 border border-accent-cyan/30 text-accent-cyan/90 bg-accent-cyan/5 rounded-full text-sm">LiveKit</span>
                  <span className="px-3 py-1 border border-white/10 text-white/70 bg-white/5 rounded-full text-sm">Redis</span>
                  <span className="px-3 py-1 border border-white/10 text-white/70 bg-white/5 rounded-full text-sm">Aurora PostgreSQL</span>
                  <span className="px-3 py-1 border border-white/10 text-white/70 bg-white/5 rounded-full text-sm">PM2</span>
                  <span className="px-3 py-1 border border-white/10 text-white/70 bg-white/5 rounded-full text-sm">CDN Architecture</span>
                  <span className="px-3 py-1 border border-white/10 text-white/70 bg-white/5 rounded-full text-sm">Backblaze B2</span>
                  <span className="px-3 py-1 border border-white/10 text-white/70 bg-white/5 rounded-full text-sm">BunnyCDN</span>
                  <span className="px-3 py-1 border border-white/10 text-white/70 bg-white/5 rounded-full text-sm">BlazingCDN</span>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard glowColor="amber" hoverEffect className="p-8 flex-grow">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <LineChart className="text-accent-amber" /> Visualization & Dashboards
                </h3>
                <div className="flex justify-between items-center bg-space-900 border border-white/10 rounded-lg p-5">
                  <span className="text-white/80 font-medium">Streamlit</span>
                  <span className="text-white/80 font-medium">Matplotlib</span>
                  <span className="text-white/80 font-medium">Seaborn</span>
                  <span className="text-white/80 font-medium">Plotly</span>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Architecture Philosophy Section */}
       <section className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-0 overflow-hidden border-white/20 bg-space-800/40 relative group">
            <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none"></div>
            
            <div className="p-8 border-b border-white/10 relative z-10 flex items-center gap-4">
              <Cpu size={32} className="text-white" />
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">How I Think About Systems</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10 bg-space-900/40">
              <div className="p-8 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded bg-accent-violet/10 flex items-center justify-center border border-accent-violet/20">
                    <ShieldAlert size={16} className="text-accent-violet" />
                  </div>
                  <h3 className="text-lg font-bold">Resilience First</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  "Every system I build assumes failure. Auto-scaling, health checks, rollback — these aren't features, they're foundations."
                </p>
              </div>
              
              <div className="p-8 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 rounded bg-accent-amber/10 flex items-center justify-center border border-accent-amber/20">
                    <Activity size={16} className="text-accent-amber" />
                  </div>
                  <h3 className="text-lg font-bold">Cost-Conscious</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  "Cloud doesn't have to be expensive. I've cut storage costs by 60% by choosing the right tools for the job."
                </p>
              </div>

              <div className="p-8 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 rounded bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/20">
                    <Cloud size={16} className="text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-bold">Zero-Downtime</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  "Deployments should be invisible to users. My pipelines ensure no request is ever dropped during an update."
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
       </section>

    </div>
  );
}
