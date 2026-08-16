import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { siteConfig } from "@/data/siteConfig";

export default function Logo({ tone = "dark", className }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${siteConfig.name} — home`}
    >
      <img
        src="/images/branding/brand_logo.png"
        alt="Aroma Industries logo"
        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:-rotate-3"
      />

      <span
        className={cn(
          "font-display text-[19px] font-semibold leading-none tracking-tight",
          tone === "dark" ? "text-stone-900" : "text-white"
        )}
      >
        Aroma Industries
      </span>
    </Link>
  );
}