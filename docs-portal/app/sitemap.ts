import type { MetadataRoute } from "next";

const baseUrl = "https://docs.simplesphere.in";

const docRoutes = [
  // Getting Started
  "/docs/getting-started/introduction",
  "/docs/getting-started/login",
  "/docs/getting-started/dashboard",
  // Student Guide
  "/docs/student/login",
  "/docs/student/dashboard",
  "/docs/student/announcements",
  "/docs/student/courses",
  "/docs/student/attendance",
  "/docs/student/assessments",
  "/docs/student/analytics",
  "/docs/student/documents",
  "/docs/student/certificates",
  "/docs/student/code-arena",
  "/docs/student/ai-study-mentor",
  "/docs/student/chats",
  "/docs/student/projects",
  "/docs/student/settings",
  "/docs/student/logout",
  // Mentor Guide
  "/docs/mentor/login",
  "/docs/mentor/dashboard",
  "/docs/mentor/student-registry",
  "/docs/mentor/course-management",
  "/docs/mentor/course-profile",
  "/docs/mentor/curriculum-builder",
  "/docs/mentor/student-progress",
  "/docs/mentor/kanban-tasks",
  "/docs/mentor/assignments",
  "/docs/mentor/grading-ledger",
  "/docs/mentor/attendance",
  "/docs/mentor/session-logging",
  "/docs/mentor/project-portfolio",
  "/docs/mentor/project-milestone",
  "/docs/mentor/doubt-resolution",
  "/docs/mentor/ai-copilot",
  "/docs/mentor/chats",
  "/docs/mentor/certificates",
  "/docs/mentor/student-documents",
  "/docs/mentor/analytics",
  "/docs/mentor/code-arena",
  "/docs/mentor/announcements",
  "/docs/mentor/settings",
  "/docs/mentor/live-classroom",
  "/docs/mentor/quality-audit",
  "/docs/mentor/notifications",
  "/docs/mentor/logout",
  // Admin Guide
  "/docs/admin/login",
  "/docs/admin/dashboard",
  "/docs/admin/user-management",
  "/docs/admin/batch-management",
  "/docs/admin/course-management",
  "/docs/admin/announcements",
  "/docs/admin/assessments",
  "/docs/admin/attendance",
  "/docs/admin/analytics",
  "/docs/admin/certificates",
  "/docs/admin/projects",
  "/docs/admin/chats",
  "/docs/admin/settings",
  "/docs/admin/logout",
  // Support
  "/docs/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...docRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return routes;
}
