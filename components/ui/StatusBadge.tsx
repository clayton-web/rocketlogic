import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/lib/products";

type StatusBadgeProps = {
  status: ProductStatus;
  className?: string;
};

const labels: Record<ProductStatus, string> = {
  live: "Live",
  "coming-soon": "Coming Soon",
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const isLive = status === "live";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        isLive
          ? "bg-rl-success/12 text-rl-success ring-1 ring-rl-success/35"
          : "bg-rl-surface-soft text-rl-text-subtle ring-1 ring-rl-border",
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}
