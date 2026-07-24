import DesktopNavigationItem from "./DesktopNavigationItem";
import { navigationItems } from "./navigationItems";

function DesktopNavigation() {
  return (
    <nav
      aria-label="Navegación principal"
      className={[
        "ml-6 hidden min-w-0 flex-1 items-center gap-1",
        "xl:flex",
        "2xl:ml-8",
      ].join(" ")}
    >
      {navigationItems.map((item) => (
        <DesktopNavigationItem
          key={item.to}
          item={item}
        />
      ))}
    </nav>
  );
}

export default DesktopNavigation;