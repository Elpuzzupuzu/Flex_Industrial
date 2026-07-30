import { useCallback, useEffect, useState } from "react";

import { getProductById } from "@/services/products/products.service";

import type { ProductDetail } from "@/types/products/product.types";

type UseProductDetailOptions = {
  productId?: string;
  enabled?: boolean;
};

type UseProductDetailResult = {
  product: ProductDetail | null;
  isLoading: boolean;
  isRefetching: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  return "No fue posible cargar la información del producto.";
}

function useProductDetail({
  productId,
  enabled = true,
}: UseProductDetailOptions): UseProductDetailResult {
  const [product, setProduct] =
    useState<ProductDetail | null>(null);

  const [isLoading, setIsLoading] = useState(
    enabled && Boolean(productId?.trim()),
  );

  const [isRefetching, setIsRefetching] =
    useState(false);

  const [error, setError] = useState<string | null>(
    null,
  );

  const fetchProduct = useCallback(
    async (showInitialLoading = false) => {
      const normalizedProductId = productId?.trim();

      if (!enabled || !normalizedProductId) {
        setProduct(null);
        setError(null);
        setIsLoading(false);
        setIsRefetching(false);

        return;
      }

      if (showInitialLoading) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      setError(null);

      try {
        const response = await getProductById(
          normalizedProductId,
        );

        setProduct(response.product);
      } catch (requestError) {
        setProduct(null);
        setError(getErrorMessage(requestError));
      } finally {
        setIsLoading(false);
        setIsRefetching(false);
      }
    },
    [enabled, productId],
  );

  useEffect(() => {
    void fetchProduct(true);
  }, [fetchProduct]);

  const refetch = useCallback(async () => {
    await fetchProduct(false);
  }, [fetchProduct]);

  return {
    product,
    isLoading,
    isRefetching,
    error,
    refetch,
  };
}

export default useProductDetail;