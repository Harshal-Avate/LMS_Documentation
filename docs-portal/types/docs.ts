export interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
  label?: string;
  disabled?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export interface SearchItem {
  title: string;
  description: string;
  href: string;
  section: string;
  keywords?: string[];
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export type CalloutType = "info" | "warning" | "success" | "error" | "note";
