import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import WhyChoose from "@/components/WhyChoose";
import { IMAGES, site } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "The story behind VIP Food Setup, Bahadurabad, Karachi — premium ingredients, fine-dining technique, street food soul.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-xl bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-xl">
            <Reveal direction="up">
              <span className="inline-block px-4 py-2 bg-primary-fixed text-on-primary-fixed font-bold rounded-full mb-md">
                EST. 2024 · BAHADURABAD, KARACHI
              </span>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-sm">
                Our Story
              </h1>
              <p className="text-secondary font-body-lg max-w-[42rem] mx-auto">
                Where street flavor meets executive quality — the story of
                Mustafa Hanif&apos;s VIP Food Setup.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-xl items-center">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-[400px] md:h-[520px]">
              <Image
                className="object-cover"
                src={IMAGES.chef}
                alt="VIP Food Setup chef preparing food"
                fill
                sizes="50vw"
              />
            </div>
            <div className="space-y-lg">
              <Reveal direction="right">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-5xl text-on-surface leading-none">
                  Built on <span className="text-primary">Big Flavor</span>,
                  Bigger Cravings
                </h2>
                <p className="font-body-lg text-secondary">
                  VIP Food Setup was born from a simple idea: why should fast
                  food compromise on quality? We&apos;ve redefined the urban
                  dining experience by bringing luxury ingredients and
                  fine-dining techniques to the street food you love.
                </p>
                <p className="text-secondary">
                  From triple wagyu beef patties to buttermilk fried chicken,
                  every item on our menu is crafted fresh, grilled to order,
                  and packed with the kind of flavor that turns first-time
                  guests into regulars.
                </p>
                <div className="grid grid-cols-2 gap-md pt-lg">
                  <div className="border-l-4 border-primary pl-md">
                    <p className="text-4xl font-display leading-none">100%</p>
                    <p className="text-secondary">Fresh Ingredients</p>
                  </div>
                  <div className="border-l-4 border-primary pl-md">
                    <p className="text-4xl font-display leading-none">24/7</p>
                    <p className="text-secondary">Open Daily</p>
                  </div>
                  <div className="border-l-4 border-primary pl-md">
                    <p className="text-4xl font-display leading-none">15min</p>
                    <p className="text-secondary">Avg. Delivery</p>
                  </div>
                  <div className="border-l-4 border-primary pl-md">
                    <p className="text-4xl font-display leading-none">1000+</p>
                    <p className="text-secondary">Happy Customers</p>
                  </div>
                </div>
                <div className="pt-lg">
                  <Link
                    href="/menu"
                    className="inline-block bg-primary text-white font-title-lg rounded-xl px-lg py-4 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/30"
                  >
                    Explore the Menu
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />

      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <Reveal direction="up">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-md">
              Visit Us
            </h2>
            <p className="text-secondary font-body-lg max-w-[36rem] mx-auto mb-lg">
              {site.address}, {site.city}. Open {site.hours}. Craving
              something? Call{" "}
              <a className="text-primary font-bold" href={`tel:${site.phone}`}>
                {site.phone}
              </a>
              .
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center gap-sm text-primary font-title-lg hover:gap-md transition-all"
            >
              Order Now →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
