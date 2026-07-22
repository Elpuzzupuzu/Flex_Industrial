import {
  BriefcaseBusiness,
  Building2,
  FileText,
  Home,
  Wrench,
} from "lucide-react";

import type { MobileNavigationItem } from "./mobileBottomNavigation.types";

export const mobileNavigationItems: MobileNavigationItem[] = [
  {
    label: "Inicio",
    to: "/",
    icon: Home,
  },
  {
    label: "Servicios",
    to: "/servicios",
    icon: Wrench,
  },
  {
    label: "Proyectos",
    to: "/proyectos",
    icon: BriefcaseBusiness,
  },
  {
    label: "Cotización",
    to: "/contacto",
    icon: FileText,
  },
  {
    label: "Nosotros",
    to: "/nosotros",
    icon: Building2,
  },
];