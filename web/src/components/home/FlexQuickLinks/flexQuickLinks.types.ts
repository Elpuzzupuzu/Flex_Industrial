import type { LucideIcon } from "lucide-react";

export interface FlexQuickLinkItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface FlexQuickLinksProps {
  className?: string;
}