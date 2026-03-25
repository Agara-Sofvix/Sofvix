export function getApiUrl() {
  // 1. Server-side (SSR/Prerendering)
  // Always use the internal Docker network name for better performance and reliability
  if (typeof window === 'undefined') {
    return 'http://backend:5000';
  }

  // 2. Explicit environment variable override (for browser)
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // 3. Client-side dynamic resolution (browser fallback)
  // We always use relative paths in the browser to go through Nginx
  return '';
}
