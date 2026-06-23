import Link from "next/link";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.status === "available";
  const href = `/${product.slug}`;

  const content = (
    <>
      <span
        className={cn(
          "text-sm transition-colors sm:text-[0.9375rem]",
          isAvailable ? "text-rl-text" : "text-rl-text-muted",
        )}
      >
        {product.name}
      </span>
      <span
        className={cn(
          "text-xs tracking-wide",
          isAvailable ? "text-rl-text-muted" : "text-rl-text-muted/70",
        )}
      >
        {isAvailable ? "Live" : "Soon"}
      </span>
    </>
  );

  const rowClasses =
    "flex items-center justify-between border-b border-rl-border py-4 transition-colors last:border-b-0";

  if (isAvailable) {
    return (
      <Link
        href={href}
        className={cn(rowClasses, "group hover:text-rl-text")}
      >
        {content}
      </Link>
    );
  }

  return <div className={rowClasses}>{content}</div>;
}
