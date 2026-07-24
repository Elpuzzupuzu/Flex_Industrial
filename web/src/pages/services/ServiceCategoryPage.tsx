import { Navigate, useParams } from "react-router-dom";

import ServiceCardsGrid from "@/components/services/ServiceCardsGrid";
import ServicePageHero from "@/components/services/ServicePageHero";
import { serviceCategories } from "@/data/services/serviceCategories";

function ServiceCategoryPage() {
  const { categorySlug } = useParams<{
    categorySlug: string;
  }>();

  const category = serviceCategories.find(
    (item) => item.slug === categorySlug,
  );

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <ServicePageHero
        eyebrow={category.eyebrow}
        title={category.title}
        description={category.description}
        image={category.image}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-lg leading-8 text-slate-600">
              {category.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <ServiceCardsGrid
        categorySlug={category.slug}
        services={category.services}
      />
    </>
  );
}

export default ServiceCategoryPage;