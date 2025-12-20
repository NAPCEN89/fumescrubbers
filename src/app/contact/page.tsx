'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Factory, 
  ChevronDown 
} from 'lucide-react';

// --- Configuration Constants ---
const PRIMARY_COLOR = '#33FFFF'; 
const BG_DARK = '#0d1515';
const INPUT_BG = '#202023';

const products = [
  'Wet Scrubbers',
  'Dust Collectors',
  'Downdraft Tables',
  'Air Filtration Systems',
  'Mist Collectors',
  'Fume Extractors',
  'General Inquiry / Other',
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    product: '',
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.mobile || !formData.product) {
      setStatus('Please fill in Email, Mobile, and Product');
      return;
    }

    // Simulation
    setTimeout(() => {
      const success = Math.random() > 0.1;
      if (success) {
        setStatus('Thank you! We will contact you soon');
        setFormData({ product: '', name: '', email: '', mobile: '', message: '' });
      } else {
        setStatus('Failed to send. Please try again later.');
      }
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  const isSuccess = status.includes('Thank');

  return (
    <main className="min-h-screen bg-[#0a0f0f] flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-xl w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
            Request A Quote
          </h1>
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
            Get Expert Assistance Today
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-cyan-500/30 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Input */}
            <div className="group relative bg-[#202023] border border-white/10 rounded-2xl p-4 transition-all focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-500/10">
              <label className="block text-[10px] uppercase font-black tracking-widest text-cyan-500/60 mb-1">Full Name</label>
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-cyan-400" />
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-transparent w-full outline-none text-white text-sm placeholder:text-white/20"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group relative bg-[#202023] border border-white/10 rounded-2xl p-4 transition-all focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-500/10">
              <label className="block text-[10px] uppercase font-black tracking-widest text-cyan-500/60 mb-1">Email Address *</label>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <input 
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="bg-transparent w-full outline-none text-white text-sm placeholder:text-white/20"
                />
              </div>
            </div>

            {/* Mobile Input */}
            <div className="group relative bg-[#202023] border border-white/10 rounded-2xl p-4 transition-all focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-500/10">
              <label className="block text-[10px] uppercase font-black tracking-widest text-cyan-500/60 mb-1">Mobile Number *</label>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <input 
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="bg-transparent w-full outline-none text-white text-sm placeholder:text-white/20"
                />
              </div>
            </div>

            {/* Product Select */}
            <div className="group relative bg-[#202023] border border-white/10 rounded-2xl p-4 transition-all focus-within:border-cyan-500">
              <label className="block text-[10px] uppercase font-black tracking-widest text-cyan-500/60 mb-1">Select Product *</label>
              <div className="flex items-center gap-3 relative">
                <Factory className="w-4 h-4 text-cyan-400" />
                <select 
                  name="product"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  className="bg-transparent w-full outline-none text-white text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0d1515]">Choose product type</option>
                  {products.map(p => (
                    <option key={p} value={p} className="bg-[#0d1515]">{p}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-cyan-400 absolute right-0 pointer-events-none" />
              </div>
            </div>

            {/* Message Input */}
            <div className="group relative bg-[#202023] border border-white/10 rounded-2xl p-4 transition-all focus-within:border-cyan-500">
              <label className="block text-[10px] uppercase font-black tracking-widest text-cyan-500/60 mb-1">Requirement Details</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us what you need..."
                className="bg-transparent w-full outline-none text-white text-sm placeholder:text-white/20 resize-none mt-1"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-black uppercase tracking-widest py-5 rounded-2xl shadow-[0_0_20px_rgba(51,255,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <Send className="w-4 h-4 fill-black" />
              Submit Quote Request
            </button>

            {/* Status Messages */}
            {status && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center gap-2 p-4 rounded-xl text-xs font-bold uppercase tracking-wider ${
                  isSuccess ? 'bg-cyan-500/20 text-cyan-400' : 'bg-red-500/20 text-red-400'
                }`}
              >
                {isSuccess ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                {status}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </main>
  );
}