"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Copy, Check, Mail, Linkedin, Github, Phone, Send } from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] mt-20 relative px-4 pb-20">
      {/* Dynamic Orbs background for Contact - rotating slowly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-accent-cyan/20 rounded-full blur-[120px]"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "bottom right" }}
        />
        <motion.div
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent-amber/20 rounded-full blur-[100px]"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "bottom left" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[30%] w-[700px] h-[700px] bg-accent-violet/15 rounded-full blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto flex flex-col items-center max-w-4xl pt-16 z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-mono font-bold tracking-tighter mb-6 text-center text-glow-cyan"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's Build Something
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-white/60 text-center max-w-2xl mb-16 italic"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          "Whether it's distributed systems, cloud infrastructure, or something entirely new — I'm always open to interesting problems."
        </motion.p>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GlassCard glowColor="cyan" hoverEffect className="cursor-pointer group flex flex-col items-center text-center p-6" onClick={() => copyToClipboard('mohitrajdeo16deoghar@gmail.com', 'email')}>
            <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4 group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div className="text-white font-medium mb-1 truncate w-full text-sm">mohitrajdeo16deoghar@gmail.com</div>
            <div className="text-xs text-white/50 flex items-center gap-1 group-hover:text-accent-cyan transition-colors">
              {copiedEmail ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Click to copy</>}
            </div>
          </GlassCard>

          <a href="https://linkedin.com/in/mohit-raj-deo/" target="_blank" rel="noopener noreferrer">
             <GlassCard glowColor="cyan" hoverEffect className="h-full group flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </div>
              <div className="text-white font-medium mb-1 truncate w-full text-sm">linkedin.com/in/mohit-raj-deo/</div>
              <div className="text-xs text-white/50 flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                Opens current tab
              </div>
            </GlassCard>
          </a>

          <a href="https://github.com/MOHITRAJDEO12345" target="_blank" rel="noopener noreferrer">
             <GlassCard glowColor="cyan" hoverEffect className="h-full group flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Github size={20} />
              </div>
              <div className="text-white font-medium mb-1 truncate w-full text-sm">github.com/MOHITRAJDEO12345</div>
              <div className="text-xs text-white/50 flex items-center gap-1 group-hover:text-white transition-colors">
                Opens current tab
              </div>
            </GlassCard>
          </a>

          <GlassCard glowColor="cyan" hoverEffect className="cursor-pointer group flex flex-col items-center text-center p-6" onClick={() => copyToClipboard('+91 9304236015', 'phone')}>
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-4 group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </div>
            <div className="text-white font-medium mb-1 truncate w-full text-sm">+91 9304236015</div>
            <div className="text-xs text-white/50 flex items-center gap-1 group-hover:text-green-400 transition-colors">
              {copiedPhone ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Click to copy</>}
            </div>
          </GlassCard>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <GlassCard className="p-8 md:p-10 border-white/20 bg-space-800/40">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/70 font-mono">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/70 font-mono">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm text-white/70 font-mono">Subject</label>
                <select 
                  id="subject" 
                  className="bg-space-800 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all font-sans appearance-none"
                >
                  <option value="internship">Internship Opportunity</option>
                  <option value="collaboration">Project Collaboration</option>
                  <option value="freelance">Freelance Work</option>
                  <option value="hi">Just Saying Hi</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-white/70 font-mono">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="bg-white/5 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-accent-cyan/50 focus:bg-white/10 transition-all font-sans resize-none"
                  placeholder="How can we build together?"
                ></textarea>
              </div>

              <button 
                type="button"
                className="mt-4 py-4 bg-white/5 border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan rounded-md font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                [Send Message →] <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
