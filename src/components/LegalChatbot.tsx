"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  ShieldAlert, 
  User, 
  Bot, 
  Loader2,
  ChevronRight,
  Scale
} from "lucide-react";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
  timestamp: Date;
  type?: "disclaimer" | "summary" | "suggestion";
};

export default function LegalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Namaste! I am the Bansal & Co. AI Legal Assistant. How can I assist you with your legal query today?",
      timestamp: new Date(),
    },
    {
      id: "2",
      role: "bot",
      content: "Disclaimer: This is general legal guidance, not a substitute for professional legal advice.",
      timestamp: new Date(),
      type: "disclaimer"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });
      const data = await response.json();
      
      const botMessage: Message = {
        id: Date.now().toString(),
        role: "bot",
        content: data.content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[90vw] md:w-[400px] h-[600px] glass-card rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 bg-brand-blue/40 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-neon/10 flex items-center justify-center text-brand-neon">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Bansal Local AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Privacy Secured (Llama 3)</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      msg.role === "user" ? "bg-brand-gold text-brand-black" : "bg-brand-blue border border-white/10 text-brand-gold"
                    }`}>
                      {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    
                    <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user" 
                        ? "bg-brand-gold text-brand-black font-medium rounded-tr-none" 
                        : msg.type === "disclaimer"
                          ? "bg-amber-500/10 border border-amber-500/20 text-amber-200 italic rounded-tl-none"
                          : "bg-white/5 text-slate-200 border border-white/5 rounded-tl-none shadow-sm"
                    }`}>
                      {msg.type === "disclaimer" && <ShieldAlert size={14} className="inline mr-2 mb-0.5 text-amber-500" />}
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-2">
                    <Loader2 size={16} className="text-brand-gold animate-spin" />
                    <span className="text-xs text-slate-400 font-medium">Bansal AI is analyzing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="px-5 py-2 flex gap-2 overflow-x-auto no-scrollbar">
              {["Corporate Issue", "Cyber Crime", "Divorce Help", "FIR Guidance"].map((text) => (
                <button 
                  key={text}
                  onClick={() => setInput(text)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300 hover:bg-brand-gold/20 hover:text-brand-gold transition-all"
                >
                  {text}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-5 border-t border-white/10 bg-brand-black/20">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Describe your legal concern..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-brand-gold transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-gold hover:bg-brand-gold hover:text-brand-black rounded-lg transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 text-center mt-3 uppercase tracking-widest">
                Protected by 256-bit encryption
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-2xl bg-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center text-brand-black group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-neon rounded-full border-2 border-brand-black animate-bounce"></span>
        )}
      </motion.button>
    </div>
  );
}
