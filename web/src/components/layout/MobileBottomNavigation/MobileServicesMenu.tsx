import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  X,
} from "lucide-react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import { navigationItems } from "@/components/layout/Header/navigationItems";

type MobileServicesMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileServicesMenu({
  isOpen,
  onClose,
}: MobileServicesMenuProps) {
  const location = useLocation();

  const [openSection, setOpenSection] = useState<string | null>(
    null,
  );

  const servicesItem = navigationItems.find(
    (item) => item.menuType === "mega" && item.to === "/servicios",
  );

  useEffect(() => {
    if (!isOpen) {
      setOpenSection(null);
      return;
    }

    const activeSection = servicesItem?.sections?.find((section) =>
      location.pathname.startsWith(section.to),
    );

    setOpenSection(activeSection?.to ?? null);
  }, [isOpen, location.pathname, servicesItem]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleSection = (sectionRoute: string) => {
    setOpenSection((current) =>
      current === sectionRoute ? null : sectionRoute,
    );
  };

  const handleNavigation = () => {
    setOpenSection(null);
    onClose();
  };

  if (!servicesItem?.sections?.length) {
    return null;
  }

  return (
    <div
      aria-hidden={!isOpen}
      className={[
        "fixed inset-0 z-40 xl:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
    >
      <button
        type="button"
        aria-label="Cerrar menú de servicios"
        onClick={onClose}
        className={[
          "absolute inset-0 bg-slate-950/45",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-label="Menú de servicios"
        className={[
          "absolute inset-x-0 bottom-0",
          "max-h-[calc(100dvh-48px)]",
          "overflow-hidden rounded-t-2xl bg-white",
          "shadow-[0_-24px_60px_rgba(15,23,42,0.25)]",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "translate-y-full",
        ].join(" ")}
      >
        <div
          aria-hidden="true"
          className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-slate-300"
        />

        <header
          className={[
            "flex items-center justify-between gap-4",
            "border-b border-slate-200 px-5 py-4",
          ].join(" ")}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              FLEX Industrial
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Servicios
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className={[
              "flex h-10 w-10 items-center justify-center",
              "rounded-full bg-slate-100 text-slate-600",
              "transition-colors hover:bg-slate-200",
              "hover:text-slate-900",
            ].join(" ")}
          >
            <X
              aria-hidden="true"
              className="h-5 w-5"
              strokeWidth={1.8}
            />
          </button>
        </header>

        <div
          className={[
            "max-h-[calc(100dvh-180px)] overflow-y-auto",
            "overscroll-contain px-4 pb-8 pt-3",
          ].join(" ")}
        >
          {servicesItem.sections.map((section) => {
            const SectionIcon = section.icon;
            const isSectionOpen = openSection === section.to;
            const isSectionActive =
              location.pathname === section.to ||
              location.pathname.startsWith(`${section.to}/`);

            return (
              <article
                key={section.to}
                className="border-b border-slate-200 last:border-b-0"
              >
                <div className="flex items-stretch">
                  <NavLink
                    to={section.to}
                    onClick={handleNavigation}
                    className={[
                      "flex min-w-0 flex-1 items-start gap-3",
                      "px-2 py-4 transition-colors",
                      isSectionActive
                        ? "text-[#0b5cab]"
                        : "text-slate-800 hover:text-[#0b5cab]",
                    ].join(" ")}
                  >
                    {SectionIcon && (
                      <span
                        className={[
                          "flex h-10 w-10 shrink-0",
                          "items-center justify-center",
                          "bg-orange-50 text-orange-500",
                        ].join(" ")}
                      >
                        <SectionIcon
                          aria-hidden="true"
                          className="h-5 w-5"
                          strokeWidth={1.8}
                        />
                      </span>
                    )}

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">
                        {section.label}
                      </span>

                      {section.description && (
                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {section.description}
                        </span>
                      )}
                    </span>
                  </NavLink>

                  {section.children?.length ? (
                    <button
                      type="button"
                      onClick={() => toggleSection(section.to)}
                      aria-expanded={isSectionOpen}
                      aria-controls={`mobile-services-${section.to}`}
                      aria-label={
                        isSectionOpen
                          ? `Cerrar opciones de ${section.label}`
                          : `Mostrar opciones de ${section.label}`
                      }
                      className={[
                        "flex w-12 shrink-0 items-center justify-center",
                        "text-slate-500 transition-colors",
                        "hover:bg-slate-50 hover:text-[#0b5cab]",
                      ].join(" ")}
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={[
                          "h-5 w-5 transition-transform duration-200",
                          isSectionOpen ? "rotate-180" : "",
                        ].join(" ")}
                        strokeWidth={1.8}
                      />
                    </button>
                  ) : null}
                </div>

                {section.children?.length ? (
                  <div
                    id={`mobile-services-${section.to}`}
                    className={[
                      "grid transition-[grid-template-rows]",
                      "duration-300 ease-in-out",
                      isSectionOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <ul
                        className={[
                          "mb-3 border-l border-slate-200",
                          "ml-7 space-y-0.5 pl-4",
                        ].join(" ")}
                      >
                        {section.children.map((child) => (
                          <li key={child.to}>
                            <NavLink
                              to={child.to}
                              onClick={handleNavigation}
                              className={({ isActive }) =>
                                [
                                  "relative flex min-h-11",
                                  "items-center py-2 pl-3 pr-2",
                                  "text-sm leading-5",
                                  "transition-colors duration-200",
                                  "before:absolute before:-left-[17px]",
                                  "before:top-1/2 before:h-0",
                                  "before:w-0.5 before:-translate-y-1/2",
                                  "before:bg-orange-500",
                                  "before:transition-all",
                                  isActive
                                    ? [
                                        "font-semibold text-[#0b5cab]",
                                        "before:h-5",
                                      ].join(" ")
                                    : [
                                        "text-slate-600",
                                        "hover:text-[#0b5cab]",
                                        "hover:before:h-5",
                                      ].join(" "),
                                ].join(" ")
                              }
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </article>
            );
          })}

          <Link
            to={servicesItem.to}
            onClick={handleNavigation}
            className={[
              "group/all-services mt-5 flex min-h-12",
              "items-center justify-between gap-4",
              "bg-[#0b5cab] px-5",
              "text-sm font-semibold text-white",
              "transition-colors hover:bg-[#084a89]",
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
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MobileServicesMenu;