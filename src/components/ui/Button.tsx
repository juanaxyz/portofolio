import type { ButtonHTMLAttributes } from "react";

type Variant = "filled" | "ghost";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantStyles: Record<Variant, string> = {
  filled: "bg-bone text-carbon border border-transparent",
  ghost:
    "bg-transparent text-bone border border-smoke hover:border-ash transition-colors duration-200",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1 text-body-sm",
  md: "px-4 py-2 text-body-sm",
};

export function Button({
  variant = "filled",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
