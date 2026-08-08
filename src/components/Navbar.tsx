"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { useCart } from "./CartProvider";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
      <nav className="fixed top-0 w-full z-50 glass-nav bg-surface/15 backdrop-blur-xl border-b border-white/10 shadow-xl">
        <div className="flex justify-between items-center px-gutter py-4 w-full max-w-container-max mx-auto">
          <Link
            href="/"
            onClick={closeMobile}
            aria-label="VIP Setup - Home"
            className="shrink-0"
          >
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body-lg transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-sm sm:gap-md">
            <Link
              href="/menu"
              className="hidden lg:inline-flex px-lg py-2.5 bg-primary text-white font-title-lg rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/30"
            >
              Order Now
            </Link>
            <button
              className="relative text-primary p-1 scale-105 active:scale-95 transition-transform"
              aria-label={`Shopping cart, ${itemCount} items`}
              onClick={openCart}
            >
              <Icon name="shopping_cart" className="text-2xl" />
              <span className="absolute -top-1 -right-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </button>
            <button
              className="md:hidden text-primary"
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 px-gutter py-6 space-y-5 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block font-body-lg text-on-surface hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/menu"
              onClick={closeMobile}
              className="block text-center bg-primary text-white font-title-lg rounded-xl px-lg py-3"
            >
              Order Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
