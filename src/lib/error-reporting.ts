type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: ErrorReportOptions = {
    mechanism: "react_error_boundary",
    handled: false,
    severity: "error",
  },
) {
  if (typeof window === "undefined") return;

  const payload = {
    error,
    source: "react_error_boundary",
    route: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...context,
  };

  // Reserved hook for future production error-tracking integration.
  // No external telemetry is currently active.
  if (process.env.NODE_ENV === "development") {
    console.error("[Error reported]", payload, options);
  }
}
