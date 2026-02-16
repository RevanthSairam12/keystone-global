import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: Record<string, unknown>;
}

function setOrCreateMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOrCreateLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({
  title,
  description,
  ogTitle,
  ogDescription,
  keywords,
  canonical,
  ogImage,
  ogType,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    // Core meta tags
    setOrCreateMeta("name", "description", description);
    if (keywords) setOrCreateMeta("name", "keywords", keywords);
    setOrCreateMeta("name", "robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setOrCreateMeta("name", "author", "Keystone Global Overseas");

    // Open Graph
    setOrCreateMeta("property", "og:title", ogTitle || title);
    setOrCreateMeta("property", "og:description", ogDescription || description);
    setOrCreateMeta("property", "og:type", ogType || "website");
    setOrCreateMeta("property", "og:site_name", "Keystone Global Overseas");
    setOrCreateMeta("property", "og:url", canonical || window.location.href);
    if (ogImage) setOrCreateMeta("property", "og:image", ogImage);

    // Twitter Card
    setOrCreateMeta("name", "twitter:card", "summary_large_image");
    setOrCreateMeta("name", "twitter:title", ogTitle || title);
    setOrCreateMeta("name", "twitter:description", ogDescription || description);
    if (ogImage) setOrCreateMeta("name", "twitter:image", ogImage);

    // Canonical URL
    if (canonical) setOrCreateLink("canonical", canonical);

    // Structured Data (JSON-LD)
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo-jsonld]');
      if (existingScript) existingScript.remove();

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-jsonld", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      const jsonLdScript = document.querySelector('script[data-seo-jsonld]');
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, ogTitle, ogDescription, keywords, canonical, ogImage, ogType, structuredData]);
}
