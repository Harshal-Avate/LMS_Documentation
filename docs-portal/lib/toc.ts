import type { TOCItem } from "@/types/docs";

/**
 * Extracts headings from an MDX page's content.
 * This is used client-side to build the Table of Contents.
 */
export function extractTOCFromDOM(): TOCItem[] {
  if (typeof document === "undefined") return [];

  const article = document.querySelector("article");
  if (!article) return [];

  const headings = article.querySelectorAll("h2, h3, h4");
  const items: TOCItem[] = [];

  headings.forEach((heading) => {
    const level = parseInt(heading.tagName.replace("H", ""));
    const id = heading.id;
    const text = heading.textContent?.trim() || "";

    if (id && text) {
      items.push({ id, text, level });
    }
  });

  return items;
}

/**
 * Smoothly scrolls to a heading by its ID.
 */
export function scrollToHeading(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // offset for sticky header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
