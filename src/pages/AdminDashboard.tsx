import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LogOut, RefreshCw, Trash2, Mail, Phone, Building, IndianRupee, Clock } from 'lucide-react';

interface Lead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string;
  budget: string | null;
  message: string;
  status: string;
}

export const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.warn('Supabase fetch failed, checking localStorage fallback:', err);
      const localLeads = JSON.parse(localStorage.getItem('ethixweb_leads') || '[]');
      setLeads(localLeads);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    
    try {
      if (id.startsWith('local-')) {
        const updated = leads.filter(l => l.id !== id);
        localStorage.setItem('ethixweb_leads', JSON.stringify(updated));
        setLeads(updated);
      } else {
        const { error } = await supabase.from('leads').delete().eq('id', id);
        if (error) throw error;
        setLeads(leads.filter(l => l.id !== id));
      }
    } catch (err) {
      alert('Failed to delete lead.');
    }
  };

  const filteredLeads = leads.filter(lead => {
    if (filter === 'all') return true;
    return lead.service.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#161922] p-6 rounded-2xl border border-[#2A2E39]">
        <div>
          <span className="text-xs font-bold text-[#E53935] uppercase tracking-widest">Admin Portal</span>
          <h1 className="text-2xl font-extrabold text-white mt-1">Lead Management Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            className="px-4 py-2 bg-[#0F1117] hover:bg-[#2A2E39] text-gray-300 text-xs font-semibold rounded-xl border border-[#2A2E39] flex items-center gap-2 transition-all"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Refresh
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#E53935]/10 hover:bg-[#E53935]/20 text-[#E53935] text-xs font-semibold rounded-xl border border-[#E53935]/30 flex items-center gap-2 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {['all', 'AI Receptionists', 'Full-Stack', 'Workflow'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
              filter === tab
                ? 'bg-[#E53935] text-white shadow-lg shadow-[#E53935]/20'
                : 'bg-[#161922] text-gray-400 hover:text-white border border-[#2A2E39]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Leads Table / Grid */}
      <div className="bg-[#161922] rounded-2xl border border-[#2A2E39] overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm">Loading enquiries...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-12 text-center text-gray-400 text-sm">No enquiries found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#2A2E39] text-gray-400 text-xs uppercase tracking-wider bg-[#0F1117]/50">
                  <th className="p-4 font-semibold">Client</th>
                  <th className="p-4 font-semibold">Service</th>
                  <th className="p-4 font-semibold">Budget</th>
                  <th className="p-4 font-semibold">Message</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2A2E39] text-sm">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#0F1117]/30 transition-colors">
                    <td className="p-4 space-y-1">
                      <p className="font-bold text-white">{lead.name}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Mail className="w-3 h-3 text-[#E53935]" /> {lead.email}</span>
                        {lead.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-[#E53935]" /> {lead.phone}</span>}
                      </div>
                      {lead.company && (
                        <p className="text-xs text-gray-500 flex items-center gap-1"><Building className="w-3 h-3" /> {lead.company}</p>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-[#0F1117] border border-[#2A2E39] rounded-lg text-xs font-medium text-white">
                        {lead.service}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-gray-300 font-medium">
                      <span className="flex items-center gap-0.5"><IndianRupee className="w-3 h-3 text-[#E53935]" /> {lead.budget || 'N/A'}</span>
                    </td>
                    <td className="p-4 text-xs text-gray-300 max-w-xs truncate">
                      {lead.message}
                    </td>
                    <td className="p-4 text-xs text-gray-500 whitespace-nowrap">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {new Date(lead.created_at).toLocaleDateString()}</span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => deleteLead(lead.id)}
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-all"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};