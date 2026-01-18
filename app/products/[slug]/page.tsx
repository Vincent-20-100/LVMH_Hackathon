import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import { PageDPPSection1 } from "@/components/page-dpp-section-1";
import { PageDPPSection2 } from "@/components/page-dpp-section-2";
import { PageDPPSection3 } from "@/components/page-dpp-section-3";
import { PageDPPSection4 } from "@/components/page-dpp-section-4";

export async function generateStaticParams() {
  const products = getAllProducts();
 
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <PageDPPSection1 product={product} />
      <PageDPPSection2 product={product} />
      <PageDPPSection3 />
      <PageDPPSection4 />
    </main>
  );
}