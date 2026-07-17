import {
  useCallback,
  useEffect,
  useState,
} from "react";

import HeroControls from "./HeroControls";
import HeroIndicators from "./HeroIndicators";
import HeroSlide from "./HeroSlide";

import type { HeroSliderProps } from "./heroSlider.types";

function HeroSlider({
  slides,
  autoPlay = true,
  autoPlayInterval = 6000,
  className = "",
}: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    if (totalSlides <= 1) {
      return;
    }

    setCurrentIndex((previousIndex) =>
      previousIndex === totalSlides - 1
        ? 0
        : previousIndex + 1,
    );
  }, [totalSlides]);

  const handlePrevious = useCallback(() => {
    if (totalSlides <= 1) {
      return;
    }

    setCurrentIndex((previousIndex) =>
      previousIndex === 0
        ? totalSlides - 1
        : previousIndex - 1,
    );
  }, [totalSlides]);

  const handleSelect = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) {
        return;
      }

      setCurrentIndex(index);
    },
    [totalSlides],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    },
    [handleNext, handlePrevious],
  );

  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) {
      return;
    }

    const intervalId = window.setInterval(
      handleNext,
      autoPlayInterval,
    );

    return () => {
      window.clearInterval(intervalId);
    };
  }, [
    autoPlay,
    autoPlayInterval,
    handleNext,
    isPaused,
    totalSlides,
  ]);

  useEffect(() => {
    if (totalSlides === 0) {
      return;
    }

    if (currentIndex >= totalSlides) {
      setCurrentIndex(0);
    }
  }, [currentIndex, totalSlides]);

  if (totalSlides === 0) {
    return null;
  }

  return (
    <section
      aria-label="Contenido destacado"
      aria-roledescription="carrusel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onPointerDown={() => setIsPaused(true)}
      onPointerUp={() => setIsPaused(false)}
      onPointerCancel={() => setIsPaused(false)}
      className={[
        "relative isolate w-full overflow-hidden bg-slate-950",
        "h-[68svh] min-h-[480px] max-h-[620px]",
        "sm:h-[72svh] sm:min-h-[520px] sm:max-h-[660px]",
        "md:h-[75svh] md:min-h-[560px] md:max-h-[700px]",
        "lg:h-[calc(100svh-72px)] lg:min-h-[600px] lg:max-h-[720px]",
        "focus-visible:outline-none",
        className,
      ].join(" ")}
    >
      <div
        className="absolute inset-0"
        aria-live="polite"
        aria-atomic="true"
      >
        {slides.map((slide, index) => (
          <HeroSlide
            key={slide.id}
            slide={slide}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      {totalSlides > 1 && (
        <>
          <HeroControls
            onPrevious={handlePrevious}
            onNext={handleNext}
          />

          <HeroIndicators
            total={totalSlides}
            currentIndex={currentIndex}
            onSelect={handleSelect}
          />
        </>
      )}
    </section>
  );
}

export default HeroSlider;