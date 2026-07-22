import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { ServiceCategoryCardProps } from "./serviceCategories.types";

function ServiceCategoryCard({
  category,
}: ServiceCategoryCardProps) {
  const Icon = category.icon;

  return (
    <article
      className={[
        "group relative flex h-full min-h-[520px] flex-col",
        "overflow-hidden border border-slate-200 bg-white",
        "transition-[transform,box-shadow,border-color] duration-300",
        "hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl",
        "sm:min-h-[560px]",
        "lg:min-h-[600px]",
        "xl:min-h-[640px]",
      ].join(" ")}
    >
      <div
        className={[
          "relative z-10 flex flex-1 flex-col",
          "px-5 pt-7 pb-6",
          "sm:px-6 sm:pt-8",
          "lg:px-7 lg:pt-9",
        ].join(" ")}
      >
        <div className="flex justify-center">
          <div
            className={[
              "flex size-20 items-center justify-center rounded-full",
              "bg-[#062654] text-white",
              "ring-4 ring-white shadow-md",
              "transition-transform duration-300",
              "group-hover:scale-105",
              "sm:size-24",
            ].join(" ")}
          >
            <Icon
              aria-hidden="true"
              className="size-10 sm:size-12"
              strokeWidth={1.7}
            />
          </div>
        </div>

        <div className="mt-5 text-center sm:mt-6">
          <h3
            className={[
              "text-xl leading-tight font-bold tracking-tight",
              "text-[#062654] uppercase",
              "sm:text-2xl",
              "xl:text-[1.65rem]",
            ].join(" ")}
          >
            {category.title}
          </h3>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-700 sm:text-base">
          {category.services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-orange-500"
              />

              <span>{service}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <Link
            to={category.href}
            aria-label={`Conocer más sobre ${category.title}`}
            className={[
              "inline-flex min-h-11 items-center gap-2",
              "text-xs font-bold tracking-wide text-[#062654] uppercase",
              "transition-colors duration-300",
              "hover:text-orange-600",
              "focus-visible:outline-2",
              "focus-visible:outline-offset-4",
              "focus-visible:outline-orange-500",
              "sm:text-sm",
            ].join(" ")}
          >
            Ver detalles

            <ArrowRight
              aria-hidden="true"
              className={[
                "size-4 transition-transform duration-300",
                "group-hover:translate-x-1",
                "sm:size-5",
              ].join(" ")}
              strokeWidth={2.2}
            />
          </Link>
        </div>
      </div>

      <div className="relative h-[220px] w-full overflow-hidden sm:h-[250px] lg:h-[280px]">
        <img
          src={category.image}
          alt={category.imageAlt}
          loading="lazy"
          draggable={false}
          className={[
            "h-full w-full object-cover",
            "transition-transform duration-700 ease-out",
            "group-hover:scale-[1.04]",
          ].join(" ")}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </article>
  );
}

export default ServiceCategoryCard;