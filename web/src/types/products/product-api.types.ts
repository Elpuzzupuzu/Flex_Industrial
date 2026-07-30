import type {
  ProductDetail,
  ProductWithRelations,
} from "./product.types";

export type ProductsPagination = {
  page: number;
  limit: number;
  total_items: number;
  total_pages: number;
  has_next_page: boolean;
  has_previous_page: boolean;
};

export type ProductsResponse = {
  products: ProductWithRelations[];
  pagination: ProductsPagination;
};

export type ProductDetailResponse = {
  product: ProductDetail;
};

export type ProductsSortField =
  | "nombre"
  | "precio"
  | "existencias"
  | "ventas_anuales"
  | "created_at"
  | "fecha_ultima_venta";

export type ProductsSortOrder = "asc" | "desc";

export type ProductsQueryParams = {
  page?: number;
  limit?: number;
  search?: string;

  categoria_principal_id?: string;
  subcategoria_id?: string;
  ubicacion_id?: string;
  almacen_id?: string;

  marca?: string;
  linea?: string;
  disponible?: boolean;

  precio_min?: number;
  precio_max?: number;

  sort_by?: ProductsSortField;
  sort_order?: ProductsSortOrder;
};

export type ProductDetailParams = {
  productId: string;
};