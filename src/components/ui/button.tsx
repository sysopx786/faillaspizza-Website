import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        tomato:
          "bg-tomato text-cream hover:bg-tomato-dark shadow-[0_1px_0_rgba(0,0,0,0.15)]",
        gold: "bg-gold text-ink hover:bg-gold-soft",
        outline:
          "border border-line bg-transparent text-ink hover:bg-paper-2",
        ghost: "text-cream hover:bg-white/10",
        dark: "bg-ink text-cream hover:bg-ink-2",
        invert: "bg-cream text-ink hover:bg-paper",
      },
      size: {
        xs: "h-8 rounded-md px-2.5 text-xs",
        sm: "h-10 rounded-md px-3.5 text-sm",
        md: "h-11 rounded-md px-5 text-sm",
        lg: "h-12 rounded-lg px-6 text-[0.9375rem]",
      },
    },
    defaultVariants: {
      variant: "tomato",
      size: "md",
    },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
