"use client";

import Image from "next/image";
import { useRef } from "react";
import Icon from "./Icon";
import { useCart } from "./CartProvider";
import { MEALS } from "@/lib/site";
import Reveal from "./Reveal";

export default function SignatureMeals() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { addItem, openCart } = useCart();

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  const addToCart = (id: string) => {
    addItem(id.replace(/-dup$/, ""), 1);
    openCart();
  };

  return (
    <section className="py-xl overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter mb-lg flex flex-col md:flex-row justify-between items-center gap-md md:items-end">
        <Reveal direction="up">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-center md:text-left">
            Signature Meals
          </h2>
          <p className="text-secondary text-center md:text-left">
            Chef&apos;s choice of our most popular combinations
          </p>
        </Reveal>
        <div className="flex gap-sm">
          <button
            className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            onClick={() => scroll(-1)}
            aria-label="Previous meals"
          >
            <Icon name="chevron_left" />
          </button>
          <button
            className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            onClick={() => scroll(1)}
            aria-label="Next meals"
          >
            <Icon name="chevron_right" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-lg overflow-x-auto no-scrollbar px-gutter pb-lg snap-x"
      >
        {[...MEALS, ...MEALS.map((m) => ({ ...m, id: `${m.id}-dup` }))].map(
          (meal) => (
            <div
              key={meal.id}
              className="shrink-0 w-[85vw] sm:w-[320px] max-w-[320px] bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group snap-center border border-outline-variant/30"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  src={meal.image}
                  alt={meal.name}
                  fill
                  sizes="320px"
                />
                <div className="absolute top-4 right-4 bg-[#FFD700] text-[#1F1F1F] px-4 py-1 font-bold rounded-full shadow-lg">
                  {meal.price}
                </div>
              </div>
              <div className="p-md">
                <div className="flex gap-sm mb-md">
                  {meal.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        badge.tone === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-tertiary/10 text-tertiary"
                      }`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
                <h3 className="font-title-lg text-2xl text-on-surface mb-xs">
                  {meal.name}
                </h3>
                <p className="text-secondary text-sm mb-md">{meal.tagline}</p>
                <button
                  className="w-full py-3 bg-[#1F1F1F] text-white rounded-xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-sm"
                  onClick={() => addToCart(meal.id)}
                >
                  <Icon name="add_shopping_cart" className="text-sm" />
                  Add to Cart
                </button>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
