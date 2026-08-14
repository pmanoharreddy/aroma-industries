import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { ArrowRightIcon } from "@/components/icons";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500";

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-900/20",
  secondary: "bg-ink text-white hover:bg-stone-900",
  outline:
    "border border-stone-300 bg-white text-stone-800 hover:border-brand-500 hover:text-brand-700",
  ghost: "text-stone-700 hover:text-brand-700",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function ButtonLink({
  to,
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  withArrow = false,
  external = false,
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {withArrow && <ArrowRightIcon className="h-4 w-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
