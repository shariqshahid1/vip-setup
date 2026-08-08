import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import DealBanner from "@/components/DealBanner";
import SignatureMeals from "@/components/SignatureMeals";
import WhyChoose from "@/components/WhyChoose";
import Kitchen from "@/components/Kitchen";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <DealBanner />
      <SignatureMeals />
      <WhyChoose />
      <Kitchen />
      <section id="gallery" className="py-xl bg-surface-container">
        <Gallery />
        <Testimonials />
        <MapSection />
      </section>
    </>
  );
}
