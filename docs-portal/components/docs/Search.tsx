"use client";

import { useState, useEffect, useRef } from "react";
import { Search as SearchIcon, X, ArrowRight, Loader2 } from "lucide-react";
import { searchDocs } from "@/lib/search";
import type { SearchItem } from "@/types/docs";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SearchProps {
  className?: string;
  isMobile?: boolean;
}

export function Search({ className, isMobile }: SearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [open]);

  // Search on query change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        const found = searchDocs(query);
        setResults(found.slice(0, 8));
        setSelectedIndex(0);
      } else {
        setResults([]);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && results[selectedIndex]) {
      setOpen(false);
      window.location.href = results[selectedIndex].href;
    }
  };

  return (
    <>
      {/* Search Trigger */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
          isMobile
            ? "h-9 w-9 justify-center rounded-md hover:bg-muted"
            : "h-9 w-full max-w-xs rounded-full border border-border/40 bg-muted/30 backdrop-blur-md px-4 hover:border-[#4BB8FA]/50 hover:bg-muted/50 hover:shadow-[0_0_15px_-3px_rgba(75,184,250,0.3)] transition-all duration-300 justify-between",
          className
        )}
        aria-label="Search documentation"
        id="search-trigger"
      >
        <span className="flex items-center gap-2">
          <SearchIcon className="h-4 w-4 shrink-0" />
          {!isMobile && <span>Search docs...</span>}
        </span>
      </button>

      {/* Search Modal */}
      {open && (
        <div 
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Dialog */}
          <div 
            className="relative z-10 w-full max-w-xl rounded-xl border bg-popover shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b">
              <SearchIcon className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                id="search-input"
                aria-label="Search documentation"
                autoComplete="off"
                spellCheck="false"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="hidden sm:flex items-center justify-center h-6 w-6 rounded text-muted-foreground hover:text-foreground hover:bg-muted ml-2"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto">
              {query && results.length === 0 ? (
                <div className="flex flex-col items-center gap-2 py-10 text-center text-muted-foreground">
                  <SearchIcon className="h-8 w-8" />
                  <p className="text-sm">No results found for &quot;{query}&quot;</p>
                </div>
              ) : results.length > 0 ? (
                <ul className="p-2">
                  {results.map((item, i) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-3 transition-colors",
                          i === selectedIndex
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-xs text-muted-foreground">
                              {item.section}
                            </span>
                          </div>
                          <p className="text-sm font-medium truncate">{item.title}</p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  <p>Start typing to search docs...</p>
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs">
                    <span className="flex items-center gap-1">
                      <kbd className="rounded border px-1">↑</kbd>
                      <kbd className="rounded border px-1">↓</kbd> Navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="rounded border px-1">↵</kbd> Select
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="rounded border px-1">Esc</kbd> Close
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
