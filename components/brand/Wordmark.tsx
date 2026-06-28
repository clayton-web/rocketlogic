import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

type WordmarkProps = {
  className?: string;
  linked?: boolean;
};

export function Wordmark({ className, linked = true }: WordmarkProps) {
  const content = (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="text-[15px] font-bold tracking-tight text-rl-text">
        Rocket
      </span>
      <span className="mt-0.5 text-[11px] font-normal tracking-tight text-rl-text-muted">
        Logic Inc.
      </span>
    </span>
  );

  if (!linked) {
    return content;
  }

  return (
    <Link
      href={ROUTES.home}
      className="inline-flex shrink-0 items-center transition-opacity hover:opacity-80"
      aria-label="Rocket Logic Inc. home"
    >
      {content}
    </Link>
  );
}
