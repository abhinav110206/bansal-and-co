"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Filter,
  CheckCircle,
  Clock,
  XCircle,
  MoreVertical
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("cases");
  const [cases, setCases] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch("/api/cases");
        const data = await response.json();
        setCases(data);
      } catch (error) {
        console.error("Failed to fetch cases:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCases();
  }, []);

  return (
    <div className="min-h-screen bg-[#020203] flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-brand-black flex flex-col pt-6 hidden md:flex z-10">
        <div className="px-6 mb-10">
          <Link href="/" className="font-serif text-xl font-bold text-white tracking-wider">
            Bansal <span className="text-brand-gold">&</span> Co. <span className="text-xs text-brand-gold ml-1 font-sans">ADMIN</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-brand-gold/10 text-brand-gold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button onClick={() => setActiveTab('cases')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'cases' ? 'bg-brand-gold/10 text-brand-gold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <Briefcase size={18} /> Case Submissions
          </button>
          <button onClick={() => setActiveTab('clients')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'clients' ? 'bg-brand-gold/10 text-brand-gold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <Users size={18} /> Clients
          </button>
          <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-brand-gold/10 text-brand-gold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <Settings size={18} /> Settings
          </button>
        </nav>
        
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xs">
              VB
            </div>
            <div>
              <p className="text-sm text-white font-medium">Vikram Bansal</p>
              <p className="text-xs text-slate-500">Managing Partner</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-brand-black/50 backdrop-blur-md z-10">
          <h1 className="text-xl font-bold text-white">Case Management</h1>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white transition-colors relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-brand-neon rounded-full"></span>
            </button>
            <button className="px-4 py-2 bg-brand-gold text-brand-black text-sm font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              New Case +
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 z-10">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Cases", value: "248", icon: Briefcase, color: "text-blue-400" },
              { label: "Pending Review", value: "12", icon: Clock, color: "text-yellow-400" },
              { label: "Active Litigation", value: "86", icon: CheckCircle, color: "text-green-400" },
              { label: "Closed/Declined", value: "150", icon: XCircle, color: "text-slate-400" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                  <stat.icon size={20} className={stat.color} />
                </div>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Cases Table */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-lg font-bold text-white">Recent Submissions</h2>
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                  <input type="text" placeholder="Search cases..." className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors" />
                </div>
                <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-colors">
                  <Filter size={18} />
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-slate-400 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4 font-medium">Case ID</th>
                    <th className="px-6 py-4 font-medium">Client</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {cases.length === 0 && !isLoading ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                        No case submissions found. New cases will appear here.
                      </td>
                    </tr>
                  ) : (
                    cases.map((caseItem, i) => (
                      <tr key={caseItem.id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-4 text-brand-gold font-medium">{caseItem.id}</td>
                        <td className="px-6 py-4 text-white">{caseItem.client}</td>
                        <td className="px-6 py-4 text-slate-300 capitalize">{caseItem.type}</td>
                        <td className="px-6 py-4 text-slate-400">{caseItem.date}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            caseItem.status === 'Pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                            caseItem.status === 'In Review' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                            caseItem.status === 'Accepted' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                            'bg-slate-500/10 text-slate-400 border-slate-500/20'
                          }`}>
                            {caseItem.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="p-4 border-t border-white/5 flex justify-between items-center text-sm text-slate-400">
              <p>Showing 1 to 5 of 12 pending cases</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded border border-white/10 hover:bg-white/5 transition-colors disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 rounded border border-white/10 hover:bg-white/5 transition-colors">Next</button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
