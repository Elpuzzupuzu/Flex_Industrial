type ServicePageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
};

function ServicePageHero({
  eyebrow,
  title,
  description,
  image,
}: ServicePageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden="true"
        className={[
          "absolute inset-0 -z-10",
          "bg-gradient-to-r from-slate-950",
          "via-slate-950/85 to-slate-950/35",
        ].join(" ")}
      />

      <div
        className={[
          "mx-auto flex min-h-[420px] w-full max-w-[1800px]",
          "items-center px-4 py-20",
          "sm:px-6 lg:px-8 lg:py-24",
        ].join(" ")}
      >
        <div className="max-w-3xl">
          {eyebrow && (
            <p
              className={[
                "mb-4 text-sm font-semibold uppercase",
                "tracking-[0.2em] text-orange-400",
              ].join(" ")}
            >
              {eyebrow}
            </p>
          )}

          <h1
            className={[
              "text-4xl font-bold tracking-tight text-white",
              "sm:text-5xl lg:text-6xl",
            ].join(" ")}
          >
            {title}
          </h1>

          <p
            className={[
              "mt-6 max-w-2xl text-base leading-8",
              "text-slate-200 sm:text-lg",
            ].join(" ")}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicePageHero;