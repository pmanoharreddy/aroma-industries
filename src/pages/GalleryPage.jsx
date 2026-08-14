import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Container from "@/components/Container";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery — Aroma Industries"
        description="Explore the Aroma Industries gallery — our products, collections, manufacturing workshop and the materials we work with."
        path="/gallery"
      />

      <PageHeader
        eyebrow="Gallery"
        title="Our Work & Workshop"
        description="A closer look at our products, materials and manufacturing — click any image to view it full size."
      />

      <section className="py-14 lg:py-20">
        <Container>
          <Gallery />
        </Container>
      </section>
    </>
  );
}
