"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  GraduationCap,
  Users,
  Shield,
  HelpCircle,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const sectionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Getting Started": BookOpen,
  "Student Guide": GraduationCap,
  "Mentor Guide": Users,
  "Admin Guide": Shield,
  "Support": HelpCircle,
};

const sectionColors: Record<string, string> = {
  "Getting Started": "text-emerald-500",
  "Student Guide": "text-blue-500",
  "Mentor Guide": "text-purple-500",
  "Admin Guide": "text-orange-500",
  "Support": "text-rose-500",
};

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (!pathname) return;
    
    const currentSection = navigation.find(section => {
      return section.items.some(item => {
        if (item.href === pathname) return true;
        if (item.items && item.items.some(sub => sub.href === pathname)) return true;
        return false;
      });
    });

    if (currentSection) {
      setActiveSection(currentSection.title);
    }
  }, [pathname]);

  const toggleSection = (title: string) => {
    setActiveSection((prev) => (prev === title ? null : title));
  };

  return (
    <aside
      className={cn(
        "flex flex-col gap-6 py-6 overflow-y-auto",
        className
      )}
    >
      {navigation.map((section) => {
        const Icon = sectionIcons[section.title] || BookOpen;
        const iconColor = sectionColors[section.title] || "text-muted-foreground";
        const isCollapsed = activeSection !== section.title;

        return (
          <div key={section.title}>
            {/* Section Header */}
            <div 
              className="flex items-center gap-1.5 px-3 mb-2 cursor-pointer group hover:bg-muted/50 py-1.5 rounded-md transition-colors"
              onClick={() => toggleSection(section.title)}
            >
              <div className="flex items-center gap-2">
                <Icon className={cn("h-4 w-4", iconColor)} />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                  {section.title}
                </h4>
              </div>
              {isCollapsed ? (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              )}
            </div>

            {/* Section Items */}
            {!isCollapsed && (
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                if (item.items && item.items.length > 0) {
                  // Grouped item with sub-items
                  const isGroupActive = item.items.some(
                    (sub) => pathname === sub.href
                  );
                  return (
                    <li key={item.title}>
                      <div
                        className={cn(
                          "flex items-center justify-between pl-9 pr-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer",
                          isGroupActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.title}
                        <ChevronRight className="h-3.5 w-3.5" />
                      </div>
                      <ul className="ml-4 mt-0.5 space-y-0.5">
                        {item.items.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <li key={sub.href}>
                                <Link
                                  href={sub.href!}
                                  onClick={onNavigate}
                                  className={cn(
                                  "flex items-center gap-2 pl-9 pr-3 py-1.5 rounded-md text-sm transition-colors",
                                  isSubActive
                                    ? "bg-primary/10 text-primary font-medium border-l-2 border-[#4BB8FA] shadow-[4px_0_10px_-2px_#4BB8FA]"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                )}
                              >
                                {sub.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href!}
                      onClick={onNavigate}
                      className={cn(
                        "flex items-center pl-9 pr-3 py-1.5 rounded-md text-sm transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary font-medium border-l-2 border-[#4BB8FA] shadow-[4px_0_10px_-2px_#4BB8FA]"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            )}
          </div>
        );
      })}
    </aside>
  );
}
