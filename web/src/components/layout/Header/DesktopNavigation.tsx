import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

import { navigationItems } from "./navigationItems";

function DesktopNavigation() {
  return (
    <nav
      className={[
        "ml-6 hidden min-w-0 flex-1 items-center gap-1",
        "xl:flex",
        "2xl:ml-8",
      ].join(" ")}
      aria-label="Navegación principal"
    >
      {navigationItems.map((item) => {
        const hasDropdown = Boolean(item.children?.length);

        return (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              [
                "group flex h-[82px] shrink-0 items-center gap-1.5",
                "border-b-2 px-3 text-sm font-medium transition-colors",
                isActive
                  ? "border-[#0b5cab] text-[#0b5cab]"
                  : [
                      "border-transparent text-gray-800",
                      "hover:border-gray-300 hover:text-[#0b5cab]",
                    ].join(" "),
              ].join(" ")
            }
          >
            <span>{item.label}</span>

            {hasDropdown && (
              <ChevronDown
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                strokeWidth={1.8}
              />
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default DesktopNavigation;