"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const jobs = [
  {
    id: 1,
    title: "Senior Legal Associate",
    department: "Corporate Law",
    location: "New Delhi / Hybrid",
    type: "Full-time",
    experience: "5-8 Years"
  },
  {
    id: 2,
    title: "Junior Counsel",
    department: "Criminal Litigation",
    location: "Mumbai",
    type: "On-site",
    experience: "1-3 Years"
  },
  {
    id: 3,
    title: "Cyber Law Consultant",
    department: "Technology Law",
    location: "Remote",
    type: "Contract",
    experience: "4+ Years"
  }
];

export default function CareersPage() {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Join the <span className="text-gradient">Legacy</span>
          </motion.h1>
          <p className="text-slate-400 text-lg">
            We are looking for aggressive, brilliant, and ethical legal minds to join our global practice. At Bansal & Co., we don&apos;t just practice law—we define it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:border-brand-gold/50 transition-all flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div className="space-y-4 text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-gold/20">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                    {job.experience}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif">{job.title}</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-400 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-brand-neon" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-neon" />
                    {job.type}
                  </div>
                </div>
              </div>
              <button className="px-8 py-4 bg-white/5 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-brand-gold hover:text-brand-black transition-all group flex items-center gap-2">
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
