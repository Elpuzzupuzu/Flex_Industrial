import { useEffect, useMemo, useState } from "react";
import { ImageOff } from "lucide-react";

import type { ProductGalleryProps } from "@/types/products/product-component.types";

const FALLBACK_PRODUCT_IMAGE =
  "/images/products/product-placeholder.webp";

function ProductGallery({
  productName,
  images,
}: ProductGalleryProps) {
  const normalizedImages = useMemo(() => {
    return [...images]
      .filter((image) => image.imagen_url?.trim())
      .sort((a, b) => {
        if (a.es_principal && !b.es_principal) {
          return -1;
        }

        if (!a.es_principal && b.es_principal) {
          return 1;
        }

        return a.posicion - b.posicion;
      });
  }, [images]);

  const [selectedImageId, setSelectedImageId] = useState<
    string | null
  >(normalizedImages[0]?.id ?? null);

  useEffect(() => {
    setSelectedImageId(normalizedImages[0]?.id ?? null);
  }, [normalizedImages]);

  const selectedImage =
    normalizedImages.find(
      (image) => image.id === selectedImageId,
    ) ?? normalizedImages[0];

  if (!selectedImage) {
    return (
      <div
        className={[
          "flex aspect-square w-full flex-col items-center justify-center",
          "overflow-hidden rounded-2xl border border-slate-200",
          "bg-slate-100 px-6 text-center",
        ].join(" ")}
      >
        <ImageOff
          className="h-12 w-12 text-slate-400"
          strokeWidth={1.6}
          aria-hidden="true"
        />

        <p className="mt-4 text-sm font-medium text-slate-600">
          Este producto aún no tiene imágenes disponibles.
        </p>
      </div>
    );
  }

  const selectedAlt =
    selectedImage.texto_alternativo?.trim() ||
    productName ||
    "Imagen del producto";

  return (
    <section
      aria-label={`Galería de imágenes de ${productName}`}
      className="space-y-4"
    >
      <div
        className={[
          "relative aspect-square overflow-hidden rounded-2xl",
          "border border-slate-200 bg-slate-100",
        ].join(" ")}
      >
        <img
          key={selectedImage.id}
          src={selectedImage.imagen_url}
          alt={selectedAlt}
          className="h-full w-full object-contain p-4 sm:p-6"
          onError={(event) => {
            event.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
          }}
        />

        {selectedImage.es_principal && (
          <span
            className={[
              "absolute left-4 top-4 rounded-full",
              "bg-[#0b5cab] px-3 py-1.5",
              "text-xs font-semibold text-white shadow-sm",
            ].join(" ")}
          >
            Imagen principal
          </span>
        )}
      </div>

      {normalizedImages.length > 1 && (
        <div
          className={[
            "grid grid-cols-4 gap-3",
            "sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5",
          ].join(" ")}
        >
          {normalizedImages.map((image, index) => {
            const isSelected =
              image.id === selectedImage.id;

            const thumbnailAlt =
              image.texto_alternativo?.trim() ||
              `${productName}, imagen ${index + 1}`;

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedImageId(image.id)}
                aria-label={`Mostrar imagen ${index + 1} de ${productName}`}
                aria-pressed={isSelected}
                className={[
                  "aspect-square overflow-hidden rounded-xl border-2",
                  "bg-slate-100 p-1.5",
                  "transition-[border-color,box-shadow,transform]",
                  "focus:outline-none focus:ring-2 focus:ring-orange-200",
                  isSelected
                    ? [
                        "border-orange-500",
                        "shadow-[0_0_0_3px_rgba(249,115,22,0.12)]",
                      ].join(" ")
                    : [
                        "border-transparent",
                        "hover:-translate-y-0.5",
                        "hover:border-slate-300",
                      ].join(" "),
                ].join(" ")}
              >
                <img
                  src={image.imagen_url}
                  alt={thumbnailAlt}
                  loading="lazy"
                  className="h-full w-full rounded-lg object-cover"
                  onError={(event) => {
                    event.currentTarget.src =
                      FALLBACK_PRODUCT_IMAGE;
                  }}
                />
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default ProductGallery;