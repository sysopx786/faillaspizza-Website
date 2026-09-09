import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-md border border-line bg-cream px-3.5 text-sm text-ink placeholder:text-muted/80 outline-none transition-colors focus:border-ink/40 focus:ring-2 focus:ring-gold/40",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-line bg-cream px-3.5 py-3 text-sm text-ink placeholder:text-muted/80 outline-none transition-colors focus:border-ink/40 focus:ring-2 focus:ring-gold/40",
        className,
      )}
      {...props}
    />
  );
}

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label className={cn("text-sm font-medium text-ink", className)} {...props} />
  );
}
