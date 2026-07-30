import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  PackageX,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { ProductCardProps } from "@/types/products/product-component.types";

const FALLBACK_PRODUCT_IMAGE =
  "/images/products/product-placeholder.webp";

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

function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    nombre,
    imagen,
    codigo,
    precio,
    marca,
    existencias,
    disponible,
    categoria_principal,
    subcategoria,
  } = product;

  const productName = nombre?.trim() || "Producto sin nombre";
  const productImage = imagen?.trim() || FALLBACK_PRODUCT_IMAGE;
  const formattedPrice = formatPrice(precio);

  const isAvailable =
    disponible === true &&
    (existencias === null || existencias > 0);

  return (
    <article
      className={[
        "group overflow-hidden",
        "rounded-xl border border-slate-200 bg-white",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-orange-200",
        "hover:shadow-[0_10px_24px_rgba(15,23,42,0.10)]",
        "focus-within:border-orange-300",
        "focus-within:ring-2 focus-within:ring-orange-100",
      ].join(" ")}
    >
      <Link
        to={`/productos/${id}`}
        aria-label={`Ver ficha técnica de ${productName}`}
        className="block focus:outline-none"
      >
        <div className="relative bg-slate-50 p-2">
          <div
            className={[
              "h-[160px] overflow-hidden",
              "rounded-lg border border-slate-200 bg-white",
              "sm:h-[175px]",
            ].join(" ")}
          >
            <img
              src={productImage}
              alt={productName}
              loading="lazy"
              className={[
                "h-full w-full object-contain",
                "transition-transform duration-500 ease-out",
                "group-hover:scale-[1.04]",
              ].join(" ")}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
              }}
            />
          </div>

          <div className="absolute left-3 top-3">
            <span
              className={[
                "inline-flex items-center gap-1.5",
                "rounded-full border px-2 py-1",
                "text-[10px] font-semibold shadow-sm",
                isAvailable
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-rose-200 bg-rose-50 text-rose-700",
              ].join(" ")}
            >
              {isAvailable ? (
                <CheckCircle2
                  className="h-3 w-3"
                  aria-hidden="true"
                />
              ) : (
                <PackageX
                  className="h-3 w-3"
                  aria-hidden="true"
                />
              )}

              {isAvailable ? "Disponible" : "Agotado"}
            </span>
          </div>
        </div>

        <div className="p-3">
          {(categoria_principal?.nombre ||
            subcategoria?.nombre) && (
            <div
              className={[
                "mb-1.5 flex min-w-0 items-center gap-1",
                "text-[10px] font-medium text-slate-500",
              ].join(" ")}
            >
              {categoria_principal?.nombre && (
                <span className="inline-flex min-w-0 items-center gap-1">
                  <Boxes
                    className="h-3 w-3 shrink-0 text-orange-500"
                    aria-hidden="true"
                  />

                  <span className="truncate">
                    {categoria_principal.nombre}
                  </span>
                </span>
              )}

              {categoria_principal?.nombre &&
                subcategoria?.nombre && (
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-slate-300"
                  >
                    /
                  </span>
                )}

              {subcategoria?.nombre && (
                <span className="truncate">
                  {subcategoria.nombre}
                </span>
              )}
            </div>
          )}

          <h2
            className={[
              "line-clamp-2",
              "text-sm font-semibold leading-snug text-slate-900",
              "transition-colors duration-300",
              "group-hover:text-[#0b5cab]",
            ].join(" ")}
          >
            {productName}
          </h2>

          {(codigo || marca) && (
            <div className="mt-1.5 space-y-0.5 text-[11px] text-slate-500">
              {codigo && (
                <div className="flex items-center gap-1.5">
                  <Tag
                    className="h-3 w-3 shrink-0 text-slate-400"
                    aria-hidden="true"
                  />

                  <span className="truncate">{codigo}</span>
                </div>
              )}

              {marca && (
                <p className="truncate pl-[18px]">
                  {marca}
                </p>
              )}
            </div>
          )}

          <div className="mt-3 border-t border-slate-100 pt-2.5">
            <div className="flex items-end justify-between gap-2">
              <div className="min-w-0">
                {formattedPrice ? (
                  <p className="truncate text-base font-bold text-slate-950">
                    {formattedPrice}
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-slate-700">
                    Cotizar
                  </p>
                )}

                {existencias !== null && isAvailable && (
                  <p className="mt-0.5 truncate text-[10px] text-slate-400">
                    {existencias}{" "}
                    {existencias === 1 ? "unidad" : "unidades"}
                  </p>
                )}
              </div>

              <span
                className={[
                  "flex h-8 w-8 shrink-0 items-center justify-center",
                  "rounded-full bg-blue-50 text-[#0b5cab]",
                  "transition-all duration-300",
                  "group-hover:bg-[#0b5cab] group-hover:text-white",
                ].join(" ")}
              >
                <ArrowRight
                  className={[
                    "h-4 w-4",
                    "transition-transform duration-300",
                    "group-hover:translate-x-0.5",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;