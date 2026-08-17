import { memo } from "react";
import { Link } from "react-router-dom";

import { images } from "@/content/images";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** "plate" wraps the logo in a white plate so it stays legible on dark surfaces. */
  surface?: "light" | "plate";
  className?: string;
  imageClassName?: string;
  linkTo?: string | null;
};

const LogoImage = memo(function LogoImage({ className }: { className?: string }) {
  return (
    <img
      src={images.logoTransparent}
      alt="NEBOY AGENCY LLC — Import & Export"
      width={1800}
      height={900}
      loading="eager"
      decoding="async"
      className={cn("h-full w-auto object-contain", className)}
    />
  );
});

function Logo({ surface = "light", className, imageClassName, linkTo = "/" }: LogoProps) {
  const content =
    surface === "plate" ? (
      <span className="inline-flex items-center rounded-[3px] bg-white px-3 py-2 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.9)]">
        <span className={cn("block h-9 sm:h-11", className)}>
          <LogoImage className={imageClassName} />
        </span>
      </span>
    ) : (
      <span className={cn("block h-9 sm:h-10", className)}>
        <LogoImage className={imageClassName} />
      </span>
    );

  if (!linkTo) return content;

  return (
    <Link to={linkTo} aria-label="NEBOY AGENCY LLC — accueil" className="inline-flex shrink-0 items-center">
      {content}
    </Link>
  );
}

export default memo(Logo);
