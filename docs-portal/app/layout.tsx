import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const headingFont = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.simplesphere.in"),
  title: {
    default: "SimpleSphere Learning — Documentation",
    template: "%s | SimpleSphere Docs",
  },
  description:
    "Official documentation for the SimpleSphere Learning Management System. Complete guides for Students, Mentors, and Administrators.",
  keywords: [
    "SimpleSphere",
    "LMS",
    "Learning Management System",
    "documentation",
    "student guide",
    "mentor guide",
    "admin guide",
  ],
  authors: [{ name: "SimpleSphere Learning" }],
  creator: "SimpleSphere Learning",
  publisher: "SimpleSphere Learning",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.simplesphere.in",
    siteName: "SimpleSphere Documentation",
    title: "SimpleSphere Learning — Documentation",
    description:
      "Official documentation for the SimpleSphere Learning Management System.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SimpleSphere Learning Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpleSphere Learning — Documentation",
    description:
      "Official documentation for the SimpleSphere Learning Management System.",
    images: ["/og-image.png"],
    creator: "@simplesphere",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${sansFont.variable} ${headingFont.variable} ${monoFont.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
