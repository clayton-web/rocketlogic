import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { products } from "@/lib/products";

export function ProductsSection() {
  const liveProducts = products.filter((product) => product.status === "live");
  const upcomingProducts = products.filter(
    (product) => product.status === "coming-soon",
  );

  return (
    <section
      id="products"
      className="scroll-mt-14 border-t border-rl-border bg-rl-surface/40 py-20 md:scroll-mt-16 md:py-28"
    >
      <Container>
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-rl-text-subtle">
          Products
        </h2>

        <div className="mt-12 md:mt-14">
          {liveProducts.map((product) => (
            <article key={product.id}>
              <Link
                href={product.href ?? "#"}
                className="group flex flex-col gap-6 rounded-2xl border border-rl-border-strong bg-rl-surface p-6 transition-colors hover:border-rl-text-subtle hover:bg-rl-surface-raised focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rl-blue focus-visible:ring-offset-2 focus-visible:ring-offset-rl-bg sm:flex-row sm:items-center sm:justify-between sm:p-8"
              >
                <div className="flex min-w-0 flex-1 items-center gap-5 sm:gap-6">
                  {product.logo ? (
                    <div className="relative h-11 w-32 shrink-0 sm:h-12 sm:w-36">
                      <Image
                        src={product.logo}
                        alt=""
                        fill
                        className="object-contain object-left"
                        sizes="(max-width: 640px) 128px, 144px"
                      />
                    </div>
                  ) : null}

                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold tracking-tight text-rl-text sm:text-xl">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <StatusBadge status={product.status} />
                  <span
                    aria-hidden
                    className="text-sm text-rl-text-subtle transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                  >
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {upcomingProducts.length > 0 ? (
          <div className="mt-10 md:mt-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-rl-text-subtle">
              Upcoming
            </p>

            <ul className="divide-y divide-rl-border rounded-xl border border-rl-border bg-rl-bg/50">
              {upcomingProducts.map((product) => (
                <li key={product.id}>
                  <div className="flex items-center justify-between gap-6 px-5 py-5 sm:px-6 sm:py-5">
                    <span className="min-w-0 truncate text-base text-rl-text-muted">
                      {product.name}
                    </span>
                    <StatusBadge status={product.status} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
