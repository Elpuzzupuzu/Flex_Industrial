import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-[calc(100vh-160px)] items-center bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-orange-100 text-orange-600 sm:size-28">
          <SearchX
            className="size-12 sm:size-14"
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-orange-600">
          Error 404
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Página no encontrada
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          La página que buscas no existe, fue movida o todavía no se encuentra
          disponible.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className={[
              "inline-flex min-h-12 w-full items-center justify-center gap-2",
              "bg-orange-600 px-6 py-3 text-sm font-semibold text-white",
              "transition-colors duration-200 hover:bg-orange-700",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-orange-500 focus-visible:ring-offset-2",
              "sm:w-auto",
            ].join(" ")}
          >
            <Home className="size-5" aria-hidden="true" />
            Volver al inicio
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className={[
              "inline-flex min-h-12 w-full items-center justify-center gap-2",
              "border border-slate-300 bg-white px-6 py-3",
              "text-sm font-semibold text-slate-700",
              "transition-colors duration-200",
              "hover:border-slate-400 hover:bg-slate-100",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-slate-400 focus-visible:ring-offset-2",
              "sm:w-auto",
            ].join(" ")}
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
            Regresar
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;