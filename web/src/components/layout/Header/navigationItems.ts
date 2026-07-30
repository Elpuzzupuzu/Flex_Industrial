import type { NavigationItem } from "./header.types";

export const navigationItems: NavigationItem[] = [
  {
    label: "Inicio",
    to: "/",
  },
  {
    label: "Servicios",
    to: "/servicios",
    menuType: "mega",
    sections: [
      {
        label: "Mantenimiento a Edificios",
        description:
          "Conservación, protección y adecuación de instalaciones.",
        to: "/servicios/mantenimiento-de-edificios",
        children: [
          {
            label: "Impermeabilización",
            to: "/servicios/mantenimiento-de-edificios/impermeabilizacion",
          },
          {
            label: "Pintura arquitectónica e industrial",
            to: "/servicios/mantenimiento-de-edificios/pintura",
          },
          {
            label: "Tablaroca y Durock",
            to: "/servicios/mantenimiento-de-edificios/tablaroca-durock",
          },
        ],
      },
      {
        label: "Logística, Renta y Suministros",
        description:
          "Equipos, infraestructura móvil, transporte y materiales.",
        to: "/servicios/logistica-renta-suministros",
        children: [
          {
            label: "Logística y transporte",
            to: "/servicios/logistica-renta-suministros/logistica-transporte",
          },
          {
            label: "Renta de espacios móviles",
            to: "/servicios/logistica-renta-suministros/espacios-moviles",
          },
          {
            label: "Renta de maquinaria",
            to: "/servicios/logistica-renta-suministros/maquinaria",
          },
          {
            label: "Suministros industriales",
            to: "/servicios/logistica-renta-suministros/suministros",
          },
        ],
      },
      {
        label: "Servicios Industriales",
        description:
          "Mantenimiento, inspección, recubrimientos y soporte industrial.",
        to: "/servicios/industriales",
        children: [
          {
            label: "Mantenimiento industrial",
            to: "/servicios/industriales/mantenimiento",
          },
          {
            label: "Protección y recubrimientos",
            to: "/servicios/industriales/recubrimientos",
          },
          {
            label: "Inspección e integridad mecánica",
            to: "/servicios/industriales/inspeccion-integridad",
          },
          {
            label: "Pruebas no destructivas",
            to: "/servicios/industriales/pruebas-no-destructivas",
          },
          {
            label: "Fabricación y montaje",
            to: "/servicios/industriales/fabricacion-montaje",
          },
          {
            label: "Gestión y personal especializado",
            to: "/servicios/industriales/gestion-personal",
          },
        ],
      },
    ],
  },
  {
    label: "Industrias",
    to: "/industrias",
    menuType: "dropdown",
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
    label: "Productos",
    to: "/productos",
  },
  {
    label: "Proyectos",
    to: "/proyectos",
  },
  {
    label: "Nosotros",
    to: "/nosotros",
    menuType: "dropdown",
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