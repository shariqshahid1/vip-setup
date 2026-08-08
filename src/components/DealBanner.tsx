"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const DealBurger = dynamic(() => import("./Burger3D"), { ssr: false });

const INITIAL_SECONDS = 8 * 3600 + 45 * 60 + 22;

export default function DealBanner() {
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

  return (
    <section id="deals" className="py-lg px-gutter max-w-container-max mx-auto">
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
                On all Signature VIP Burgers. Limited time offer only for our
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
              <Link
                href="/deals"
                className="mt-lg w-full inline-block text-center py-4 bg-tertiary-fixed text-on-tertiary-fixed font-title-lg rounded-xl hover:scale-105 transition-transform"
              >
                Claim Now
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
