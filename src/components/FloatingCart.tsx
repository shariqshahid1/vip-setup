"use client";

import { useCart } from "./CartProvider";
import Icon from "./Icon";

export default function FloatingCart() {
  const { itemCount, openCart } = useCart();

  return (
    <button
      className="fixed bottom-gutter right-gutter w-16 h-16 bg-primary-container text-white rounded-full shadow-2xl flex items-center justify-center z-[55] scale-105 hover:scale-110 active:scale-95 transition-all"
      onClick={openCart}
      aria-label="Open cart"
    >
      <Icon name="shopping_cart" className="text-3xl" />
      <span className="absolute -top-1 -right-1 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface shadow-md">
        {itemCount}
      </span>
    </button>
  );
}
