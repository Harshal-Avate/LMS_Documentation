import type { NavSection } from "@/types/docs";

export const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/getting-started/introduction",
      },
      {
        title: "Login",
        href: "/docs/getting-started/login",
      },
      {
        title: "Dashboard Overview",
        href: "/docs/getting-started/dashboard",
      },
    ],
  },
  {
    title: "Student Guide",
    items: [
      {
        title: "Login",
        href: "/docs/student/login",
      },
      {
        title: "Student Dashboard",
        href: "/docs/student/dashboard",
      },
      {
        title: "Announcements",
        href: "/docs/student/announcements",
      },
      {
        title: "My Courses",
        href: "/docs/student/courses",
      },
      {
        title: "Attendance",
        href: "/docs/student/attendance",
      },
      {
        title: "Assessments",
        href: "/docs/student/assessments",
      },
      {
        title: "My Analytics",
        href: "/docs/student/analytics",
      },
      {
        title: "My Documents",
        href: "/docs/student/documents",
      },
      {
        title: "Certificates",
        href: "/docs/student/certificates",
      },
      {
        title: "Code Arena",
        href: "/docs/student/code-arena",
      },
      {
        title: "AI Study Mentor",
        href: "/docs/student/ai-study-mentor",
      },
      {
        title: "Chats",
        href: "/docs/student/chats",
      },
      {
        title: "Projects",
        href: "/docs/student/projects",
      },
      {
        title: "Preferences / Settings",
        href: "/docs/student/settings",
      },
      {
        title: "Logout",
        href: "/docs/student/logout",
      },
    ],
  },
  {
    title: "Mentor Guide",
    items: [
      {
        title: "Login & Access Control",
        href: "/docs/mentor/login",
      },
      {
        title: "Mentor Command Centre",
        href: "/docs/mentor/dashboard",
      },
      {
        title: "Student Registry & Management",
        href: "/docs/mentor/student-registry",
      },
      {
        title: "Course Management Hub",
        href: "/docs/mentor/course-management",
      },
      {
        title: "Course Profile & Enrolee Analytics",
        href: "/docs/mentor/course-profile",
      },
      {
        title: "Curriculum Builder & Syllabus Editor",
        href: "/docs/mentor/curriculum-builder",
      },
      {
        title: "Enrolled Course Student Progress Tracker",
        href: "/docs/mentor/student-progress",
      },
      {
        title: "Admin Tasks & Progression Board",
        href: "/docs/mentor/kanban-tasks",
      },
      {
        title: "Custom Assignment & Assessment Creation",
        href: "/docs/mentor/assignments",
      },
      {
        title: "Assignment Submissions & Grading Ledger",
        href: "/docs/mentor/grading-ledger",
      },
      {
        title: "Classroom Attendance Matrix",
        href: "/docs/mentor/attendance",
      },
      {
        title: "Technical Session Logging & SLA Registry",
        href: "/docs/mentor/session-logging",
      },
      {
        title: "Project Portfolio Dashboard",
        href: "/docs/mentor/project-portfolio",
      },
      {
        title: "Project Architecture & Milestone Planner",
        href: "/docs/mentor/project-milestone",
      },
      {
        title: "Doubt Resolution Forum & SLA Manager",
        href: "/docs/mentor/doubt-resolution",
      },
      {
        title: "AI Co-Pilot & Data Inquiry Engine",
        href: "/docs/mentor/ai-copilot",
      },
      {
        title: "Interactive Student Chat & File Transfer",
        href: "/docs/mentor/chats",
      },
      {
        title: "Completion Certificate Issuance & Audit",
        href: "/docs/mentor/certificates",
      },
      {
        title: "Student Document Repository",
        href: "/docs/mentor/student-documents",
      },
      {
        title: "Performance Analytics & Retention Insights",
        href: "/docs/mentor/analytics",
      },
      {
        title: "Coding Arena & Interactive Compiler",
        href: "/docs/mentor/code-arena",
      },
      {
        title: "Portal Announcements Board",
        href: "/docs/mentor/announcements",
      },
      {
        title: "Settings, Profile & Password Protocols",
        href: "/docs/mentor/settings",
      },
      {
        title: "Jitsi Live Classroom Integration",
        href: "/docs/mentor/live-classroom",
      },
      {
        title: "Quality Assurance Audit Panel",
        href: "/docs/mentor/quality-audit",
      },
      {
        title: "In-App Notification System",
        href: "/docs/mentor/notifications",
      },
      {
        title: "Secure Session Terminate (Logout)",
        href: "/docs/mentor/logout",
      },
    ],
  },
  {
    title: "Admin Guide",
    items: [
      {
        title: "Login",
        href: "/docs/admin/login",
      },
      {
        title: "Admin Dashboard",
        href: "/docs/admin/dashboard",
      },
      {
        title: "User Management",
        href: "/docs/admin/user-management",
      },
      {
        title: "Batch Management",
        href: "/docs/admin/batch-management",
      },
      {
        title: "Course Management",
        href: "/docs/admin/course-management",
      },
      {
        title: "Announcements",
        href: "/docs/admin/announcements",
      },
      {
        title: "Assessments Management",
        href: "/docs/admin/assessments",
      },
      {
        title: "Attendance Management",
        href: "/docs/admin/attendance",
      },
      {
        title: "Analytics & Reports",
        href: "/docs/admin/analytics",
      },
      {
        title: "Certificates",
        href: "/docs/admin/certificates",
      },
      {
        title: "Projects Management",
        href: "/docs/admin/projects",
      },
      {
        title: "Chats / Messaging",
        href: "/docs/admin/chats",
      },
      {
        title: "Settings & Preferences",
        href: "/docs/admin/settings",
      },
      {
        title: "Logout",
        href: "/docs/admin/logout",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "FAQ",
        href: "/docs/faq",
      },
    ],
  },
];

// Flat list of all nav items for prev/next navigation
export function getFlatNavItems() {
  return navigation.flatMap((section) =>
    section.items.flatMap((item) => {
      if (item.items) {
        return item.items;
      }
      return item;
    })
  );
}

// Get prev and next items for a given href
export function getPrevNextItems(href: string) {
  const flatItems = getFlatNavItems().filter((item) => item.href);
  const currentIndex = flatItems.findIndex((item) => item.href === href);

  return {
    prev: currentIndex > 0 ? flatItems[currentIndex - 1] : null,
    next:
      currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null,
  };
}

// Get section title for a given href
export function getSectionTitle(href: string): string {
  for (const section of navigation) {
    const found = section.items.some(
      (item) =>
        item.href === href || item.items?.some((sub) => sub.href === href)
    );
    if (found) return section.title;
  }
  return "";
}

// Get breadcrumbs for a given href
export function getBreadcrumbs(href: string) {
  const breadcrumbs = [{ title: "Docs", href: "/docs" }];

  for (const section of navigation) {
    for (const item of section.items) {
      if (item.href === href) {
        breadcrumbs.push({ title: section.title, href: "#" });
        breadcrumbs.push({ title: item.title, href: item.href });
        return breadcrumbs;
      }
      if (item.items) {
        for (const sub of item.items) {
          if (sub.href === href) {
            breadcrumbs.push({ title: section.title, href: "#" });
            breadcrumbs.push({ title: item.title, href: "#" });
            breadcrumbs.push({ title: sub.title, href: sub.href! });
            return breadcrumbs;
          }
        }
      }
    }
  }

  return breadcrumbs;
}
