"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const allLawyers = [
  { name: "Santosh Kumar Bansal", role: "Head Lawyer & Founder", exp: "25+ Years", specialty: "General & Constitutional Law" },
  { name: "Akshat Kumar Bansal", role: "Senior Partner", exp: "15+ Years", specialty: "Corporate & Criminal Litigation" },
  { name: "Dinesh Pal", role: "Senior Advocate", exp: "18+ Years", specialty: "Civil & Property Law" },
  { name: "Lokesh Srivastava", role: "Advocate", exp: "12+ Years", specialty: "Cyber Law & Intellectual Property" },
  { name: "Kapil Sharma", role: "Advocate", exp: "10+ Years", specialty: "Family & Divorce Law" },
  { name: "Mahesh Kumar", role: "Advocate", exp: "9+ Years", specialty: "Banking & Finance" },
  { name: "Abhishek Chaudhary", role: "Advocate", exp: "8+ Years", specialty: "Taxation Law" },
  { name: "CP Rawal", role: "Consultant", exp: "30+ Years", specialty: "Strategic Advisory" },
  { name: "Verma", role: "Advocate", exp: "7+ Years", specialty: "Labor & Employment" },
];

export default function PeoplePage() {
  return (
    <div className="bg-brand-black min-h-screen text-white pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors mb-8 group w-fit">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            The Legal <span className="text-gradient">Titans</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Our firm is defined by the brilliance of its people. From our founder Santosh Kumar Bansal to our specialized associates, we bring over a century of combined legal expertise to every case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {allLawyers.map((lawyer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-8 rounded-3xl border-white/5 hover:border-brand-gold/30 transition-all group"
            >
              <h3 className="text-2xl font-bold font-serif mb-1 group-hover:text-brand-gold transition-colors">{lawyer.name}</h3>
              <p className="text-brand-neon text-xs font-bold uppercase tracking-widest mb-4">{lawyer.specialty}</p>
              
              <div className="space-y-3 pt-6 border-t border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Position</span>
                  <span className="text-slate-200">{lawyer.role}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Experience</span>
                  <span className="text-slate-200">{lawyer.exp}</span>
                </div>
              </div>
              
              <button className="w-full mt-8 py-3 bg-white/5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all">
                Contact Office
              </button>
            </motion.div>
          ))}
        </div>

        {/* Real Contact Section */}
        <div className="glass-card p-12 rounded-[3rem] mb-24 border-brand-gold/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Connect with <span className="text-brand-gold">Bansal & Co.</span></h2>
              <p className="text-slate-400 mb-8">Reach out to our Surajpur headquarters for immediate legal consultation.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Direct Line</p>
                    <p className="text-xl font-bold">9213313229</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-neon/10 flex items-center justify-center text-brand-neon shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Headquarters</p>
                    <p className="text-xl font-bold">Chamber No. 735, Gali No. 20,</p>
                    <p className="text-slate-400">Surajpur Compound</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Quick Enquiry</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none" />
                <input type="email" placeholder="Email Address" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none" />
                <textarea placeholder="How can we help?" rows={4} className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none resize-none"></textarea>
                <button className="w-full py-4 bg-brand-gold text-brand-black font-bold uppercase tracking-widest rounded-xl hover:shadow-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
