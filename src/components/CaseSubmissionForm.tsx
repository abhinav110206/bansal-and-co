"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, CheckCircle, ArrowRight } from "lucide-react";

export default function CaseSubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      caseType: formData.get("caseType"),
      description: formData.get("description"),
    };

    try {
      const response = await fetch("/api/cases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consult" className="py-24 relative bg-brand-blue/20 border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Secure a <span className="text-gradient">Consultation</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Submit your case details securely. Our intake team will review and respond within 24 hours.
          </p>
        </div>

        <motion.div 
          className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Submission Secure</h3>
                <p className="text-slate-400 max-w-md">
                  Your case details have been encrypted and submitted to our review board. We will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Full Name</label>
                    <input required name="fullName" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Email Address</label>
                    <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Phone Number</label>
                    <input name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Case Type</label>
                    <select name="caseType" className="w-full bg-[#0a1128] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                      <option value="corporate">Corporate Litigation</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="ip">Intellectual Property</option>
                      <option value="cyber">Cyber Law & Privacy</option>
                      <option value="family">Family Law</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Case Description</label>
                  <textarea required name="description" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Provide a brief overview of your legal situation..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Relevant Documents (Optional)</label>
                  <div className="w-full bg-white/5 border border-dashed border-white/20 rounded-xl px-4 py-8 flex flex-col items-center justify-center text-slate-400 hover:border-brand-gold hover:bg-white/10 transition-all cursor-pointer">
                    <UploadCloud className="w-8 h-8 mb-2 text-brand-neon" />
                    <p className="text-sm">Drag & drop files or <span className="text-brand-gold font-semibold">Browse</span></p>
                    <p className="text-xs mt-1 opacity-70">Secure 256-bit encrypted upload (Max 50MB)</p>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-brand-gold to-yellow-600 text-brand-black font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-brand-black border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Submit Case Confidentially
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
