"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Gavel, Lightbulb, Cpu, Users, Globe2, ArrowRight } from "lucide-react";
import { useState } from "react";

const expertiseData = [
  {
    id: "corporate",
    title: "Corporate Law",
    icon: Briefcase,
    href: "/expertise/corporate-law",
    description: "M&A, compliance, and corporate structuring for global enterprises.",
    details: "Our corporate law division handles high-stakes mergers, international compliance, and complex structural reorganizations with military precision.",
  },
  {
    id: "criminal",
    title: "Criminal Law",
    icon: Gavel,
    href: "/expertise/criminal-law",
    description: "Defending rights with aggressive and strategic litigation.",
    details: "We provide elite defense in white-collar crime, federal investigations, and high-profile criminal litigation.",
  },
  {
    id: "ip",
    title: "Intellectual Property",
    icon: Lightbulb,
    href: "/expertise/ip-law",
    description: "Protecting your most valuable innovations and creative assets.",
    details: "Patent filing, trademark protection, and aggressive litigation against IP theft on a global scale.",
  },
  {
    id: "cyber",
    title: "Cyber Law",
    icon: Cpu,
    href: "/expertise/cyber-law",
    description: "Navigating data privacy, cybersecurity, and digital rights.",
    details: "We are pioneers in cyber law, managing data breach responses, tech compliance, and AI regulations.",
  },
  {
    id: "family",
    title: "Family Law",
    icon: Users,
    href: "/expertise/family-law",
    description: "Discreet and compassionate resolution of family disputes.",
    details: "High-net-worth divorces, asset protection, and custody battles managed with absolute discretion.",
  },
  {
    id: "international",
    title: "International Law",
    icon: Globe2,
    href: "/expertise/international-law",
    description: "Cross-border disputes and international arbitration.",
    details: "Representing sovereign entities and multinationals in international tribunals and cross-border litigation.",
  },
];

export default function ExpertiseSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-brand-black">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-blue opacity-20 blur-[150px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white"
            >
              Areas of <span className="text-gradient">Expertise</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              We provide unmatched legal strategy across critical sectors. Our multi-disciplinary approach ensures comprehensive protection for our clients.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expandedId === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card p-8 rounded-2xl cursor-pointer group transition-all duration-500 overflow-hidden relative ${
                  isExpanded ? "ring-2 ring-brand-gold bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <div onClick={() => setExpandedId(isExpanded ? null : item.id)}>
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <Icon className={`w-10 h-10 mb-6 transition-colors duration-300 ${isExpanded ? "text-brand-gold" : "text-brand-neon group-hover:text-brand-gold"}`} />
                    <h3 className="text-2xl font-bold text-white mb-3 font-serif">{item.title}</h3>
                    <p className="text-slate-400 mb-6">{item.description}</p>
                    
                    <motion.div 
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-300 pt-4 border-t border-white/10 text-sm">
                        {item.details}
                      </p>
                    </motion.div>

                    <Link href={item.href} className="mt-auto pt-6 flex items-center text-brand-gold text-sm font-bold uppercase tracking-widest gap-2 hover:text-white transition-colors">
                      Full Practice Details
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-2`} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
