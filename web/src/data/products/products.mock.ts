import type {
  ProductDetail,
  ProductImage,
  ProductWithRelations,
} from "@/types/products/product.types";

const createdAt = "2026-07-30T12:00:00.000Z";

import luminariaIndustrialLedImage from "@/assets/images/products/luminaria-industrial-led.jpg";
import alineadortuberia from "@/assets/images/products/Alineador exterior para tubería.jpg";
import lampara_inspeccion_portatil from "@/assets/images/products/Lámpara portátil de inspección.jpg";
import juedo_herramientas from "@/assets/images/products/Juego de herramientas industriales.jpg";

import reflecto_industrial from "@/assets/images/products/Reflector LED industrial 200 W.jpg";
import alineador_industrial from "@/assets/images/products/Alineador interno neumático.jpg";




const mainCategories = {
  suministros: {
    id: "10000000-0000-4000-8000-000000000001",
    nombre: "Suministros industriales",
    created_at: createdAt,
  },
  iluminacion: {
    id: "10000000-0000-4000-8000-000000000002",
    nombre: "Iluminación",
    created_at: createdAt,
  },
  herramientas: {
    id: "10000000-0000-4000-8000-000000000003",
    nombre: "Herramientas industriales",
    created_at: createdAt,
  },
};

const subcategories = {
  luminarias: {
    id: "20000000-0000-4000-8000-000000000001",
    nombre: "Luminarias",
    categoria_principal_id: mainCategories.iluminacion.id,
    created_at: createdAt,
  },
  alineadores: {
    id: "20000000-0000-4000-8000-000000000002",
    nombre: "Alineadores de tubería",
    categoria_principal_id: mainCategories.suministros.id,
    created_at: createdAt,
  },
  herramientasManuales: {
    id: "20000000-0000-4000-8000-000000000003",
    nombre: "Herramientas manuales",
    categoria_principal_id: mainCategories.herramientas.id,
    created_at: createdAt,
  },
};

const warehouses = {
  principal: {
    id: "30000000-0000-4000-8000-000000000001",
    nombre: "Almacén principal",
    created_at: createdAt,
  },
  suministros: {
    id: "30000000-0000-4000-8000-000000000002",
    nombre: "Almacén de suministros",
    created_at: createdAt,
  },
};

const locations = {
  merida: {
    id: "40000000-0000-4000-8000-000000000001",
    nombre: "Mérida",
    direccion: "Mérida, Yucatán, México",
    created_at: createdAt,
  },
  campeche: {
    id: "40000000-0000-4000-8000-000000000002",
    nombre: "Campeche",
    direccion: "San Francisco de Campeche, Campeche, México",
    created_at: createdAt,
  },
};

export const productsMock: ProductWithRelations[] = [
  {
    id: "50000000-0000-4000-8000-000000000001",
    nombre: "Luminaria industrial LED 150 W",
    imagen:  luminariaIndustrialLedImage,

    categoria_principal_id: mainCategories.iluminacion.id,
    subcategoria_id: subcategories.luminarias.id,
    ubicacion_id: locations.merida.id,
    almacen_id: warehouses.principal.id,

    codigo: "LUM-LED-150",
    descripcion:
      "Luminaria LED de alto rendimiento para naves industriales, almacenes y áreas de producción. Diseñada para ofrecer iluminación uniforme y reducir el consumo energético.",
    precio: 2450,
    marca: "Flex Lighting",
    existencias: 18,
    disponible: true,
    ventas_anuales: 48,

    sat_clave_prodserv: "39101600",
    sat_clave_unit: "H87",
    sat_unidad_nombre: "Pieza",
    sat_tasa_iva: 0.16,

    linea: "Iluminación industrial",
    control_de_almacen: "Pieza",

    fecha_ultima_venta: "2026-07-15",
    fecha_de_costeo: "2026-07-01",
    created_at: createdAt,

    categoria_principal: mainCategories.iluminacion,
    subcategoria: subcategories.luminarias,
    ubicacion: locations.merida,
    almacen: warehouses.principal,
  },
  {
    id: "50000000-0000-4000-8000-000000000002",
    nombre: "Alineador exterior para tubería",
    imagen: alineadortuberia,

    categoria_principal_id: mainCategories.suministros.id,
    subcategoria_id: subcategories.alineadores.id,
    ubicacion_id: locations.merida.id,
    almacen_id: warehouses.suministros.id,

    codigo: "ALI-EXT-006",
    descripcion:
      "Equipo para la alineación exterior de tuberías durante procesos de montaje, soldadura y mantenimiento industrial.",
    precio: null,
    marca: "Flex Industrial",
    existencias: 6,
    disponible: true,
    ventas_anuales: 17,

    sat_clave_prodserv: "23153000",
    sat_clave_unit: "H87",
    sat_unidad_nombre: "Pieza",
    sat_tasa_iva: 0.16,

    linea: "Alineación de tubería",
    control_de_almacen: "Número de serie",

    fecha_ultima_venta: "2026-06-28",
    fecha_de_costeo: "2026-06-10",
    created_at: createdAt,

    categoria_principal: mainCategories.suministros,
    subcategoria: subcategories.alineadores,
    ubicacion: locations.merida,
    almacen: warehouses.suministros,
  },
  {
    id: "50000000-0000-4000-8000-000000000003",
    nombre: "Lámpara portátil de inspección",
    imagen: lampara_inspeccion_portatil,

    categoria_principal_id: mainCategories.iluminacion.id,
    subcategoria_id: subcategories.luminarias.id,
    ubicacion_id: locations.campeche.id,
    almacen_id: warehouses.principal.id,

    codigo: "LAM-INS-024",
    descripcion:
      "Lámpara portátil para inspecciones en espacios de trabajo, mantenimiento de equipos y actividades de supervisión industrial.",
    precio: 890,
    marca: "ProLight",
    existencias: 0,
    disponible: false,
    ventas_anuales: 31,

    sat_clave_prodserv: "39112000",
    sat_clave_unit: "H87",
    sat_unidad_nombre: "Pieza",
    sat_tasa_iva: 0.16,

    linea: "Iluminación portátil",
    control_de_almacen: "Pieza",

    fecha_ultima_venta: "2026-07-04",
    fecha_de_costeo: "2026-06-20",
    created_at: createdAt,

    categoria_principal: mainCategories.iluminacion,
    subcategoria: subcategories.luminarias,
    ubicacion: locations.campeche,
    almacen: warehouses.principal,
  },
  {
    id: "50000000-0000-4000-8000-000000000004",
    nombre: "Juego de herramientas industriales",
    imagen: juedo_herramientas,

    categoria_principal_id: mainCategories.herramientas.id,
    subcategoria_id: subcategories.herramientasManuales.id,
    ubicacion_id: locations.merida.id,
    almacen_id: warehouses.principal.id,

    codigo: "HER-KIT-120",
    descripcion:
      "Juego de herramientas para trabajos de mantenimiento preventivo y correctivo en instalaciones industriales.",
    precio: 3180,
    marca: "Industrial Pro",
    existencias: 11,
    disponible: true,
    ventas_anuales: 24,

    sat_clave_prodserv: "27111700",
    sat_clave_unit: "XKI",
    sat_unidad_nombre: "Kit",
    sat_tasa_iva: 0.16,

    linea: "Herramientas de mantenimiento",
    control_de_almacen: "Kit",

    fecha_ultima_venta: "2026-07-20",
    fecha_de_costeo: "2026-07-08",
    created_at: createdAt,

    categoria_principal: mainCategories.herramientas,
    subcategoria: subcategories.herramientasManuales,
    ubicacion: locations.merida,
    almacen: warehouses.principal,
  },
  {
    id: "50000000-0000-4000-8000-000000000005",
    nombre: "Reflector LED industrial 200 W",
    imagen: reflecto_industrial,

    categoria_principal_id: mainCategories.iluminacion.id,
    subcategoria_id: subcategories.luminarias.id,
    ubicacion_id: locations.merida.id,
    almacen_id: warehouses.principal.id,

    codigo: "REF-LED-200",
    descripcion:
      "Reflector LED para patios industriales, zonas de carga, estacionamientos y áreas exteriores de operación.",
    precio: 2890,
    marca: "Flex Lighting",
    existencias: 9,
    disponible: true,
    ventas_anuales: 36,

    sat_clave_prodserv: "39111600",
    sat_clave_unit: "H87",
    sat_unidad_nombre: "Pieza",
    sat_tasa_iva: 0.16,

    linea: "Iluminación exterior",
    control_de_almacen: "Pieza",

    fecha_ultima_venta: "2026-07-23",
    fecha_de_costeo: "2026-07-10",
    created_at: createdAt,

    categoria_principal: mainCategories.iluminacion,
    subcategoria: subcategories.luminarias,
    ubicacion: locations.merida,
    almacen: warehouses.principal,
  },
  {
    id: "50000000-0000-4000-8000-000000000006",
    nombre: "Alineador interno neumático",
    imagen: alineador_industrial,

    categoria_principal_id: mainCategories.suministros.id,
    subcategoria_id: subcategories.alineadores.id,
    ubicacion_id: locations.campeche.id,
    almacen_id: warehouses.suministros.id,

    codigo: "ALI-INT-012",
    descripcion:
      "Sistema de alineación interna para tuberías utilizado en procesos industriales de instalación y soldadura.",
    precio: null,
    marca: "PipeTech",
    existencias: null,
    disponible: true,
    ventas_anuales: 8,

    sat_clave_prodserv: "23153000",
    sat_clave_unit: "H87",
    sat_unidad_nombre: "Pieza",
    sat_tasa_iva: 0.16,

    linea: "Alineación neumática",
    control_de_almacen: "Número de serie",

    fecha_ultima_venta: "2026-05-19",
    fecha_de_costeo: "2026-05-02",
    created_at: createdAt,

    categoria_principal: mainCategories.suministros,
    subcategoria: subcategories.alineadores,
    ubicacion: locations.campeche,
    almacen: warehouses.suministros,
  },
  {
    id: "50000000-0000-4000-8000-000000000007",
    nombre: "Luminaria hermética industrial",
    imagen: "/images/products/luminaria-hermetica.webp",

    categoria_principal_id: mainCategories.iluminacion.id,
    subcategoria_id: subcategories.luminarias.id,
    ubicacion_id: locations.merida.id,
    almacen_id: warehouses.principal.id,

    codigo: "LUM-HER-060",
    descripcion:
      "Luminaria hermética resistente al polvo y la humedad para talleres, almacenes y áreas de mantenimiento.",
    precio: 1320,
    marca: "ProLight",
    existencias: 27,
    disponible: true,
    ventas_anuales: 59,

    sat_clave_prodserv: "39101600",
    sat_clave_unit: "H87",
    sat_unidad_nombre: "Pieza",
    sat_tasa_iva: 0.16,

    linea: "Iluminación hermética",
    control_de_almacen: "Pieza",

    fecha_ultima_venta: "2026-07-27",
    fecha_de_costeo: "2026-07-12",
    created_at: createdAt,

    categoria_principal: mainCategories.iluminacion,
    subcategoria: subcategories.luminarias,
    ubicacion: locations.merida,
    almacen: warehouses.principal,
  },
  {
    id: "50000000-0000-4000-8000-000000000008",
    nombre: "Llave ajustable industrial de 18 pulgadas",
    imagen: "/images/products/llave-ajustable.webp",

    categoria_principal_id: mainCategories.herramientas.id,
    subcategoria_id: subcategories.herramientasManuales.id,
    ubicacion_id: locations.merida.id,
    almacen_id: warehouses.principal.id,

    codigo: "HER-LLA-018",
    descripcion:
      "Llave ajustable reforzada para mantenimiento de instalaciones, equipos y sistemas de tubería.",
    precio: 740,
    marca: "Industrial Pro",
    existencias: 15,
    disponible: true,
    ventas_anuales: 44,

    sat_clave_prodserv: "27111707",
    sat_clave_unit: "H87",
    sat_unidad_nombre: "Pieza",
    sat_tasa_iva: 0.16,

    linea: "Herramientas manuales",
    control_de_almacen: "Pieza",

    fecha_ultima_venta: "2026-07-25",
    fecha_de_costeo: "2026-07-06",
    created_at: createdAt,

    categoria_principal: mainCategories.herramientas,
    subcategoria: subcategories.herramientasManuales,
    ubicacion: locations.merida,
    almacen: warehouses.principal,
  },
];

function createProductImages(
  product: ProductWithRelations,
): ProductImage[] {
  if (!product.imagen) {
    return [];
  }

  return [
    {
      id: `${product.id}-image-1`,
      producto_id: product.id,
      imagen_url: product.imagen,
      texto_alternativo: product.nombre,
      posicion: 0,
      es_principal: true,
      created_at: product.created_at,
    },
  ];
}

export const productDetailsMock: ProductDetail[] =
  productsMock.map((product) => ({
    ...product,
    imagenes: createProductImages(product),
  }));

export function findMockProductById(
  productId: string,
): ProductDetail | null {
  return (
    productDetailsMock.find(
      (product) => product.id === productId,
    ) ?? null
  );
}