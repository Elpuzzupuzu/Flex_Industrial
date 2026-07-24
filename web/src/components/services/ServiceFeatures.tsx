import { Check } from "lucide-react";

import type { ServiceFeature } from "@/types/services.types";

type ServiceFeaturesProps = {
  features: ServiceFeature[];
};

function ServiceFeatures({
  features,
}: ServiceFeaturesProps) {
  if (!features.length) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
            Alcance del servicio
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Soluciones especializadas
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Adaptamos cada intervención a las condiciones técnicas y
            operativas de las instalaciones.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="border border-slate-200 bg-white p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-orange-50 text-orange-500">
                  <Check
                    aria-hidden="true"
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </span>

                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  {feature.description && (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceFeatures;