import { ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import type { MobileNavigationProps } from "./header.types";
import { navigationItems } from "./navigationItems";

function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  return (
    <div
      id="mobile-navigation"
      aria-hidden={!isOpen}
      className={[
        "absolute left-0 top-full w-full border-t border-gray-200 bg-white shadow-lg transition-all duration-300 xl:hidden",
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex max-w-[1720px] flex-col px-4 py-4 sm:px-6"
        aria-label="Navegación móvil"
      >
        <Link
          to="/"
          onClick={onClose}
          className="mb-2 border-b border-gray-100 pb-4 text-sm font-semibold text-[#123f78]"
        >
          Soluciones industriales
        </Link>

        {navigationItems.map((item) => {
          const hasDropdown = Boolean(item.children?.length);

          return (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  "flex items-center justify-between border-b border-gray-100 py-4 text-sm font-medium transition-colors",
                  isActive
                    ? "text-[#0b5cab]"
                    : "text-gray-800 hover:text-[#0b5cab]",
                ].join(" ")
              }
            >
              <span>{item.label}</span>

              {hasDropdown && (
                <ChevronDown
                  className="h-4 w-4"
                  aria-hidden="true"
                  strokeWidth={1.8}
                />
              )}
            </NavLink>
          );
        })}

        <Link
          to="/contacto"
          onClick={onClose}
          className="mt-5 flex h-11 items-center justify-center bg-[#0b5cab] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#084a89]"
        >
          Solicitar cotización
        </Link>
      </nav>
    </div>
  );
}

export default MobileNavigation;