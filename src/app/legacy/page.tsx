"use client";

import { motion } from "framer-motion";
import { Award, Landmark, TrendingUp, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const milestones = [
  { year: "1999", title: "Foundation", desc: "Santosh Kumar Bansal establishes the firm with a single chamber in Surajpur." },
  { year: "2008", title: "Expansion", desc: "Firm moves to Chamber No. 735, expanding into Corporate and International Law." },
  { year: "2015", title: "Digital Era", desc: "Pioneered Cyber Law litigation in the region, securing landmark IP victories." },
  { year: "2024", title: "Today", desc: "A premier legal powerhouse with 10+ specialized lawyers and global clients." },
];

export default function LegacyPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 group w-fit">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-6 border border-brand-gold/20"
          >
            <Landmark size={40} />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            Our <span className="text-gradient">Legacy</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From a dedicated local practice to a nationally recognized legal force, our journey is built on unwavering integrity and relentless pursuit of justice.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-32">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
          <div className="space-y-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1 text-center md:text-right">
                  <div className={i % 2 === 0 ? "" : "md:text-left"}>
                    <span className="text-brand-gold text-4xl font-serif font-bold mb-2 block">{m.year}</span>
                    <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
                    <p className="text-slate-400 max-w-sm mx-auto md:mx-0 inline-block">{m.desc}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-brand-gold rounded-full ring-8 ring-brand-gold/20 z-10 hidden md:block"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Users, label: "Clients Served", val: "5000+" },
            { icon: Award, label: "Success Rate", val: "94%" },
            { icon: TrendingUp, label: "Years of Legacy", val: "25+" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl text-center border-white/5">
              <stat.icon className="w-12 h-12 text-brand-neon mx-auto mb-6" />
              <p className="text-4xl font-serif font-bold text-white mb-2">{stat.val}</p>
              <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
