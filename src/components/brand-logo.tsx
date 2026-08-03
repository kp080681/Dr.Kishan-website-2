import Image from "next/image";
import { images } from "@/content/site";

type BrandLogoProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Shared logo mark for header/footer — one authoritative asset. */
export function BrandLogo({
  className = "",
  sizes = "108px",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={images.logo.src}
      alt={images.logo.alt}
      width={images.logo.width}
      height={images.logo.height}
      sizes={sizes}
      priority={priority}
      className={`h-full w-auto max-w-none object-contain object-center ${className}`.trim()}
    />
  );
}
