import Link from "next/link";
import Reveal from "./Reveal";
import HeroBurger from "./HeroBurger";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-surface"
    >
      <div className="max-w-container-max mx-auto px-gutter w-full grid md:grid-cols-2 items-center gap-xl">
        <div className="z-10" data-reveal="left">
          <Reveal direction="left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-md py-2 rounded-full mb-md font-title-lg text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Mustafa Hanif&apos;s VIP Setup — Bahadurabad
            </div>
            <h1 className="font-display text-display-xl-mobile md:text-display-xl text-on-surface mb-md leading-none">
              Big Flavor. <br />
              <span className="text-primary">Bigger Cravings.</span>
            </h1>
            <p className="text-body-lg text-secondary max-w-[32rem] mb-lg">
              Freshly grilled burgers, crispy fried chicken, BBQ favorites,
              wraps, sandwiches, and loaded meals made for every craving. Taste
              the VIP difference.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link
                href="/menu"
                className="px-lg py-4 bg-[#1F1F1F] text-white rounded-[18px] font-title-lg hover:bg-primary transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
              >
                Order Now
              </Link>
              <Link
                href="/deals"
                className="px-lg py-4 border-2 border-primary text-primary rounded-[18px] font-title-lg hover:bg-primary/5 transition-all duration-300"
              >
                View Deals
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="relative h-[400px] md:h-[600px] w-full" data-reveal="right">
          <Reveal direction="right" className="h-full w-full">
            <div className="relative h-full w-full">
              <HeroBurger />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 origin-top translate-x-1/2 -z-0" />
    </section>
  );
}
