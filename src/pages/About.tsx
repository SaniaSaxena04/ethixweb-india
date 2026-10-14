import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest">Our Philosophy</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Global standards. Built for India's fastest-growing businesses.
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed pt-2">
          Ethixweb operates as an outsourced senior digital operations team, blending custom full-stack web engineering with autonomous AI automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#161922] border border-[#2A2E39] p-8 rounded-2xl">
          <Target className="w-8 h-8 text-[#E53935] mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Outcome-Focused</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every line of code and AI prompt is aligned with measurable lead conversion, efficiency, and revenue growth.
          </p>
        </div>

        <div className="bg-[#161922] border border-[#2A2E39] p-8 rounded-2xl">
          <Compass className="w-8 h-8 text-[#E53935] mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">India Market Realities</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Optimized for mobile usage patterns, instant WhatsApp leads, and transparent INR retainer models.
          </p>
        </div>

        <div className="bg-[#161922] border border-[#2A2E39] p-8 rounded-2xl">
          <ShieldCheck className="w-8 h-8 text-[#E53935] mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Transparent Engineering</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            No bloated retainers or hidden platform lock-ins. You retain complete ownership of your code and databases.
          </p>
        </div>
      </div>
    </div>
  );
};