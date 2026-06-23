import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-rl-accent text-white hover:bg-rl-accent-hover border border-transparent shadow-[0_0_0_1px_rgba(211,47,47,0.25)]",
  ghost:
    "bg-transparent text-rl-text border border-rl-border hover:border-rl-border-hover hover:bg-white/[0.03]",
  secondary:
    "bg-rl-surface-elevated text-rl-text border border-rl-border hover:border-rl-border-hover",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rl-accent-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-rl-bg disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
