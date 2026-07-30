import { useCallback, useEffect, useMemo, useState } from "react";

import { getProducts } from "@/services/products/products.service";

import type {
  ProductsPagination,
  ProductsQueryParams,
} from "@/types/products/product-api.types";
import type { ProductWithRelations } from "@/types/products/product.types";

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 12;

const INITIAL_PAGINATION: ProductsPagination = {
  page: DEFAULT_PAGE,
  limit: DEFAULT_PAGE_SIZE,
  total_items: 0,
  total_pages: 0,
  has_next_page: false,
  has_previous_page: false,
};

type UseProductsOptions = {
  initialParams?: ProductsQueryParams;
  enabled?: boolean;
};

type UseProductsResult = {
  products: ProductWithRelations[];
  pagination: ProductsPagination;
  queryParams: ProductsQueryParams;

  isLoading: boolean;
  isRefetching: boolean;
  error: string | null;

  setPage: (page: number) => void;
  setPageSize: (limit: number) => void;
  setSearch: (search: string) => void;
  updateFilters: (
    filters: Partial<ProductsQueryParams>,
  ) => void;
  resetFilters: () => void;
  refetch: () => Promise<void>;
};

function normalizeInitialParams(
  initialParams: ProductsQueryParams = {},
): ProductsQueryParams {
  return {
    page: initialParams.page ?? DEFAULT_PAGE,
    limit: initialParams.limit ?? DEFAULT_PAGE_SIZE,
    search: initialParams.search,

    categoria_principal_id:
      initialParams.categoria_principal_id,
    subcategoria_id: initialParams.subcategoria_id,
    ubicacion_id: initialParams.ubicacion_id,
    almacen_id: initialParams.almacen_id,

    marca: initialParams.marca,
    linea: initialParams.linea,
    disponible: initialParams.disponible,

    precio_min: initialParams.precio_min,
    precio_max: initialParams.precio_max,

    sort_by: initialParams.sort_by,
    sort_order: initialParams.sort_order,
  };
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "No fue posible cargar los productos.";
}

function useProducts({
  initialParams = {},
  enabled = true,
}: UseProductsOptions = {}): UseProductsResult {
  const normalizedInitialParams = useMemo(
    () => normalizeInitialParams(initialParams),
    [initialParams],
  );

  const [products, setProducts] = useState<
    ProductWithRelations[]
  >([]);

  const [pagination, setPagination] =
    useState<ProductsPagination>({
      ...INITIAL_PAGINATION,
      page:
        normalizedInitialParams.page ??
        INITIAL_PAGINATION.page,
      limit:
        normalizedInitialParams.limit ??
        INITIAL_PAGINATION.limit,
    });

  const [queryParams, setQueryParams] =
    useState<ProductsQueryParams>(
      normalizedInitialParams,
    );

  const [isLoading, setIsLoading] = useState(enabled);
  const [isRefetching, setIsRefetching] =
    useState(false);
  const [error, setError] = useState<string | null>(
    null,
  );

  const fetchProducts = useCallback(
    async (showInitialLoading = false) => {
      if (!enabled) {
        return;
      }

      if (showInitialLoading) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      setError(null);

      try {
        const response = await getProducts(queryParams);

        setProducts(response.products);
        setPagination(response.pagination);
      } catch (requestError) {
        setError(getErrorMessage(requestError));
      } finally {
        setIsLoading(false);
        setIsRefetching(false);
      }
    },
    [enabled, queryParams],
  );

  useEffect(() => {
    void fetchProducts(true);
  }, [fetchProducts]);

  const setPage = useCallback((page: number) => {
    if (!Number.isInteger(page) || page < 1) {
      return;
    }

    setQueryParams((currentParams) => ({
      ...currentParams,
      page,
    }));
  }, []);

  const setPageSize = useCallback((limit: number) => {
    if (!Number.isInteger(limit) || limit < 1) {
      return;
    }

    setQueryParams((currentParams) => ({
      ...currentParams,
      page: DEFAULT_PAGE,
      limit,
    }));
  }, []);

  const setSearch = useCallback((search: string) => {
    const normalizedSearch = search.trim();

    setQueryParams((currentParams) => ({
      ...currentParams,
      page: DEFAULT_PAGE,
      search: normalizedSearch || undefined,
    }));
  }, []);

  const updateFilters = useCallback(
    (filters: Partial<ProductsQueryParams>) => {
      setQueryParams((currentParams) => ({
        ...currentParams,
        ...filters,
        page: DEFAULT_PAGE,
      }));
    },
    [],
  );

  const resetFilters = useCallback(() => {
    setQueryParams({
      ...normalizedInitialParams,
      page: DEFAULT_PAGE,
    });
  }, [normalizedInitialParams]);

  const refetch = useCallback(async () => {
    await fetchProducts(false);
  }, [fetchProducts]);

  return {
    products,
    pagination,
    queryParams,

    isLoading,
    isRefetching,
    error,

    setPage,
    setPageSize,
    setSearch,
    updateFilters,
    resetFilters,
    refetch,
  };
}

export default useProducts;