/**
 * Whitelists URLs to http(s) only.
 *
 * React 16.9+ warns about `javascript:` URLs in `href` but does not block them.
 * Since all external links on this site come from `resume.json`, treat that
 * file as untrusted at render time and refuse to emit an anchor for anything
 * that isn't an absolute http/https URL.
 */
export const isSafeHttpUrl = (value) => {
  if (typeof value !== "string" || value.length === 0) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};
