"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { useCart } from "@/components/CartProvider";
import { formatPKR, IMAGES } from "@/lib/site";

const DealBurger = dynamic(() => import("@/components/Burger3D"), {
  ssr: false,
});

const INITIAL_SECONDS = 8 * 3600 + 45 * 60 + 22;

interface Deal {
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  items: { id: string; qty: number }[];
  tag: string;
}

const BOGO_DEAL: Deal = {
  name: "Buy 1 Get 1 Free Zingers",
  description:
    "Two world-famous spicy zingers for the price of one. Limited-time offer for premium members.",
  price: 650,
  oldPrice: 1300,
  image: IMAGES.zinger,
  items: [{ id: "zinger-burger", qty: 2 }],
  tag: "BOGO",
};

const DEALS: Deal[] = [
  {
    name: "VIP Burger Combo",
    description:
      "Signature VIP Burger, peri peri fries, and an Oreo milkshake.",
    price: 1899,
    oldPrice: 2347,
    image: IMAGES.signatureBurger,
    items: [
      { id: "signature-vip-burger", qty: 1 },
      { id: "peri-peri-fries", qty: 1 },
      { id: "oreo-milkshake", qty: 1 },
    ],
    tag: "SAVE Rs. 448",
  },
  {
    name: "Zinger Box",
    description:
      "Two zingers, six BBQ wings, and a large drink. Perfect for two.",
    price: 2599,
    oldPrice: 3048,
    image: IMAGES.zinger,
    items: [
      { id: "zinger-burger", qty: 2 },
      { id: "chicken-wings", qty: 1 },
      { id: "oreo-milkshake", qty: 1 },
    ],
    tag: "SAVE Rs. 449",
  },
  {
    name: "BBQ Family Feast",
    description:
      "Classic BBQ platter with loaded fries and 4 drinks for the whole crew.",
    price: 3999,
    oldPrice: 4696,
    image: IMAGES.bbq,
    items: [
      { id: "classic-bbq-platter", qty: 1 },
      { id: "loaded-fries-deluxe", qty: 1 },
      { id: "oreo-milkshake", qty: 4 },
    ],
    tag: "SAVE Rs. 697",
  },
];

export default function DealsPage() {
  const { addItem, openCart } = useCart();
  const [seconds, setSeconds] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s <= 0 ? INITIAL_SECONDS : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  const units = [
    { value: pad(hours), label: "Hrs" },
    { value: pad(minutes), label: "Min" },
    { value: pad(secs), label: "Sec" },
  ];

  const addDeal = (deal: Deal) => {
    deal.items.forEach((it) => addItem(it.id, it.qty));
    openCart();
  };

  return (
    <div className="pt-24 bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="text-center mb-lg">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-sm">
            Today&apos;s Deals
          </h1>
          <p className="text-secondary font-body-lg">
            Limited-time offers at VIP Setup, Bahadurabad
          </p>
        </div>

        <Reveal direction="up">
          <div className="relative w-full rounded-[32px] overflow-hidden bg-primary p-lg md:p-24 text-white">
            <div className="absolute inset-0 opacity-30">
              <DealBurger />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-lg text-center md:text-left">
              <div>
                <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-full mb-md animate-pulse">
                  WEEKEND SPECIAL
                </span>
                <h2 className="font-display text-display-xl-mobile md:text-display-xl mb-md leading-none">
                  BUY ONE GET ONE FREE
                </h2>
                <p className="font-body-lg opacity-90 max-w-[28rem]">
                  On all Zinger Burgers. Limited time offer only for our
                  premium members.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-md lg:p-lg rounded-[24px] border border-white/20 w-full max-w-[24rem]">
                <p className="text-sm uppercase tracking-widest mb-md opacity-80">
                  Offer Ends In
                </p>
                <div className="flex gap-sm md:gap-md font-display text-3xl sm:text-4xl md:text-6xl leading-none justify-center flex-wrap">
                  {units.map((u, i) => (
                    <div key={u.label} className="flex items-start gap-sm md:gap-md">
                      {i > 0 && <span className="opacity-40">:</span>}
                      <div>
                        {u.value}
                        <span className="text-sm block font-body-md uppercase opacity-60 mt-1">
                          {u.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => addDeal(BOGO_DEAL)}
                  className="mt-lg w-full py-4 bg-tertiary-fixed text-on-tertiary-fixed font-title-lg rounded-xl hover:scale-105 transition-transform"
                >
                  Claim Now
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg mt-xl">
          {DEALS.map((deal) => (
            <div
              key={deal.name}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-outline-variant/30 flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  src={deal.image}
                  alt={deal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-4 left-4 bg-tertiary text-white px-4 py-1 font-bold rounded-full shadow-lg">
                  {deal.tag}
                </span>
              </div>
              <div className="p-md flex flex-col flex-grow">
                <h3 className="font-title-lg text-2xl text-on-surface mb-xs">
                  {deal.name}
                </h3>
                <p className="text-secondary text-sm mb-md flex-grow">
                  {deal.description}
                </p>
                <div className="flex items-center gap-sm mb-md">
                  <span className="font-display text-3xl text-primary leading-none">
                    {formatPKR(deal.price)}
                  </span>
                  {deal.oldPrice && (
                    <span className="text-secondary line-through text-sm">
                      {formatPKR(deal.oldPrice)}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => addDeal(deal)}
                  className="w-full py-3 bg-[#1F1F1F] text-white rounded-xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-sm"
                >
                  <Icon name="add_shopping_cart" className="text-sm" />
                  Add Deal to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-xl">
          <Link
            href="/menu"
            className="inline-flex items-center gap-sm text-primary font-title-lg hover:gap-md transition-all"
          >
            Browse Full Menu <Icon name="arrow_forward" />
          </Link>
        </div>
      </div>
    </div>
  );
}
