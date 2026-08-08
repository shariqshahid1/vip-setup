"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";
import Icon from "./Icon";
import { formatPKR } from "@/lib/site";

export default function CartDrawer() {
  const { items, isOpen, subtotal, closeCart, updateQty, removeItem } =
    useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-500 overflow-hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute top-0 right-0 h-full w-full max-w-[28rem] bg-surface shadow-2xl flex flex-col p-md transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-lg">
          <div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Your VIP Order
            </h2>
            <p className="text-secondary font-body-lg">
              Bahadurabad · Mustafa Hanif&apos;s VIP Setup
            </p>
          </div>
          <button
            className="text-on-surface hover:text-primary transition-colors"
            onClick={closeCart}
            aria-label="Close cart"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="flex-grow space-y-md overflow-y-auto no-scrollbar">
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <Icon
                name="shopping_bag"
                className="text-5xl text-outline-variant"
              />
              <p className="text-on-surface-variant font-body-md">
                Your cart is empty.
              </p>
              <Link
                href="/menu"
                onClick={closeCart}
                className="inline-block bg-primary text-white font-title-lg rounded-xl px-lg py-3"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-md p-md bg-surface-container-low rounded-xl"
              >
                <div className="relative w-16 h-16 rounded-xl bg-surface-container overflow-hidden shrink-0">
                  {item.image ? (
                    <Image
                      className="object-cover"
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <Icon name="restaurant" className="text-primary" />
                    </span>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-sm">
                    <p className="font-title-lg text-on-surface truncate">
                      {item.name}
                    </p>
                    <span className="font-bold text-primary shrink-0">
                      {formatPKR(parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.qty)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 mt-1">
                    <div className="flex items-center gap-3">
                      <button
                        className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary transition-colors"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="font-bold text-sm">{item.qty}</span>
                      <button
                        className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center hover:border-primary transition-colors"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-outline hover:text-error transition-colors"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Icon name="delete" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-md space-y-md">
            <div className="flex justify-between font-title-lg text-on-surface">
              <span>Subtotal</span>
              <span className="text-primary">{formatPKR(subtotal)}</span>
            </div>
            <p className="text-sm text-secondary">
              Delivery and taxes calculated at checkout.
            </p>
          </div>
        )}

        <Link
          href="/checkout"
          onClick={closeCart}
          className={`mt-auto w-full py-md bg-inverse-surface text-surface font-title-lg rounded-xl hover:bg-primary transition-colors text-center ${
            items.length === 0 ? "pointer-events-none opacity-40" : ""
          }`}
        >
          Checkout Now
        </Link>
      </aside>
    </div>
  );
}
