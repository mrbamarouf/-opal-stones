export const HTML_NO_STORE_HEADERS = {
  "cache-control": "no-cache, no-store, must-revalidate",
  "vercel-cdn-cache-control": "no-cache",
  "cdn-cache-control": "no-cache",
} as const;

export function withNoStoreHtmlHeaders(headers?: HeadersInit) {
  const nextHeaders = new Headers(headers);
  Object.entries(HTML_NO_STORE_HEADERS).forEach(([key, value]) => {
    nextHeaders.set(key, value);
  });
  return nextHeaders;
}

export function withNoStoreHtmlResponse(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("text/html")) return response;

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: withNoStoreHtmlHeaders(response.headers),
  });
}
