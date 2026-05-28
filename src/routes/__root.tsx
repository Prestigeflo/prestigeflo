import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PrestigeFlo — AI Receptionists That Answer Every Call, 24/7" },
      { name: "description", content: "PrestigeFlo builds and manages AI phone receptionists for businesses that can't afford to miss a call. Every call answered, every booking captured — without adding headcount." },
      { name: "author", content: "PrestigeFlo" },
      { property: "og:title", content: "PrestigeFlo — AI Receptionists That Answer Every Call, 24/7" },
      { property: "og:description", content: "PrestigeFlo builds and manages AI phone receptionists for businesses that can't afford to miss a call. Every call answered, every booking captured — without adding headcount." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/prestigeflo-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/prestigeflo-logo.png" },
      { name: "twitter:title", content: "PrestigeFlo — AI Receptionists That Answer Every Call, 24/7" },
      { name: "twitter:description", content: "PrestigeFlo builds and manages AI phone receptionists for businesses that can't afford to miss a call. Every call answered, every booking captured — without adding headcount." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/prestigeflo-logo.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
