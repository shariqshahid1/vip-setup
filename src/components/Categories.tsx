import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { CATEGORIES } from "@/lib/site";

export default function Categories() {
  return (
    <section id="categories" className="py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-xl">
          <Reveal direction="up">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-sm">
              Browse Categories
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-md" />
            <Link
              href="/menu"
              className="inline-flex items-center gap-sm text-primary font-title-lg hover:gap-md transition-all"
            >
              View Full Menu <Icon name="arrow_forward" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-md">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={`/menu?cat=${encodeURIComponent(cat.label)}`}
              className="group cursor-pointer bg-white p-md rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-500 text-center hover:-translate-y-2"
            >
              <div className="relative w-24 h-24 mx-auto mb-md rounded-full bg-surface-container overflow-hidden group-hover:scale-110 transition-transform">
                <Image
                  className="object-cover"
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="96px"
                />
              </div>
              <h3 className="font-title-lg text-on-surface">{cat.label}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
