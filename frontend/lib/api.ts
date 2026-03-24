export function getApiUrl() {
  // 1. Explicit environment variable override
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  // 2. Client-side dynamic resolution
  if (typeof window !== 'undefined') {
    // If accessing via port 3000 (direct frontend access), 
    // we assume the backend is on the same host at port 5000.
    if (window.location.port === '3000') {
      return `${window.location.protocol}//${window.location.hostname}:5000`;
    }
    
    // Otherwise, assume it's behind Nginx proxy on port 80/443
    return '/api';
  }

  // 3. Server-side (SSR/Prerendering)
  // Inside Docker, the backend is reachable via the service name 'backend'.
  // We use localhost as a fallback for local development.
  return 'http://backend:5000';
}
