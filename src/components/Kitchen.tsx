import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { IMAGES } from "@/lib/site";

export default function Kitchen() {
  return (
    <section id="about" className="py-xl">
      <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-xl items-center">
        <div className="relative rounded-[40px] overflow-hidden group shadow-2xl h-[400px] md:h-[600px]">
          <Reveal direction="left" className="h-full w-full">
            <div className="relative h-full w-full">
              <Image
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src={IMAGES.chef}
                alt="A professional chef seasoning meat with fire in the background"
                fill
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-lg left-lg">
                <p className="text-primary font-bold uppercase tracking-widest mb-sm">
                  The Craft
                </p>
                <h3 className="text-4xl text-white font-headline-lg leading-none">
                  Passion in Every Plate
                </h3>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="space-y-lg">
          <Reveal direction="right">
            <div className="inline-block px-4 py-2 bg-primary-fixed text-on-primary-fixed font-bold rounded-full">
              EST. 2024
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-5xl text-on-surface leading-none">
              Where Street Flavor Meets{" "}
              <span className="text-primary">Executive Quality</span>
            </h2>
            <p className="font-body-lg text-secondary">
              VIP Food Setup was born from a simple idea: why should fast food
              compromise on quality? We&apos;ve redefined the urban dining
              experience by bringing luxury ingredients and fine-dining
              techniques to the street food you love.
            </p>
            <div className="grid grid-cols-2 gap-md pt-lg">
              <div className="border-l-4 border-primary pl-md">
                <p className="text-4xl font-display leading-none">100%</p>
                <p className="text-secondary">Fresh Meat</p>
              </div>
              <div className="border-l-4 border-primary pl-md">
                <p className="text-4xl font-display leading-none">15min</p>
                <p className="text-secondary">Avg. Delivery</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-sm font-title-lg text-primary hover:gap-md transition-all"
            >
              Read Our Story <Icon name="arrow_forward" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
