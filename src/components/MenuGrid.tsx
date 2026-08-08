"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CATEGORIES, MEALS } from "@/lib/site";
import { useCart } from "./CartProvider";
import Icon from "./Icon";

interface MenuGridProps {
  initialCat?: string;
}

export default function MenuGrid({ initialCat = "All" }: MenuGridProps) {
  const { addItem, openCart } = useCart();
  const [active, setActive] = useState(initialCat);
  const [qty, setQty] = useState<Record<string, number>>({});

  const filtered = useMemo(
    () =>
      active === "All"
        ? MEALS
        : MEALS.filter((m) => m.category === active),
    [active],
  );

  const setCount = (id: string, delta: number) => {
    setQty((prev) => {
      const cur = prev[id] ?? 1;
      const next = Math.min(10, Math.max(1, cur + delta));
      return { ...prev, [id]: next };
    });
  };

  return (
    <div className="max-w-container-max mx-auto px-gutter py-xl">
      <div className="text-center mb-lg">
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-sm">
          Our Full Menu
        </h1>
        <p className="text-secondary font-body-lg">
          Freshly made at Mustafa Hanif&apos;s VIP Setup, Bahadurabad
        </p>
      </div>

      <div className="flex gap-sm overflow-x-auto no-scrollbar pb-md mb-lg justify-start md:justify-center">
        {["All", ...CATEGORIES.map((c) => c.label)].map((label) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`shrink-0 px-md py-2 rounded-full font-title-lg text-sm transition-all ${
              active === label
                ? "bg-primary text-white shadow-lg shadow-primary/30"
                : "bg-surface-container-high text-on-surface hover:bg-primary/10"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
        {filtered.map((meal, index) => (
          <div
            key={meal.id}
            className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-outline-variant/30 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                src={meal.image}
                alt={meal.name}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute top-4 right-4 bg-[#FFD700] text-[#1F1F1F] px-4 py-1 font-bold rounded-full shadow-lg">
                {meal.price}
              </span>
              {meal.badges.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-col gap-sm">
                  {meal.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`px-3 py-1 text-xs font-bold rounded-full shadow ${
                        badge.tone === "primary"
                          ? "bg-primary text-white"
                          : "bg-tertiary text-white"
                      }`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="p-md flex flex-col flex-grow">
              <h3 className="font-title-lg text-2xl text-on-surface mb-xs">
                {meal.name}
              </h3>
              <p className="text-secondary text-sm mb-md flex-grow">
                {meal.tagline}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-sm">
                <div className="flex items-center gap-xs bg-surface-container-high rounded-xl p-1">
                  <button
                    className="w-10 h-10 rounded-lg hover:bg-primary/10 text-on-surface transition-colors"
                    onClick={() => setCount(meal.id, -1)}
                    aria-label={`Decrease quantity of ${meal.name}`}
                  >
                    -
                  </button>
                  <span className="font-bold w-6 text-center">
                    {qty[meal.id] ?? 1}
                  </span>
                  <button
                    className="w-10 h-10 rounded-lg hover:bg-primary/10 text-on-surface transition-colors"
                    onClick={() => setCount(meal.id, 1)}
                    aria-label={`Increase quantity of ${meal.name}`}
                  >
                    +
                  </button>
                </div>
                <button
                  className="w-full sm:flex-1 h-12 bg-[#1F1F1F] text-white rounded-xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-sm"
                  onClick={() => {
                    addItem(meal.id, qty[meal.id] ?? 1);
                    setQty((prev) => ({ ...prev, [meal.id]: 1 }));
                    openCart();
                  }}
                >
                  <Icon name="add_shopping_cart" className="text-sm" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
