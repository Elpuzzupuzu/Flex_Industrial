import { Link, useParams } from "react-router-dom";

import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServicePageHero from "@/components/services/ServicePageHero";
import { serviceCategories } from "@/data/services/serviceCategories";
import NotFound from "@/pages/NotFound";

function ServiceDetailPage() {
  const { categorySlug, serviceSlug } = useParams<{
    categorySlug: string;
    serviceSlug: string;
  }>();

  const category = serviceCategories.find(
    (item) => item.slug === categorySlug,
  );

  const service = category?.services.find(
    (item) => item.slug === serviceSlug,
  );

  if (!category || !service) {
    return <NotFound />;
  }

  return (
    <>
      <ServiceBreadcrumbs
        items={[
          {
            label: "Servicios",
            to: "/servicios",
          },
          {
            label: category.title,
            to: `/servicios/${category.slug}`,
          },
          {
            label: service.title,
          },
        ]}
      />

      <ServicePageHero
        eyebrow={service.eyebrow ?? category.title}
        title={service.title}
        description={service.shortDescription}
        image={service.image ?? category.image}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
              Descripción del servicio
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Experiencia y atención especializada
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              {service.description ?? service.shortDescription}
            </p>
          </div>

          <aside className="h-fit border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-500">
              Categoría
            </p>

            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {category.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {category.shortDescription}
            </p>

            <Link
              to={`/servicios/${category.slug}`}
              className="mt-6 inline-flex text-sm font-semibold text-[#0b5cab] transition-colors hover:text-orange-500"
            >
              Ver todos los servicios de esta categoría
            </Link>
          </aside>
        </div>
      </section>

      <ServiceFeatures features={service.features ?? []} />
    </>
  );
}

export default ServiceDetailPage;