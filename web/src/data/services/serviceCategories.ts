import {
  Building2,
  Factory,
  PaintRoller,
  PanelsTopLeft,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

import type { ServiceCategory } from "@/types/services.types";

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "mantenimiento-de-edificios",
    eyebrow: "Servicios para instalaciones",
    title: "Mantenimiento a Edificios",
    shortDescription:
      "Conservación, protección y adecuación de instalaciones.",
    description:
      "Desarrollamos soluciones para conservar, proteger y mejorar edificios comerciales, administrativos e industriales, atendiendo las necesidades particulares de cada instalación.",
    image: "/src/assets/images/services/mantenimiento-edificios.webp",
    icon: Building2,
    services: [
      {
        slug: "impermeabilizacion",
        eyebrow: "Protección de cubiertas y superficies",
        title: "Impermeabilización",
        shortDescription:
          "Sistemas prefabricados, acrílicos y especializados para proteger cubiertas y superficies.",
        description:
          "Aplicamos sistemas de impermeabilización orientados a prevenir filtraciones, humedad y deterioro en cubiertas, muros y superficies expuestas. Seleccionamos la solución adecuada de acuerdo con las condiciones de la instalación y las necesidades del proyecto.",
        icon: ShieldCheck,
        features: [
          {
            title: "Rollo prefabricado",
            description:
              "Instalación de sistemas impermeables prefabricados con alta resistencia y durabilidad.",
          },
          {
            title: "Impermeabilización acrílica",
            description:
              "Aplicación de recubrimientos flexibles para cubiertas y superficies expuestas.",
          },
          {
            title: "Sistemas especializados",
            description:
              "Soluciones adaptadas a condiciones particulares de humedad, exposición y operación.",
          },
          {
            title: "Preparación de superficies",
            description:
              "Limpieza, reparación y acondicionamiento previo para mejorar la adherencia del sistema.",
          },
          {
            title: "Mantenimiento preventivo",
            description:
              "Inspección y corrección de puntos vulnerables antes de que se presenten filtraciones.",
          },
          {
            title: "Reparación de filtraciones",
            description:
              "Localización y atención de áreas dañadas en cubiertas, juntas y superficies.",
          },
        ],
      },
      {
        slug: "pintura",
        eyebrow: "Protección y renovación de instalaciones",
        title: "Pintura Arquitectónica e Industrial",
        shortDescription:
          "Aplicación de pintura para protección, renovación y acabado de instalaciones.",
        description:
          "Realizamos trabajos de pintura arquitectónica e industrial para renovar espacios, proteger superficies y mejorar la imagen de las instalaciones, empleando materiales adecuados para cada ambiente y tipo de operación.",
        icon: PaintRoller,
        features: [
          {
            title: "Pintura arquitectónica",
            description:
              "Aplicación de acabados en interiores, exteriores, oficinas y áreas comerciales.",
          },
          {
            title: "Pintura industrial",
            description:
              "Recubrimientos para superficies expuestas a ambientes industriales y condiciones exigentes.",
          },
          {
            title: "Preparación de superficies",
            description:
              "Limpieza, resane, lijado y acondicionamiento antes de la aplicación de pintura.",
          },
          {
            title: "Aplicación en interiores",
            description:
              "Renovación de muros, plafones, divisiones y áreas administrativas.",
          },
          {
            title: "Aplicación en exteriores",
            description:
              "Protección de fachadas, estructuras y superficies expuestas a la intemperie.",
          },
          {
            title: "Mantenimiento de acabados",
            description:
              "Reparación y renovación periódica de recubrimientos deteriorados.",
          },
        ],
      },
      {
        slug: "tablaroca-durock",
        eyebrow: "Adecuación de espacios",
        title: "Tablaroca y Durock",
        shortDescription:
          "Construcción y adecuación de espacios mediante sistemas ligeros y resistentes.",
        description:
          "Construimos y adecuamos espacios mediante sistemas de Tablaroca y Durock, ofreciendo soluciones funcionales para divisiones, plafones, fachadas y áreas que requieren materiales resistentes a la humedad.",
        icon: PanelsTopLeft,
        features: [
          {
            title: "Muros divisorios",
            description:
              "Construcción de divisiones interiores para oficinas, almacenes y áreas operativas.",
          },
          {
            title: "Plafones",
            description:
              "Instalación de plafones ligeros para ocultar instalaciones y mejorar los espacios.",
          },
          {
            title: "Sistemas de Durock",
            description:
              "Aplicaciones resistentes a la humedad para exteriores y áreas de servicio.",
          },
          {
            title: "Adecuación de oficinas",
            description:
              "Redistribución y acondicionamiento de espacios administrativos.",
          },
          {
            title: "Reparaciones",
            description:
              "Corrección de daños, sustitución de paneles y recuperación de acabados.",
          },
          {
            title: "Acabados finales",
            description:
              "Tratamiento de juntas, preparación y aplicación de acabados sobre los sistemas instalados.",
          },
        ],
      },
    ],
  },
  {
    slug: "logistica-renta-suministros",
    eyebrow: "Recursos para cada proyecto",
    title: "Logística, Renta y Suministros",
    shortDescription:
      "Equipos, infraestructura móvil, transporte y materiales.",
    description:
      "Proporcionamos infraestructura, maquinaria, materiales y soporte logístico para facilitar la ejecución y continuidad de proyectos industriales.",
    image: "/src/assets/images/services/logistica-renta.webp",
    icon: Truck,
    services: [
      {
        slug: "logistica-transporte",
        eyebrow: "Movilización y soporte operativo",
        title: "Logística y Transporte",
        shortDescription:
          "Planeación y movilización de equipos, materiales y recursos para proyectos.",
        description:
          "Coordinamos la movilización de materiales, equipos y recursos requeridos para proyectos industriales, procurando entregas oportunas, seguridad durante el traslado y continuidad en las operaciones.",
        icon: Truck,
        features: [
          {
            title: "Transporte de materiales",
            description:
              "Movilización de materiales, herramientas e insumos hacia los sitios de trabajo.",
          },
          {
            title: "Transporte de equipos",
            description:
              "Traslado coordinado de maquinaria y equipos para proyectos industriales.",
          },
          {
            title: "Planeación logística",
            description:
              "Organización de rutas, tiempos, recursos y necesidades operativas.",
          },
          {
            title: "Entregas programadas",
            description:
              "Coordinación de entregas de acuerdo con el programa de ejecución del proyecto.",
          },
          {
            title: "Soporte en sitio",
            description:
              "Atención a requerimientos logísticos durante el desarrollo de las actividades.",
          },
          {
            title: "Control de suministros",
            description:
              "Seguimiento de materiales y recursos destinados a cada proyecto.",
          },
        ],
      },
      {
        slug: "espacios-moviles",
        eyebrow: "Infraestructura temporal",
        title: "Renta de Espacios Móviles",
        shortDescription:
          "Campers, oficinas móviles y casetas adaptadas a las necesidades del proyecto.",
        description:
          "Proporcionamos espacios móviles para oficinas, supervisión, almacenamiento, vigilancia y atención operativa, facilitando la instalación de infraestructura temporal en diferentes tipos de proyectos.",
        icon: Warehouse,
        features: [
          {
            title: "Renta de campers",
            description:
              "Espacios móviles para supervisión, descanso y operación dentro del proyecto.",
          },
          {
            title: "Oficinas móviles",
            description:
              "Instalaciones temporales acondicionadas para actividades administrativas.",
          },
          {
            title: "Casetas de vigilancia",
            description:
              "Espacios compactos para control de accesos y seguridad.",
          },
          {
            title: "Configuración personalizada",
            description:
              "Adaptación de los espacios según las necesidades operativas del cliente.",
          },
          {
            title: "Instalación en sitio",
            description:
              "Entrega, colocación y preparación del espacio en el lugar del proyecto.",
          },
          {
            title: "Soporte durante la renta",
            description:
              "Atención a requerimientos relacionados con la unidad durante su utilización.",
          },
        ],
      },
      {
        slug: "maquinaria",
        eyebrow: "Equipamiento para operación y mantenimiento",
        title: "Renta de Maquinaria",
        shortDescription:
          "Plataformas de elevación, montacargas y equipos especializados.",
        description:
          "Ofrecemos equipos de elevación y manejo de materiales para trabajos de mantenimiento, construcción, montaje y operación industrial, de acuerdo con las necesidades de cada proyecto.",
        icon: Wrench,
        features: [
          {
            title: "Plataformas de elevación",
            description:
              "Equipos para trabajos seguros en altura dentro de instalaciones y proyectos.",
          },
          {
            title: "Montacargas",
            description:
              "Equipos para carga, descarga y movilización de materiales.",
          },
          {
            title: "Equipos especializados",
            description:
              "Maquinaria seleccionada de acuerdo con el alcance técnico del proyecto.",
          },
          {
            title: "Renta por proyecto",
            description:
              "Periodos de renta ajustados a la duración y programación de las actividades.",
          },
          {
            title: "Entrega en sitio",
            description:
              "Coordinación del traslado y entrega del equipo en el lugar de operación.",
          },
          {
            title: "Asesoría de selección",
            description:
              "Apoyo para identificar el equipo más adecuado según capacidad y condiciones de trabajo.",
          },
        ],
      },
      {
        slug: "suministros",
        eyebrow: "Materiales para proyectos industriales",
        title: "Suministros Industriales",
        shortDescription:
          "Materiales, luminarias, alineadores de tubería y recursos industriales.",
        description:
          "Suministramos materiales, componentes y herramientas requeridos para actividades de construcción, mantenimiento, montaje y operación industrial.",
        icon: Factory,
        features: [
          {
            title: "Materiales industriales",
            description:
              "Suministro de productos y consumibles para mantenimiento y ejecución de proyectos.",
          },
          {
            title: "Luminarias",
            description:
              "Soluciones de iluminación para instalaciones administrativas e industriales.",
          },
          {
            title: "Alineadores de tubería",
            description:
              "Herramientas para facilitar la alineación y preparación de uniones de tubería.",
          },
          {
            title: "Herramientas especializadas",
            description:
              "Equipos y herramientas seleccionados según los requerimientos del trabajo.",
          },
          {
            title: "Abastecimiento programado",
            description:
              "Entrega de materiales conforme al calendario y avance del proyecto.",
          },
          {
            title: "Atención a requerimientos",
            description:
              "Búsqueda y suministro de productos específicos solicitados por el cliente.",
          },
        ],
      },
    ],
  },
  {
    slug: "industriales",
    eyebrow: "Soluciones especializadas",
    title: "Servicios Industriales",
    shortDescription:
      "Mantenimiento, inspección, recubrimientos y soporte industrial.",
    description:
      "Ofrecemos servicios especializados para mejorar la seguridad, disponibilidad, integridad y eficiencia de instalaciones y procesos industriales.",
    image: "/src/assets/images/services/servicios-industriales.webp",
    icon: Factory,
    services: [
      {
        slug: "mantenimiento",
        eyebrow: "Continuidad operativa",
        title: "Mantenimiento Industrial",
        shortDescription:
          "Mantenimiento preventivo, correctivo, mecánico, eléctrico y de instrumentación.",
        description:
          "Desarrollamos programas de mantenimiento industrial orientados a reducir fallas, prolongar la vida útil de los equipos y conservar la continuidad de las operaciones.",
        icon: Wrench,
        features: [
          {
            title: "Mantenimiento preventivo",
            description:
              "Inspecciones y actividades programadas para anticipar fallas.",
          },
          {
            title: "Mantenimiento correctivo",
            description:
              "Atención y reparación de fallas en equipos e instalaciones.",
          },
          {
            title: "Mantenimiento mecánico",
            description:
              "Intervención en sistemas, componentes y equipos mecánicos.",
          },
          {
            title: "Mantenimiento eléctrico",
            description:
              "Revisión y mantenimiento de instalaciones y sistemas eléctricos.",
          },
          {
            title: "Instrumentación",
            description:
              "Atención de instrumentos, dispositivos de medición y sistemas de control.",
          },
          {
            title: "Limpieza industrial",
            description:
              "Limpieza especializada de áreas, equipos y componentes industriales.",
          },
        ],
      },
      {
        slug: "recubrimientos",
        eyebrow: "Protección contra corrosión y deterioro",
        title: "Protección y Recubrimientos",
        shortDescription:
          "Protección anticorrosiva, Sand Blast, pintura marina y recubrimientos industriales.",
        description:
          "Preparamos y protegemos superficies industriales mediante sistemas anticorrosivos, limpieza abrasiva y aplicación de recubrimientos seleccionados según las condiciones de exposición.",
        icon: PaintRoller,
        features: [
          {
            title: "Protección anticorrosiva",
            description:
              "Aplicación de sistemas diseñados para reducir el deterioro provocado por corrosión.",
          },
          {
            title: "Sand Blast",
            description:
              "Preparación abrasiva de superficies para remover óxido, pintura y contaminantes.",
          },
          {
            title: "Recubrimientos industriales",
            description:
              "Aplicación de recubrimientos para ambientes industriales y condiciones exigentes.",
          },
          {
            title: "Pintura industrial y marina",
            description:
              "Protección de estructuras y superficies expuestas a humedad y ambientes corrosivos.",
          },
          {
            title: "Impermeabilización industrial",
            description:
              "Sistemas para proteger superficies e instalaciones frente a filtraciones.",
          },
          {
            title: "Aislamiento térmico",
            description:
              "Soluciones para reducir transferencia térmica en tuberías, equipos y sistemas.",
          },
        ],
      },
      {
        slug: "inspeccion-integridad",
        eyebrow: "Evaluación de activos industriales",
        title: "Inspección e Integridad Mecánica",
        shortDescription:
          "Evaluación de soldaduras, tuberías, recipientes e infraestructura industrial.",
        description:
          "Realizamos actividades de inspección orientadas a identificar condiciones de deterioro, discontinuidades y riesgos que puedan afectar la seguridad y confiabilidad de los activos industriales.",
        icon: ShieldCheck,
        features: [
          {
            title: "Inspección de soldaduras",
            description:
              "Evaluación de uniones soldadas y verificación de condiciones superficiales.",
          },
          {
            title: "Inspección de tuberías",
            description:
              "Revisión de líneas, componentes, soportes y condiciones de operación.",
          },
          {
            title: "Recipientes a presión",
            description:
              "Evaluación de condiciones externas e internas de recipientes industriales.",
          },
          {
            title: "Integridad mecánica",
            description:
              "Revisión del estado de activos y componentes críticos para la operación.",
          },
          {
            title: "Supervisión de obra",
            description:
              "Seguimiento técnico de actividades de construcción, fabricación y montaje.",
          },
          {
            title: "Reportes de inspección",
            description:
              "Documentación de hallazgos, evidencia y recomendaciones técnicas.",
          },
        ],
      },
      {
        slug: "pruebas-no-destructivas",
        eyebrow: "Inspección industrial especializada",
        title: "Pruebas No Destructivas",
        shortDescription:
          "Inspecciones VT, PT, MT, UT, RT y corrientes Eddy.",
        description:
          "Realizamos pruebas no destructivas para evaluar la integridad de materiales, componentes, soldaduras, tuberías y equipos sin alterar su funcionamiento ni provocar daños en las piezas inspeccionadas.",
        icon: ShieldCheck,
        features: [
          {
            title: "Inspección visual — VT",
            description:
              "Evaluación directa de superficies, uniones, soldaduras y componentes.",
          },
          {
            title: "Líquidos penetrantes — PT",
            description:
              "Detección de discontinuidades abiertas a la superficie en materiales no porosos.",
          },
          {
            title: "Partículas magnéticas — MT",
            description:
              "Identificación de discontinuidades superficiales y subsuperficiales en materiales ferromagnéticos.",
          },
          {
            title: "Ultrasonido — UT",
            description:
              "Evaluación interna de materiales y medición de espesores mediante ondas ultrasónicas.",
          },
          {
            title: "Radiografía industrial — RT",
            description:
              "Inspección interna de soldaduras, piezas y componentes mediante radiación.",
          },
          {
            title: "Corrientes Eddy — ET",
            description:
              "Detección de discontinuidades y variaciones en materiales conductores.",
          },
        ],
      },
      {
        slug: "fabricacion-montaje",
        eyebrow: "Construcción y adecuación industrial",
        title: "Fabricación y Montaje",
        shortDescription:
          "Fabricación de tuberías, montaje y mantenimiento de estructuras metálicas.",
        description:
          "Ejecutamos trabajos de fabricación, reparación y montaje de componentes industriales, tuberías y estructuras metálicas de acuerdo con las necesidades técnicas de cada proyecto.",
        icon: Factory,
        features: [
          {
            title: "Fabricación de tuberías",
            description:
              "Preparación y fabricación de tramos, conexiones y componentes de tubería.",
          },
          {
            title: "Reparación de tuberías",
            description:
              "Corrección y sustitución de componentes deteriorados o dañados.",
          },
          {
            title: "Estructuras metálicas",
            description:
              "Fabricación y adecuación de estructuras para proyectos industriales.",
          },
          {
            title: "Montaje industrial",
            description:
              "Instalación y posicionamiento de estructuras, equipos y componentes.",
          },
          {
            title: "Mantenimiento estructural",
            description:
              "Inspección, reparación y conservación de estructuras metálicas.",
          },
          {
            title: "Trabajos de soldadura",
            description:
              "Ejecución de uniones y reparaciones requeridas durante fabricación y montaje.",
          },
        ],
      },
      {
        slug: "gestion-personal",
        eyebrow: "Administración y soporte para proyectos",
        title: "Gestión y Personal Especializado",
        shortDescription:
          "Administración de proyectos, supervisión y suministro de personal industrial.",
        description:
          "Brindamos soporte para la planeación, administración, supervisión y ejecución de proyectos industriales mediante personal especializado y recursos adaptados a cada operación.",
        icon: Building2,
        features: [
          {
            title: "Administración de proyectos",
            description:
              "Coordinación de recursos, actividades, avances y necesidades operativas.",
          },
          {
            title: "Supervisión industrial",
            description:
              "Seguimiento técnico y operativo de trabajos realizados en sitio.",
          },
          {
            title: "Personal especializado",
            description:
              "Suministro de técnicos y personal capacitado para diferentes especialidades.",
          },
          {
            title: "Control de actividades",
            description:
              "Seguimiento de tareas, tiempos y requerimientos del proyecto.",
          },
          {
            title: "Logística de proyecto",
            description:
              "Coordinación de recursos, materiales, equipos y necesidades de movilización.",
          },
          {
            title: "Soporte operativo",
            description:
              "Atención a necesidades adicionales durante la ejecución de los trabajos.",
          },
        ],
      },
    ],
  },
];