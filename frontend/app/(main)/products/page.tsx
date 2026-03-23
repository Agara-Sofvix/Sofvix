import { ProductsClient } from "@/components/ProductsClient";
import { PAGE_SEO } from "@/lib/seo/pageMapping";
import { Suspense } from "react";

export const metadata = PAGE_SEO.products;

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gemini-light flex items-center justify-center">Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
