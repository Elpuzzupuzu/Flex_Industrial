import type { FeaturedProject } from "@/components/projects/FeaturedProjectsCarousel/featuredProjectsCarousel.types";

import maintenancePlantImage from "@/assets/images/servicescategories/service1.jpg";
import industrialRoofImage from "@/assets/images/servicescategories/service1.jpg";
import metalStructureImage from "@/assets/images/servicescategories/service1.jpg";
import industrialLogisticsImage from "@/assets/images/servicescategories/service1.jpg";
import industrialPaintingImage from "@/assets/images/servicescategories/service1.jpg";

export const featuredProjects: FeaturedProject[] = [
  {
    id: 1,
    title: "Mantenimiento general en planta petroquímica",
    category: "Mantenimiento",
    location: "Coatzacoalcos, Veracruz",
    description:
      "Mantenimiento integral de equipos, estructuras y sistemas industriales para garantizar la continuidad operativa de la planta.",
    image: maintenancePlantImage,
    imageAlt:
      "Instalaciones de una planta petroquímica con tanques industriales",
  },
  {
    id: 2,
    title: "Impermeabilización de cubierta industrial",
    category: "Impermeabilización",
    location: "Monterrey, Nuevo León",
    description:
      "Aplicación de un sistema impermeable de alta duración sobre una cubierta metálica de nave industrial.",
    image: industrialRoofImage,
    imageAlt:
      "Trabajadores aplicando impermeabilizante sobre una cubierta industrial",
  },
  {
    id: 3,
    title: "Montaje y pintura de estructura metálica",
    category: "Servicios industriales",
    location: "Tampico, Tamaulipas",
    description:
      "Preparación de superficie, aplicación de recubrimiento y montaje de estructura metálica para una ampliación industrial.",
    image: metalStructureImage,
    imageAlt:
      "Construcción y montaje de una estructura metálica industrial",
  },
  {
    id: 4,
    title: "Movimiento de materiales industriales",
    category: "Logística y renta",
    location: "Mérida, Yucatán",
    description:
      "Suministro de montacargas y personal especializado para maniobras y movimiento seguro de materiales.",
    image: industrialLogisticsImage,
    imageAlt:
      "Montacargas transportando materiales dentro de instalaciones industriales",
  },
  {
    id: 5,
    title: "Protección anticorrosiva de instalaciones",
    category: "Pintura industrial",
    location: "Ciudad del Carmen, Campeche",
    description:
      "Preparación y aplicación de recubrimientos anticorrosivos en equipos y estructuras expuestas a ambientes agresivos.",
    image: industrialPaintingImage,
    imageAlt:
      "Trabajos de pintura y protección anticorrosiva en una planta industrial",
  },
];