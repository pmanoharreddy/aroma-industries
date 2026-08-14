import Container from "@/components/Container";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-cream pb-12 pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 -top-10 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <Container className="relative">
        {eyebrow && (
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            <span className="h-px w-6 bg-brand-400" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
