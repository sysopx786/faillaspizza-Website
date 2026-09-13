import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteLayout } from "@/components/site-layout";
import { LanguageProvider, STORAGE_KEY } from "@/lib/i18n";
import { site } from "@/lib/site";
import appCss from "../styles.css?url";

const LANG_BOOTSTRAP = `(function(){try{var k=${JSON.stringify(STORAGE_KEY)};var l=localStorage.getItem(k);if(!l){var m=document.cookie.match(new RegExp("(?:^|; )"+k+"=([^;]*)"));l=m?decodeURIComponent(m[1]):"";}if(l==="es"||l==="en"||l==="pt"){document.documentElement.lang=l==="pt"?"pt-BR":l;document.documentElement.setAttribute("data-lang",l);}}catch(e){}})();`;

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
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOTSTRAP }} />
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <LanguageProvider>
            <SiteLayout>
              <Outlet />
            </SiteLayout>
          </LanguageProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
