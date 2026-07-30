// import apiClient from "@/lib/apiClient";

// import type {
//   ProductDetailResponse,
//   ProductsQueryParams,
//   ProductsResponse,
// } from "@/types/products/product-api.types";

// export function buildProductsQueryParams(
//   params: ProductsQueryParams = {},
// ) {
//   const searchParams = new URLSearchParams();

//   Object.entries(params).forEach(([key, value]) => {
//     if (
//       value === undefined ||
//       value === null ||
//       value === ""
//     ) {
//       return;
//     }

//     searchParams.set(key, String(value));
//   });

//   return searchParams;
// }

// function normalizeProductId(productId: string) {
//   const normalizedProductId = productId.trim();

//   if (!normalizedProductId) {
//     throw new Error(
//       "El identificador del producto es obligatorio.",
//     );
//   }

//   return normalizedProductId;
// }

// export async function getProducts(
//   params: ProductsQueryParams = {},
// ): Promise<ProductsResponse> {
//   const response = await apiClient.get<ProductsResponse>(
//     "/products",
//     {
//       params: buildProductsQueryParams(params),
//     },
//   );

//   return response.data;
// }

// export async function getProductById(
//   productId: string,
// ): Promise<ProductDetailResponse> {
//   const normalizedProductId =
//     normalizeProductId(productId);

//   const response =
//     await apiClient.get<ProductDetailResponse>(
//       `/products/${encodeURIComponent(
//         normalizedProductId,
//       )}`,
//     );

//   return response.data;
// }



import {
  findMockProductById,
  productsMock,
} from "@/data/products/products.mock";

import type {
  ProductDetailResponse,
  ProductsQueryParams,
  ProductsResponse,
} from "@/types/products/product-api.types";

const MOCK_DELAY = 300;

function delay(duration: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

export function buildProductsQueryParams(
  params: ProductsQueryParams = {},
) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (
      value === undefined ||
      value === null ||
      value === ""
    ) {
      return;
    }

    searchParams.set(key, String(value));
  });

  return searchParams;
}

export async function getProducts(
  params: ProductsQueryParams = {},
): Promise<ProductsResponse> {
  await delay(MOCK_DELAY);

  const page = Math.max(1, params.page ?? 1);
  const limit = Math.max(1, params.limit ?? 12);
  const normalizedSearch = params.search
    ?.trim()
    .toLocaleLowerCase("es-MX");

  let filteredProducts = [...productsMock];

  if (normalizedSearch) {
    filteredProducts = filteredProducts.filter((product) => {
      const searchableContent = [
        product.nombre,
        product.codigo,
        product.marca,
        product.descripcion,
        product.linea,
        product.categoria_principal?.nombre,
        product.subcategoria?.nombre,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("es-MX");

      return searchableContent.includes(normalizedSearch);
    });
  }

  if (params.categoria_principal_id) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.categoria_principal_id ===
        params.categoria_principal_id,
    );
  }

  if (params.subcategoria_id) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.subcategoria_id === params.subcategoria_id,
    );
  }

  if (params.ubicacion_id) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.ubicacion_id === params.ubicacion_id,
    );
  }

  if (params.almacen_id) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.almacen_id === params.almacen_id,
    );
  }

  if (params.marca) {
    filteredProducts = filteredProducts.filter(
      (product) => product.marca === params.marca,
    );
  }

  if (params.linea) {
    filteredProducts = filteredProducts.filter(
      (product) => product.linea === params.linea,
    );
  }

  if (params.disponible !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.disponible === params.disponible,
    );
  }

  if (params.precio_min !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.precio !== null &&
        product.precio >= params.precio_min!,
    );
  }

  if (params.precio_max !== undefined) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.precio !== null &&
        product.precio <= params.precio_max!,
    );
  }

  const totalItems = filteredProducts.length;
  const totalPages =
    totalItems === 0 ? 0 : Math.ceil(totalItems / limit);

  const safePage =
    totalPages === 0 ? 1 : Math.min(page, totalPages);

  const startIndex = (safePage - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    products: filteredProducts.slice(
      startIndex,
      endIndex,
    ),
    pagination: {
      page: safePage,
      limit,
      total_items: totalItems,
      total_pages: totalPages,
      has_next_page: safePage < totalPages,
      has_previous_page: safePage > 1,
    },
  };
}

export async function getProductById(
  productId: string,
): Promise<ProductDetailResponse> {
  await delay(MOCK_DELAY);

  const normalizedProductId = productId.trim();

  if (!normalizedProductId) {
    throw new Error(
      "El identificador del producto es obligatorio.",
    );
  }

  const product = findMockProductById(normalizedProductId);

  if (!product) {
    throw new Error("Producto no encontrado.");
  }

  return {
    product,
  };
}