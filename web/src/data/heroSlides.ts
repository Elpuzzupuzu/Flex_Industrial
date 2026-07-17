import type { HeroSlideData } from "@/components/home/HeroSlider/heroSlider.types";





import heroIndustrial1 from "@/assets/images/hero/hero1.jpg";
import heroIndustrial2 from "@/assets/images/hero/hero2.jpg";
import heroIndustrial3 from "@/assets/images/hero/hero-1.jpg";

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    image: heroIndustrial1,
    imageAlt: "Instalaciones industriales de Flex Industrial",
    title: "Soluciones industriales para cada proyecto",
    description:
      "Equipamiento, materiales y servicios especializados para el desarrollo de proyectos industriales.",
    buttonText: "Conocer servicios",
    buttonUrl: "/servicios",
  },
  {
    id: 2,
    image: heroIndustrial2,
    imageAlt: "Equipo especializado para proyectos industriales",
    title: "Tecnología y experiencia a tu alcance",
    description:
      "Trabajamos con soluciones confiables para mejorar la seguridad, eficiencia y productividad de tu operación.",
    buttonText: "Ver proyectos",
    buttonUrl: "/proyectos",
  },
  {
    id: 3,
    image: heroIndustrial3,
    imageAlt: "Profesionales trabajando en una instalación industrial",
    title: "Acompañamiento profesional",
    description:
      "Desde la planeación hasta la implementación, nuestro equipo acompaña cada etapa de tu proyecto.",
    buttonText: "Contáctanos",
    buttonUrl: "/contacto",
  },
];