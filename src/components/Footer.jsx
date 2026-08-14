import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/categories";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  ArrowUpRightIcon,
} from "@/components/icons";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
    { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
    { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  ].filter((social) => social.href.trim() !== "");

  return (
    <footer className="bg-ink text-stone-300">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.4fr]">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              {siteConfig.description}
            </p>
            {socials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-stone-300 transition-colors hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Categories
            </h3>
            <ul className="mt-5 space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.slug}`}
                    className="text-sm text-stone-400 transition-colors hover:text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-start gap-3 text-stone-400 transition-colors hover:text-white"
                >
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-stone-400 transition-colors hover:text-white"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-sm text-stone-500 sm:flex-row sm:text-left">
          <p>© {year} Aroma Industries. All Rights Reserved.</p>
          <p className="text-stone-600">{siteConfig.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
