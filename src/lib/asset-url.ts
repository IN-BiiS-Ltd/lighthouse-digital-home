/**
 * Resolve a Lovable asset URL so it works on any deployed origin, including
 * custom domains that do not proxy the internal `/__l5e/` asset route.
 *
 * Accepts either the raw url string or an imported `*.asset.json` pointer.
 */
const ASSET_ORIGIN = "https://id-preview--626b9399-5e69-4cf1-8f55-da2c8e16cb29.lovable.app";

export function assetUrl(input: string | { url: string }): string {
  const raw = typeof input === "string" ? input : input.url;
  if (!raw) return raw;
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith("/__l5e/")) return `${ASSET_ORIGIN}${raw}`;
  return raw;
}
