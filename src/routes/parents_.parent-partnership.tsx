import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Duplicate of /our-model/parent-partnership.
 * Consolidated so Parent Partnership exists in exactly one place.
 */
export const Route = createFileRoute("/parents_/parent-partnership")({
  beforeLoad: () => {
    throw redirect({ to: "/our-model/parent-partnership", statusCode: 301 });
  },
});
