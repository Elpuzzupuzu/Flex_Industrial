import HeroSlider from "@/components/home/HeroSlider/HeroSlider";
import { heroSlides } from "@/data/heroSlides";

function Home() {
  return (
    <main>
      <HeroSlider
        slides={heroSlides}
        autoPlay
        autoPlayInterval={6000}
      />

      {/* Próximas secciones del Home */}
    </main>
  );
}

export default Home;