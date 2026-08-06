import {
  BriefcaseBusiness,
  Building2,
  Home,
  PackageSearch,
  Phone,
  UserRound,
} from "lucide-react";

export type MobileNavigationItem = {
  label: string;
  to: string;
  icon: typeof Home;
  action?: "services-menu";
};

export const mobileNavigationItems: MobileNavigationItem[] = [
  {
    label: "Inicio",
    to: "/",
    icon: Home,
  },
  {
    label: "Servicios",
    to: "/servicios",
    icon: BriefcaseBusiness,
    action: "services-menu",
  },
  {
    label: "Productos",
    to: "/productos",
    icon: PackageSearch,
  },
  {
    label: "Proyectos",
    to: "/proyectos",
    icon: Building2,
  },
  {
    label: "Nosotros",
    to: "/nosotros",
    icon: UserRound,
  },
  {
    label: "Contacto",
    to: "/contacto",
    icon: Phone,
  },
];