import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Code2, Workflow, ArrowRight, Check } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      icon: <Bot className="w-8 h-8 text-[#E53935]" />,
      title: "AI Receptionists & Autonomous Agents",
      problem: "Missed phone inquiries after business hours and slow response times cost businesses up to 40% of potential leads.",
      solution: "We deploy custom AI voice and chat receptionists trained on your business knowledge to answer, qualify, and book clients 24/7.",
      deliverables: ["Custom Trained Voice Agent", "WhatsApp Lead Integration", "Google Calendar / CRM Sync", "Call Recording & Analytics"]
    },
    {
      icon: <Code2 className="w-8 h-8 text-[#E53935]" />,
      title: "Full-Stack Web Engineering",
      problem: "Slow, cookie-cutter templates with poor mobile performance result in high bounce rates and low Google rankings.",
      solution: "High-performance React/TypeScript applications with sub-second page loads, custom backend APIs, and enterprise security.",
      deliverables: ["Tailwind CSS / React Frontend", "Supabase Database & Auth", "SEO Optimization", "Responsive Mobile-First UI"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#E53935]" />,
      title: "Workflow & CRM Automation",
      problem: "Manual data entry between forms, spreadsheets, and CRMs causes delays and operational errors.",
      solution: "Automated serverless pipelines connecting HubSpot, GoHighLevel, Stripe/Razorpay, and internal communication channels.",
      deliverables: ["Custom Webhook Pipelines", "Database Synchronization", "Automated Email & SMS Alerts", "Error Logging & Monitoring"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-4">Our Core Capabilities</h1>
        <p className="text-gray-400 text-lg">
          Verified, enterprise-grade engineering tailored for Indian startups, D2C brands, and growing businesses.
        </p>
      </div>

      <div className="space-y-12">
        {servicesList.map((s, idx) => (
          <div key={idx} className="bg-[#161922] border border-[#2A2E39] p-8 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="space-y-4">
              <div className="p-3 bg-[#E53935]/10 border border-[#E53935]/20 w-fit rounded-xl">{s.icon}</div>
              <h2 className="text-2xl font-bold text-white">{s.title}</h2>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs font-bold text-[#E53935] uppercase tracking-wider">The Challenge</span>
                <p className="text-gray-300 mt-1">{s.problem}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Our Solution</span>
                <p className="text-gray-300 mt-1">{s.solution}</p>
              </div>
            </div>

            <div className="bg-[#0F1117] p-6 rounded-xl border border-[#2A2E39] space-y-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Key Deliverables</span>
              <ul className="space-y-2 text-xs text-gray-300">
                {s.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#E53935] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  to={`/contact?service=${encodeURIComponent(s.title)}`}
                  className="w-full bg-[#E53935] hover:bg-[#C62828] text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
                >
                  Request Proposal <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};