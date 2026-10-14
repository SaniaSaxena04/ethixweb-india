export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'closed';

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  problemSolved: string;
};