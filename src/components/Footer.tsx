import { Scale, MapPin, Phone, Mail, Camera, MessageCircle, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020203] pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold">
                <Scale size={24} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                Bansal <span className="text-brand-gold">&</span> Co.
              </span>
            </Link>
            <p className="text-slate-400 text-sm">
              Redefining justice through innovation. A premier global law firm bridging legacy expertise with next-generation legal tech.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-gold hover:text-brand-black transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-gold hover:text-brand-black transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-gold hover:text-brand-black transition-colors">
                <Camera size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Expertise</h4>
            <ul className="space-y-3">
              {['Corporate Law', 'Criminal Defense', 'Intellectual Property', 'Cyber Law', 'Family Law', 'International Law'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-brand-gold text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Firm</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Legacy', 'Diversity & Inclusion', 'Careers', 'News & Events', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-brand-gold text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Global Offices</h4>
            <ul className="space-y-6">
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin className="text-brand-gold shrink-0" size={18} />
                <span>123 Legal Avenue, Financial District, New York, NY 10004</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Phone className="text-brand-gold shrink-0" size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Mail className="text-brand-gold shrink-0" size={18} />
                <span>consult@bansal.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Bansal & Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
