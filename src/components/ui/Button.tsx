"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-forest-green text-white hover:bg-grass-green focus:ring-grass-green shadow-sm hover:shadow-md",
      secondary:
        "bg-grass-green text-white hover:bg-forest-green focus:ring-forest-green shadow-sm hover:shadow-md",
      outline:
        "border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-white focus:ring-forest-green",
      ghost:
        "text-forest-green hover:bg-cream focus:ring-forest-green",
    };

    const sizes = {
      sm: "px-4 py-2.5 text-sm min-h-[44px]",
      md: "px-6 py-3 text-base min-h-[48px]",
      lg: "px-8 py-4 text-lg min-h-[52px]",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
