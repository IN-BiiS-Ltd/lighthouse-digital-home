import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for the /about section. The actual /about page lives in
// about.index.tsx; child pages (e.g. /about/why-lighthouse) render here.
export const Route = createFileRoute("/about")({
  component: () => <Outlet />,
});
