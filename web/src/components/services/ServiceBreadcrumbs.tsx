
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  to?: string;
};

type ServiceBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

function ServiceBreadcrumbs({
  items,
}: ServiceBreadcrumbsProps) {
  return (
    <nav
      aria-label="Ruta de navegación"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <ol className="flex min-h-14 flex-wrap items-center gap-2 py-3 text-sm">
          <li>
            <Link
              to="/"
              aria-label="Inicio"
              className="text-slate-500 transition-colors hover:text-[#0b5cab]"
            >
              <Home
                aria-hidden="true"
                className="h-4 w-4"
                strokeWidth={1.8}
              />
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 text-slate-400"
                  strokeWidth={1.8}
                />

                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="text-slate-500 transition-colors hover:text-[#0b5cab]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      isLast
                        ? "font-medium text-slate-800"
                        : "text-slate-500"
                    }
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default ServiceBreadcrumbs;