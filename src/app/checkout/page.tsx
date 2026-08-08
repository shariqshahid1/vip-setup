"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useCart } from "@/components/CartProvider";
import {
  DELIVERY_FEE,
  formatPKR,
  FREE_DELIVERY_THRESHOLD,
  parsePrice,
  PAYMENT_METHODS,
  site,
} from "@/lib/site";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Karachi");
  const [notes, setNotes] = useState("");
  const [payment, setPayment] = useState("cod");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [placed, setPlaced] = useState(false);

  const deliveryFee =
    subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0
      ? 0
      : DELIVERY_FEE;
  const total = subtotal + deliveryFee;

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const nextErrors: Record<string, string> = {};
    if (!name.trim()) nextErrors.name = "Please enter your full name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(phone.trim()))
      nextErrors.phone = "Enter a valid phone number.";
    if (!address.trim()) nextErrors.address = "Please enter your address.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const lines = [
      "NEW ORDER - VIP FOOD SETUP",
      "--------------------------------",
      ...items.map(
        (i) =>
          `${i.name} x ${i.qty} - ${formatPKR(parsePrice(i.price) * i.qty)}`,
      ),
      "--------------------------------",
      `Subtotal: ${formatPKR(subtotal)}`,
      `Delivery: ${deliveryFee === 0 ? "FREE" : formatPKR(deliveryFee)}`,
      `Total: ${formatPKR(total)}`,
      "--------------------------------",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Address: ${address.trim()}, ${city}`,
      `Payment: ${
        PAYMENT_METHODS.find((m) => m.id === payment)?.label ?? payment
      }`,
      ...(notes.trim() ? [`Notes: ${notes.trim()}`] : []),
    ];

    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
        lines.join("\n"),
      )}`,
      "_blank",
    );
    clearCart();
    setPlaced(true);
  };

  const inputClass = (field: string) =>
    `w-full rounded-xl border ${
      errors[field]
        ? "border-error bg-error-container/30"
        : "border-outline-variant"
    } bg-surface-container-lowest px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary transition-colors`;

  const labelClass = "block font-bold text-sm text-on-surface mb-sm";

  return (
    <div className="pt-24 pb-xl bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-lg">
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-sm">
            Checkout &amp; Billing
          </h1>
          <p className="text-secondary font-body-lg">
            Confirm your details and place your VIP order
          </p>
        </div>

        {items.length === 0 ? (
          <div className="max-w-[36rem] mx-auto bg-white rounded-[32px] p-lg text-center shadow-sm border border-outline-variant/30 space-y-4">
            {placed ? (
              <>
                <Icon name="check_circle" className="text-6xl text-primary" />
                <h2 className="font-title-lg text-2xl text-on-surface">
                  Order Sent!
                </h2>
                <p className="text-secondary">
                  Your order details have been opened in WhatsApp. We will
                  confirm your delivery shortly. For any issues, call{" "}
                  <a className="text-primary font-bold" href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                  .
                </p>
                <Link
                  href="/menu"
                  className="inline-block bg-primary text-white font-title-lg rounded-xl px-lg py-3 hover:scale-105 transition-transform"
                >
                  Order More
                </Link>
              </>
            ) : (
              <>
                <Icon
                  name="shopping_bag"
                  className="text-6xl text-outline-variant"
                />
                <h2 className="font-title-lg text-2xl text-on-surface">
                  Your cart is empty
                </h2>
                <p className="text-secondary">
                  Add something delicious before checking out.
                </p>
                <Link
                  href="/menu"
                  className="inline-block bg-primary text-white font-title-lg rounded-xl px-lg py-3 hover:scale-105 transition-transform"
                >
                  Browse Menu
                </Link>
              </>
            )}
          </div>
        ) : (
          <form
            onSubmit={placeOrder}
            className="grid grid-cols-1 lg:grid-cols-5 gap-lg"
          >
            <div className="lg:col-span-3 space-y-lg">
              <div className="bg-white rounded-[32px] p-lg shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-sm mb-lg">
                  <Icon name="person" className="text-primary" />
                  <h2 className="font-title-lg text-xl text-on-surface">
                    Billing Details
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ahmed Khan"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-error mt-sm">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="03XX-XXXXXXX"
                      className={inputClass("phone")}
                    />
                    {errors.phone && (
                      <p className="text-sm text-error mt-sm">{errors.phone}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className={labelClass}>
                      Delivery Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="House, street, area"
                      className={inputClass("address")}
                    />
                    {errors.address && (
                      <p className="text-sm text-error mt-sm">
                        {errors.address}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="city" className={labelClass}>
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={inputClass("")}
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className={labelClass}>
                      Order Notes (optional)
                    </label>
                    <input
                      id="notes"
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Ring the bell twice"
                      className={inputClass("")}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[32px] p-lg shadow-sm border border-outline-variant/30">
                <div className="flex items-center gap-sm mb-lg">
                  <Icon name="payments" className="text-primary" />
                  <h2 className="font-title-lg text-xl text-on-surface">
                    Payment Method
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
                  {PAYMENT_METHODS.map((m) => (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setPayment(m.id)}
                      aria-pressed={payment === m.id}
                      className={`flex items-center gap-sm rounded-xl border-2 px-md py-4 text-left transition-all ${
                        payment === m.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-outline-variant text-on-surface hover:border-outline"
                      }`}
                    >
                      <Icon name={m.icon} />
                      <span className="font-title-lg text-sm">{m.label}</span>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-secondary mt-md">
                  {payment === "cod"
                    ? "Pay in cash when your order arrives."
                    : "A payment request link will be sent to you on WhatsApp after placing your order."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-[32px] p-lg shadow-sm border border-outline-variant/30 sticky top-24">
                <div className="flex items-center gap-sm mb-lg">
                  <Icon name="receipt_long" className="text-primary" />
                  <h2 className="font-title-lg text-xl text-on-surface">
                    Order Summary
                  </h2>
                </div>

                <div className="space-y-md max-h-72 overflow-y-auto no-scrollbar pr-sm">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between gap-sm text-sm">
                      <span className="text-on-surface">
                        {item.name}
                        <span className="text-secondary"> x {item.qty}</span>
                      </span>
                      <span className="font-bold text-on-surface shrink-0">
                        {formatPKR(parsePrice(item.price) * item.qty)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-outline-variant/30 mt-lg pt-lg space-y-md">
                  <div className="flex justify-between text-secondary">
                    <span>Subtotal</span>
                    <span>{formatPKR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-secondary">
                    <span>Delivery Fee</span>
                    <span>{deliveryFee === 0 ? "FREE" : formatPKR(deliveryFee)}</span>
                  </div>
                  {deliveryFee > 0 && (
                    <p className="text-xs text-secondary bg-tertiary/10 rounded-lg px-3 py-2">
                      Add {formatPKR(FREE_DELIVERY_THRESHOLD - subtotal)} more
                      for free delivery!
                    </p>
                  )}
                  <div className="flex justify-between font-title-lg text-on-surface pt-md border-t border-outline-variant/30">
                    <span>Total</span>
                    <span className="text-primary">{formatPKR(total)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-lg w-full py-4 bg-primary text-white font-title-lg rounded-xl hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-sm shadow-lg shadow-primary/30"
                >
                  <WhatsAppIcon className="text-sm" />
                  Place Order via WhatsApp
                </button>
                <p className="text-xs text-secondary text-center mt-md">
                  By placing your order you agree to our delivery terms. For
                  assistance call{" "}
                  <a className="text-primary font-bold" href={`tel:${site.phone}`}>
                    {site.phone}
                  </a>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
