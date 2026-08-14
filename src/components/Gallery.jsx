import { useMemo, useState } from "react";
import { galleryImages } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";
import { MaximizeIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

const filterOptions = [
  "All",
  "Products",
  "Collections",
  "Manufacturing",
  "Materials",
  "Finished Products",
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === active),
    [active]
  );

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="group"
        aria-label="Filter gallery"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setActive(option)}
            aria-pressed={active === option}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
              active === option
                ? "bg-ink text-white shadow-sm"
                : "border border-stone-200 bg-white text-stone-600 hover:border-stone-400 hover:text-stone-900"
            )}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-label={`View ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <span className="absolute bottom-3 left-3 translate-y-2 text-left text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {image.category}
            </span>
            <span
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-stone-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            >
              <MaximizeIcon className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
