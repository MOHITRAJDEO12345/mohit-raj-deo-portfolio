"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-space-900/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-mono font-bold tracking-tighter text-glow-cyan">
            MRD
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide transition-all relative group ${
                    isActive ? "text-accent-cyan" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-accent-cyan transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
            
            <a href="/Mohit_Raj_Deo_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm border border-white/20 rounded-md hover:border-accent-cyan hover:text-accent-cyan transition-colors bg-white/5 backdrop-blur-sm">
              [Download Resume]
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-space-900/95 backdrop-blur-xl flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-3/4 max-w-sm h-full bg-space-800 border-l border-white/10 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-mono font-bold text-accent-cyan">MRD</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg transition-colors ${
                        isActive ? "text-accent-cyan font-medium" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <a href="/Mohit_Raj_Deo_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block w-full py-3 text-center border border-white/20 rounded-md hover:border-accent-cyan hover:text-accent-cyan transition-colors">
                  [Download Resume]
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
