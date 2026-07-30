import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { featuredProjects } from "@/data/projects/featuredProjects";

import FeaturedProjectSlide from "./FeaturedProjectSlide";

const AUTO_PLAY_INTERVAL = 6500;
const SWIPE_THRESHOLD_PX = 45;

function FeaturedProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(430);

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const projectsCount = featuredProjects.length;

  const goToPrevious = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? projectsCount - 1 : currentIndex - 1,
    );
  }, [projectsCount]);

  const goToNext = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === projectsCount - 1 ? 0 : currentIndex + 1,
    );
  }, [projectsCount]);

  // Mide el ancho real de la tarjeta activa para que el desplazamiento 3D
  // se adapte al viewport en vez de usar un valor fijo en px.
  useLayoutEffect(() => {
    const cardEl = cardRef.current;

    if (!cardEl || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) {
        setCardWidth(width);
      }
    });

    observer.observe(cardEl);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || projectsCount <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex === projectsCount - 1 ? 0 : currentIndex + 1,
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, projectsCount]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;

    if (deltaX > SWIPE_THRESHOLD_PX) {
      goToPrevious();
    } else if (deltaX < -SWIPE_THRESHOLD_PX) {
      goToNext();
    }

    touchStartXRef.current = null;
  };

  const getRelativePosition = (index: number) => {
    let difference = index - activeIndex;

    if (difference > projectsCount / 2) {
      difference -= projectsCount;
    }

    if (difference < -projectsCount / 2) {
      difference += projectsCount;
    }

    return difference;
  };

  return (
    <section
      aria-labelledby="featured-projects-title"
      className="overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#f97316]">
            Nuestro trabajo
          </span>

          <h2
            id="featured-projects-title"
            className={[
              "mt-3 text-3xl font-bold tracking-tight text-slate-950",
              "sm:text-4xl lg:text-5xl",
            ].join(" ")}
          >
            Proyectos destacados
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Conoce algunos de nuestros trabajos más representativos en
            mantenimiento, impermeabilización, logística y servicios
            industriales.
          </p>
        </header>

        {/* Carrusel móvil */}
        <div className="mt-10 lg:hidden">
          <div
            className="mx-auto max-w-xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <FeaturedProjectSlide
              project={featuredProjects[activeIndex]}
              isActive
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Mostrar proyecto anterior"
              className={[
                "grid h-11 w-11 shrink-0 place-items-center rounded-full",
                "border border-slate-300 bg-white text-slate-800",
                "shadow-sm transition",
                "hover:border-[#0b5cab] hover:text-[#0b5cab]",
                "active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[#0b5cab] focus-visible:ring-offset-2",
              ].join(" ")}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {featuredProjects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar proyecto ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={[
                    "h-2.5 rounded-full transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[#0b5cab] focus-visible:ring-offset-2",
                    index === activeIndex
                      ? "w-8 bg-[#0b5cab]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400",
                  ].join(" ")}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Mostrar proyecto siguiente"
              className={[
                "grid h-11 w-11 shrink-0 place-items-center rounded-full",
                "border border-slate-300 bg-white text-slate-800",
                "shadow-sm transition",
                "hover:border-[#0b5cab] hover:text-[#0b5cab]",
                "active:scale-95",
                "focus-visible:outline-none focus-visible:ring-2",
                "focus-visible:ring-[#0b5cab] focus-visible:ring-offset-2",
              ].join(" ")}
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Carrusel 3D desktop */}
        <div
          ref={trackRef}
          role="group"
          aria-roledescription="carrusel"
          aria-label="Proyectos destacados"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className={[
            "relative mt-14 hidden h-[520px] lg:block",
            "focus-visible:outline-none",
          ].join(" ")}
          style={{ perspective: "1600px" }}
        >
          {/* Fade lateral para que las tarjetas laterales se disuelvan
              en el fondo en vez de cortarse abruptamente */}
          <div
            aria-hidden="true"
            className={[
              "pointer-events-none absolute inset-y-0 left-0 z-20 w-24",
              "bg-gradient-to-r from-slate-50 to-transparent",
            ].join(" ")}
          />
          <div
            aria-hidden="true"
            className={[
              "pointer-events-none absolute inset-y-0 right-0 z-20 w-24",
              "bg-gradient-to-l from-slate-50 to-transparent",
            ].join(" ")}
          />

          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Mostrar proyecto anterior"
            className={[
              "absolute left-0 top-1/2 z-40 grid h-14 w-14",
              "-translate-y-1/2 place-items-center rounded-full",
              "border border-white/70 bg-white/95 text-slate-900",
              "shadow-xl backdrop-blur transition",
              "hover:scale-105 hover:border-[#0b5cab] hover:text-[#0b5cab]",
              "active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#0b5cab] focus-visible:ring-offset-2",
            ].join(" ")}
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>

          <div
            className="relative mx-auto h-full max-w-6xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {featuredProjects.map((project, index) => {
              const relativePosition = getRelativePosition(index);
              const isActive = relativePosition === 0;
              const isVisible = Math.abs(relativePosition) <= 1;

              const gap = 24;
              const translateX = relativePosition * (cardWidth * 0.72 + gap);
              const translateZ = isActive ? 120 : -120;
              const rotateY =
                relativePosition === 0
                  ? 0
                  : relativePosition < 0
                    ? 34
                    : -34;

              return (
                <div
                  key={project.id}
                  ref={isActive ? cardRef : undefined}
                  aria-hidden={!isVisible}
                  className={[
                    "absolute left-1/2 top-1/2 h-[475px]",
                    "w-[clamp(300px,30vw,430px)]",
                    "transition-all duration-700 ease-out motion-reduce:transition-none",
                    isVisible ? "pointer-events-auto" : "pointer-events-none",
                  ].join(" ")}
                  style={{
                    zIndex: isActive ? 30 : isVisible ? 20 : 0,
                    opacity: isVisible ? (isActive ? 1 : 0.65) : 0,
                    transform: [
                      "translate(-50%, -50%)",
                      `translateX(${translateX}px)`,
                      `translateZ(${translateZ}px)`,
                      `rotateY(${rotateY}deg)`,
                      `scale(${isActive ? 1 : 0.86})`,
                    ].join(" "),
                    transformStyle: "preserve-3d",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    tabIndex={-1}
                    aria-label={`Seleccionar proyecto: ${project.title}`}
                    className={[
                      "h-full w-full rounded-2xl text-left",
                      isActive ? "shadow-2xl shadow-slate-950/30" : "shadow-lg",
                    ].join(" ")}
                  >
                    <FeaturedProjectSlide
                      project={project}
                      isActive={isActive}
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Mostrar proyecto siguiente"
            className={[
              "absolute right-0 top-1/2 z-40 grid h-14 w-14",
              "-translate-y-1/2 place-items-center rounded-full",
              "border border-white/70 bg-white/95 text-slate-900",
              "shadow-xl backdrop-blur transition",
              "hover:scale-105 hover:border-[#0b5cab] hover:text-[#0b5cab]",
              "active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#0b5cab] focus-visible:ring-offset-2",
            ].join(" ")}
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6 lg:mt-4">
          <div className="hidden items-center justify-center gap-2 lg:flex">
            {featuredProjects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Mostrar proyecto ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={[
                  "h-2.5 rounded-full transition-all duration-300",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[#0b5cab] focus-visible:ring-offset-2",
                  index === activeIndex
                    ? "w-9 bg-[#0b5cab]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400",
                ].join(" ")}
              />
            ))}
          </div>

          <Link
            to="/proyectos/todos"
            className={[
              "inline-flex min-h-12 items-center justify-center rounded-md",
              "border border-[#0b5cab] px-7 py-3",
              "text-sm font-semibold text-[#0b5cab]",
              "transition-colors duration-300",
              "hover:bg-[#0b5cab] hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[#0b5cab] focus-visible:ring-offset-2",
            ].join(" ")}
          >
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectsCarousel;