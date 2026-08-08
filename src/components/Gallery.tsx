import Image from "next/image";
import Reveal from "./Reveal";
import { GALLERY } from "@/lib/site";

const COLS: { items: string[]; offset?: string }[] = [
  { items: [GALLERY[0].image, GALLERY[1].image] },
  { items: [GALLERY[2].image, GALLERY[3].image], offset: "md:pt-12" },
  { items: [GALLERY[4].image] },
  { items: [GALLERY[5].image, GALLERY[6].image], offset: "md:pt-8" },
];

const HEIGHTS = [
  ["h-64 md:h-80", "h-40 md:h-48"],
  ["h-56 md:h-64", "h-80 md:h-96"],
  ["h-80 md:h-[450px]"],
  ["h-56 md:h-64", "h-56 md:h-64"],
];

const ALTS = [
  "Friends sharing a giant BBQ platter in a modern urban restaurant",
  "VIP burger meal set on a dark textured surface with soda and fries",
  "Milkshake with whipped cream and sprinkles",
  "VIP delivery driver holding a premium insulated food bag at night",
  "Modern VIP Food Setup restaurant interior with crimson accents",
  "Fresh ingredients being chopped on a dark wooden board",
  "Golden yellow dipping sauce being poured over crispy chicken nuggets",
];

export default function Gallery() {
  return (
    <div className="max-w-container-max mx-auto px-gutter">
      <Reveal direction="up">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">
            VIP Lifestyle
          </h2>
          <p className="text-secondary">
            Join the movement and tag us #VIPFoodSetup
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xl">
        {COLS.map((col, ci) => (
          <Reveal
            key={ci}
            className={`space-y-md ${col.offset ?? ""}`}
            direction="up"
            delay={ci * 100}
          >
            {col.items.map((src, ii) => {
              const gi = COLS.slice(0, ci).reduce((a, c) => a + c.items.length, 0) + ii;
              return (
                <div
                  key={src}
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${HEIGHTS[ci][ii]}`}
                >
                  <Image
                    className="object-cover"
                    src={src}
                    alt={ALTS[gi]}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              );
            })}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
