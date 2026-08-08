"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { MEALS, parsePrice } from "@/lib/site";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  image?: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (id: string, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_KEY = "vip-setup-cart";

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const hydrated = useRef(false);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // ignore storage errors
    }
  }, [items]);

  useEffect(() => {
    const loaded = loadCart();
    hydrated.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load persisted cart after mount so server and client hydration match
    setItems(loaded);
  }, []);

  const addItem = useCallback((id: string, qty = 1) => {
    const meal = MEALS.find((m) => m.id === id);
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, qty: i.qty + qty } : i,
        );
      }
      return [
        ...prev,
        {
          id,
          name: meal?.name ?? id,
          price: meal?.price ?? "Rs. 0",
          image: meal?.image,
          qty,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      openCart,
      closeCart,
    }),
    [
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
