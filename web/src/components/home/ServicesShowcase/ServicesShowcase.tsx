import ServiceCard from "./ServiceCard";

import type { ServiceShowcaseItem } from "./servicesShowcase.types";

import bodi1 from "@/assets/images/showcase/bodi1.jpg";
import bodi2 from "@/assets/images/showcase/bodi2.jpg";
import bodi3 from "@/assets/images/showcase/bodi3.jpg";


const services: ServiceShowcaseItem[] = [
  {
    id: "mantenimiento-industrial",
    title: "Mantenimiento industrial",
    description:
      "Mantenimiento preventivo y correctivo para conservar tus instalaciones, equipos y procesos en condiciones seguras y eficientes.",
    image: bodi2,
    imageAlt:
      "Personal especializado realizando mantenimiento en una planta industrial",
    href: "/servicios/mantenimiento-industrial",
    eyebrow: "Soluciones especializadas",
    featured: true,
  },
  {
    id: "construccion-obra-civil",
    title: "Construcción y obra civil",
    description:
      "Planeación, ejecución y supervisión de proyectos industriales, adecuaciones, estructuras y espacios operativos.",
    image: bodi3,
    imageAlt:
      "Proyecto de construcción y obra civil en instalaciones industriales",
    href: "/servicios/construccion-obra-civil",
    eyebrow: "Proyectos industriales",
  },
  {
    id: "logistica-transporte",
    title: "Logística y transporte",
    description:
      "Coordinación y traslado de materiales, maquinaria y equipos con seguimiento, seguridad y control operativo.",
    image: bodi1,
    imageAlt:
      "Transporte de maquinaria y materiales para operaciones industriales",
    href: "/servicios/logistica-transporte",
    eyebrow: "Operación y suministro",
  },
];

function ServicesShowcase() {
  return (
    <section
      aria-labelledby="services-showcase-title"
      className="w-full bg-white py-4 sm:py-6 lg:py-8"
    >
      <div className="sr-only">
        <h2 id="services-showcase-title">
          Servicios principales de Flex Industrial
        </h2>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className={[
            "grid w-full",
            "grid-cols-1 gap-2",
            "sm:gap-3",
            "lg:grid-cols-2 lg:grid-rows-2 lg:gap-1",
          ].join(" ")}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={[
                index === 0
                  ? [
                      "min-h-[360px]",
                      "sm:min-h-[460px]",
                      "md:min-h-[540px]",
                      "lg:row-span-2 lg:min-h-[720px]",
                      "xl:min-h-[820px]",
                    ].join(" ")
                  : [
                      "min-h-[300px]",
                      "sm:min-h-[360px]",
                      "md:min-h-[420px]",
                      "lg:min-h-0",
                    ].join(" "),
              ].join(" ")}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesShowcase;