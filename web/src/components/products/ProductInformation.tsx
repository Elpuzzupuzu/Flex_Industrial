import {
  BadgeCheck,
  Boxes,
  Factory,
  Hash,
  Layers3,
} from "lucide-react";

import type { ProductInformationProps } from "@/types/products/product-component.types";

function formatPrice(price: number | null) {
  if (price === null) {
    return null;
  }

  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
  }).format(price);
}

function ProductInformation({
  product,
}: ProductInformationProps) {
  const productName =
    product.nombre?.trim() || "Producto sin nombre";

  const formattedPrice = formatPrice(product.precio);

  return (
    <section
      aria-labelledby="product-information-title"
      className="space-y-6"
    >
      <div>
        <div className="flex flex-wrap items-center gap-2">
          {product.categoria_principal?.nombre && (
            <span
              className={[
                "inline-flex items-center gap-1.5 rounded-full",
                "bg-orange-50 px-3 py-1.5",
                "text-xs font-semibold text-orange-700",
              ].join(" ")}
            >
              <Boxes
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />

              {product.categoria_principal.nombre}
            </span>
          )}

          {product.subcategoria?.nombre && (
            <span
              className={[
                "inline-flex items-center gap-1.5 rounded-full",
                "bg-slate-100 px-3 py-1.5",
                "text-xs font-semibold text-slate-700",
              ].join(" ")}
            >
              <Layers3
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />

              {product.subcategoria.nombre}
            </span>
          )}

          {product.linea && (
            <span
              className={[
                "inline-flex items-center rounded-full",
                "border border-slate-200 bg-white px-3 py-1.5",
                "text-xs font-medium text-slate-600",
              ].join(" ")}
            >
              {product.linea}
            </span>
          )}
        </div>

        <h1
          id="product-information-title"
          className={[
            "mt-5 text-3xl font-bold tracking-tight text-slate-950",
            "sm:text-4xl lg:text-[42px] lg:leading-tight",
          ].join(" ")}
        >
          {productName}
        </h1>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
          {product.codigo && (
            <div className="flex items-center gap-2">
              <Hash
                className="h-4 w-4 text-slate-400"
                aria-hidden="true"
              />

              <span>
                Código:{" "}
                <strong className="font-semibold text-slate-800">
                  {product.codigo}
                </strong>
              </span>
            </div>
          )}

          {product.marca && (
            <div className="flex items-center gap-2">
              <Factory
                className="h-4 w-4 text-slate-400"
                aria-hidden="true"
              />

              <span>
                Marca:{" "}
                <strong className="font-semibold text-slate-800">
                  {product.marca}
                </strong>
              </span>
            </div>
          )}
        </div>
      </div>

      <div
        className={[
          "rounded-2xl border border-slate-200",
          "bg-slate-50 p-5 sm:p-6",
        ].join(" ")}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Precio
        </p>

        {formattedPrice ? (
          <div className="mt-2">
            <p className="text-3xl font-bold text-slate-950">
              {formattedPrice}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Precio antes de impuestos, sujeto a disponibilidad.
            </p>
          </div>
        ) : (
          <div className="mt-2 flex items-start gap-3">
            <BadgeCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-[#0b5cab]"
              aria-hidden="true"
            />

            <div>
              <p className="text-lg font-semibold text-slate-900">
                Precio bajo cotización
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Solicita información comercial para conocer precio,
                disponibilidad y condiciones de suministro.
              </p>
            </div>
          </div>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          Descripción
        </h2>

        {product.descripcion?.trim() ? (
          <p className="mt-3 whitespace-pre-line text-base leading-7 text-slate-600">
            {product.descripcion}
          </p>
        ) : (
          <p className="mt-3 text-base leading-7 text-slate-500">
            Este producto aún no cuenta con una descripción
            detallada.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductInformation;