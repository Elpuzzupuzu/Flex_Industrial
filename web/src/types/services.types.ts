import type { LucideIcon } from "lucide-react";

export type ServiceFeature = {
  title: string;
  description?: string;
};

export type ServiceChild = {
  slug: string;
  title: string;
  eyebrow?: string;
  shortDescription: string;
  description?: string;
  image?: string;
  icon?: LucideIcon;
  features?: ServiceFeature[];
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