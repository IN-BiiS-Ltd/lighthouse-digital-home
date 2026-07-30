/**
 * Single source of truth for the institutional share card.
 *
 * Social crawlers (WhatsApp, Facebook, LinkedIn, X) cache previews by image
 * URL, so a regenerated card only propagates when the URL changes. Bump
 * SOCIAL_CARD_VERSION — and republish — whenever the artwork is regenerated;
 * every og:image / twitter:image / JSON-LD reference follows automatically.
 */
export const SOCIAL_CARD_VERSION = 5;

export const SITE_ORIGIN = "https://lighthousecampus.com";

/** Versioned filename — a new path guarantees a fresh crawler fetch. */
export const SOCIAL_CARD_URL = `${SITE_ORIGIN}/lighthouse-social-card-v${SOCIAL_CARD_VERSION}.jpg`;

export const SOCIAL_CARD_TYPE = "image/jpeg";
export const SOCIAL_CARD_WIDTH = "1200";
export const SOCIAL_CARD_HEIGHT = "630";
export const SOCIAL_CARD_ALT =
  "Light House Campus — International School · Sudan, South Sudan, Egypt & Uganda";
