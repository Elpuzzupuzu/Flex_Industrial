import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import type { ProductsPaginationProps } from "@/types/products/product-component.types";

function createVisiblePages(
  currentPage: number,
  totalPages: number,
): Array<number | "ellipsis-left" | "ellipsis-right"> {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );
  }

  if (currentPage <= 4) {
    return [
      1,
      2,
      3,
      4,
      5,
      "ellipsis-right",
      totalPages,
    ];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "ellipsis-left",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "ellipsis-left",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-right",
    totalPages,
  ];
}

function ProductsPagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  disabled = false,
}: ProductsPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const visiblePages = createVisiblePages(
    currentPage,
    totalPages,
  );

  const firstVisibleItem =
    totalItems === 0
      ? 0
      : (currentPage - 1) * pageSize + 1;

  const lastVisibleItem = Math.min(
    currentPage * pageSize,
    totalItems,
  );

  const canGoPrevious = currentPage > 1 && !disabled;
  const canGoNext =
    currentPage < totalPages && !disabled;

  const handlePageChange = (page: number) => {
    if (
      disabled ||
      page === currentPage ||
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    onPageChange(page);
  };

  return (
    <nav
      aria-label="Paginación de productos"
      className={[
        "mt-10 flex flex-col gap-5",
        "border-t border-slate-200 pt-6",
        "lg:flex-row lg:items-center lg:justify-between",
      ].join(" ")}
    >
      <p
        className="text-center text-sm text-slate-600 lg:text-left"
        aria-live="polite"
      >
        Mostrando{" "}
        <strong className="font-semibold text-slate-900">
          {firstVisibleItem}
        </strong>{" "}
        a{" "}
        <strong className="font-semibold text-slate-900">
          {lastVisibleItem}
        </strong>{" "}
        de{" "}
        <strong className="font-semibold text-slate-900">
          {totalItems}
        </strong>{" "}
        productos
      </p>

      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => handlePageChange(1)}
          disabled={!canGoPrevious}
          aria-label="Ir a la primera página"
          className={[
            "hidden h-10 w-10 items-center justify-center rounded-lg",
            "border border-slate-200 bg-white text-slate-600",
            "transition-colors",
            "hover:border-orange-300 hover:text-orange-600",
            "focus:outline-none focus:ring-2 focus:ring-orange-200",
            "disabled:cursor-not-allowed disabled:opacity-40",
            "sm:inline-flex",
          ].join(" ")}
        >
          <ChevronsLeft
            className="h-4 w-4"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={() =>
            handlePageChange(currentPage - 1)
          }
          disabled={!canGoPrevious}
          aria-label="Ir a la página anterior"
          className={[
            "inline-flex h-10 items-center justify-center gap-2",
            "rounded-lg border border-slate-200 bg-white px-3",
            "text-sm font-medium text-slate-700",
            "transition-colors",
            "hover:border-orange-300 hover:text-orange-600",
            "focus:outline-none focus:ring-2 focus:ring-orange-200",
            "disabled:cursor-not-allowed disabled:opacity-40",
          ].join(" ")}
        >
          <ChevronLeft
            className="h-4 w-4"
            aria-hidden="true"
          />

          <span className="hidden sm:inline">
            Anterior
          </span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {visiblePages.map((page) => {
            if (
              page === "ellipsis-left" ||
              page === "ellipsis-right"
            ) {
              return (
                <span
                  key={page}
                  className={[
                    "inline-flex h-10 w-8 items-center justify-center",
                    "text-sm font-medium text-slate-400",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  …
                </span>
              );
            }

            const isCurrentPage = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                disabled={disabled}
                aria-label={`Ir a la página ${page}`}
                aria-current={
                  isCurrentPage ? "page" : undefined
                }
                className={[
                  "inline-flex h-10 min-w-10 items-center justify-center",
                  "rounded-lg border px-3 text-sm font-semibold",
                  "transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-orange-200",
                  isCurrentPage
                    ? [
                        "border-[#0b5cab]",
                        "bg-[#0b5cab] text-white",
                      ].join(" ")
                    : [
                        "border-slate-200 bg-white text-slate-700",
                        "hover:border-orange-300 hover:text-orange-600",
                      ].join(" "),
                  disabled
                    ? "cursor-not-allowed opacity-50"
                    : "",
                ].join(" ")}
              >
                {page}
              </button>
            );
          })}
        </div>

        <span
          className={[
            "inline-flex h-10 items-center justify-center",
            "rounded-lg bg-slate-100 px-4",
            "text-sm font-semibold text-slate-700",
            "md:hidden",
          ].join(" ")}
          aria-current="page"
        >
          {currentPage} / {totalPages}
        </span>

        <button
          type="button"
          onClick={() =>
            handlePageChange(currentPage + 1)
          }
          disabled={!canGoNext}
          aria-label="Ir a la página siguiente"
          className={[
            "inline-flex h-10 items-center justify-center gap-2",
            "rounded-lg border border-slate-200 bg-white px-3",
            "text-sm font-medium text-slate-700",
            "transition-colors",
            "hover:border-orange-300 hover:text-orange-600",
            "focus:outline-none focus:ring-2 focus:ring-orange-200",
            "disabled:cursor-not-allowed disabled:opacity-40",
          ].join(" ")}
        >
          <span className="hidden sm:inline">
            Siguiente
          </span>

          <ChevronRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={() => handlePageChange(totalPages)}
          disabled={!canGoNext}
          aria-label="Ir a la última página"
          className={[
            "hidden h-10 w-10 items-center justify-center rounded-lg",
            "border border-slate-200 bg-white text-slate-600",
            "transition-colors",
            "hover:border-orange-300 hover:text-orange-600",
            "focus:outline-none focus:ring-2 focus:ring-orange-200",
            "disabled:cursor-not-allowed disabled:opacity-40",
            "sm:inline-flex",
          ].join(" ")}
        >
          <ChevronsRight
            className="h-4 w-4"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}

export default ProductsPagination;