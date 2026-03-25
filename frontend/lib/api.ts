export function getApiUrl() {
  // 1. Explicit environment variable override
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // 2. Client-side dynamic resolution
  if (typeof window !== 'undefined') {
    // We always use relative paths in the browser to go through Nginx
    return '';
  }

  // 3. Server-side (SSR/Prerendering)
  // Inside Docker, the backend is reachable via the service name 'backend'.
  // We use localhost as a fallback for local development.
  return 'http://backend:5000';
}
