import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Cpu, CheckCircle } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E53935]/10 border border-[#E53935]/20 text-[#E53935] text-xs font-bold uppercase tracking-wider">
          <Cpu className="w-4 h-4" /> India-Specific Digital & AI Engineering
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-none">
          Transforming Indian Businesses with <span className="text-[#E53935]">Elite Software & AI</span>.
        </h1>
        <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
          High-performance web platforms, 24/7 AI voice receptionists, and automated lead capture built specifically for the Indian market.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#E53935] hover:bg-[#C62828] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#E53935]/25"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 bg-[#161922] hover:bg-[#2A2E39] text-white font-bold rounded-xl text-sm border border-[#2A2E39] flex items-center justify-center gap-2 transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl font-extrabold text-white">Engineered for Indian Enterprise Growth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#161922] p-8 rounded-2xl border border-[#2A2E39] space-y-4 hover:border-[#E53935]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">AI Receptionists & Voice</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automate customer phone inquiries and WhatsApp lead capture with voice agents tailored for Indian customer bases.
            </p>
            <Link to="/contact?service=AI+Receptionists" className="text-xs font-bold text-[#E53935] flex items-center gap-1 hover:underline">
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-[#161922] p-8 rounded-2xl border border-[#2A2E39] space-y-4 hover:border-[#E53935]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Full-Stack Web Engineering</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lightning-fast React & Vite platforms optimized for high mobile traffic and Tier-1/Tier-2 Indian network speeds.
            </p>
            <Link to="/contact?service=Full-Stack+Web+Engineering" className="text-xs font-bold text-[#E53935] flex items-center gap-1 hover:underline">
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-[#161922] p-8 rounded-2xl border border-[#2A2E39] space-y-4 hover:border-[#E53935]/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Workflow & CRM Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connect leads directly to PostgreSQL databases, WhatsApp notifications, and automated sales pipelines.
            </p>
            <Link to="/contact?service=Workflow+Automation" className="text-xs font-bold text-[#E53935] flex items-center gap-1 hover:underline">
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#161922] rounded-3xl border border-[#2A2E39] p-10 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest">Why Ethixweb</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for performance, security, and local scale.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We don't just build websites; we engineer robust business acquisition engines equipped with enterprise-grade security, instant lead alerts, and lightning-fast load times.
          </p>
          <div className="space-y-3">
            {['PageSpeed Insights 90+ guaranteed', 'Secure Supabase PostgreSQL database backend', 'Protected admin dashboard for lead management', 'Cloudflare Turnstile anti-spam protection'].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                <CheckCircle className="w-5 h-5 text-[#E53935] shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0F1117] p-8 rounded-2xl border border-[#2A2E39] space-y-6">
          <h3 className="text-xl font-bold text-white">Ready to elevate your business?</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Join forward-thinking Indian brands leveraging our next-generation digital architecture.
          </p>
          <Link
            to="/contact"
            className="w-full py-3.5 bg-[#E53935] hover:bg-[#C62828] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E53935]/25"
          >
            Get in Touch Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};