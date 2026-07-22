import type { NavigationItem } from "./header.types";

export const navigationItems: NavigationItem[] = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Servicios",
    to: "/servicios",
    children: [
      {
        label: "Mantenimiento de edificios",
        to: "/servicios/mantenimiento-de-edificios",
      },
      {
        label: "Mantenimiento industrial",
        to: "/servicios/mantenimiento-industrial",
      },
      {
        label: "Servicios logísticos",
        to: "/servicios/servicios-logisticos",
      },
      {
        label: "Renta de espacios móviles",
        to: "/servicios/renta-de-espacios-moviles",
      },
    ],
  },
  {
    label: "Industrias",
    to: "/industrias",
    children: [
      {
        label: "Construcción",
        to: "/industrias/construccion",
      },
      {
        label: "Manufactura",
        to: "/industrias/manufactura",
      },
      {
        label: "Logística",
        to: "/industrias/logistica",
      },
    ],
  },
  {
    label: "Proyectos",
    to: "/proyectos",
  },
  {
    label: "Nosotros",
    to: "/nosotros",
    children: [
      {
        label: "Quiénes somos",
        to: "/nosotros",
      },
      {
        label: "Nuestra experiencia",
        to: "/nosotros/experiencia",
      },
    ],
  },
  {
    label: "Contacto",
    to: "/contacto",
  },
];