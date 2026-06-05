import { cn } from "@/lib/utils";
import { Info as InfoIcon, AlertTriangle, CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import type { CalloutType } from "@/types/docs";
import type { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  type?: CalloutType;
  title?: string;
}

const calloutConfig = {
  info: {
    icon: InfoIcon,
    className: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100",
    iconClassName: "text-blue-500",
    defaultTitle: "Info",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-100",
    iconClassName: "text-amber-500",
    defaultTitle: "Warning",
  },
  success: {
    icon: CheckCircle2,
    className: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100",
    iconClassName: "text-emerald-500",
    defaultTitle: "Success",
  },
  error: {
    icon: XCircle,
    className: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100",
    iconClassName: "text-red-500",
    defaultTitle: "Error",
  },
  note: {
    icon: Lightbulb,
    className: "bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800 text-violet-900 dark:text-violet-100",
    iconClassName: "text-violet-500",
    defaultTitle: "Note",
  },
};

export function Callout({ children, type = "info", title }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4 my-6 text-sm",
        config.className
      )}
      role={type === "error" || type === "warning" ? "alert" : "note"}
    >
      <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", config.iconClassName)} />
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-semibold mb-1">{title}</p>
        )}
        <div className="prose-sm [&>p]:m-0 [&>p:not(:first-child)]:mt-2">
          {children}
        </div>
      </div>
    </div>
  );
}

// Named exports for MDX shorthand
export function Info({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="info" title={title}>{children}</Callout>;
}

export function Warning({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="warning" title={title}>{children}</Callout>;
}

export function Success({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="success" title={title}>{children}</Callout>;
}

export function Error({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="error" title={title}>{children}</Callout>;
}

export function Note({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="note" title={title}>{children}</Callout>;
}
