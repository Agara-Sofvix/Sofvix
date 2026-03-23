import { ServiceDetailClient } from "@/components/ServiceDetailClient";
import { CATEGORIES } from "@/app/(main)/products/data";
import { seo } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

type Props = {
  params: Promise<{ categorySlug: string; serviceSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug, serviceSlug } = await params;
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  const service = category?.capabilities?.find(s => s.slug === serviceSlug);

  if (!service) return {};

  return seo({
    title: `${service.name} | Agara Sofvix`,
    description: service.description,
    path: `/services/${categorySlug}/${serviceSlug}`,
    keywords: [service.name, ...(category?.name ? [category.name] : []), "Enterprise Software", "Custom Solutions"]
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { categorySlug, serviceSlug } = resolvedParams;

  const category = CATEGORIES.find(c => c.slug === categorySlug);
  const service = category?.capabilities?.find(s => s.slug === serviceSlug);

  if (!category || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
      </div>
    );
  }

  const serviceSchema = {
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "name": "Agara Sofvix"
    },
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "name": service.name,
      "itemListElement": service.features.map(f => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f
        }
      }))
    }
  };

  return (
    <>
      <JsonLd type="Service" data={serviceSchema} />
      <ServiceDetailClient 
        category={category} 
        service={service} 
        categorySlug={categorySlug} 
        serviceSlug={serviceSlug} 
      />
    </>
  );
}
