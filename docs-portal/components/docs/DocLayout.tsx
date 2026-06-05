import type { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { PrevNext } from "./PrevNext";
import { TOC } from "./TOC";

interface DocLayoutProps {
  children: ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {

  return (
    <div className="flex gap-8 xl:gap-12">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="mx-auto max-w-4xl w-full">
          <Breadcrumb />
          <article className="prose prose-lg prose-slate dark:prose-invert max-w-none
          prose-headings:font-heading
          prose-headings:scroll-mt-24
          prose-headings:font-semibold
          prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:pb-2
          prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
          prose-p:text-muted-foreground prose-p:leading-7
          prose-strong:text-foreground prose-strong:font-semibold
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-code:bg-muted prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-muted prose-pre:rounded-xl prose-pre:border
          prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:bg-muted/50 prose-blockquote:py-0.5 prose-blockquote:rounded-r-lg
          prose-table:border-collapse prose-table:w-full
          prose-th:border prose-th:border-border prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-th:text-sm
          prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-td:text-sm prose-td:text-muted-foreground
          prose-tr:hover:bg-muted/30
          prose-img:rounded-xl prose-img:border prose-img:shadow-md
          prose-li:text-muted-foreground
          prose-ul:my-4 prose-ol:my-4
        ">
            {children}
          </article>
          <PrevNext />
          {/* Footer */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t text-xs text-muted-foreground">
            <span>© 2026 SimpleSphere Learning. All rights reserved.</span>
          </div>
        </div>
      </div>

      {/* Right TOC */}
      <div className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-20">
          <TOC />
        </div>
      </div>
    </div>
  );
}
