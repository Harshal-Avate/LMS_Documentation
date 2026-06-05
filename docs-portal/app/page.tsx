import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  GraduationCap,
  Users,
  Shield,
  HelpCircle,
  ArrowRight,
  Zap,
  Search,
  Code2,
  BarChart3,
  MessageSquare,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import BlurText from "@/components/ui/BlurText";

export const metadata: Metadata = {
  title: "SimpleSphere Learning — Documentation",
  description:
    "Complete documentation for the SimpleSphere Learning Management System. Find guides for Students, Mentors, and Administrators.",
};

const docCategories = [
  {
    title: "Getting Started",
    description:
      "New to SimpleSphere? Start here with an introduction, login guide, and dashboard walkthrough.",
    href: "/docs/getting-started/introduction",
    icon: Zap,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
    borderColor: "border-emerald-200 dark:border-emerald-800/50",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    pages: 3,
    tag: "Start here",
  },
  {
    title: "Student Guide",
    description:
      "Everything students need — courses, attendance, assessments, certificates, AI study mentor, and more.",
    href: "/docs/student/login",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    borderColor: "border-blue-200 dark:border-blue-800/50",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    pages: 15,
    tag: "15 sections",
  },
  {
    title: "Mentor Guide",
    description:
      "Full reference for mentors covering course management, grading, attendance, SLA tracking, AI co-pilot, and live classes.",
    href: "/docs/mentor/login",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50 dark:bg-violet-950/20",
    borderColor: "border-violet-200 dark:border-violet-800/50",
    iconBg: "bg-violet-100 dark:bg-violet-900/40",
    iconColor: "text-violet-600 dark:text-violet-400",
    pages: 27,
    tag: "27 sections",
  },
  {
    title: "Admin Guide",
    description:
      "Complete administrative manual — user management, batch analytics, reports, AI insights, and platform configuration.",
    href: "/docs/admin/login",
    icon: Shield,
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/20",
    borderColor: "border-orange-200 dark:border-orange-800/50",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    iconColor: "text-orange-600 dark:text-orange-400",
    pages: 14,
    tag: "14 sections",
  },
  {
    title: "FAQ",
    description:
      "Frequently asked questions about the SimpleSphere platform covering all roles and common issues.",
    href: "/docs/faq",
    icon: HelpCircle,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50 dark:bg-rose-950/20",
    borderColor: "border-rose-200 dark:border-rose-800/50",
    iconBg: "bg-rose-100 dark:bg-rose-900/40",
    iconColor: "text-rose-600 dark:text-rose-400",
    pages: 1,
    tag: "Quick answers",
  },
];

const quickLinks = [
  {
    title: "Student Dashboard",
    href: "/docs/student/dashboard",
    icon: BarChart3,
    description: "Overview of your learning activity",
  },
  {
    title: "Mentor Command Centre",
    href: "/docs/mentor/dashboard",
    icon: Code2,
    description: "Central hub for mentor operations",
  },
  {
    title: "Admin Dashboard",
    href: "/docs/admin/dashboard",
    icon: Shield,
    description: "System-wide metrics and controls",
  },
  {
    title: "Course Management",
    href: "/docs/mentor/course-management",
    icon: BookOpen,
    description: "Manage and publish courses",
  },
  {
    title: "Attendance Tracking",
    href: "/docs/admin/attendance",
    icon: Award,
    description: "Track and export attendance records",
  },
  {
    title: "AI Co-Pilot",
    href: "/docs/mentor/ai-copilot",
    icon: Zap,
    description: "AI assistant for data inquiry",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Student-Centered Learning",
    description:
      "From enrolling in courses to earning certificates, the student portal is designed for seamless learning.",
  },
  {
    icon: Users,
    title: "Mentor Intelligence",
    description:
      "Mentors get powerful tools for course creation, grading, SLA tracking, and AI-powered insights.",
  },
  {
    icon: Shield,
    title: "Admin Control Deck",
    description:
      "Administrators have full visibility across all centers, users, and academic performance metrics.",
  },
  {
    icon: Zap,
    title: "AI-Powered Features",
    description:
      "AI Study Mentor for students, AI Co-Pilot for mentors, and AI Insights for admins built in.",
  },
  {
    icon: Code2,
    title: "Code Arena",
    description:
      "In-browser coding environment with multi-language support and interactive compiler.",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Communication",
    description:
      "Integrated chat, file sharing, live Jitsi classrooms, and doubt resolution forums.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern relative">
      {/* Minimal Nav */}
      <nav className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 lg:px-8">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo/simplespherelearning.png" 
              alt="SimpleSphere Learning" 
              width={320} 
              height={80} 
              className="object-contain h-12 w-auto dark:invert-0 invert"
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/docs/getting-started/introduction"
              className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <ThemeToggle />
            <Link
              href="https://lms.simplesphere.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md px-3 h-8 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm"
            >
              Launch App
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-sky-500/15 dark:bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute -top-20 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-20 text-center">

          <div className="mb-6 flex flex-col items-center gap-2">
            <BlurText
              text={[
                { text: "Master", className: "text-slate-900 dark:text-white" },
                { text: "SimpleSphere,", className: "text-blue-600" },
                { text: "\n" },
                { text: "Learning", className: "text-blue-600" },
                { text: "&", className: "text-slate-900 dark:text-white" },
                { text: "\n" },
                { text: "Documentation", className: "text-blue-600" },
                { text: "with a", className: "text-slate-900 dark:text-white" },
                { text: "\n" },
                { text: "Smarter, Faster", className: "text-blue-600" },
                { text: "\n" },
                { text: "Ecosystem", className: "text-slate-900 dark:text-white" }
              ]}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight justify-center max-w-4xl mx-auto leading-[1.1] md:leading-[1.15]"
              animateBy="words"
              direction="bottom"
              delay={50}
            />
          </div>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
            The complete reference guide for the SimpleSphere LMS platform.
            Find step-by-step instructions for every feature across the
            Student, Mentor, and Admin portals.
          </p>



          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap mt-8">
            <Link
              href="/docs/getting-started/introduction"
              prefetch={true}
              className="flex items-center justify-center gap-2 rounded-full px-8 h-12 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              id="get-started-btn"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/student/dashboard"
              className="flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background px-8 h-12 text-sm font-semibold text-foreground hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
              id="student-guide-btn"
            >
              <GraduationCap className="h-4 w-4" />
              Student Guide
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white ml-2">
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Documentation by Role
          </h2>
          <p className="text-muted-foreground">
            Select your role to jump directly to the relevant guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.title}
                href={category.href}
                prefetch={true}
                className={`group relative flex flex-col rounded-2xl border ${category.borderColor} ${category.bgColor} p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                id={`category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`rounded-xl ${category.iconBg} p-3`}>
                    <Icon className={`h-6 w-6 ${category.iconColor}`} />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground border rounded-full px-2.5 py-1">
                    {category.tag}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center gap-1 mt-5 text-sm font-medium text-primary">
                  Read guide
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-y bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">
                Popular Pages
              </h2>
              <p className="text-sm text-muted-foreground">
                Jump directly to the most-visited sections
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className="group flex items-center gap-4 rounded-xl border bg-background p-4 hover:border-primary/50 hover:bg-muted/50 transition-all"
                  id={`quick-${link.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {link.description}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Platform Capabilities
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            SimpleSphere is a full-stack LMS ecosystem designed for modern
            educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-bold mb-3">
              Ready to get started?
            </h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Jump into the documentation and master every feature of
              SimpleSphere Learning.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/docs/getting-started/introduction"
                className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
                id="cta-getting-started"
              >
                Read Documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/faq"
                className="flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                id="cta-faq"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo/simplespherelearning.png" 
              alt="SimpleSphere Learning" 
              width={240} 
              height={60} 
              className="object-contain h-10 w-auto opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all dark:invert-0 invert"
            />
            <span>© 2026 SimpleSphere Learning. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/docs/getting-started/introduction" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/docs/faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="https://lms.simplesphere.in" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-1">
              Platform
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
