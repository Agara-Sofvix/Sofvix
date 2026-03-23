'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from "motion/react";
import { 
  Plus, 
  Search, 
  Layers, 
  ChevronRight, 
  Eye, 
  TrendingUp,
  Box,
  LayoutGrid,
  X,
  CheckCircle2
} from "lucide-react";
import { CATEGORIES } from "@/app/(main)/products/data";

function AdminProductsContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [categoriesList, setCategoriesList] = useState(CATEGORIES);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    overview: "",
    icon: "LayoutGrid"
  });

  useEffect(() => {
    if (searchParams.get('add') === 'true') {
      setShowAddModal(true);
      const params = new URLSearchParams(searchParams.toString());
      params.delete('add');
      router.replace(`${pathname}${params.toString() ? `?${params.toString()}` : ''}`);
    }
  }, [searchParams, router, pathname]);

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    setCategoriesList([
      { 
        id: newCategory.name.toLowerCase().replace(/\s+/g, '-'),
        name: newCategory.name,
        slug: newCategory.name.toLowerCase().replace(/\s+/g, '-'),
        icon: newCategory.icon,
        overview: newCategory.overview,
        capabilities: [],
        outcomes: []
      },
      ...categoriesList
    ]);
    setShowAddModal(false);
    setNewCategory({ name: "", overview: "", icon: "LayoutGrid" });
  };
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Platform Systems</h1>
          <p className="text-gray-500 font-medium tracking-tight">Configure and manage your core system categories and their content.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-black transition-all shadow-xl"
        >
          <Plus className="w-5 h-5" />
          Create New Category
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Systems", value: categoriesList.length, icon: Layers, color: "text-[#F97316]", bg: "bg-[#F97316]/5" },
          { label: "Total Capabilities", value: categoriesList.reduce((acc, cat) => acc + (cat.capabilities?.length || 0), 0), icon: Box, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Average Views", value: "8.4k", icon: Eye, color: "text-emerald-600", bg: "bg-emerald-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[32px] border border-black/5 shadow-sm flex items-center gap-6">
             <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                <stat.icon className="w-7 h-7" />
             </div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-gray-900">{stat.value}</p>
             </div>
          </div>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categoriesList.map((category, i) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="group bg-white rounded-[40px] border border-black/5 shadow-sm hover:shadow-xl transition-all p-2"
          >
            <div className="bg-gray-50/50 rounded-[34px] p-8 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-white rounded-2xl border border-black/5 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-all shadow-sm">
                   <LayoutGrid className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Active
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-black text-gray-900 group-hover:text-[#F97316] transition-colors line-clamp-1">{category.name}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">{category.overview}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-white/50 rounded-xl p-3 border border-black/5">
                   <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Capabilities</p>
                   <p className="text-sm font-bold text-gray-900">{category.capabilities?.length || 0}</p>
                </div>
                <div className="bg-white/50 rounded-xl p-3 border border-black/5">
                   <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Outcomes</p>
                   <p className="text-sm font-bold text-gray-900">{category.outcomes?.length || 0}</p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-black/5">
                 <button className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors">Edit Details</button>
                 <button className="flex items-center gap-2 text-sm font-black text-[#F97316] group/btn">
                    View Usage
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                 </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add New Category Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddModal(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden">
              <div className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black text-gray-900">New Category</h2>
                  <button onClick={() => setShowAddModal(false)} className="p-2 text-gray-400 hover:text-gray-900 transition-colors"><X className="w-6 h-6" /></button>
                </div>

                <form onSubmit={handleAddCategory} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Category Name</label>
                    <input required type="text" value={newCategory.name} onChange={(e) => setNewCategory({...newCategory, name: e.target.value})} placeholder="e.g., Supply Chain Systems" className="w-full bg-gray-50 border border-black/5 rounded-2xl px-6 py-4 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#F97316] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Overview</label>
                    <textarea required rows={4} value={newCategory.overview} onChange={(e) => setNewCategory({...newCategory, overview: e.target.value})} placeholder="Describe the focus of this system category..." className="w-full bg-gray-50 border border-black/5 rounded-2xl px-6 py-4 text-sm font-medium text-gray-600 focus:outline-none focus:border-[#F97316] transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl text-sm font-black hover:bg-black transition-all shadow-xl flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#F97316]" />
                    Create Category
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AdminProductsPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading Products...</div>}>
      <AdminProductsContent />
    </Suspense>
  );
}
