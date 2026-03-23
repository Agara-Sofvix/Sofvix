'use client';

import { 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  MessageSquare, 
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Trash2
} from "lucide-react";

import { useState, useEffect } from "react";
import { IInquiry } from "@/models/Inquiry";

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<IInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries`);
        if (!response.ok) throw new Error('Failed to fetch inquiries');
        const data = await response.json();
        setInquiries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  const updateStatus = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        const updatedInquiry = await res.json();
        setInquiries(prev => prev.map(inq => inq._id.toString() === id ? updatedInquiry : inq));
      }
    } catch (error) {
      console.error('Failed to update status', error);
      alert('Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    setUpdatingId(id);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/inquiries/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setInquiries(prev => prev.filter(inq => inq._id.toString() !== id));
      }
    } catch (error) {
      console.error('Failed to delete inquiry', error);
      alert('Failed to delete inquiry');
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) return <div className="p-8">Loading inquiries...</div>;
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Customer Inquiries</h1>
        <p className="text-gray-500 font-medium tracking-tight">Review and manage messages from potential clients and partners.</p>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-6 rounded-[32px] border border-black/5 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-grow w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by name, email, or message content..." 
            className="w-full bg-gray-50 border border-black/5 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
           <button className="flex items-center gap-2 px-6 py-3 bg-gray-50 border border-black/5 rounded-2xl text-sm font-bold text-gray-700 hover:bg-gray-100 transition-all">
              <Filter className="w-4 h-4" />
              All Statuses
           </button>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="grid gap-6">
        {inquiries.map((inquiry, i) => (
          <div key={inquiry._id.toString()} className="bg-white rounded-[32px] border border-black/5 shadow-sm hover:shadow-md transition-all overflow-hidden group">
            <div className="p-8 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              <div className="flex items-start gap-6 flex-grow">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white text-lg font-black shrink-0">
                  {inquiry.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-black text-gray-900">{inquiry.name}</h3>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg ${
                      inquiry.status === 'High Priority' ? "bg-rose-50 text-rose-600" :
                      inquiry.status === 'New' ? "bg-[#F97316]/10 text-[#F97316]" :
                      inquiry.status === 'In Progress' ? "bg-blue-50 text-blue-600" :
                      "bg-emerald-50 text-emerald-600"
                    }`}>
                      {inquiry.status}
                    </span>
                    <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5 ml-2">
                       <Clock className="w-3.5 h-3.5" />
                       {new Date(inquiry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                      <Mail className="w-4 h-4 text-[#F97316]" />
                      {inquiry.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                      <Phone className="w-4 h-4 text-[#F97316]" />
                      {inquiry.phone}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-700">
                       <FileText className="w-4 h-4 text-[#F97316]" />
                       Interest: {inquiry.service}
                    </div>
                  </div>

                  <div className="bg-gray-50/50 p-6 rounded-2xl border border-black/5 relative">
                    <p className="text-gray-600 text-sm leading-relaxed italic">"{inquiry.message}"</p>
                  </div>
                </div>
              </div>

              <div className="flex lg:flex-col items-center lg:items-stretch gap-3 shrink-0">
                <button 
                  onClick={() => window.location.href = `mailto:${inquiry.email}`}
                  className="flex-grow lg:flex-none h-12 px-6 bg-[#F97316] text-white rounded-xl text-sm font-black hover:bg-[#EA580C] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Reply
                </button>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => updateStatus(inquiry._id.toString(), 'Resolved')}
                    disabled={updatingId === inquiry._id.toString()}
                    className="w-12 h-12 flex items-center justify-center text-emerald-500 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all border border-emerald-100 disabled:opacity-50"
                    title="Mark as Resolved"
                  >
                    {updatingId === inquiry._id.toString() ? <div className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" /> : <CheckCircle2 className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={() => updateStatus(inquiry._id.toString(), 'High Priority')}
                    disabled={updatingId === inquiry._id.toString()}
                    className="w-12 h-12 flex items-center justify-center text-rose-500 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl transition-all border border-rose-100 disabled:opacity-50"
                    title="Mark as High Priority"
                  >
                    <AlertCircle className="w-5 h-5" />
                  </button>
                   <button 
                    onClick={() => deleteInquiry(inquiry._id.toString())}
                    disabled={updatingId === inquiry._id.toString()}
                    className="w-12 h-12 flex items-center justify-center text-red-400 hover:text-white hover:bg-red-500 bg-red-50 rounded-xl transition-all border border-red-100 disabled:opacity-50"
                    title="Delete Inquiry"
                  >
                     <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
