import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@/components/icons";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/products?category=${category.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-xl font-semibold text-white">
          {category.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/80">
          {category.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 group-hover:bg-white group-hover:text-stone-900">
          View Products
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
