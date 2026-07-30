import {
  Barcode,
  CalendarDays,
  ClipboardList,
  Package,
  Percent,
  ReceiptText,
  Warehouse,
} from "lucide-react";

import type { ProductTechnicalDataProps } from "@/types/products/product-component.types";

type TechnicalDataItem = {
  label: string;
  value: string;
  icon: typeof Barcode;
};

function formatDate(date: string | null) {
  if (!date) {
    return null;
  }

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

function formatTaxRate(rate: number | null) {
  if (rate === null) {
    return null;
  }

  const percentage = rate <= 1 ? rate * 100 : rate;

  return new Intl.NumberFormat("es-MX", {
    maximumFractionDigits: 2,
  }).format(percentage);
}

function ProductTechnicalData({
  product,
}: ProductTechnicalDataProps) {
  const lastSaleDate = formatDate(product.fecha_ultima_venta);
  const costingDate = formatDate(product.fecha_de_costeo);
  const taxRate = formatTaxRate(product.sat_tasa_iva);

  const technicalData: TechnicalDataItem[] = [
    {
      label: "Código del producto",
      value: product.codigo?.trim() || "No especificado",
      icon: Barcode,
    },
    {
      label: "Marca",
      value: product.marca?.trim() || "No especificada",
      icon: Package,
    },
    {
      label: "Línea",
      value: product.linea?.trim() || "No especificada",
      icon: ClipboardList,
    },
    {
      label: "Control de almacén",
      value:
        product.control_de_almacen?.trim() ||
        "No especificado",
      icon: Warehouse,
    },
    {
      label: "Clave SAT producto o servicio",
      value:
        product.sat_clave_prodserv?.trim() ||
        "No especificada",
      icon: ReceiptText,
    },
    {
      label: "Clave SAT de unidad",
      value:
        product.sat_clave_unit?.trim() ||
        "No especificada",
      icon: ReceiptText,
    },
    {
      label: "Unidad SAT",
      value:
        product.sat_unidad_nombre?.trim() ||
        "No especificada",
      icon: Package,
    },
    {
      label: "Tasa de IVA",
      value:
        taxRate !== null
          ? `${taxRate}%`
          : "No especificada",
      icon: Percent,
    },
    {
      label: "Fecha de última venta",
      value: lastSaleDate || "Sin registro",
      icon: CalendarDays,
    },
    {
      label: "Fecha de costeo",
      value: costingDate || "Sin registro",
      icon: CalendarDays,
    },
  ];

  return (
    <section
      aria-labelledby="technical-data-title"
      className={[
        "overflow-hidden rounded-2xl",
        "border border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
          Especificaciones
        </p>

        <h2
          id="technical-data-title"
          className="mt-2 text-xl font-bold text-slate-950"
        >
          Información técnica
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Datos técnicos, fiscales y de control asociados al
          producto.
        </p>
      </div>

      <dl className="divide-y divide-slate-100">
        {technicalData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={[
                "grid gap-2 px-5 py-4",
                "sm:grid-cols-[minmax(220px,0.8fr)_1fr]",
                "sm:items-center sm:gap-6 sm:px-6",
              ].join(" ")}
            >
              <dt className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <span
                  className={[
                    "flex h-9 w-9 shrink-0 items-center justify-center",
                    "rounded-lg bg-orange-50 text-orange-600",
                  ].join(" ")}
                >
                  <Icon
                    className="h-4 w-4"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                {item.label}
              </dt>

              <dd className="pl-12 text-sm font-semibold text-slate-900 sm:pl-0 sm:text-right">
                {item.value}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}

export default ProductTechnicalData;