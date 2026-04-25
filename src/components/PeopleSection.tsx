"use client";

import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";

const lawyers = [
  {
    name: "Santosh Kumar Bansal",
    role: "Head Lawyer & Founder",
    specialty: "All Domains - Senior Counsel",
    experience: "25+ Years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Akshat Kumar Bansal",
    role: "Senior Partner",
    specialty: "Criminal & Corporate Litigation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Dinesh Pal",
    role: "Senior Advocate",
    specialty: "Civil & Property Disputes",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop",
  },
];

export default function PeopleSection() {
  return (
    <section id="people" className="py-24 relative bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white"
          >
            Our Legal <span className="text-gradient">Titans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A collective of industry-defining legal minds, meticulously chosen for their aggressive strategy and unmatched track records.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-brand-black/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={lawyer.image} 
                alt={lawyer.name}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-1">{lawyer.specialty}</p>
                <h3 className="text-3xl font-serif font-bold text-white mb-1">{lawyer.name}</h3>
                <p className="text-slate-300 mb-4">{lawyer.role}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-colors">
                    <Globe size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 glass text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all text-sm">
            View All Partners
          </button>
        </div>
      </div>
    </section>
  );
}
