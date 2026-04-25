"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CorporateLawPage() {
  const services = [
    "Mergers & Acquisitions (M&A)",
    "Corporate Governance & Compliance",
    "Venture Capital & Private Equity",
    "Commercial Contract Drafting",
    "Insolvency & Bankruptcy",
    "Cross-border Transactions"
  ];

  return (
    <div className="bg-brand-black min-h-screen text-white pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/#expertise" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Expertise
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
              <Briefcase size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              Corporate <span className="text-gradient">Law</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              In the fast-paced world of global commerce, Bansal & Co. provides the legal backbone for the world&apos;s most ambitious enterprises. We navigate complex regulatory landscapes, ensuring your growth is both rapid and compliant.
            </p>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle size={18} className="text-brand-neon" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-3xl border-brand-gold/20"
          >
            <h2 className="text-2xl font-bold mb-6 font-serif">Strategic Advisory</h2>
            <p className="text-slate-400 mb-8">
              Our corporate division is led by partners with decades of experience in high-stakes negotiations and board-level advisory.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mb-8">
              <h3 className="text-brand-gold font-bold mb-2">Featured Specialist</h3>
              <p className="text-lg font-serif">Vikram Bansal</p>
              <p className="text-sm text-slate-500 italic">Managing Partner</p>
            </div>
            <button className="w-full py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
