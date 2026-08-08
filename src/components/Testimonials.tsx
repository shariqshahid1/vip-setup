import Image from "next/image";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-3 gap-lg mb-xl">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} direction="up" delay={i * 100}>
          <div className="bg-white/40 backdrop-blur-md p-lg rounded-[24px] border border-white/60 shadow-xl h-full">
            <div className="flex text-[#FFD700] mb-md">
              {Array.from({ length: 5 }).map((_, j) => (
                <Icon key={j} name="star" filled />
              ))}
            </div>
            <p className="font-body-lg italic text-on-surface mb-md">
              &quot;{t.quote}&quot;
            </p>
            <div className="flex items-center gap-md">
              <div className="relative w-12 h-12 rounded-full bg-surface-container overflow-hidden">
                <Image
                  className="object-cover"
                  src={t.avatar}
                  alt={t.name}
                  fill
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-bold text-on-surface">{t.name}</p>
                <p className="text-sm text-secondary">{t.role}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
