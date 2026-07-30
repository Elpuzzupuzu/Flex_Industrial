import { PackageSearch } from "lucide-react";

import ProductCard from "@/components/products/ProductCard";

import type { ProductsGridProps } from "@/types/products/product-component.types";

function ProductsGrid({
  products,
  emptyTitle = "No se encontraron productos",
  emptyDescription = "No hay productos disponibles con los filtros seleccionados.",
}: ProductsGridProps) {
  if (products.length === 0) {
    return (
      <div
        className={[
          "flex min-h-[360px] flex-col items-center justify-center",
          "rounded-2xl border border-dashed border-slate-300",
          "bg-slate-50 px-6 py-12 text-center",
        ].join(" ")}
      >
        <div
          className={[
            "flex h-16 w-16 items-center justify-center",
            "rounded-full bg-orange-100 text-orange-600",
          ].join(" ")}
        >
          <PackageSearch
            className="h-8 w-8"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-5 text-xl font-semibold text-slate-900">
          {emptyTitle}
        </h2>

        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 sm:text-base">
          {emptyDescription}
        </p>
      </div>
    );
  }

  return (
    <div
      className={[
        "grid items-stretch gap-4",
        "grid-cols-2",
        "sm:grid-cols-3",
        "lg:grid-cols-4",
        "xl:grid-cols-5",
        "2xl:grid-cols-6",
      ].join(" ")}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;