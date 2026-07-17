import type { HeroSlideProps } from "./heroSlider.types";

function HeroSlide({ slide, isActive }: HeroSlideProps) {
  return (
    <article
      aria-hidden={!isActive}
      className={[
        "absolute inset-0",
        "transition-opacity duration-700 ease-in-out",
        "will-change-[opacity]",
        isActive
          ? "pointer-events-auto z-10 opacity-100"
          : "pointer-events-none z-0 opacity-0",
      ].join(" ")}
    >
      <img
        src={slide.image}
        alt={slide.imageAlt}
        loading={isActive ? "eager" : "lazy"}
        draggable={false}
        style={{
          objectPosition: slide.imagePosition ?? "center",
        }}
        className="absolute inset-0 h-full w-full object-cover select-none"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-transparent" />

      <div
        className={[
          "relative z-10 mx-auto flex h-full w-full max-w-7xl",
          "items-center px-12",
          "sm:px-16",
          "md:px-20",
          "lg:px-24",
        ].join(" ")}
      >
        <div
          className={[
            "w-full max-w-[240px] text-white",
            "transition-[opacity,transform] duration-700 ease-out",
            "will-change-[opacity,transform]",
            "sm:max-w-sm",
            "md:max-w-xl",
            "lg:max-w-2xl",
            isActive
              ? "translate-y-0 opacity-100 delay-150"
              : "translate-y-4 opacity-0 delay-0",
          ].join(" ")}
        >
          <h2
            className={[
              "text-xl leading-tight font-bold tracking-tight",
              "sm:text-3xl",
              "md:text-4xl",
              "lg:text-5xl",
              "xl:text-6xl",
            ].join(" ")}
          >
            {slide.title}
          </h2>

          {slide.description && (
            <p
              className={[
                "mt-2 line-clamp-2 text-xs leading-5 text-white/90",
                "sm:mt-3 sm:text-sm sm:leading-6",
                "md:line-clamp-none md:text-base",
                "lg:mt-5 lg:text-lg",
                "xl:text-xl",
              ].join(" ")}
            >
              {slide.description}
            </p>
          )}

          {slide.buttonText && slide.buttonUrl && (
            <a
              href={slide.buttonUrl}
              tabIndex={isActive ? 0 : -1}
              className={[
                "mt-3 inline-flex min-h-9 items-center justify-center",
                "bg-red-600 px-4 py-2",
                "text-[10px] font-bold tracking-wide text-white uppercase",
                "transition-colors duration-300",
                "hover:bg-red-700",
                "active:scale-[0.98]",
                "focus-visible:outline-2",
                "focus-visible:outline-offset-2",
                "focus-visible:outline-white",
                "sm:mt-4 sm:min-h-10 sm:px-5 sm:text-xs",
                "md:mt-6 md:min-h-11 md:px-6 md:text-sm",
              ].join(" ")}
            >
              {slide.buttonText}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default HeroSlide;