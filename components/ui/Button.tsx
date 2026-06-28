import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-rl-red text-white border border-rl-red hover:bg-rl-red-hover active:bg-rl-red-pressed",
  secondary:
    "bg-rl-surface-raised text-rl-text border border-rl-border-strong hover:border-rl-text-subtle",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rl-blue focus-visible:ring-offset-2 focus-visible:ring-offset-rl-bg",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
