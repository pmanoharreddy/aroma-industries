import Container from "@/components/Container";
import ButtonLink from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import { FactoryIcon, ShieldCheckIcon, SlidersIcon } from "@/components/icons";

const trustItems = [
  { Icon: ShieldCheckIcon, label: "Quality Materials" },
  { Icon: SlidersIcon, label: "Custom Solutions" },
  { Icon: FactoryIcon, label: "Reliable Manufacturing" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-40">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-6 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-700 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
              {siteConfig.name} — Manufacturer
            </span>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              Quality Bags.
              <br />
              Crafted for <span className="text-brand-600">Everyday Life.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
              {siteConfig.name} designs and manufactures quality bags built on
              functionality, durability and careful attention to detail — for
              individuals, retailers and businesses alike.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/products" size="lg" withArrow>
                Explore Our Products
              </ButtonLink>
              <ButtonLink to="/contact" variant="outline" size="lg">
                Contact Us
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {trustItems.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-stone-700">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagery */}
          <div className="relative lg:pl-2">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-stone-900/15">
              <img
                src="/images/branding/hero.jpg"
                alt="A curated collection of quality bags manufactured by Aroma Industries"
                className="aspect-[4/3] w-full object-cover"
                fetchPriority="high"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-5 flex items-center gap-3 rounded-2xl border border-stone-100 bg-white p-4 shadow-xl shadow-stone-900/10 sm:left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <FactoryIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-stone-900">
                  Reliable Manufacturing
                </p>
                <p className="text-xs text-stone-500">
                  Consistent, dependable production
                </p>
              </div>
            </div>

            <span className="absolute -top-4 right-6 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white shadow-lg">
              Premium Quality
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
