import type {
  ProductImage,
  ProductWithRelations,
} from "./product.types";

export type ProductCardData = Pick<
  ProductWithRelations,
  | "id"
  | "nombre"
  | "imagen"
  | "codigo"
  | "precio"
  | "marca"
  | "existencias"
  | "disponible"
  | "categoria_principal"
  | "subcategoria"
>;

export type ProductCardProps = {
  product: ProductCardData;
};

export type ProductsGridProps = {
  products: ProductCardData[];
  emptyTitle?: string;
  emptyDescription?: string;
};

export type ProductsPaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
};

export type ProductGalleryProps = {
  productName: string;
  images: ProductImage[];
};


export type ProductInformationProps = {
  product: ProductWithRelations;
};

export type ProductTechnicalDataProps = {
  product: ProductWithRelations;
};

export type ProductAvailabilityProps = {
  product: ProductWithRelations;
};