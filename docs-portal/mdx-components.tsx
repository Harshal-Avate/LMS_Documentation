import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { Callout, Info, Warning, Success, Error, Note } from "@/components/docs/Callout";
import { MenuTree } from "@/components/docs/MenuTree";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Standard HTML img to completely bypass Next.js image optimization errors
    img: (props) => (
      <img
        {...props}
        alt={props.alt ?? "Documentation image"}
        className="rounded-xl border shadow-md my-6 w-full h-auto"
      />
    ),

    // Custom table wrappers
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6 rounded-lg border">
        <table className="w-full" {...props}>
          {children}
        </table>
      </div>
    ),

    // Callout components for MDX shorthand
    Callout,
    Info,
    Warning,
    Success,
    Error,
    Note,
    MenuTree,

    // Spread user-provided components
    ...components,
  };
}
