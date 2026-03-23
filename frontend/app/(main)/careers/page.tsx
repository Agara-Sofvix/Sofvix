import { CareersClient } from "@/components/CareersClient";
import { Suspense } from "react";
import Loading from "../loading";
import { PAGE_SEO } from "@/lib/seo/pageMapping";

export const metadata = PAGE_SEO.careers;

async function getJobs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  const res = await fetch(`${apiUrl}/api/jobs`, {
    next: { revalidate: 60 }
  });
  
  if (!res.ok) {
    return []; // Return empty array on error instead of throwing to keep UI responsive
  }
  
  return res.json();
}

async function CareersList() {
  const jobs = await getJobs();
  return <CareersClient initialJobs={jobs} />;
}

export default function CareersPage() {
  return (
    <Suspense fallback={<Loading />}>
      <CareersList />
    </Suspense>
  );
}
