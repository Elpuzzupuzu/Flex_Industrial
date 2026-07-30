export type MainCategory = {
  id: string;
  nombre: string;
  created_at: string;
};

export type Subcategory = {
  id: string;
  nombre: string;
  categoria_principal_id: string;
  created_at: string;
};

export type Warehouse = {
  id: string;
  nombre: string;
  created_at: string;
};

export type Location = {
  id: string;
  nombre: string;
  direccion: string;
  created_at: string;
};

export type Product = {
  id: string;
  nombre: string | null;
  imagen: string | null;

  categoria_principal_id: string | null;
  subcategoria_id: string | null;
  ubicacion_id: string | null;
  almacen_id: string | null;

  codigo: string | null;
  descripcion: string | null;
  precio: number | null;
  marca: string | null;
  existencias: number | null;
  disponible: boolean | null;
  ventas_anuales: number | null;

  sat_clave_prodserv: string | null;
  sat_clave_unit: string | null;
  sat_unidad_nombre: string | null;
  sat_tasa_iva: number | null;

  linea: string | null;
  control_de_almacen: string | null;

  fecha_ultima_venta: string | null;
  fecha_de_costeo: string | null;
  created_at: string;
};

export type ProductWithRelations = Product & {
  categoria_principal: MainCategory | null;
  subcategoria: Subcategory | null;
  ubicacion: Location | null;
  almacen: Warehouse | null;
};

export type ProductImage = {
  id: string;
  producto_id: string;
  imagen_url: string;
  texto_alternativo: string | null;
  posicion: number;
  es_principal: boolean;
  created_at: string;
};

export type ProductDetail = ProductWithRelations & {
  imagenes: ProductImage[];
};