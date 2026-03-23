import { GetStartedClient } from "@/components/GetStartedClient";
import { PAGE_SEO } from "@/lib/seo/pageMapping";

export const metadata = PAGE_SEO.getStarted;

export default function GetStartedPage() {
  return <GetStartedClient />;
}
