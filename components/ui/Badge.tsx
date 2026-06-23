import { cn } from "@/lib/utils";

type BadgeProps = {
  status: "available" | "coming-soon";
  className?: string;
};

export function Badge({ status, className }: BadgeProps) {
  const isAvailable = status === "available";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em]",
        isAvailable
          ? "bg-rl-success/10 text-rl-success ring-1 ring-rl-success/20"
          : "bg-white/[0.04] text-rl-text-muted ring-1 ring-rl-border",
        className,
      )}
    >
      {isAvailable ? "Available Now" : "Coming Soon"}
    </span>
  );
}
