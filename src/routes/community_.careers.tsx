import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Interim duplicate of the main Careers page.
 * Permanently consolidated into /careers.
 */
export const Route = createFileRoute("/community_/careers")({
  beforeLoad: () => {
    throw redirect({ to: "/careers", statusCode: 301 });
  },
});
