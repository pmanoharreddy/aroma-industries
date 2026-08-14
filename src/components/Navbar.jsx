import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { siteConfig } from "@/data/siteConfig";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import { MenuIcon, CloseIcon, ArrowUpRightIcon, MailIcon } from "@/components/icons";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-stone-200/70 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            solid ? "h-16" : "h-20"
          )}
          aria-label="Primary"
        >
          <Logo />

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative rounded-full px-4 py-2 text-sm font-semibold text-stone-600 transition-colors hover:text-stone-900",
                      isActive && "text-stone-900"
                    )
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {link.label}
                      <span
                        className={cn(
                          "absolute -bottom-1 left-0 h-0.5 rounded-full bg-brand-500 transition-all duration-300",
                          isActive ? "w-full" : "w-0"
                        )}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-900/20 transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:inline-flex"
            >
              Enquire Now
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-stone-800 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 md:hidden"
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto bg-white px-5 pb-10 pt-6 transition-all duration-300 md:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        )}
      >
        <ul className="flex flex-col divide-y divide-stone-100">
          {navLinks.map((link, i) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between py-4 text-lg font-semibold transition-colors",
                    isActive ? "text-brand-700" : "text-stone-800"
                  )
                }
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
                <ArrowUpRightIcon className="h-5 w-5 text-stone-300" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-8">
          <Link
            to="/contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            <MailIcon className="h-5 w-5" />
            Enquire Now
          </Link>
          <p className="mt-4 text-center text-sm text-stone-500">
            {siteConfig.contact.phoneDisplay}
          </p>
        </div>
      </div>
    </header>
  );
}
