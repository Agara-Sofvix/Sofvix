import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo/metadata';
import { CATEGORIES } from './(main)/products/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/services',
    '/products',
    '/about',
    '/careers',
    '/get-started',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicServices = CATEGORIES.flatMap((category) =>
    (category.capabilities || []).map((service) => ({
      url: `${BASE_URL}/services/${category.slug}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  return [...staticPages, ...dynamicServices];
}
