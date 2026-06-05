import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Header } from "@/components/docs/Header";
import { Sidebar } from "@/components/docs/Sidebar";
import { DocLayout } from "@/components/docs/DocLayout";

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: "%s | SimpleSphere Docs",
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background bg-grid-pattern relative">
      <Header />
      <div className="flex flex-1 max-w-screen-2xl mx-auto w-full px-4 md:px-8">
        {/* Sticky Sidebar */}
        <aside className="hidden md:block w-60 shrink-0 border-r">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 py-8 lg:py-10 px-4 md:px-8 lg:pl-12 lg:pr-8 xl:pr-0">
          <DocLayout>{children}</DocLayout>
        </main>
      </div>
    </div>
  );
}
