import type { LucideIcon } from "lucide-react";

export type ServiceChild = {
  slug: string;
  title: string;
  shortDescription: string;
  description?: string;
  image?: string;
  icon?: LucideIcon;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  eyebrow?: string;
  shortDescription: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  services: ServiceChild[];
};