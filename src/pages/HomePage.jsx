import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import {
  CheckIcon,
  ShieldCheckIcon,
  FactoryIcon,
  SlidersIcon,
  HeartIcon,
  MailIcon,
  ArrowRightIcon,
} from "@/components/icons";

const introPoints = [
  "Quality products, thoughtfully made",
  "Practical, dependable designs",
  "Carefully selected materials",
  "Customer satisfaction, always",
];

const whyChoose = [
  {
    Icon: ShieldCheckIcon,
    title: "Quality Materials",
    description:
      "Products manufactured using carefully selected materials that are built to last.",
  },
  {
    Icon: FactoryIcon,
    title: "Reliable Manufacturing",
    description:
      "Consistent quality and dependable production you can trust, order after order.",
  },
  {
    Icon: SlidersIcon,
    title: "Custom Solutions",
    description:
      "Products designed around your specific business requirements, where available.",
  },
  {
    Icon: HeartIcon,
    title: "Customer Satisfaction",
    description:
      "Dependable service and long-term relationships built on trust and care.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <Seo
        title="Aroma Industries — Quality Bags. Crafted for Everyday Life."
        description="Aroma Industries manufactures quality bags for everyday life and business. Explore our collection of totes, travel bags, yoga bags and custom promotional bags."
        path="/"
      />

      <Hero />

      {/* Company introduction */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src="/images/about/workshop.jpg"
                    alt="Inside the Aroma Industries manufacturing workshop"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-brand-600 px-6 py-4 text-white shadow-xl shadow-brand-900/20 sm:block lg:-right-6">
                  <p className="font-display text-xl font-semibold">Crafted with care</p>
                  <p className="text-sm text-white/80">Attention to detail, every step</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SectionHeading
                align="left"
                eyebrow="About Us"
                title="Welcome to Aroma Industries"
                description={`${siteConfig.name} focuses on quality products, practical designs, dependable materials and, above all, customer satisfaction. From a single well-made tote to large custom production runs, we approach every product with the same care and attention to detail.`}
              />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {introPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-stone-700">{point}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink to="/about" variant="outline" className="mt-9">
                Learn More About Us
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Range"
            title="Explore Our Collection"
            description="Browse our product categories — every bag is made with dependable materials and a focus on everyday practicality."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => (
              <Reveal key={category.id} delay={(index % 4) * 60}>
                <CategoryCard category={category} />
              </Reveal>
            ))}

            {/* Custom enquiry CTA tile */}
            <Reveal delay={180}>
              <Link
                to="/contact"
                className="group flex h-full flex-col justify-between rounded-3xl bg-ink p-7 text-white transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <SlidersIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    Need something custom?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-300">
                    Tell us your requirements and we'll design bags made to order
                    for your business.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors group-hover:text-brand-200">
                  Enquire Now
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured"
              title="Featured Products"
              description="A selection of our most popular bags, ready for retail, gifting and business."
            />
            <ButtonLink to="/products" variant="outline" withArrow className="shrink-0">
              View All Products
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, index) => (
              <Reveal key={product.id} delay={(index % 4) * 60}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-ink py-20 text-stone-300 lg:py-28">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Why Choose Us"
            title="Why Choose Aroma Industries"
            description="We combine dependable manufacturing with a genuine focus on the people we work with."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-brand-500/50 hover:bg-white/[0.08]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA banner */}
      <section className="py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-600 px-8 py-14 text-center text-white sm:px-16 lg:py-16">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-brand-800/40 blur-2xl"
                aria-hidden="true"
              />
              <div className="relative">
                <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Have a project in mind?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-brand-50/90">
                  Whether you need a single custom sample or a large production
                  run, our team is ready to help you get started.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600"
                  >
                    <MailIcon className="h-5 w-5" />
                    Send an Enquiry
                  </Link>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-600"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
