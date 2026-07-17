import { ChevronLeft, ChevronRight } from "lucide-react";

import type { HeroControlsProps } from "./heroSlider.types";

function HeroControls({
  onPrevious,
  onNext,
}: HeroControlsProps) {
  const sharedButtonClasses = [
    "absolute top-1/2 z-30",
    "flex -translate-y-1/2 items-center justify-center",
    "size-10 rounded-full",
    "bg-black/45 text-white backdrop-blur-sm",
    "transition-all duration-300",
    "hover:bg-black/70",
    "active:scale-95",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "focus-visible:outline-white",
    "sm:size-11",
    "md:size-12",
    "lg:size-14",
  ].join(" ");

  return (
    <>
      <button
        type="button"
        aria-label="Mostrar diapositiva anterior"
        onClick={onPrevious}
        className={[
          sharedButtonClasses,
          "left-2 sm:left-3 md:left-4 lg:left-6",
        ].join(" ")}
      >
        <ChevronLeft
          aria-hidden="true"
          className="size-5 sm:size-6 md:size-7 lg:size-8"
          strokeWidth={2}
        />
      </button>

      <button
        type="button"
        aria-label="Mostrar siguiente diapositiva"
        onClick={onNext}
        className={[
          sharedButtonClasses,
          "right-2 sm:right-3 md:right-4 lg:right-6",
        ].join(" ")}
      >
        <ChevronRight
          aria-hidden="true"
          className="size-5 sm:size-6 md:size-7 lg:size-8"
          strokeWidth={2}
        />
      </button>
    </>
  );
}

export default HeroControls;