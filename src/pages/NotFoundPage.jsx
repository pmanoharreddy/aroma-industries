import Seo from "@/components/Seo";
import Container from "@/components/Container";
import ButtonLink from "@/components/Button";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found — Aroma Industries"
        description="The page you're looking for could not be found."
        path="/404"
      />

      <section className="flex min-h-[75vh] items-center justify-center px-5 pt-20">
        <Container className="text-center">
          <p className="font-display text-7xl font-semibold text-brand-600 sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-stone-900">
            Page not found
          </h1>
          <p className="mx-auto mt-3 max-w-md text-stone-600">
            Sorry, the page you're looking for doesn't exist or may have been
            moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/">Back to Home</ButtonLink>
            <ButtonLink to="/products" variant="outline">
              Browse Products
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
