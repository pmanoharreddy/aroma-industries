import { cn } from "@/utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em]",
            isLight ? "text-brand-400" : "text-brand-600",
            align === "center" && "justify-center"
          )}
        >
          <span
            className={cn("h-px w-6", isLight ? "bg-brand-500/50" : "bg-brand-400")}
            aria-hidden="true"
          />
          {eyebrow}
          {align === "center" && (
            <span
              className={cn("h-px w-6", isLight ? "bg-brand-500/50" : "bg-brand-400")}
              aria-hidden="true"
            />
          )}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
          isLight ? "text-white" : "text-stone-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            isLight ? "text-stone-300" : "text-stone-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
