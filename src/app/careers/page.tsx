import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Briefcase, Users, Zap, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | NAPCEN India',
  description: 'Join NAPCEN, a leading manufacturer of industrial air pollution control systems in Puducherry, India. Explore our open positions and career opportunities.',
  alternates: {
    canonical: 'https://fumescrubbers.com/careers',
  },
};

const JOB_OPENINGS = [
  {
    id: 1,
    title: 'Mechanical Design Engineer',
    department: 'Engineering',
    location: 'Puducherry, India',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'Technical Sales Engineer',
    department: 'Sales',
    location: 'Chennai / Coimbatore',
    type: 'Full-time',
  },
  {
    id: 3,
    title: 'Fabrication Supervisor',
    department: 'Manufacturing',
    location: 'Puducherry, India',
    type: 'Full-time',
  },
  {
    id: 4,
    title: 'Service & Maintenance Technician',
    department: 'Service',
    location: 'Pan-India',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-bg-light text-text-main">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-bg-light pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary-blue/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-primary-blue font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 block">
            Careers at NAPCEN
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-text-main uppercase tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
            Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-[#00E5FF]">Clean Air</span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Join India’s leading team of engineers and innovators dedicated to solving complex industrial air pollution challenges. 
          </p>
          <a 
            href="#open-positions"
            className="inline-flex items-center gap-2 bg-[#00E5FF] text-black font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] active:scale-95"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* ── WHY JOIN US SECTION ── */}
      <section className="py-20 md:py-28 bg-white border-b border-primary-blue/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-text-main uppercase tracking-tight mb-4">
              Why Work With Us?
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              At NAPCEN, you are not just an employee; you are a vital part of a mission to protect the environment and improve industrial safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Innovation First',
                desc: 'Work on cutting-edge pollution control technologies and custom-engineered systems that set industry standards.',
              },
              {
                icon: Users,
                title: 'Collaborative Culture',
                desc: 'Join a tight-knit team of experts where your ideas are valued and your professional growth is actively supported.',
              },
              {
                icon: Briefcase,
                title: 'Meaningful Impact',
                desc: 'Every system we build directly contributes to cleaner air, healthier workers, and a safer environment.',
              },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-bg-light border border-primary-blue/5 hover:border-primary-blue/20 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary-blue group-hover:scale-110 transition-transform">
                  <feature.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">{feature.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS SECTION ── */}
      <section id="open-positions" className="py-20 md:py-28 bg-bg-light scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-text-main uppercase tracking-tight">
              Open Positions
            </h2>
            <span className="bg-primary-blue/10 text-primary-blue text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              {JOB_OPENINGS.length} Roles
            </span>
          </div>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => (
              <div 
                key={job.id} 
                className="group bg-white p-6 md:p-8 rounded-3xl border border-primary-blue/10 hover:border-primary-blue/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-main group-hover:text-primary-blue transition-colors mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-text-muted">
                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary-blue/70" /> {job.location}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                
                <a 
                  href="mailto:hr@napcen.com"
                  className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary-blue text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#002244] transition-colors"
                >
                  Apply Now
                  <Send size={14} />
                </a>
              </div>
            ))}
          </div>

          {/* ── GENERAL APPLICATION CTA ── */}
          <div className="mt-16 p-8 md:p-12 bg-[#0A1111] rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-blue/20 via-transparent to-transparent opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Don't see a perfect fit?</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                We're always looking for talented engineers, fabricators, and sales professionals. Send us your resume and we'll keep you in mind for future openings.
              </p>
              <a 
                href="mailto:hr@napcen.com"
                className="inline-block border border-[#00E5FF] text-[#00E5FF] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#00E5FF] hover:text-black transition-all"
              >
                Submit General Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
