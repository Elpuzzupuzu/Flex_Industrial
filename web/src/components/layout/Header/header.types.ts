import type { LucideIcon } from "lucide-react";

export type NavigationMenuType = "dropdown" | "mega";

export type NavigationChild = {
  label: string;
  to: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavigationSection = {
  label: string;
  to: string;
  description?: string;
  icon?: LucideIcon;
  children?: NavigationChild[];
};

export type NavigationItem = {
  label: string;
  to: string;
  menuType?: NavigationMenuType;

  /**
   * Elementos de un dropdown convencional.
   * Ejemplo: Industrias o Nosotros.
   */
  children?: NavigationChild[];

  /**
   * Columnas o grupos de un mega menú.
   * Ejemplo: Servicios.
   */
  sections?: NavigationSection[];
};

export type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type MobileHeaderActionsProps = {
  onSearchClick?: () => void;
};