import {
  Building2,
  Factory,
  PaintRoller,
  PanelsTopLeft,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

import type { ServiceCategory } from "@/types/services.types";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "mantenimiento-de-edificios",
    eyebrow: "Servicios para instalaciones",
    title: "Mantenimiento a Edificios",
    shortDescription:
      "Conservación, protección y adecuación de instalaciones.",
    description:
      "Desarrollamos soluciones para conservar, proteger y mejorar edificios comerciales, administrativos e industriales, atendiendo las necesidades particulares de cada instalación.",
    image: "/src/assets/images/services/mantenimiento-edificios.webp",
    icon: Building2,
    services: [
      {
        slug: "impermeabilizacion",
        title: "Impermeabilización",
        shortDescription:
          "Sistemas prefabricados, acrílicos y especializados para proteger cubiertas y superficies.",
        icon: ShieldCheck,
      },
      {
        slug: "pintura",
        title: "Pintura arquitectónica e industrial",
        shortDescription:
          "Aplicación de pintura para protección, renovación y acabado de instalaciones.",
        icon: PaintRoller,
      },
      {
        slug: "tablaroca-durock",
        title: "Tablaroca y Durock",
        shortDescription:
          "Construcción y adecuación de espacios mediante sistemas ligeros y resistentes.",
        icon: PanelsTopLeft,
      },
    ],
  },
  {
    slug: "logistica-renta-suministros",
    eyebrow: "Recursos para cada proyecto",
    title: "Logística, Renta y Suministros",
    shortDescription:
      "Equipos, infraestructura móvil, transporte y materiales.",
    description:
      "Proporcionamos infraestructura, maquinaria, materiales y soporte logístico para facilitar la ejecución y continuidad de proyectos industriales.",
    image: "/src/assets/images/services/logistica-renta.webp",
    icon: Truck,
    services: [
      {
        slug: "logistica-transporte",
        title: "Logística y transporte",
        shortDescription:
          "Planeación y movilización de equipos, materiales y recursos para proyectos.",
        icon: Truck,
      },
      {
        slug: "espacios-moviles",
        title: "Renta de espacios móviles",
        shortDescription:
          "Campers, oficinas móviles y casetas adaptadas a las necesidades del proyecto.",
        icon: Warehouse,
      },
      {
        slug: "maquinaria",
        title: "Renta de maquinaria",
        shortDescription:
          "Plataformas de elevación, montacargas y equipos especializados.",
        icon: Wrench,
      },
      {
        slug: "suministros",
        title: "Suministros industriales",
        shortDescription:
          "Materiales, luminarias, alineadores de tubería y recursos industriales.",
        icon: Factory,
      },
    ],
  },
  {
    slug: "industriales",
    eyebrow: "Soluciones especializadas",
    title: "Servicios Industriales",
    shortDescription:
      "Mantenimiento, inspección, recubrimientos y soporte industrial.",
    description:
      "Ofrecemos servicios especializados para mejorar la seguridad, disponibilidad, integridad y eficiencia de instalaciones y procesos industriales.",
    image: "/src/assets/images/services/servicios-industriales.webp",
    icon: Factory,
    services: [
      {
        slug: "mantenimiento",
        title: "Mantenimiento industrial",
        shortDescription:
          "Mantenimiento preventivo, correctivo, mecánico, eléctrico y de instrumentación.",
        icon: Wrench,
      },
      {
        slug: "recubrimientos",
        title: "Protección y recubrimientos",
        shortDescription:
          "Protección anticorrosiva, Sand Blast, pintura marina y recubrimientos industriales.",
        icon: PaintRoller,
      },
      {
        slug: "inspeccion-integridad",
        title: "Inspección e integridad mecánica",
        shortDescription:
          "Evaluación de soldaduras, tuberías, recipientes e infraestructura industrial.",
        icon: ShieldCheck,
      },
      {
        slug: "pruebas-no-destructivas",
        title: "Pruebas no destructivas",
        shortDescription:
          "Inspecciones VT, PT, MT, UT, RT y corrientes Eddy.",
        icon: ShieldCheck,
      },
      {
        slug: "fabricacion-montaje",
        title: "Fabricación y montaje",
        shortDescription:
          "Fabricación de tuberías, montaje y mantenimiento de estructuras metálicas.",
        icon: Factory,
      },
      {
        slug: "gestion-personal",
        title: "Gestión y personal especializado",
        shortDescription:
          "Administración de proyectos, supervisión y suministro de personal industrial.",
        icon: Building2,
      },
    ],
  },
];