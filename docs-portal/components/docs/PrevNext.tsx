"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getPrevNextItems } from "@/lib/navigation";

export function PrevNext() {
  const pathname = usePathname();
  const { prev, next } = getPrevNextItems(pathname);

  if (!prev && !next) return null;

  return (
    <div className="flex items-center justify-between pt-8 mt-8 border-t gap-4">
      {prev ? (
        <Link
          href={prev.href!}
          className="group flex flex-col items-start gap-1 flex-1 p-4 rounded-xl border hover:border-primary/50 hover:bg-muted/50 transition-all"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Previous
          </span>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href!}
          className="group flex flex-col items-end gap-1 flex-1 p-4 rounded-xl border hover:border-primary/50 hover:bg-muted/50 transition-all text-right"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors">
            Next
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
