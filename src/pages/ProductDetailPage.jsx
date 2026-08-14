import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Seo from "@/components/Seo";
import Container from "@/components/Container";
import ButtonLink from "@/components/Button";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import NotFoundPage from "@/pages/NotFoundPage";
import { getProductBySlug, products } from "@/data/products";
import { getCategory } from "@/data/categories";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/utils/cn";
import {
  CheckIcon,
  ChevronRightIcon,
  PhoneIcon,
  MailIcon,
} from "@/components/icons";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug ?? "");
  const [activeImage, setActiveImage] = useState(0);

  // Reset the selected image whenever the product changes.
  useEffect(() => {
    setActiveImage(0);
  }, [slug]);

  const related = useMemo(() => {
    if (!product) return [];
    return products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return <NotFoundPage />;
  }

  const category = getCategory(product.category);

  return (
    <>
      <Seo
        title={`${product.name} — Aroma Industries`}
        description={product.shortDescription}
        path={`/products/${product.slug}`}
        image={product.images[0]}
      />

      <section className="pb-16 pt-28 sm:pt-32">
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link to="/" className="transition-colors hover:text-brand-700">
                  Home
                </Link>
              </li>
              <ChevronRightIcon className="h-3.5 w-3.5 text-stone-300" />
              <li>
                <Link to="/products" className="transition-colors hover:text-brand-700">
                  Products
                </Link>
              </li>
              <ChevronRightIcon className="h-3.5 w-3.5 text-stone-300" />
              <li aria-current="page" className="font-medium text-stone-800">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Images */}
            <div>
              <div className="overflow-hidden rounded-3xl bg-cream">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="mt-4 flex gap-3" role="group" aria-label="Product images">
                  {product.images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1} of ${product.name}`}
                      aria-pressed={index === activeImage}
                      className={cn(
                        "h-20 w-20 overflow-hidden rounded-xl border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500",
                        index === activeImage
                          ? "border-brand-600"
                          : "border-transparent hover:border-stone-300"
                      )}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              {category && (
                <Link
                  to={`/products?category=${category.slug}`}
                  className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 transition-colors hover:bg-brand-200"
                >
                  {category.name}
                </Link>
              )}

              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-stone-600">
                {product.description}
              </p>

              {/* Material */}
              <div className="mt-7 border-t border-stone-100 pt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                  Material
                </h2>
                <p className="mt-1.5 text-stone-800">{product.material}</p>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                  Available Sizes
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-lg border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-700"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colours */}
              <div className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                  Available Colours
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {product.colors.map((color) => (
                    <span
                      key={color.name}
                      className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white py-1 pl-1.5 pr-3 text-sm font-medium text-stone-700"
                    >
                      <span
                        className="h-5 w-5 rounded-full border border-black/10"
                        style={{ backgroundColor: color.hex }}
                        aria-hidden="true"
                      />
                      {color.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mt-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                  Features
                </h2>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-stone-700"
                    >
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customisation */}
              {product.customizable && (
                <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-4">
                  <p className="text-sm font-semibold text-brand-800">
                    Customisation available
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    {product.customizationNote ??
                      "This product can be customised to your specific requirements."}
                  </p>
                </div>
              )}

              {/* Enquiry actions */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm shadow-brand-900/20 transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 sm:w-auto"
                >
                  <MailIcon className="h-5 w-5" />
                  Enquire About This Product
                </Link>

                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={siteConfig.contact.phoneHref} variant="outline">
                    <PhoneIcon className="h-4 w-4" />
                    Call Us
                  </ButtonLink>
                  <ButtonLink href={`mailto:${siteConfig.contact.email}`} variant="outline">
                    <MailIcon className="h-4 w-4" />
                    Email Us
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="pb-20 lg:pb-28">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-2xl font-semibold text-stone-900 sm:text-3xl">
                More in {category?.name}
              </h2>
              <ButtonLink to="/products" variant="ghost" withArrow className="hidden sm:inline-flex">
                View All
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Reveal key={item.id}>
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
