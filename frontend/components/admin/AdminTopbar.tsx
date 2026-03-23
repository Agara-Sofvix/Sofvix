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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function AdminTopbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Basic check for token on client side
    setIsLoggedIn(document.cookie.includes("admin_token="));
  }, []);

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
            className="w-full bg-gray-50 border border-black/5 rounded-xl pl-10 lg:pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#F97316] transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4 shrink-0">
        <button className="hidden sm:block p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all">
          <HelpCircle className="w-5 h-5" />
        </button>
        <div className="relative">
          <button className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all relative">
            <Bell className="w-5 h-5" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#F97316] border-2 border-white rounded-full" />
          </button>
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
