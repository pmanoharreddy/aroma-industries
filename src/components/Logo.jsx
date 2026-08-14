import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { siteConfig } from "@/data/siteConfig";

export default function Logo({ tone = "dark", className }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 shadow-sm transition-transform duration-300 group-hover:-rotate-3">
        <svg
          viewBox="0 0 32 32"
          className="h-5 w-5 text-white"
          aria-hidden="true"
        >
          <path
            d="M10 13h12l-1.2 10.5a2 2 0 0 1-2 1.7h-5.6a2 2 0 0 1-2-1.7L10 13z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 13.5v-2a2.5 2.5 0 0 1 5 0v2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </span>
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
