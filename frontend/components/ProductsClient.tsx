'use client';

import { useState, useMemo, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  DollarSign, 
  Megaphone, 
  ShoppingCart, 
  Wrench, 
  BarChart3, 
  Building, 
  Mail, 
  Users, 
  Lock, 
  PieChart, 
  LayoutGrid, 
  Code2, 
  Globe,
  Zap,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  MessageSquare,
  Calendar,
  FileSignature,
  Video,
  CreditCard,
  Box,
  Layout,
  Trello,
  Briefcase,
  Database,
  ArrowUpRight,
  MapPin,
  UserPlus,
  Files,
  Inbox,
  Clock,
  LineChart,
  Activity,
  FileText
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CATEGORIES, SERVICES, Service, Category } from "@/app/(main)/products/data";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const ICON_MAP: Record<string, any> = {
  DollarSign,
  Megaphone,
  ShoppingCart,
  Wrench,
  BarChart3,
  Building,
  Mail,
  Users,
  Lock,
  PieChart,
  Code2,
  Globe,
  LayoutGrid,
  Zap,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  MessageSquare,
  Calendar,
  FileSignature,
  Video,
  CreditCard,
  Box,
  Layout,
  Trello,
  Briefcase,
  Database,
  MapPin,
  UserPlus,
  Files,
  Inbox,
  Clock,
  LineChart,
  Activity,
  FileText
};

export function ProductsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialCategory = searchParams.get('category') || 'cx-sales';
  const [activeCategoryId, setActiveCategoryId] = useState<string>(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== activeCategoryId) {
      setActiveCategoryId(cat);
    }
  }, [searchParams]);
  
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const params = new URLSearchParams(searchParams.toString());
    params.set('category', categoryId);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filteredServices = useMemo(() => {
    return SERVICES.filter(s => s.category === activeCategoryId);
  }, [activeCategoryId]);

  const itemsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (activeCategoryId && itemsRef.current[activeCategoryId]) {
      itemsRef.current[activeCategoryId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeCategoryId]);

  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.id === activeCategoryId)
  , [activeCategoryId]);

  return (
    <div className="relative w-full text-gray-900 selection:bg-[#F97316]/20 bg-gemini-light min-h-screen">
      <div className="relative z-10 flex flex-col w-full px-6">
        <header className="pt-12 pb-6 max-w-7xl mx-auto text-center w-full overflow-hidden">
          <div className="flex justify-center mb-8 w-full">
            <nav className="bg-white/60 backdrop-blur-2xl border border-black/5 p-1.5 rounded-full shadow-xl flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full touch-pan-x">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  ref={(el) => { itemsRef.current[cat.id] = el; }}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`relative px-6 py-3 rounded-full text-xs font-black transition-all duration-500 whitespace-nowrap uppercase tracking-wider ${
                    activeCategoryId === cat.id ? 'text-gray-900' : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {activeCategoryId === cat.id && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-[#F97316]/10 border border-[#F97316]/20 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{cat.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto w-full pb-32">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategoryId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-12 gap-10"
            >
               <div className="lg:col-span-5">
                  <div className="bg-white p-10 rounded-[40px] shadow-xl border border-black/5">
                     <h2 className="text-3xl font-bold mb-6">{activeCategory?.name}</h2>
                     <p className="text-lg text-gray-600 mb-8">{activeCategory?.overview}</p>
                     <div className="space-y-4">
                        {activeCategory?.outcomes?.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                             <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                             {outcome}
                          </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="lg:col-span-7">
                  <div className="grid sm:grid-cols-2 gap-6">
                     {activeCategory?.capabilities?.map((cap, i) => (
                       <Link key={i} href={`/services/${activeCategory.slug}/${cap.slug}`} className="group p-8 bg-white rounded-3xl border border-black/5 hover:border-[#F97316]/20 transition-all hover:shadow-xl">
                          <div className="flex items-center justify-between mb-6">
                             <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center">
                                {(() => {
                                  const CapIcon = ICON_MAP[cap.icon] || LayoutGrid;
                                  return <CapIcon className="w-5 h-5" />;
                                })()}
                             </div>
                             <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 transition-colors" />
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">{cap.name}</h4>
                          <p className="text-xs text-gray-500 font-medium">Standard Integrated Capability</p>
                       </Link>
                     ))}
                  </div>
               </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
