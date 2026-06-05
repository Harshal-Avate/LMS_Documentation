import React from "react";
import { 
  LayoutDashboard, 
  Users, 
  Megaphone, 
  CalendarCheck,
  BookOpen,
  ClipboardList,
  BarChart3,
  Settings,
  LogOut,
  Menu
} from "lucide-react";

export function MenuTree() {
  return (
    <div className="my-6 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm bg-slate-50 dark:bg-slate-900/40">
      <div className="bg-slate-100 dark:bg-slate-800/60 px-4 py-3 border-b border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
        <Menu className="w-4 h-4 text-slate-500" /> 
        Platform Navigation Structure
      </div>
      
      <div className="p-6 space-y-8 font-sans">
        {/* CORE Group */}
        <div>
          <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
            CORE Group
          </div>
          <div className="ml-3 pl-5 border-l-2 border-slate-200 dark:border-slate-700/70 space-y-3 relative">
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <LayoutDashboard className="w-4 h-4 text-indigo-500" />
               </div>
               <span className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Overview (Dashboard)</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <Users className="w-4 h-4 text-blue-500" />
               </div>
               <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Students</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <Megaphone className="w-4 h-4 text-amber-500" />
               </div>
               <span className="font-medium group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Announcements</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <CalendarCheck className="w-4 h-4 text-emerald-500" />
               </div>
               <span className="font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Attendance</span>
            </div>
          </div>
        </div>

        {/* ACADEMICS Group */}
        <div>
          <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
            ACADEMICS Group
          </div>
          <div className="ml-3 pl-5 border-l-2 border-slate-200 dark:border-slate-700/70 space-y-3 relative">
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <BookOpen className="w-4 h-4 text-violet-500" />
               </div>
               <span className="font-medium group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">Courses</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <ClipboardList className="w-4 h-4 text-pink-500" />
               </div>
               <span className="font-medium group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">Assignments</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <BarChart3 className="w-4 h-4 text-rose-500" />
               </div>
               <span className="font-medium group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">Analytics</span>
            </div>
          </div>
        </div>

        {/* SYSTEM Group */}
        <div>
          <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
            SYSTEM Group
          </div>
          <div className="ml-3 pl-5 border-l-2 border-slate-200 dark:border-slate-700/70 space-y-3 relative">
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 shadow-sm group-hover:scale-110 transition-transform">
                 <Settings className="w-4 h-4 text-slate-500 dark:text-slate-400" />
               </div>
               <span className="font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Settings / Preferences</span>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300 relative group cursor-default">
               <div className="absolute w-5 h-[2px] bg-slate-200 dark:bg-slate-700/70 -left-[22px] top-1/2 -translate-y-1/2" />
               <div className="p-1.5 bg-red-50 dark:bg-red-900/20 rounded-md border border-red-200 dark:border-red-900/50 shadow-sm group-hover:scale-110 transition-transform">
                 <LogOut className="w-4 h-4 text-red-500 dark:text-red-400" />
               </div>
               <span className="font-medium text-red-600 dark:text-red-400">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
