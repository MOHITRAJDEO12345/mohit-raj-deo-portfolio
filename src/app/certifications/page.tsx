"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
          className="absolute inset-0 bg-accent-amber/10 rounded-[100%] blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold tracking-tighter mb-4 text-glow-amber text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          /certifications
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-white/50 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Verified knowledge. Proven fundamentals."
        </motion.p>
      </section>

      <section className="container mx-auto px-6 py-12 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-accent-cyan" /> Education
            </h2>
          </motion.div>

          {/* Education Card 1 */}
          <motion.div variants={itemVariants}>
            <GlassCard glowColor="cyan" hoverEffect className="h-full border-t-2 border-t-accent-cyan/50 flex flex-col justify-between p-8">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Lovely Professional University</h3>
                    <div className="text-accent-cyan text-sm font-mono mb-2">B.Tech in Computer Science & Engineering</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/50 font-mono">Present</div>
                    <div className="text-xs text-white/30 hidden sm:block">August 2023</div>
                  </div>
                </div>
                <div className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Jalandhar, Punjab
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <span className="text-white/60 text-sm">Cumulative Grade Point Average</span>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                    <circle cx="32" cy="32" r="28" stroke="var(--color-accent-cyan)" strokeWidth="4" fill="none" strokeDasharray="175" strokeDashoffset={175 - (175 * 90.9) / 100} className="transition-all duration-1000 ease-in-out" />
                  </svg>
                  <span className="absolute font-mono font-bold text-accent-cyan">9.09</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Education Card 2 */}
          <motion.div variants={itemVariants}>
            <GlassCard glowColor="amber" hoverEffect className="h-full border-t-2 border-t-accent-amber/50 flex flex-col justify-between p-8">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Red Rose School</h3>
                    <div className="text-accent-amber text-sm font-mono mb-2">12th with Science</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-white/50 font-mono">March 2022</div>
                    <div className="text-xs text-white/30 hidden sm:block">April 2020</div>
                  </div>
                </div>
                <div className="text-sm text-white/50 mb-6 flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Deoghar, Jharkhand
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                <span className="text-white/60 text-sm">Board Percentage Result</span>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none" />
                    <circle cx="32" cy="32" r="28" stroke="var(--color-accent-amber)" strokeWidth="4" fill="none" strokeDasharray="175" strokeDashoffset={175 - (175 * 94.0) / 100} className="transition-all duration-1000 ease-in-out" />
                  </svg>
                  <span className="absolute font-mono font-bold text-accent-amber">94%</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Award className="text-accent-violet" /> Certifications
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <GlassCard glowColor="violet" hoverEffect className="h-full flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/20 group-hover:border-accent-violet/50 transition-colors">
                    <span className="font-bold text-white text-xl">O</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 leading-snug">Oracle Cloud Infrastructure 2025 Foundations Associate</h3>
                  <p className="text-sm text-white/50 mb-6">Oracle</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-mono text-white/40">Sep 2025</span>
                  <div className="flex items-center gap-1 text-xs text-accent-violet/80 bg-accent-violet/10 px-2 py-1 rounded">
                    <CheckCircle2 size={12} /> Verified
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard glowColor="violet" hoverEffect className="h-full flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/20 group-hover:border-accent-violet/50 transition-colors">
                    <span className="font-bold text-white text-xl">C</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 leading-snug">Cloud Computing AWS</h3>
                  <p className="text-sm text-white/50 mb-6">CipherSchool</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-mono text-white/40">Jul 2025</span>
                  <div className="flex items-center gap-1 text-xs text-accent-violet/80 bg-accent-violet/10 px-2 py-1 rounded">
                    <CheckCircle2 size={12} /> Verified
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard glowColor="violet" hoverEffect className="h-full flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 border border-white/20 group-hover:border-accent-violet/50 transition-colors">
                    <span className="font-bold text-white text-xl">N</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 leading-snug">Cloud Computing</h3>
                  <p className="text-sm text-white/50 mb-6">NPTEL</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-mono text-white/40">Jun 2025</span>
                  <div className="flex items-center gap-1 text-xs text-accent-violet/80 bg-accent-violet/10 px-2 py-1 rounded">
                    <CheckCircle2 size={12} /> Verified
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
