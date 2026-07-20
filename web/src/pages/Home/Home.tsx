import HeroSlider from "@/components/home/HeroSlider/HeroSlider";
import FlexQuickLinks from "@/components/home/FlexQuickLinks/FlexQuickLinks";
import ServicesShowcase from "@/components/home/ServicesShowcase/ServicesShowcase";

import { heroSlides } from "@/data/heroSlides";

function Home() {
  return (
    <main>
      <HeroSlider
        slides={heroSlides}
        autoPlay
        autoPlayInterval={6000}
      />

      <FlexQuickLinks />

      <ServicesShowcase />
    </main>
  );
}

export default Home;