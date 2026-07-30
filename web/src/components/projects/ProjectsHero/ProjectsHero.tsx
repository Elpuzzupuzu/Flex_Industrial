type ProjectsHeroProps = {
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
};

function ProjectsHero({
  image = "/images/projects/projects-hero.webp",
  imageAlt = "Instalaciones industriales desarrolladas por FLEX Industrial Services",
  eyebrow = "Proyectos",
}: ProjectsHeroProps) {
  return (
    <section
      aria-labelledby="projects-hero-title"
      className={[
        "relative isolate flex min-h-[480px] items-end overflow-hidden bg-slate-950",
        "sm:min-h-[560px]",
        "lg:min-h-[640px]",
      ].join(" ")}
    >
      {/* Imagen de fondo */}
      <img
        src={image}
        alt={imageAlt}
        className={[
          "absolute inset-0 -z-20 h-full w-full object-cover object-center",
          "scale-[1.03]",
        ].join(" ")}
      />

      {/* Degradado principal: profundidad lateral */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-0 -z-10",
          "bg-gradient-to-r",
          "from-slate-950 via-slate-950/75 to-slate-950/20",
        ].join(" ")}
      />

      {/* Degradado inferior: legibilidad del texto */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-0 -z-10",
          "bg-gradient-to-t",
          "from-slate-950 via-slate-950/30 to-transparent",
        ].join(" ")}
      />

      {/* Viñeta sutil superior para look más "editorial" */}
      <div
        aria-hidden="true"
        className={[
          "absolute inset-x-0 top-0 -z-10 h-24",
          "bg-gradient-to-b from-slate-950/50 to-transparent",
        ].join(" ")}
      />

      <div
        className={[
          "mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-24",
          "pb-[calc(3rem+env(safe-area-inset-bottom))]",
        ].join(" ")}
      >
        <div className="max-w-2xl">
          {/* Eyebrow institucional */}
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-8 bg-slate-400/70 sm:w-10" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-sm">
              {eyebrow}
            </span>
          </div>

          <h1
            id="projects-hero-title"
            className={[
              "text-3xl font-bold tracking-tight text-white",
              "leading-[1.15] sm:leading-[1.1] lg:leading-[1.05]",
              "sm:text-5xl",
              "lg:text-6xl",
            ].join(" ")}
          >
            Soluciones que se ven en resultados
          </h1>

          <p
            className={[
              "mt-4 max-w-xl text-[15px] leading-relaxed text-slate-200/90",
              "sm:mt-6 sm:text-lg sm:leading-8",
            ].join(" ")}
          >
            Conoce algunos de los proyectos que hemos desarrollado con
            compromiso, calidad y seguridad en diversos sectores industriales
            y comerciales.
          </p>

          {/* Regla inferior: refuerza el marco "profesional" del bloque */}
          <div className="mt-8 hidden h-px w-24 bg-gradient-to-r from-slate-400/60 to-transparent sm:block" />
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;