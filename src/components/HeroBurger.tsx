"use client";

import dynamic from "next/dynamic";

const Burger3D = dynamic(() => import("./Burger3D"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
      <span className="material-symbols-outlined text-7xl text-primary animate-pulse">
        lunch_dining
      </span>
    </div>
  ),
});

export default function HeroBurger() {
  return (
    <div className="relative h-full w-full">
      <Burger3D />
    </div>
  );
}
