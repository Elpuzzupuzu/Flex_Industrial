export interface ServiceShowcaseItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  eyebrow?: string;
  featured?: boolean;
}

export interface ServiceCardProps {
  service: ServiceShowcaseItem;
}