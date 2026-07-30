import {
  AlertCircle,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import ProductAvailability from "@/components/products/ProductAvailability";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInformation from "@/components/products/ProductInformation";
import ProductTechnicalData from "@/components/products/ProductTechnicalData";
import useProductDetail from "@/hooks/products/useProductDetail";
import NotFound from "@/pages/NotFound";

function ProductDetailPage() {
  const { productId } = useParams<{
    productId: string;
  }>();

  const {
    product,
    isLoading,
    isRefetching,
    error,
    refetch,
  } = useProductDetail({
    productId,
  });

  if (!productId) {
    return <NotFound />;
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div
            className={[
              "mx-auto flex min-h-[520px] max-w-7xl",
              "flex-col items-center justify-center",
              "rounded-2xl border border-slate-200 bg-white",
              "px-6 text-center",
            ].join(" ")}
          >
            <RefreshCw
              className="h-11 w-11 animate-spin text-orange-500"
              aria-hidden="true"
            />

            <h1 className="mt-5 text-xl font-semibold text-slate-950">
              Cargando producto
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Estamos preparando la ficha técnica.
            </p>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    const isNotFoundError =
      error.toLocaleLowerCase("es-MX").includes(
        "no encontrado",
      );

    if (isNotFoundError) {
      return <NotFound />;
    }

    return (
      <main className="min-h-screen bg-slate-50">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div
            role="alert"
            className={[
              "mx-auto flex min-h-[460px] max-w-3xl",
              "flex-col items-center justify-center",
              "rounded-2xl border border-rose-200 bg-rose-50",
              "px-6 py-12 text-center",
            ].join(" ")}
          >
            <AlertCircle
              className="h-12 w-12 text-rose-500"
              aria-hidden="true"
            />

            <h1 className="mt-5 text-2xl font-bold text-rose-950">
              No fue posible cargar el producto
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-rose-700">
              {error}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => void refetch()}
                disabled={isRefetching}
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "rounded-xl bg-rose-700 px-5 py-3",
                  "text-sm font-semibold text-white",
                  "transition-colors hover:bg-rose-800",
                  "focus:outline-none focus:ring-2",
                  "focus:ring-rose-300 focus:ring-offset-2",
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

              <Link
                to="/productos"
                className={[
                  "inline-flex items-center justify-center gap-2",
                  "rounded-xl border border-rose-300",
                  "bg-white px-5 py-3",
                  "text-sm font-semibold text-rose-800",
                  "transition-colors hover:bg-rose-100",
                  "focus:outline-none focus:ring-2",
                  "focus:ring-rose-300 focus:ring-offset-2",
                ].join(" ")}
              >
                <ArrowLeft
                  className="h-4 w-4"
                  aria-hidden="true"
                />

                Volver al catálogo
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!product) {
    return <NotFound />;
  }

  const productName =
    product.nombre?.trim() || "Producto sin nombre";

  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <nav aria-label="Ruta de navegación">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <li>
                <Link
                  to="/"
                  className="transition-colors hover:text-[#0b5cab]"
                >
                  Inicio
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  to="/productos"
                  className="transition-colors hover:text-[#0b5cab]"
                >
                  Productos
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li
                className="max-w-[240px] truncate font-medium text-slate-800 sm:max-w-md"
                aria-current="page"
              >
                {productName}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/productos"
            className={[
              "mb-8 inline-flex items-center gap-2",
              "text-sm font-semibold text-slate-600",
              "transition-colors hover:text-[#0b5cab]",
            ].join(" ")}
          >
            <ArrowLeft
              className="h-4 w-4"
              aria-hidden="true"
            />

            Volver al catálogo
          </Link>

          <div
            className={[
              "grid gap-10",
              "lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
              "lg:items-start lg:gap-14",
            ].join(" ")}
          >
            <ProductGallery
              productName={productName}
              images={product.imagenes}
            />

            <div className="space-y-8">
              <ProductInformation product={product} />

              <ProductAvailability product={product} />
            </div>
          </div>

          <div className="mt-12 lg:mt-16">
            <ProductTechnicalData product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;