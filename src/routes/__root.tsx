import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteLayout } from "@/components/site-layout";
import { I18nProvider, useI18n } from "@/lib/i18n-provider";
import { site } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: site.name },
      { name: "description", content: site.description },
      { name: "theme-color", content: "#1a120c" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Root,
});

function Root() {
  return (
    <I18nProvider>
      <Document />
    </I18nProvider>
  );
}

function Document() {
  const { lang } = useI18n();
  return (
    <html lang={lang} className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <SiteLayout>
          <Outlet />
        </SiteLayout>
        <Scripts />
      </body>
    </html>
  );
}
