"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, ExternalLink } from "lucide-react";
import { Search } from "./Search";
import { ThemeToggle } from "./ThemeToggle";
import { MobileSidebar } from "./MobileSidebar";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4 lg:px-6">
        {/* Mobile Sidebar Trigger */}
        <MobileSidebar />

        <Link href="/" className="flex items-center shrink-0">
          <Image 
            src="/logo/simplespherelearning.png" 
            alt="SimpleSphere Learning" 
            width={320} 
            height={80} 
            className="object-contain h-12 w-auto dark:invert-0 invert"
            priority
          />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <Search className="hidden md:flex" />

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          {/* Mobile search */}
          <Search isMobile className="md:hidden" />

          <ThemeToggle />

          <Link
            href="https://lms.simplesphere.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 rounded-full px-5 h-9 text-sm font-semibold bg-gradient-to-r from-[#4BB8FA] to-indigo-600 text-white hover:shadow-[0_0_20px_-5px_rgba(75,184,250,0.5)] hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            Visit Platform
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
