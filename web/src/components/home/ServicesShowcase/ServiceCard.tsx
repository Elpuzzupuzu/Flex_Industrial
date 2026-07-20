import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { ServiceShowcaseItem } from "./servicesShowcase.types";

type ServiceCardProps = {
  service: ServiceShowcaseItem;
};

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative h-full w-full overflow-hidden bg-slate-950">
      <img
        src={service.image}
        alt={service.imageAlt}
        loading="lazy"
        draggable={false}
        className={[
          "absolute inset-0 h-full w-full object-cover",
          "transition-transform duration-700 ease-out",
          "group-hover:scale-[1.04]",
        ].join(" ")}
      />

      {/* Oscurecimiento general */}
      <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/25" />

      {/* Degradado para mantener legible el contenido */}
      <div
        className={[
          "absolute inset-0",
          "bg-linear-to-t from-black/90 via-black/35 to-transparent",
          "sm:from-black/85 sm:via-black/25",
          "lg:from-black/90 lg:via-black/30",
        ].join(" ")}
      />

      <div
        className={[
          "relative z-10 flex h-full w-full items-end",
          "p-5",
          "sm:p-7",
          "md:p-8",
          "lg:p-10",
          service.featured ? "xl:p-12" : "xl:p-10",
        ].join(" ")}
      >
        <div
          className={[
            "w-full text-white",
            service.featured
              ? "max-w-xl lg:max-w-2xl"
              : "max-w-lg",
          ].join(" ")}
        >
          {service.eyebrow && (
            <p
              className={[
                "text-[10px] font-semibold tracking-[0.18em]",
                "text-white/75 uppercase",
                "sm:text-xs",
                "md:text-sm",
              ].join(" ")}
            >
              {service.eyebrow}
            </p>
          )}

          <h3
            className={[
              "mt-2 font-bold tracking-tight",
              "text-2xl leading-tight",
              "sm:text-3xl",
              "md:text-4xl",
              service.featured
                ? "lg:text-5xl xl:text-6xl"
                : "lg:text-4xl xl:text-5xl",
            ].join(" ")}
          >
            {service.title}
          </h3>

          <p
            className={[
              "mt-3 max-w-xl text-sm leading-6 text-white/85",
              "sm:text-base sm:leading-7",
              "md:mt-4",
              service.featured
                ? "lg:text-lg"
                : "lg:text-base xl:text-lg",
            ].join(" ")}
          >
            {service.description}
          </p>

          <Link
            to={service.href}
            aria-label={`Conocer más sobre ${service.title}`}
            className={[
              "mt-5 inline-flex min-h-11 items-center gap-2",
              "text-xs font-bold tracking-wide text-white uppercase",
              "transition-all duration-300",
              "hover:gap-3 hover:text-white/80",
              "focus-visible:outline-2",
              "focus-visible:outline-offset-4",
              "focus-visible:outline-white",
              "sm:mt-6 sm:text-sm",
              "md:mt-7",
            ].join(" ")}
          >
            Ver servicio

            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1 sm:size-5"
              strokeWidth={2.2}
            />
          </Link>
        </div>
      </div>

      {/* Permite abrir toda la tarjeta sin ocultar el enlace accesible */}
      <Link
        to={service.href}
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 z-0"
      />
    </article>
  );
}

export default ServiceCard;