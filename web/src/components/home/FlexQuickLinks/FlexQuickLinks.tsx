import {
  Building2,
  Factory,
  HardHat,
  Mail,
  PackageSearch,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

import type {
  FlexQuickLinkItem,
  FlexQuickLinksProps,
} from "./flexQuickLinks.types";

const quickLinks: FlexQuickLinkItem[] = [
  {
    id: "mantenimiento",
    label: "Mantenimiento",
    href: "/servicios/mantenimiento-industrial",
    icon: Factory,
  },
  {
    id: "obra-civil",
    label: "Obra civil",
    href: "/servicios/construccion-obra-civil",
    icon: HardHat,
  },
  {
    id: "logistica",
    label: "Logística",
    href: "/servicios/logistica-transporte",
    icon: Truck,
  },
  {
    id: "equipamiento",
    label: "Equipamiento",
    href: "/servicios/equipamiento-industrial",
    icon: PackageSearch,
  },
  {
    id: "proyectos",
    label: "Proyectos",
    href: "/proyectos",
    icon: Building2,
  },
  {
    id: "contacto",
    label: "Contacto",
    href: "/contacto",
    icon: Mail,
  },
];

function FlexQuickLinks({
  className = "",
}: FlexQuickLinksProps) {
  return (
    <section
      aria-label="Accesos rápidos de Flex Industrial"
      className={[
        "w-full bg-white",
        "border-y border-slate-200",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto grid w-full max-w-7xl",
          "grid-cols-2",
          "sm:grid-cols-3",
          "lg:grid-cols-6",
        ].join(" ")}
      >
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              to={item.href}
              aria-label={`Ir a ${item.label}`}
              className={[
                "group relative",
                "flex min-h-[120px] flex-col items-center justify-center",
                "gap-3 px-3 py-5 text-center",
                "border-b border-r border-slate-200",
                "transition-colors duration-300",
                "hover:bg-orange-50",
                "focus-visible:z-10",
                "focus-visible:outline-2",
                "focus-visible:outline-offset-[-2px]",
                "focus-visible:outline-orange-500",

                "sm:min-h-[140px] sm:gap-4 sm:px-4 sm:py-6",

                "lg:min-h-[170px]",
                "lg:border-b-0",
              ].join(" ")}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.8}
                className={[
                  "size-10 text-orange-500",
                  "transition-transform duration-300",
                  "group-hover:-translate-y-1",
                  "sm:size-12",
                  "lg:size-14",
                ].join(" ")}
              />

              <span
                className={[
                  "text-xs font-bold tracking-wide text-slate-900 uppercase",
                  "transition-colors duration-300",
                  "group-hover:text-orange-600",
                  "sm:text-sm",
                  "lg:text-base",
                ].join(" ")}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default FlexQuickLinks;