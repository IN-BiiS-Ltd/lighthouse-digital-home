import { useEffect, useState, useCallback } from "react";

export const CONSENT_STORAGE_KEY = "lh-cookie-consent-v1";
export const CONSENT_EVENT = "lh-consent-change";

export type ConsentChoice = "accepted" | "essential" | null;

interface StoredConsent {
  choice: ConsentChoice;
  at: string;
}

export function readConsent(): ConsentChoice {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    return parsed.choice ?? null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") return;
  try {
    if (choice === null) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
    } else {
      localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({ choice, at: new Date().toISOString() } satisfies StoredConsent),
      );
    }
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { choice } }));
  } catch {
    // storage unavailable — ignore
  }
}

/**
 * React hook that stays in sync with the stored consent choice
 * and any change dispatched elsewhere in the app.
 */
export function useConsent(): [ConsentChoice, (c: ConsentChoice) => void] {
  const [choice, setChoice] = useState<ConsentChoice>(null);

  useEffect(() => {
    setChoice(readConsent());
    const onChange = () => setChoice(readConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const set = useCallback((c: ConsentChoice) => {
    writeConsent(c);
    setChoice(c);
  }, []);

  return [choice, set];
}
