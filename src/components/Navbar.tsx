import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#0F1117]/90 backdrop-blur-md border-b border-[#2A2E39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-[#E53935] flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-[#E53935]/20 group-hover:scale-105 transition-transform">
            E
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white">Ethixweb<span className="text-[#E53935]">.</span></span>
            <span className="text-[10px] text-gray-400 tracking-widest uppercase font-medium">India</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-[#E53935]' : 'text-gray-300 hover:text-white'}`}>Home</Link>
          <Link to="/services" className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-[#E53935]' : 'text-gray-300 hover:text-white'}`}>Services</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-[#E53935]' : 'text-gray-300 hover:text-white'}`}>About</Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-[#E53935]' : 'text-gray-300 hover:text-white'}`}>Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/admin/login" className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5" /> Admin
          </Link>
          <Link to="/contact" className="bg-[#E53935] hover:bg-[#C62828] text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg shadow-[#E53935]/25 transition-all hover:translate-y-[-1px]">
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#161922] border-b border-[#2A2E39] px-4 pt-2 pb-6 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-200 hover:text-[#E53935] py-2">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-200 hover:text-[#E53935] py-2">Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-200 hover:text-[#E53935] py-2">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-base font-medium text-gray-200 hover:text-[#E53935] py-2">Contact</Link>
          <div className="pt-2 flex flex-col gap-3">
            <Link to="/admin/login" onClick={() => setIsOpen(false)} className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 py-1">
              <ShieldCheck className="w-4 h-4" /> Admin Portal
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-[#E53935] text-white py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2">
              Let's Talk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};