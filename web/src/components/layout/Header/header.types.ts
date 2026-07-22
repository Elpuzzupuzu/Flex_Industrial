import type { LucideIcon } from "lucide-react";

export type NavigationChild = {
  label: string;
  to: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavigationItem = {
  label: string;
  to: string;
  children?: NavigationChild[];
};

export type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export type MobileHeaderActionsProps = {
  onSearchClick?: () => void;
};