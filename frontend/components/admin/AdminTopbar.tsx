'use client';

import { 
  Search, 
  Bell, 
  User, 
  Settings,
  HelpCircle,
  Menu,
  LogOut
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export function AdminTopbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get('search') || '';

  useEffect(() => {
    // Basic check for token on client side
    setIsLoggedIn(document.cookie.includes("admin_token="));
    if (urlSearch) {
      setSearch(urlSearch);
    } else {
      setSearch("");
    }
  }, [urlSearch]);

  const handleSearch = (query: string) => {
    setSearch(query);
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    router.replace(`${window.location.pathname}?${params.toString()}`);
  };

  const handleLogout = () => {
    // Delete cookie by setting expiry to past date
    document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/admin/login");
  };

  return (
    <header className="h-20 bg-white border-b border-black/5 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-6 flex-grow max-w-2xl">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-gray-50 border border-black/5 rounded-full pl-10 lg:pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] transition-colors shadow-inner-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4 shrink-0">
        <button 
          onClick={() => setShowHelp(!showHelp)}
          className={`hidden sm:block p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all ${showHelp ? 'bg-gray-100 text-gray-900' : ''}`}
        >
          <HelpCircle className="w-5 h-5" />
        </button>
        {showHelp && (
          <div className="absolute top-16 right-48 w-64 bg-white rounded-2xl shadow-xl border border-black/5 p-4 z-50">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Admin Help Center</h4>
            <p className="text-xs text-gray-500 mb-4">Need assistance with the management suite?</p>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg text-xs font-medium text-gray-700">Quick Start Guide</button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg text-xs font-medium text-gray-700">Product Management FAQ</button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg text-xs font-medium text-[#F97316]">Contact Support</button>
            </div>
          </div>
        )}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all relative ${showNotifications ? 'bg-gray-100 text-gray-900' : ''}`}
          >
            <Bell className="w-5 h-5" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#F97316] border-2 border-white rounded-full" />
          </button>
          
          {showNotifications && (
            <div className="absolute top-12 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-black/5 z-50 overflow-hidden">
              <div className="p-4 border-b border-black/5 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-gray-900">Notifications</span>
                <span className="text-[10px] font-bold text-[#F97316] cursor-pointer hover:underline">Mark all read</span>
              </div>
              <div className="max-h-80 overflow-y-auto">
                <div className="p-4 hover:bg-gray-50 transition-colors border-b border-black/5 cursor-pointer">
                  <p className="text-xs font-bold text-gray-900">New Career Application</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Govindhasamy applied for Full Stack Developer</p>
                  <p className="text-[10px] text-[#F97316] font-bold mt-1">2 minutes ago</p>
                </div>
                <div className="p-4 hover:bg-gray-50 transition-colors border-b border-black/5 cursor-pointer">
                  <p className="text-xs font-bold text-gray-900">Inquiry Received</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Architect Call inquiry from Agara Team</p>
                  <p className="text-[10px] text-[#F97316] font-bold mt-1">1 hour ago</p>
                </div>
                <div className="p-4 hover:bg-gray-50 transition-colors border-b border-black/5 cursor-pointer">
                  <p className="text-xs font-bold text-gray-900">System Update</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">SEO indexing completed for Chennai region</p>
                  <p className="text-[10px] text-[#F97316] font-bold mt-1">4 hours ago</p>
                </div>
              </div>
              <div className="p-3 bg-gray-50 text-center">
                <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">View All Notifications</button>
              </div>
            </div>
          )}
        </div>
        <div className="h-8 w-[1px] bg-black/5 mx-2" />
        {isLoggedIn ? (
          <button className="flex items-center gap-3 p-1.5 hover:bg-gray-50 rounded-xl transition-all border border-transparent hover:border-black/5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white text-xs font-bold">
              AU
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-gray-900">Admin User</p>
              <p className="text-[10px] text-gray-500 font-medium tracking-tight">admin@agara.com</p>
            </div>
          </button>
        ) : (
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-xl border border-black/5">
            <User className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-bold text-gray-400 underline decoration-dotted">Secure Mode</span>
          </div>
        )}
        <div className="h-8 w-[1px] bg-black/5 mx-2" />
        <button 
          onClick={handleLogout}
          className="p-2.5 text-red-500 hover:bg-red-50 rounded-xl transition-all flex items-center gap-2 group"
          title="Logout"
        >
          <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-bold hidden lg:block">Logout</span>
        </button>
      </div>
    </header>
  );
}
