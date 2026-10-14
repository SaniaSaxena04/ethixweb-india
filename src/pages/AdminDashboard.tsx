import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Lead } from '../types';
import { ShieldCheck, LogOut, Search, Filter, RefreshCw, Mail, Phone, Building, Calendar, CheckCircle } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    fetchLeads();
  }, []);

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
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (id: string, newStatus: Lead['status']) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
      setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lead.service.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#2A2E39]">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[#E53935]" />
            <h1 className="text-2xl font-bold text-white">Lead Management Dashboard</h1>
          </div>
          <p className="text-xs text-gray-400 mt-1">Real-time enquiries captured from Ethixweb India website</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            className="p-2.5 bg-[#161922] hover:bg-[#2A2E39] border border-[#2A2E39] rounded-lg text-gray-300 transition-colors"
            title="Refresh Leads"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={handleLogout}
            className="bg-[#E53935]/10 hover:bg-[#E53935]/20 text-[#E53935] border border-[#E53935]/30 px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, email, or service..."
            className="w-full bg-[#161922] border border-[#2A2E39] rounded-lg pl-10 pr-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#E53935]"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#161922] border border-[#2A2E39] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E53935] w-full sm:w-48"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-[#161922] border border-[#2A2E39] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#2A2E39] text-xs font-semibold text-gray-400 uppercase tracking-wider bg-[#0F1117]/50">
                <th className="py-4 px-6">Client / Company</th>
                <th className="py-4 px-6">Service Requested</th>
                <th className="py-4 px-6">Budget</th>
                <th className="py-4 px-6">Message</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2E39] text-sm">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-400">
                    Loading leads from Supabase...
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-400">
                    No leads found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#0F1117]/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white">{lead.name}</div>
                      <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3" /> {lead.email}
                      </div>
                      {lead.phone && (
                        <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3" /> {lead.phone}
                        </div>
                      )}
                      {lead.company && (
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <Building className="w-3 h-3" /> {lead.company}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E53935]/10 text-[#E53935] border border-[#E53935]/25">
                        {lead.service}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-300 font-medium">
                      {lead.budget || 'N/A'}
                    </td>
                    <td className="py-4 px-6 max-w-xs text-xs text-gray-300 truncate" title={lead.message}>
                      {lead.message}
                    </td>
                    <td className="py-4 px-6">
                      <select
                        value={lead.status}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg border focus:outline-none ${
                          lead.status === 'new' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                          lead.status === 'contacted' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30' :
                          lead.status === 'qualified' ? 'bg-purple-500/10 text-purple-400 border-purple-500/30' :
                          'bg-green-500/10 text-green-400 border-green-500/30'
                        }`}
                      >
                        <option value="new" className="bg-[#161922] text-gray-200">New</option>
                        <option value="contacted" className="bg-[#161922] text-gray-200">Contacted</option>
                        <option value="qualified" className="bg-[#161922] text-gray-200">Qualified</option>
                        <option value="closed" className="bg-[#161922] text-gray-200">Closed</option>
                      </select>
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-500">
                      {new Date(lead.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};