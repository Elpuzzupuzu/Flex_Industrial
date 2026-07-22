import { NavLink } from "react-router-dom";

import { mobileNavigationItems } from "./mobileNavigationItems";

function MobileBottomNavigation() {
  return (
    <nav
      aria-label="Navegación móvil"
      className={[
        "fixed inset-x-0 bottom-0 z-50",
        "border-t border-slate-200 bg-white",
        "shadow-[0_-8px_24px_rgba(15,23,42,0.08)]",
        "xl:hidden",
      ].join(" ")}
    >
      <div className="mx-auto grid h-[72px] max-w-xl grid-cols-5 pb-[env(safe-area-inset-bottom)]">
        {mobileNavigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "relative flex min-w-0 flex-col items-center justify-center gap-1",
                  "px-1 text-[11px] font-medium transition-colors",
                  isActive
                    ? "text-[#0b5cab]"
                    : "text-slate-500 hover:text-[#0b5cab]",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={[
                      "absolute left-1/2 top-0 h-[3px] w-10 -translate-x-1/2 rounded-b-full",
                      isActive ? "bg-[#f15a29]" : "bg-transparent",
                    ].join(" ")}
                  />

                  <Icon
                    aria-hidden="true"
                    className="h-[22px] w-[22px]"
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />

                  <span className="max-w-full truncate">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileBottomNavigation;