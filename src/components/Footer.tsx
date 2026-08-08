"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import { site } from "@/lib/site";

const EXPLORE_LINKS = [
  { label: "Burgers", href: "/menu?cat=Burgers" },
  { label: "Signature Platters", href: "/menu?cat=BBQ" },
  { label: "Loaded Sides", href: "/menu?cat=Loaded%20Fries" },
  { label: "VIP Desserts", href: "/menu?cat=Desserts" },
];

const COMPANY_LINKS = [
  { label: "Our Story", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Today's Deals", href: "/deals" },
  { label: "Order Online", href: "/menu" },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer id="contact" className="bg-inverse-surface text-inverse-on-surface w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg px-gutter py-lg lg:py-xl w-full max-w-container-max mx-auto">
        <div className="space-y-md">
          <Logo light />
          <p className="text-sm text-inverse-on-surface/75 leading-relaxed max-w-[20rem]">
            Elevating the urban food scene with premium ingredients and
            unmatched craft. Experience the VIP lifestyle in every bite.
          </p>
          <div className="space-y-sm text-sm text-inverse-on-surface/80">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 hover:text-tertiary-fixed-dim transition-colors"
            >
              <Icon name="call" className="text-base" />
              {site.phone}
            </a>
            <p className="flex items-center gap-2">
              <Icon name="location_on" className="text-base" />
              {site.address}, {site.city}
            </p>
            <p className="flex items-center gap-2">
              <Icon name="schedule" className="text-base" />
              {site.hours}
            </p>
          </div>
          <div className="flex gap-sm">
            <a
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              href={`tel:${site.phone}`}
              aria-label="Call us"
            >
              <Icon name="call" className="text-sm" />
            </a>
            <a
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="text-sm" />
            </a>
            <a
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              href={`https://maps.google.com/?q=${encodeURIComponent(site.mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Location"
            >
              <Icon name="location_on" className="text-sm" />
            </a>
            <a
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              href={`mailto:${site.email}`}
              aria-label="Email"
            >
              <Icon name="mail" className="text-sm" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-lg uppercase tracking-widest text-sm">
            Explore Menu
          </h4>
          <ul className="space-y-md">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-inverse-on-surface/75 hover:text-tertiary-fixed-dim transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-lg uppercase tracking-widest text-sm">
            Company
          </h4>
          <ul className="space-y-md">
            {COMPANY_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-inverse-on-surface/75 hover:text-tertiary-fixed-dim transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-lg uppercase tracking-widest text-sm">
            Newsletter
          </h4>
          <p className="text-sm text-inverse-on-surface/75 mb-md">
            Join the VIP list for exclusive offers and secret menu drops.
          </p>
          {subscribed ? (
            <p className="text-sm font-bold text-tertiary-fixed-dim">
              You&apos;re on the VIP list. Welcome!
            </p>
          ) : (
            <form className="flex gap-2" onSubmit={onSubscribe}>
              <input
                className="bg-white/10 border-none rounded-lg flex-grow min-w-0 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary px-4 py-3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
              <button
                className="bg-primary text-white p-2 rounded-lg hover:scale-105 transition-transform shrink-0"
                aria-label="Subscribe"
              >
                <Icon name="send" />
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-white/10 py-md px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col sm:flex-row items-center justify-between gap-md text-center">
          <p className="font-body-md text-body-md text-inverse-on-surface/75">
            © {new Date().getFullYear()} VIP Food Setup. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-md text-sm">
            <Link
              href="/menu"
              className="text-inverse-on-surface/75 hover:text-tertiary-fixed-dim transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/deals"
              className="text-inverse-on-surface/75 hover:text-tertiary-fixed-dim transition-colors"
            >
              Deals
            </Link>
            <Link
              href="/about"
              className="text-inverse-on-surface/75 hover:text-tertiary-fixed-dim transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-inverse-on-surface/75 hover:text-tertiary-fixed-dim transition-colors"
            >
              Contact
            </Link>
            <a
              href={`tel:${site.phone}`}
              className="text-inverse-on-surface/75 hover:text-tertiary-fixed-dim transition-colors"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
