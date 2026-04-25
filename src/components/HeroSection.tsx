"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Globe, Award, Bot } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background with animated gradients / abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full filter blur-[128px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-neon/5 rounded-full filter blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6">
            Redefining Justice <br />
            <span className="text-gradient">Through Innovation</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-slate-300 mb-10"
        >
          A premier global law firm bridging legacy expertise with next-generation legal tech to secure your most complex victories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <button className="px-8 py-4 bg-brand-gold text-brand-black rounded-full font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 group">
            Consult Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 glass text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center gap-2">
            <Bot size={18} className="text-brand-neon" />
            Start AI Analysis
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl glass-card rounded-3xl p-8"
        >
          <div className="flex flex-col items-center justify-center text-center gap-2">
            <ShieldCheck className="text-brand-gold w-8 h-8 mb-2" />
            <h3 className="text-3xl font-bold text-white">45+</h3>
            <p className="text-sm text-slate-400 uppercase tracking-widest">Years of Legacy</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
            <Award className="text-brand-neon w-8 h-8 mb-2" />
            <h3 className="text-3xl font-bold text-white">10k+</h3>
            <p className="text-sm text-slate-400 uppercase tracking-widest">Cases Won</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0">
            <Globe className="text-brand-gold w-8 h-8 mb-2" />
            <h3 className="text-3xl font-bold text-white">Global</h3>
            <p className="text-sm text-slate-400 uppercase tracking-widest">Client Presence</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
