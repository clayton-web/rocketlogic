import Link from "next/link";
import type { Product } from "@/lib/products";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.status === "available";
  const href = `/${product.slug}`;

  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-rl-text">
            {product.name}
          </h3>
          {product.category ? (
            <p className="mt-1 text-xs uppercase tracking-[0.08em] text-rl-text-muted">
              {product.category}
            </p>
          ) : null}
        </div>
        <Badge status={product.status} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-rl-text-muted">
        {product.shortDescription}
      </p>
      {isAvailable ? (
        <p className="mt-6 text-sm font-medium text-rl-accent-secondary">
          Open product →
        </p>
      ) : null}
    </>
  );

  const cardClasses = cn(
    "group relative rounded-2xl border border-rl-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-200 ease-out",
    isAvailable
      ? "hover:-translate-y-0.5 hover:border-rl-border-hover hover:bg-white/[0.05]"
      : "opacity-70",
  );

  if (isAvailable) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cn(cardClasses, "cursor-default")}>{cardContent}</div>
  );
}
