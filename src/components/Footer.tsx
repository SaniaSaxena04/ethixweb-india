import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161922] border-t border-[#2A2E39] pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E53935] flex items-center justify-center font-bold text-white text-lg">E</div>
            <span className="text-xl font-bold tracking-tight text-white">Ethixweb<span className="text-[#E53935]">.</span></span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Global standards. Built for India. Enterprise software, AI automation, and full-stack web engineering.
          </p>
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ethixweb India. All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-[#E53935] transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#E53935] transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#E53935] transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#E53935] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Capabilities</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="hover:text-[#E53935] transition-colors">AI Voice Receptionists</Link></li>
            <li><Link to="/services" className="hover:text-[#E53935] transition-colors">Full-Stack Web Apps</Link></li>
            <li><Link to="/services" className="hover:text-[#E53935] transition-colors">Workflow Automation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-[#E53935]" /><span>contact@ethixweb.com</span></li>
            <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-[#E53935]" /><span>+91 Business Support</span></li>
            <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 text-[#E53935] mt-0.5" /><span>Delhi NCR, India</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};