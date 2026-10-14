import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Code2, 
  Zap, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Headphones, 
  Workflow, 
  TrendingUp, 
  Layers 
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ethixred/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-card border border-charcoal-border mb-6">
            <Sparkles className="w-4 h-4 text-ethixred" />
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
              Global Standards. Built for India.
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-4xl">
            We run the tech.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ethixred to-red-400">
              You run the business.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Ethixweb acts as your senior digital operations team—delivering AI receptionists, full-stack web applications, workflow automation, and custom CRM integrations for high-growth businesses.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-ethixred hover:bg-ethixred-dark text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-xl shadow-ethixred/25 transition-all hover:scale-[1.02]"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="bg-charcoal-card hover:bg-charcoal-border text-gray-200 border border-charcoal-border px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center transition-all"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-charcoal-border/60">
            <div>
              <p className="text-3xl font-extrabold text-white">24/7</p>
              <p className="text-sm text-gray-400 mt-1">AI Voice & Chat Response</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">100%</p>
              <p className="text-sm text-gray-400 mt-1">Custom Engineering</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">INR & USD</p>
              <p className="text-sm text-gray-400 mt-1">Flexible Retainers</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">Dedicated</p>
              <p className="text-sm text-gray-400 mt-1">Senior Tech Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-ethixred uppercase tracking-widest mb-3">Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">Engineered for real operational growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-charcoal-card border border-charcoal-border p-8 rounded-2xl hover:border-ethixred/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-ethixred/10 border border-ethixred/20 flex items-center justify-center text-ethixred mb-6">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Receptionists & Voice</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Autonomous voice and chat agents that answer customer calls 24/7, qualify leads, and book calendar appointments directly.
            </p>
            <Link to="/services" className="text-ethixred font-semibold text-sm flex items-center gap-1 hover:underline">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-charcoal-card border border-charcoal-border p-8 rounded-2xl hover:border-ethixred/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-ethixred/10 border border-ethixred/20 flex items-center justify-center text-ethixred mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Websites & Web Apps</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Production-grade React and Supabase applications engineered for sub-second load times, security, and sales conversions.
            </p>
            <Link to="/services" className="text-ethixred font-semibold text-sm flex items-center gap-1 hover:underline">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-charcoal-card border border-charcoal-border p-8 rounded-2xl hover:border-ethixred/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-ethixred/10 border border-ethixred/20 flex items-center justify-center text-ethixred mb-6">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Workflow Automation</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Eliminate manual tasks with custom API pipelines connecting HubSpot, GoHighLevel, WhatsApp Business, and internal DBs.
            </p>
            <Link to="/services" className="text-ethixred font-semibold text-sm flex items-center gap-1 hover:underline">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="bg-charcoal-card border-y border-charcoal-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-ethixred uppercase tracking-widest mb-3">Execution Roadmap</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-white">How we deliver results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Discover", desc: "Audit existing tech stack & conversion gaps." },
              { step: "02", title: "Plan", desc: "Architecture roadmap & timeline commitment." },
              { step: "03", title: "Build", desc: "Production code with strict QA testing." },
              { step: "04", title: "Launch", desc: "Zero-downtime deployment & DNS config." },
              { step: "05", title: "Improve", desc: "Continuous monitoring & monthly optimizations." }
            ].map((p, idx) => (
              <div key={idx} className="bg-[#0F1117] p-6 rounded-xl border border-charcoal-border">
                <span className="text-xs font-mono text-ethixred font-bold">{p.step}</span>
                <h4 className="text-lg font-bold text-white mt-2 mb-2">{p.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India Business Focus Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-ethixred/20 via-charcoal-card to-charcoal-card border border-ethixred/30 p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Building for Indian Startups & D2C Brands?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl leading-relaxed">
              We understand fast-paced execution, WhatsApp lead funnels, UPI payment integration requirements, and INR-friendly transparent retainer models.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-ethixred hover:bg-ethixred-dark text-white px-7 py-3.5 rounded-xl font-bold text-sm shrink-0 flex items-center gap-2"
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};