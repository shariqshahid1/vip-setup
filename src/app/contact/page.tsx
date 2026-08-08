import Link from "next/link";
import Icon from "@/components/Icon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import MapSection from "@/components/MapSection";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with VIP Food Setup, Bahadurabad, Karachi. Order by phone or WhatsApp, or visit us anytime.",
};

const CONTACT_CARDS = [
  {
    icon: "call",
    title: "Call Us",
    lines: [site.phone, site.hours],
    href: `tel:${site.phone}`,
  },
  {
    icon: "whatsapp",
    title: "WhatsApp",
    lines: [site.phoneIntl, "Order in one tap"],
    href: `https://wa.me/${site.whatsapp}`,
  },
  {
    icon: "location_on",
    title: "Visit Us",
    lines: [site.address, site.city],
    href: "https://maps.google.com/?q=Bahadurabad,+Karachi",
  },
  {
    icon: "mail",
    title: "Email",
    lines: [site.email, "Replies within 24h"],
    href: `mailto:${site.email}`,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-32 pb-xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl">
          <Reveal direction="up">
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-sm">
              Contact Us
            </h1>
            <p className="text-secondary font-body-lg">
              We&apos;re always here for your cravings
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
          {CONTACT_CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className="group bg-white rounded-[24px] p-lg shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/30 text-center hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-md group-hover:bg-primary group-hover:text-white transition-colors">
                {card.icon === "whatsapp" ? (
                  <WhatsAppIcon className="text-2xl" />
                ) : (
                  <Icon name={card.icon} className="text-2xl" />
                )}
              </div>
              <h2 className="font-title-lg text-on-surface mb-xs">{card.title}</h2>
              <p className="text-secondary text-sm font-bold">{card.lines[0]}</p>
              <p className="text-secondary text-xs">{card.lines[1]}</p>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-lg mb-xl items-start">
          <div className="bg-white rounded-[32px] p-lg shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-sm mb-lg">
              <Icon name="chat" className="text-primary" />
              <h2 className="font-title-lg text-xl text-on-surface">
                Send us a Message
              </h2>
            </div>
            <p className="text-secondary text-sm mb-lg">
              Questions, feedback, or bulk orders? Drop us a line on WhatsApp —
              our team replies fast.
            </p>
            <Link
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-block text-center bg-primary text-white font-title-lg rounded-xl px-lg py-4 hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-sm shadow-lg shadow-primary/30"
            >
              <WhatsAppIcon className="text-sm" />
              Chat on WhatsApp
            </Link>
            <Link
              href={`tel:${site.phone}`}
              className="mt-md w-full inline-block text-center border-2 border-primary text-primary font-title-lg rounded-xl px-lg py-4 hover:bg-primary/5 transition-colors flex items-center justify-center gap-sm"
            >
              <Icon name="call" className="text-sm" />
              {site.phone}
            </Link>
          </div>

          <MapSection />
        </div>
      </div>
    </div>
  );
}
