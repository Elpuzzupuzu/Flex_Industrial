import {
  AlertCircle,
  PackageSearch,
  RefreshCw,
  Search,
} from "lucide-react";
import {
  type FormEvent,
  useEffect,
  useState,
} from "react";

import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsPagination from "@/components/products/ProductsPagination";
import useProducts from "@/hooks/products/useProducts";

function ProductsPage() {
  const {
    products,
    pagination,
    queryParams,
    isLoading,
    isRefetching,
    error,
    setPage,
    setSearch,
    refetch,
  } = useProducts({
    initialParams: {
      page: 1,
      limit: 12,
      sort_by: "nombre",
      sort_order: "asc",
    },
  });

  const [searchValue, setSearchValue] = useState(
    queryParams.search ?? "",
  );

  useEffect(() => {
    setSearchValue(queryParams.search ?? "");
  }, [queryParams.search]);

  const handleSearchSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setSearch(searchValue);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setSearch("");
  };

  const handlePageChange = (page: number) => {
    setPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-slate-50">
      {/* Encabezado compacto: reemplaza al hero grande */}
      <section className="border-b border-slate-200 bg-white">
        <div
          className={[
            "mx-auto max-w-7xl px-4 py-6",
            "sm:px-6 sm:py-7",
            "lg:px-8",
          ].join(" ")}
        >
          <div
            className={[
              "flex flex-col gap-5",
              "lg:flex-row lg:items-center lg:justify-between lg:gap-8",
            ].join(" ")}
          >
            {/* <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Suministros industriales
              </p>

              <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Catálogo de productos
              </h1>

              <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Herramientas y suministros para operaciones, mantenimiento y
                proyectos industriales.
              </p>
            </div> */}

            <form
              onSubmit={handleSearchSubmit}
              role="search"
              className="w-full shrink-0 lg:w-[380px]"
            >
              <label htmlFor="products-search" className="sr-only">
                Buscar productos
              </label>

              <div
                className={[
                  "flex items-center overflow-hidden rounded-xl",
                  "border border-slate-200 bg-white",
                  "shadow-sm transition",
                  "focus-within:border-[#0b5cab]",
                  "focus-within:ring-2 focus-within:ring-[#0b5cab]/10",
                ].join(" ")}
              >
                <Search
                  className="ml-4 h-5 w-5 shrink-0 text-slate-400"
                  aria-hidden="true"
                />

                <input
                  id="products-search"
                  type="search"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Buscar por nombre, código o marca"
                  className={[
                    "min-w-0 flex-1 bg-transparent px-3 py-3",
                    "text-sm text-slate-900 outline-none",
                    "placeholder:text-slate-400",
                  ].join(" ")}
                />

                {searchValue && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className={[
                      "px-3 py-2 text-xs font-semibold",
                      "text-slate-500 transition-colors",
                      "hover:text-slate-900",
                    ].join(" ")}
                  >
                    Limpiar
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isLoading || isRefetching}
                  className={[
                    "m-1.5 rounded-lg bg-[#0b5cab]",
                    "px-4 py-2.5 text-sm font-semibold text-white",
                    "transition-colors hover:bg-[#094d91]",
                    "focus:outline-none focus:ring-2",
                    "focus:ring-[#0b5cab]/30",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                  ].join(" ")}
                >
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Barra de estado: resultados + búsqueda activa, en una sola fila */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-600" aria-live="polite">
              <strong className="font-semibold text-slate-900">
                {pagination.total_items}
              </strong>{" "}
              {pagination.total_items === 1
                ? "producto encontrado"
                : "productos encontrados"}
              {queryParams.search && (
                <>
                  {" "}
                  para <strong className="text-slate-900">“{queryParams.search}”</strong>
                </>
              )}
            </p>

            <div className="flex items-center gap-4">
              {isRefetching && (
                <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <RefreshCw className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Actualizando
                </span>
              )}

              {queryParams.search && !isLoading && !error && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="text-sm font-semibold text-[#0b5cab] hover:underline"
                >
                  Ver todos los productos
                </button>
              )}
            </div>
          </div>

          {isLoading ? (
            <div
              className={[
                "flex min-h-[420px] flex-col items-center justify-center",
                "rounded-2xl border border-slate-200 bg-white",
                "px-6 text-center",
              ].join(" ")}
            >
              <RefreshCw
                className="h-10 w-10 animate-spin text-orange-500"
                aria-hidden="true"
              />

              <p className="mt-4 font-semibold text-slate-900">
                Cargando productos
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Estamos preparando el catálogo.
              </p>
            </div>
          ) : error ? (
            <div
              role="alert"
              className={[
                "flex min-h-[360px] flex-col items-center justify-center",
                "rounded-2xl border border-rose-200 bg-rose-50",
                "px-6 py-12 text-center",
              ].join(" ")}
            >
              <AlertCircle
                className="h-12 w-12 text-rose-500"
                aria-hidden="true"
              />

              <h2 className="mt-5 text-xl font-semibold text-rose-950">
                No fue posible cargar los productos
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-rose-700">
                {error}
              </p>

              <button
                type="button"
                onClick={() => void refetch()}
                disabled={isRefetching}
                className={[
                  "mt-6 inline-flex items-center gap-2 rounded-xl",
                  "bg-rose-700 px-5 py-3",
                  "text-sm font-semibold text-white",
                  "transition-colors hover:bg-rose-800",
                  "disabled:cursor-not-allowed disabled:opacity-60",
                ].join(" ")}
              >
                <RefreshCw
                  className={[
                    "h-4 w-4",
                    isRefetching ? "animate-spin" : "",
                  ].join(" ")}
                  aria-hidden="true"
                />

                Reintentar
              </button>
            </div>
          ) : (
            <>
              <div
                className={
                  isRefetching ? "pointer-events-none opacity-60" : ""
                }
                aria-busy={isRefetching}
              >
                <ProductsGrid
                  products={products}
                  emptyTitle={
                    queryParams.search
                      ? "No encontramos coincidencias"
                      : "No hay productos disponibles"
                  }
                  emptyDescription={
                    queryParams.search
                      ? "Prueba con otro nombre, código, marca o categoría."
                      : "El catálogo todavía no contiene productos para mostrar."
                  }
                />
              </div>

              <div className="mt-10">
                <ProductsPagination
                  currentPage={pagination.page}
                  totalPages={pagination.total_pages}
                  totalItems={pagination.total_items}
                  pageSize={pagination.limit}
                  onPageChange={handlePageChange}
                  disabled={isRefetching}
                />
              </div>
            </>
          )}

          {!isLoading &&
            !error &&
            products.length === 0 &&
            !queryParams.search && (
              <div className="sr-only">
                <PackageSearch aria-hidden="true" />
              </div>
            )}
        </div>
      </section>
    </main>
  );
}

export default ProductsPage;