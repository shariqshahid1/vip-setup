import Icon from "./Icon";
import Reveal from "./Reveal";
import { FEATURES } from "@/lib/site";

export default function WhyChoose() {
  return (
    <section className="py-xl bg-inverse-surface text-white">
      <div className="max-w-container-max mx-auto px-gutter text-center mb-xl">
        <Reveal direction="up">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-md">
            Why Choose VIP Food Setup
          </h2>
          <p className="text-surface-variant font-body-lg max-w-[42rem] mx-auto">
            We set the gold standard in urban fast food with a commitment to
            quality and flavor that&apos;s simply unmatched.
          </p>
        </Reveal>
      </div>
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
        {FEATURES.map((feature, i) => (
          <div key={feature.title} className="text-center group">
            <Reveal direction="up" delay={i * 100}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-md group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                <Icon name={feature.icon} className="text-4xl" />
              </div>
              <h3 className="font-title-lg mb-sm">{feature.title}</h3>
              <p className="text-surface-variant text-sm">
                {feature.description}
              </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
