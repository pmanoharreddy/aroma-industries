import { categories } from "@/data/categories";
import { cn } from "@/utils/cn";

export default function CategoryFilter({ active, onChange }) {
  const filters = [
    { id: "all", name: "All" },
    ...categories.map((category) => ({ id: category.slug, name: category.name })),
  ];

  return (
    <div
      role="group"
      aria-label="Filter products by category"
      className="flex flex-wrap gap-2"
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          onClick={() => onChange(filter.id)}
          aria-pressed={active === filter.id}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
            active === filter.id
              ? "bg-ink text-white shadow-sm"
              : "border border-stone-200 bg-white text-stone-600 hover:border-stone-400 hover:text-stone-900"
          )}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}
