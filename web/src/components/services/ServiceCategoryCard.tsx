import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { ServiceChild } from "@/types/services.types";

type ServiceCategoryCardProps = {
  service: ServiceChild;
  categorySlug: string;
};

function ServiceCategoryCard({
  service,
  categorySlug,
}: ServiceCategoryCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={[
        "group flex h-full flex-col border border-slate-200",
        "bg-white p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:border-orange-200",
        "hover:shadow-xl",
        "sm:p-7",
      ].join(" ")}
    >
      {Icon && (
        <div
          className={[
            "mb-6 flex h-12 w-12 items-center justify-center",
            "bg-orange-50 text-orange-500",
          ].join(" ")}
        >
          <Icon
            aria-hidden="true"
            className="h-6 w-6"
            strokeWidth={1.8}
          />
        </div>
      )}

      <h2 className="text-xl font-semibold text-slate-900">
        {service.title}
      </h2>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {service.shortDescription}
      </p>

      <Link
        to={`/servicios/${categorySlug}/${service.slug}`}
        className={[
          "mt-6 inline-flex items-center gap-2",
          "text-sm font-semibold text-[#0b5cab]",
          "transition-colors hover:text-orange-500",
        ].join(" ")}
      >
        <span>Conocer servicio</span>

        <ArrowRight
          aria-hidden="true"
          className={[
            "h-4 w-4 transition-transform duration-200",
            "group-hover:translate-x-1",
          ].join(" ")}
          strokeWidth={1.8}
        />
      </Link>
    </article>
  );
}

export default ServiceCategoryCard;