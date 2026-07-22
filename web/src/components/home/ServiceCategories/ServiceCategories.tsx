import {
  Building2,
  Factory,
  Truck,
  Warehouse,
} from "lucide-react";

import ServiceCategoryCard from "./ServiceCategoryCard";

import type { ServiceCategoryItem } from "./serviceCategories.types";

import mantenimiento from "@/assets/images/servicescategories/service1.jpg";
import industrial from "@/assets/images/servicescategories/service2.jpg";
import logistica from "@/assets/images/servicescategories/service3.jpg";
import campers from "@/assets/images/servicescategories/service4.jpg";



const serviceCategories: ServiceCategoryItem[] = [
  {
    id: "mantenimiento-edificios",
    title: "Mantenimiento a edificios",
    services: [
      "Impermeabilización prefabricada",
      "Acabados en tablaroca y Durock",
      "Pintura exterior e interior",
    ],
    image: mantenimiento,
    imageAlt:
      "Personal realizando trabajos de mantenimiento en un edificio",
    href: "/servicios/mantenimiento-edificios",
    icon: Building2,
  },
  {
    id: "mantenimiento-industrial",
    title: "Mantenimiento industrial",
    services: [
      "Sand blast",
      "Mantenimiento anticorrosivo",
      "Limpieza y preparación de superficies",
    ],
    image: industrial,
    imageAlt:
      "Especialista realizando mantenimiento industrial en tuberías",
    href: "/servicios/mantenimiento-industrial",
    icon: Factory,
  },
  {
    id: "servicios-logisticos",
    title: "Servicios logísticos",
    services: [
      "Tractocamiones con plataformas",
      "Tractocamiones con tolvas presurizadas",
      "Montacargas",
      "Plataformas autoelevables",
    ],
    image: logistica,
    imageAlt:
      "Vehículos y maquinaria utilizados en servicios logísticos",
    href: "/servicios/logistica-transporte",
    icon: Truck,
  },
  {
    id: "renta-campers",
    title: "Renta de campers",
    services: [
      "Oficinas móviles",
      "Casetas",
      "Dormitorios",
    ],
    image: campers,
    imageAlt:
      "Campers industriales utilizados como oficinas y dormitorios",
    href: "/servicios/renta-campers",
    icon: Warehouse,
  },
];

function ServiceCategories() {
  return (
    <section
      aria-labelledby="service-categories-title"
      className="w-full bg-slate-50 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase sm:text-sm">
            Soluciones integrales
          </p>

          <h2
            id="service-categories-title"
            className="mt-3 text-3xl leading-tight font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Servicios para cada etapa de tu operación
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
            Atendemos proyectos de mantenimiento, logística e
            infraestructura con personal especializado y soluciones
            adaptadas a cada necesidad.
          </p>
        </header>

        <div
          className={[
            "grid grid-cols-1 gap-6",
            "sm:grid-cols-2",
            "xl:grid-cols-4 xl:gap-4",
          ].join(" ")}
        >
          {serviceCategories.map((category) => (
            <ServiceCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCategories;