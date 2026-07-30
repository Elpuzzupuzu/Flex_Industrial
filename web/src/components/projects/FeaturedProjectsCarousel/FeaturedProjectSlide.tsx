import { MapPin } from "lucide-react";

import type { FeaturedProjectSlideProps } from "./featuredProjectsCarousel.types";

function FeaturedProjectSlide({
  project,
  isActive = false,
}: FeaturedProjectSlideProps) {
  return (
    <article
      className={[
        "flex h-full flex-col overflow-hidden rounded-2xl border bg-white",
        "transition-[border-color,box-shadow] duration-500",
        isActive
          ? "border-orange-200 shadow-2xl shadow-slate-950/20"
          : "border-slate-200 shadow-lg shadow-slate-950/10",
      ].join(" ")}
    >
      <div className="relative h-[230px] overflow-hidden sm:h-[270px] lg:h-[300px]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className={[
            "h-full w-full object-cover transition-transform duration-700",
            isActive ? "scale-105" : "scale-100",
          ].join(" ")}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent"
        />

        <span
          className={[
            "absolute bottom-4 left-4 rounded-md bg-[#f97316]",
            "px-3 py-1.5 text-xs font-semibold text-white shadow-md",
          ].join(" ")}
        >
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-tight text-slate-950">
          {project.title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <MapPin
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[#0b5cab]"
            strokeWidth={2}
          />

          <span>{project.location}</span>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default FeaturedProjectSlide;