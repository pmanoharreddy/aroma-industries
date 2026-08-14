import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("category") ?? "all";

  const filtered = useMemo(() => {
    if (active === "all") return products;
    const category = categories.find((c) => c.slug === active);
    if (!category) return products;
    return products.filter((product) => product.category === category.id);
  }, [active]);

  function handleChange(value) {
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  }

  const activeLabel =
    active === "all"
      ? "All products"
      : categories.find((c) => c.slug === active)?.name ?? "All products";

  return (
    <>
      <Seo
        title="Our Products — Aroma Industries"
        description="Browse the full range of quality bags from Aroma Industries — totes, shopping bags, drawstring bags, travel bags, yoga bags and custom promotional bags."
        path="/products"
      />

      <PageHeader
        eyebrow="Our Products"
        title="Browse Our Products"
        description="Explore our full range of quality bags. Use the filters to find exactly what you're looking for."
      />

      <section className="py-14 lg:py-20">
        <Container>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CategoryFilter active={active} onChange={handleChange} />
            <p className="text-sm font-medium text-stone-500">
              {activeLabel} ·{" "}
              <span className="text-stone-700">
                {filtered.length} {filtered.length === 1 ? "product" : "products"}
              </span>
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product, index) => (
                <Reveal key={product.id} delay={(index % 4) * 50}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-stone-500">
              No products found in this category.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
