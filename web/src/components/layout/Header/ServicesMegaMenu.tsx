import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

import type { NavigationSection } from "./header.types";

type ServicesMegaMenuProps = {
  sections: NavigationSection[];
  mainRoute: string;
};

function ServicesMegaMenu({
  sections,
  mainRoute,
}: ServicesMegaMenuProps) {
  return (
    <div
      className={[
        "invisible fixed left-0 right-0 top-[82px] z-40",
        "translate-y-2 border-t border-slate-200",
        "bg-white opacity-0 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.28)]",
        "transition-[opacity,transform,visibility] duration-200",
        "group-hover/nav-item:visible",
        "group-hover/nav-item:translate-y-0",
        "group-hover/nav-item:opacity-100",
        "group-focus-within/nav-item:visible",
        "group-focus-within/nav-item:translate-y-0",
        "group-focus-within/nav-item:opacity-100",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto grid w-full max-w-[1800px]",
          "grid-cols-3 px-8 py-8",
          "2xl:px-10",
        ].join(" ")}
      >
        {sections.map((section, sectionIndex) => {
          const SectionIcon = section.icon;

          return (
            <section
              key={section.to}
              className={[
                "min-w-0",
                sectionIndex > 0
                  ? "border-l border-slate-200 pl-8 2xl:pl-10"
                  : "pr-8 2xl:pr-10",
                sectionIndex > 0 &&
                sectionIndex < sections.length - 1
                  ? "pr-8 2xl:pr-10"
                  : "",
              ].join(" ")}
            >
              <NavLink
                to={section.to}
                className={[
                  "group/section-heading flex items-start gap-3",
                  "rounded-sm outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-[#0b5cab]",
                  "focus-visible:ring-offset-4",
                ].join(" ")}
              >
                {SectionIcon && (
                  <span
                    className={[
                      "flex h-10 w-10 shrink-0 items-center",
                      "justify-center bg-orange-50 text-orange-500",
                    ].join(" ")}
                  >
                    <SectionIcon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </span>
                )}

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span
                      className={[
                        "text-base font-semibold text-slate-900",
                        "transition-colors duration-200",
                        "group-hover/section-heading:text-[#0b5cab]",
                      ].join(" ")}
                    >
                      {section.label}
                    </span>

                    <ArrowRight
                      aria-hidden="true"
                      strokeWidth={1.8}
                      className={[
                        "h-4 w-4 shrink-0 text-slate-400",
                        "opacity-0 transition-all duration-200",
                        "-translate-x-1",
                        "group-hover/section-heading:translate-x-0",
                        "group-hover/section-heading:text-[#0b5cab]",
                        "group-hover/section-heading:opacity-100",
                      ].join(" ")}
                    />
                  </span>

                  {section.description && (
                    <span className="mt-1.5 block max-w-md text-sm leading-6 text-slate-500">
                      {section.description}
                    </span>
                  )}
                </span>
              </NavLink>

              {section.children?.length ? (
                <ul className="mt-5 space-y-0.5">
                  {section.children.map((child) => {
                    const ChildIcon = child.icon;

                    return (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            [
                              "group/service-link relative flex",
                              "items-center gap-2 py-2 pl-5",
                              "text-sm leading-5",
                              "transition-colors duration-200",
                              "before:absolute before:left-0 before:top-0",
                              "before:h-full before:w-px",
                              "before:bg-slate-200",
                              "after:absolute after:left-0 after:top-1/2",
                              "after:h-0 after:w-0.5",
                              "after:-translate-y-1/2",
                              "after:bg-orange-500",
                              "after:transition-all after:duration-200",
                              isActive
                                ? [
                                    "font-semibold text-[#0b5cab]",
                                    "after:h-5",
                                  ].join(" ")
                                : [
                                    "text-slate-600",
                                    "hover:text-[#0b5cab]",
                                    "hover:after:h-5",
                                  ].join(" "),
                            ].join(" ")
                          }
                        >
                          {ChildIcon && (
                            <ChildIcon
                              aria-hidden="true"
                              className="h-4 w-4 shrink-0 text-orange-500"
                              strokeWidth={1.8}
                            />
                          )}

                          <span>{child.label}</span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </section>
          );
        })}
      </div>

      <div className="border-t border-slate-200 bg-slate-50/80">
        <div
          className={[
            "mx-auto flex w-full max-w-[1800px]",
            "items-center justify-between gap-8",
            "px-8 py-4 2xl:px-10",
          ].join(" ")}
        >
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900">
              Soluciones integrales para cada proyecto
            </p>

            <p className="mt-0.5 text-xs leading-5 text-slate-500">
              Mantenimiento, logística, inspección y soporte industrial
              especializado.
            </p>
          </div>

          <NavLink
            to={mainRoute}
            className={[
              "group/all-services inline-flex shrink-0",
              "items-center gap-2 rounded-sm",
              "text-sm font-semibold text-[#0b5cab]",
              "outline-none transition-colors duration-200",
              "hover:text-orange-500",
              "focus-visible:ring-2",
              "focus-visible:ring-[#0b5cab]",
              "focus-visible:ring-offset-4",
            ].join(" ")}
          >
            <span>Ver todos los servicios</span>

            <ArrowRight
              aria-hidden="true"
              className={[
                "h-4 w-4",
                "transition-transform duration-200",
                "group-hover/all-services:translate-x-1",
              ].join(" ")}
              strokeWidth={1.8}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ServicesMegaMenu;