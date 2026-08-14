import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Lightweight client-side SEO manager. Updates the document title, meta
 * description, canonical URL and social (Open Graph / Twitter) tags whenever
 * the route changes.
 */
export default function Seo({ title, description, path, image }) {
  useEffect(() => {
    const url = `${siteConfig.domain}${path}`;
    const ogImage = image
      ? image.startsWith("http")
        ? image
        : `${siteConfig.domain}${image}`
      : `${siteConfig.domain}/images/branding/hero.jpg`;

    document.title = title;
    upsertMeta("name", "description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
  }, [title, description, path, image]);

  return null;
}
