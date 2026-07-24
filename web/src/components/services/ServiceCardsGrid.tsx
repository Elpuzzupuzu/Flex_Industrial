import type { ServiceChild } from "@/types/services.types";

import ServiceCategoryCard from "./ServiceCategoryCard";

type ServiceCardsGridProps = {
  categorySlug: string;
  services: ServiceChild[];
};

function ServiceCardsGrid({
  categorySlug,
  services,
}: ServiceCardsGridProps) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p
            className={[
              "text-sm font-semibold uppercase",
              "tracking-[0.18em] text-orange-500",
            ].join(" ")}
          >
            Especialidades
          </p>

          <h2
            className={[
              "mt-3 text-3xl font-bold tracking-tight",
              "text-slate-900 sm:text-4xl",
            ].join(" ")}
          >
            Soluciones para cada necesidad
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Conoce los servicios disponibles dentro de esta categoría.
          </p>
        </div>

        <div
          className={[
            "mt-10 grid grid-cols-1 gap-6",
            "md:grid-cols-2 xl:grid-cols-3",
          ].join(" ")}
        >
          {services.map((service) => (
            <ServiceCategoryCard
              key={service.slug}
              service={service}
              categorySlug={categorySlug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCardsGrid;