import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

import type { NavigationItem } from "./header.types";
import NavigationDropdown from "./NavigationDropdown";
import ServicesMegaMenu from "./ServicesMegaMenu";

type DesktopNavigationItemProps = {
  item: NavigationItem;
};

function DesktopNavigationItem({
  item,
}: DesktopNavigationItemProps) {
  const hasMenu =
    item.menuType === "dropdown" ||
    item.menuType === "mega";

  return (
    <div
      className={[
        "group/nav-item relative flex h-[82px]",
        "shrink-0 items-center",
      ].join(" ")}
    >
      <NavLink
        to={item.to}
        end={item.to === "/"}
        className={({ isActive }) =>
          [
            "flex h-full items-center gap-1.5",
            "border-b-2 px-3 text-sm font-medium",
            "transition-colors duration-200",
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

        {hasMenu && (
          <ChevronDown
            aria-hidden="true"
            strokeWidth={1.8}
            className={[
              "h-3.5 w-3.5",
              "transition-transform duration-200",
              "group-hover/nav-item:rotate-180",
              "group-focus-within/nav-item:rotate-180",
            ].join(" ")}
          />
        )}
      </NavLink>

      {item.menuType === "dropdown" &&
        item.children?.length && (
          <NavigationDropdown items={item.children} />
        )}

      {item.menuType === "mega" &&
        item.sections?.length && (
          <ServicesMegaMenu
            sections={item.sections}
            mainRoute={item.to}
          />
        )}
    </div>
  );
}

export default DesktopNavigationItem;