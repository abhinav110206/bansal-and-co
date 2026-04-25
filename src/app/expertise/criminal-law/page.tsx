"use client";

import { motion } from "framer-motion";
import { Gavel, CheckCircle, ArrowLeft, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CriminalLawPage() {
  const specializations = [
    "White Collar Crime Defense",
    "Federal Investigations",
    "Cybercrime Defense",
    "Financial Fraud & Money Laundering",
    "Narcotics & Drug Offenses",
    "High-Profile Litigation"
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
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 border border-red-500/20">
              <Gavel size={32} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              Criminal <span className="text-red-500">Defense</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              In high-stakes criminal litigation, your liberty is the priority. Bansal & Co. provides aggressive, strategic, and airtight defense for individuals and corporations facing serious allegations.
            </p>
            <div className="space-y-4">
              {specializations.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle size={18} className="text-red-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-3xl border-red-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="text-red-500" size={24} />
              <h2 className="text-2xl font-bold font-serif">Urgent Assistance</h2>
            </div>
            <p className="text-slate-400 mb-8">
              Our rapid-response criminal defense team is available 24/7 for arrests, raids, or search warrants.
            </p>
            <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/10 mb-8">
              <h3 className="text-red-500 font-bold mb-2">Lead Defense Counsel</h3>
              <p className="text-lg font-serif">David Chen</p>
              <p className="text-sm text-slate-500 italic">Senior Partner</p>
            </div>
            <button className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all">
              Request Emergency Defense
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
