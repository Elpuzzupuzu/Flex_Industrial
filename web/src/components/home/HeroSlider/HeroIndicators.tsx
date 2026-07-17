import type { HeroIndicatorsProps } from "./heroSlider.types";

function HeroIndicators({
  total,
  currentIndex,
  onSelect,
}: HeroIndicatorsProps) {
  return (
    <div
      className={[
        "absolute bottom-4 left-1/2 z-30",
        "flex -translate-x-1/2 items-center",
        "gap-1.5 rounded-full px-2 py-1.5",
        "bg-black/35 backdrop-blur-sm",
        "sm:bottom-5 sm:gap-2 sm:px-3 sm:py-2",
        "md:bottom-6 md:gap-2.5",
        "lg:bottom-7",
      ].join(" ")}
      role="tablist"
      aria-label="Seleccionar diapositiva"
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === currentIndex;

        return (
          <button
            key={index}
            type="button"
            role="tab"
            aria-label={`Mostrar diapositiva ${index + 1}`}
            aria-selected={isActive}
            onClick={() => onSelect(index)}
            className={[
              "group flex size-8 items-center justify-center",
              "rounded-full",
              "focus-visible:outline-2",
              "focus-visible:outline-offset-2",
              "focus-visible:outline-white",
              "sm:size-9",
            ].join(" ")}
          >
            <span
              aria-hidden="true"
              className={[
                "block rounded-full border border-white",
                "transition-all duration-300 ease-in-out",
                isActive
                  ? "h-2.5 w-6 bg-white sm:h-3 sm:w-8"
                  : "size-2.5 bg-transparent group-hover:bg-white/60 sm:size-3",
              ].join(" ")}
            />
          </button>
        );
      })}
    </div>
  );
}

export default HeroIndicators;