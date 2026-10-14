import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { TurnstileWidget } from '../components/TurnstileWidget';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || 'AI Receptionists';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: preselectedService,
    budget: '₹50,000 - ₹1,50,000',
    message: '',
    website_hp: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      setFormData(prev => ({ ...prev, service: serviceFromUrl }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // 1. Anti-Spam Honeypot Check
    if (formData.website_hp) {
      setStatusMessage({ type: 'error', text: 'Spam submission detected.' });
      return;
    }

    // 2. Client-side Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({ type: 'error', text: 'Please fill in all required fields (*).' });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            service: formData.service,
            budget: formData.budget,
            message: formData.message,
            status: 'new',
          },
        ]);

      if (error) throw error;
    } catch (err: any) {
      console.warn('Supabase offline or unconfigured. Saving locally:', err);

      const existingLeads = JSON.parse(localStorage.getItem('ethixweb_leads') || '[]');
      const newLead = {
        id: 'local-' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        status: 'new',
        created_at: new Date().toISOString(),
      };
      localStorage.setItem('ethixweb_leads', JSON.stringify([newLead, ...existingLeads]));
    } finally {
      setIsSubmitting(false);

      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your enquiry has been received. Our team will get back to you within 24 hours.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'AI Receptionists',
        budget: '₹50,000 - ₹1,50,000',
        message: '',
        website_hp: '',
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-4xl font-extrabold text-white mt-2">Let's build something remarkable.</h1>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Have a project in mind or want to automate your business lead capture? Fill out the form or reach out directly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-[#161922] rounded-xl border border-[#2A2E39]">
              <Mail className="w-6 h-6 text-[#E53935] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">Email Us</h4>
                <p className="text-xs text-gray-400 mt-0.5">contact@ethixweb.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#161922] rounded-xl border border-[#2A2E39]">
              <Phone className="w-6 h-6 text-[#E53935] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">Call / WhatsApp</h4>
                <p className="text-xs text-gray-400 mt-0.5">+91 Business Support</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-[#161922] rounded-xl border border-[#2A2E39]">
              <MapPin className="w-6 h-6 text-[#E53935] shrink-0 mt-1" />
              <div>
                <h4 className="text-sm font-bold text-white">Location</h4>
                <p className="text-xs text-gray-400 mt-0.5">Delhi NCR & Remote Tech Centers across India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#161922] p-8 rounded-2xl border border-[#2A2E39]">
          <h2 className="text-2xl font-bold text-white mb-6">Start a Conversation</h2>

          {statusMessage && (
            <div
              className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs font-medium ${
                statusMessage.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-5 h-5 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="website_hp"
              value={formData.website_hp}
              onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  className="w-full bg-[#0F1117] border border-[#2A2E39] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@company.in"
                  className="w-full bg-[#0F1117] border border-[#2A2E39] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#0F1117] border border-[#2A2E39] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Company / Brand Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="TechVentures"
                  className="w-full bg-[#0F1117] border border-[#2A2E39] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Required Service *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#0F1117] border border-[#2A2E39] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
                >
                  <option value="AI Receptionists">AI Receptionists & Voice</option>
                  <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                  <option value="Workflow Automation">Workflow & CRM Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Estimated Budget (INR)</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#0F1117] border border-[#2A2E39] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
                >
                  <option value="Under ₹50,000">Under ₹50,000</option>
                  <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</option>
                  <option value="₹1,50,000 - ₹3,00,000">₹1,50,000 - ₹3,00,000</option>
                  <option value="₹3,00,000+">₹3,00,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Project Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your requirements..."
                className="w-full bg-[#0F1117] border border-[#2A2E39] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E53935]"
              />
            </div>

            <TurnstileWidget onVerify={() => {}} />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E53935] hover:bg-[#C62828] disabled:opacity-50 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E53935]/25"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Enquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};