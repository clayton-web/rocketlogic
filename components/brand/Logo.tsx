import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  linked?: boolean;
};

export function Logo({
  className,
  width = 140,
  height = 40,
  priority = false,
  linked = true,
}: LogoProps) {
  const image = (
    <Image
      src="/brand/rocket-logic-logo.png"
      alt="Rocket Logic Inc."
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link
      href={ROUTES.home}
      className="inline-flex shrink-0 items-center"
      aria-label="Rocket Logic Inc. home"
    >
      {image}
    </Link>
  );
}
