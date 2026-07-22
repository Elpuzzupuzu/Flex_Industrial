import type { LucideIcon } from "lucide-react";

export interface ServiceCategoryItem {
  id: string;
  title: string;
  services: string[];
  image: string;
  imageAlt: string;
  href: string;
  icon: LucideIcon;
}

export interface ServiceCategoryCardProps {
  category: ServiceCategoryItem;
}