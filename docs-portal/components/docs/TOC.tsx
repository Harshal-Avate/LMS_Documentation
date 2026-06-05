"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { extractTOCFromDOM, scrollToHeading } from "@/lib/toc";
import type { TOCItem } from "@/types/docs";
import { cn } from "@/lib/utils";

export function TOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    // Wait for the DOM to paint the new MDX content after route change
    const timeoutId = setTimeout(() => {
      const extracted = extractTOCFromDOM();
      setItems(extracted);
      setActiveId("");
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        On this page
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToHeading(item.id)}
              className={cn(
                "block text-left w-full text-sm transition-colors py-0.5 hover:text-foreground",
                item.level === 2 ? "pl-0" : item.level === 3 ? "pl-3" : "pl-6",
                activeId === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
