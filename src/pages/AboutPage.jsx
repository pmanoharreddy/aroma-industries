import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/Button";
import {
  ShieldCheckIcon,
  FactoryIcon,
  HeartIcon,
  SparkleIcon,
  StarIcon,
  PackageIcon,
  SlidersIcon,
  TargetIcon,
  EyeIcon,
} from "@/components/icons";

const capabilities = [
  {
    Icon: PackageIcon,
    title: "Tote & Shopping Bags",
    description:
      "Everyday tote and shopping bags in cotton, canvas and jute for retail and daily use.",
  },
  {
    Icon: FactoryIcon,
    title: "Travel & Sport Bags",
    description:
      "Duffels, drawstring and yoga bags designed for dependable journeys and active routines.",
  },
  {
    Icon: SlidersIcon,
    title: "Custom Manufacturing",
    description:
      "Made-to-order bags tailored to your material, size, colour and branding requirements.",
  },
  {
    Icon: HeartIcon,
    title: "Promotional & Corporate",
    description:
      "Brand-ready bags for events, gifting, campaigns and corporate programmes.",
  },
];

const values = [
  { Icon: ShieldCheckIcon, name: "Quality", text: "We hold every product to a high, consistent standard." },
  { Icon: FactoryIcon, name: "Reliability", text: "Dependable production and delivery you can plan around." },
  { Icon: HeartIcon, name: "Customer Focus", text: "Your requirements guide how we work, from sample to delivery." },
  { Icon: SparkleIcon, name: "Innovation", text: "We keep improving our products, materials and processes." },
  { Icon: StarIcon, name: "Integrity", text: "Honest communication and straightforward business, always." },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us — Aroma Industries"
        description="Learn about Aroma Industries — a manufacturer of quality bags. Discover our story, what we do, and the values that guide our work."
        path="/about"
      />

      <PageHeader
        eyebrow="About Us"
        title="About Aroma Industries"
        description="A manufacturer focused on quality products, dependable service and long-term relationships."
      />

      {/* Our story */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="A focus on quality, from the very beginning"
                description="Aroma Industries began with a simple belief: the bags people use every day should be dependable, well-designed and fairly priced."
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
                <p>
                  Today we focus on turning that belief into products — manufacturing
                  a range of tote, shopping, travel and promotional bags with
                  consistent quality and careful attention to detail.
                </p>
                {/* Add the company's founding story and history here when available. */}
                <p>
                  From the materials we select to the stitching on every seam, we
                  work to make products our customers can rely on — and that their
                  own customers will love.
                </p>
              </div>
              <ButtonLink to="/contact" className="mt-8">
                Work With Us
              </ButtonLink>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="overflow-hidden rounded-3xl sm:translate-y-6">
                  <img
                    src="/images/categories/custom-bags.jpg"
                    alt="A selection of custom bags in different colours"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src="/images/gallery/materials.jpg"
                    alt="Premium materials used to manufacture bags"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Products and manufacturing capabilities"
            description="We design and manufacture a focused range of bags, with the flexibility to produce made-to-order items for businesses."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-stone-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-stone-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl bg-ink p-9 text-stone-300 lg:p-12">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                  <TargetIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-white">
                  Our Mission
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-400">
                  To deliver quality products and dependable service that our
                  customers can rely on — combining thoughtful design, honest
                  materials and consistent manufacturing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="h-full rounded-3xl bg-brand-600 p-9 text-white lg:p-12">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <EyeIcon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold">Our Vision</h2>
                <p className="mt-3 text-base leading-relaxed text-brand-50/90">
                  To build long-term relationships and grow as a trusted supplier
                  and manufacturer — known for quality, reliability and genuine
                  care for the people we serve.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What guides our work"
            description="These principles shape how we make products and how we treat the people we work with."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(({ Icon, name, text }, index) => (
              <Reveal key={name} delay={index * 70}>
                <div className="h-full rounded-2xl border border-stone-200/80 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/5">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-stone-900">
                    {name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
