import { NavLink } from "react-router-dom";

import type { NavigationChild } from "./header.types";

type NavigationDropdownProps = {
  items: NavigationChild[];
};

function NavigationDropdown({
  items,
}: NavigationDropdownProps) {
  return (
    <div
      className={[
        "invisible absolute left-0 top-full z-50",
        "w-[280px] translate-y-2",
        "border border-slate-200 bg-white",
        "opacity-0 shadow-xl",
        "transition-all duration-200",
        "group-hover/nav-item:visible",
        "group-hover/nav-item:translate-y-0",
        "group-hover/nav-item:opacity-100",
        "group-focus-within/nav-item:visible",
        "group-focus-within/nav-item:translate-y-0",
        "group-focus-within/nav-item:opacity-100",
      ].join(" ")}
    >
      <div className="py-2">
        {items.map((child) => {
          const Icon = child.icon;

          return (
            <NavLink
              key={child.to}
              to={child.to}
              className={({ isActive }) =>
                [
                  "group/dropdown-link flex items-start gap-3",
                  "px-5 py-3 transition-colors duration-200",
                  isActive
                    ? "bg-blue-50 text-[#0b5cab]"
                    : [
                        "text-slate-700",
                        "hover:bg-slate-50 hover:text-[#0b5cab]",
                      ].join(" "),
                ].join(" ")
              }
            >
              {Icon && (
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.8}
                  className={[
                    "mt-0.5 h-5 w-5 shrink-0",
                    "text-orange-500",
                  ].join(" ")}
                />
              )}

              <span className="min-w-0">
                <span className="block text-sm font-semibold">
                  {child.label}
                </span>

                {child.description && (
                  <span className="mt-1 block text-xs leading-5 text-slate-500">
                    {child.description}
                  </span>
                )}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default NavigationDropdown;