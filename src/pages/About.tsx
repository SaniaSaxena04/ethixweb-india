import React from 'react';
import { Shield, Target, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest">Our India Story</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Digital Excellence for Bharat & Beyond.
        </h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          Ethixweb was founded with a singular mission: to bridge the gap between world-class enterprise software engineering and the rapid digital transformation of Indian businesses.
        </p>
      </div>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#161922] p-8 rounded-2xl border border-[#2A2E39] space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">India-First Architecture</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Optimized for local network conditions, multi-lingual scalability, UPI/payment gateway integrations, and high-conversion regional funnels.
          </p>
        </div>

        <div className="bg-[#161922] p-8 rounded-2xl border border-[#2A2E39] space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Uncompromising Security</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Enterprise-grade data protection, secure PostgreSQL databases, and Cloudflare Turnstile bot prevention built into every client solution.
          </p>
        </div>

        <div className="bg-[#161922] p-8 rounded-2xl border border-[#2A2E39] space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Dedicated Local Support</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Direct collaboration with engineering leads across Delhi NCR and remote tech centers in India for seamless communication and rapid delivery.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#161922] rounded-3xl border border-[#2A2E39] p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-3xl sm:text-4xl font-black text-[#E53935]">90+</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">PageSpeed Performance</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-black text-white">100%</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Secure Lead Capture</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-black text-[#E53935]">24/7</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">AI Receptionist Uptime</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-black text-white">₹</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">Transparent Indian Pricing</p>
        </div>
      </div>
    </div>
  );
};