import {
  Building2,
  CheckCircle2,
  MapPin,
  PackageCheck,
  PackageX,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { ProductAvailabilityProps } from "@/types/products/product-component.types";

function ProductAvailability({
  product,
}: ProductAvailabilityProps) {
  const hasStock =
    product.existencias === null || product.existencias > 0;

  const isAvailable =
    product.disponible === true && hasStock;

  const stockLabel =
    product.existencias === null
      ? "Existencias por confirmar"
      : product.existencias === 0
        ? "Sin existencias"
        : product.existencias === 1
          ? "1 unidad disponible"
          : `${product.existencias} unidades disponibles`;

  return (
    <aside
      aria-labelledby="product-availability-title"
      className={[
        "overflow-hidden rounded-2xl",
        "border border-slate-200 bg-white",
        "shadow-[0_12px_30px_rgba(15,23,42,0.06)]",
      ].join(" ")}
    >
      <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
          Suministro
        </p>

        <h2
          id="product-availability-title"
          className="mt-2 text-xl font-bold text-slate-950"
        >
          Disponibilidad
        </h2>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div
          className={[
            "flex items-start gap-3 rounded-xl border p-4",
            isAvailable
              ? "border-emerald-200 bg-emerald-50"
              : "border-rose-200 bg-rose-50",
          ].join(" ")}
        >
          <span
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center",
              "rounded-full",
              isAvailable
                ? "bg-emerald-100 text-emerald-700"
                : "bg-rose-100 text-rose-700",
            ].join(" ")}
          >
            {isAvailable ? (
              <CheckCircle2
                className="h-5 w-5"
                aria-hidden="true"
              />
            ) : (
              <PackageX
                className="h-5 w-5"
                aria-hidden="true"
              />
            )}
          </span>

          <div>
            <p
              className={[
                "font-semibold",
                isAvailable
                  ? "text-emerald-900"
                  : "text-rose-900",
              ].join(" ")}
            >
              {isAvailable
                ? "Producto disponible"
                : "Producto no disponible"}
            </p>

            <p
              className={[
                "mt-1 text-sm leading-6",
                isAvailable
                  ? "text-emerald-700"
                  : "text-rose-700",
              ].join(" ")}
            >
              {isAvailable
                ? "Disponible para cotización y suministro."
                : "Consulta con nuestro equipo para conocer próximas existencias."}
            </p>
          </div>
        </div>

        <dl className="space-y-4">
          <div className="flex items-start gap-3">
            <PackageCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
              aria-hidden="true"
            />

            <div>
              <dt className="text-sm font-medium text-slate-500">
                Existencias
              </dt>

              <dd className="mt-1 text-sm font-semibold text-slate-900">
                {stockLabel}
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Warehouse
              className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
              aria-hidden="true"
            />

            <div>
              <dt className="text-sm font-medium text-slate-500">
                Almacén
              </dt>

              <dd className="mt-1 text-sm font-semibold text-slate-900">
                {product.almacen?.nombre?.trim() ||
                  "Almacén por confirmar"}
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2
              className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
              aria-hidden="true"
            />

            <div>
              <dt className="text-sm font-medium text-slate-500">
                Ubicación
              </dt>

              <dd className="mt-1 text-sm font-semibold text-slate-900">
                {product.ubicacion?.nombre?.trim() ||
                  "Ubicación por confirmar"}
              </dd>
            </div>
          </div>

          {product.ubicacion?.direccion?.trim() && (
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
                aria-hidden="true"
              />

              <div>
                <dt className="text-sm font-medium text-slate-500">
                  Dirección
                </dt>

                <dd className="mt-1 text-sm leading-6 text-slate-700">
                  {product.ubicacion.direccion}
                </dd>
              </div>
            </div>
          )}
        </dl>

        <div className="border-t border-slate-200 pt-5">
          <Link
            to="/contacto"
            state={{
              productId: product.id,
              productName: product.nombre,
              productCode: product.codigo,
            }}
            className={[
              "inline-flex w-full items-center justify-center",
              "rounded-xl bg-[#0b5cab] px-5 py-3",
              "text-sm font-semibold text-white",
              "transition-colors duration-200",
              "hover:bg-[#094d91]",
              "focus:outline-none focus:ring-2",
              "focus:ring-[#0b5cab]/30 focus:ring-offset-2",
            ].join(" ")}
          >
            Solicitar cotización
          </Link>

          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            La disponibilidad y el precio final pueden variar según
            cantidad, ubicación y condiciones de entrega.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default ProductAvailability;