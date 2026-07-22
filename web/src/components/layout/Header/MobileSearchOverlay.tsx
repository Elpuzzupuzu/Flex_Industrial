import { ArrowLeft, Search, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";

type MobileSearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileSearchOverlay({
  isOpen,
  onClose,
}: MobileSearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusTimeout = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => {
      window.clearTimeout(focusTimeout);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedQuery = searchQuery.trim();

    if (!normalizedQuery) {
      inputRef.current?.focus();
      return;
    }

    navigate(`/buscar?q=${encodeURIComponent(normalizedQuery)}`);
    onClose();
  };

  const clearSearch = () => {
    setSearchQuery("");
    inputRef.current?.focus();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label="Buscar en Flex Industrial"
      className={[
        "fixed inset-0 z-[200] bg-white",
        "overflow-y-auto xl:hidden",
      ].join(" ")}
    >
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar búsqueda"
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center",
              "rounded-full text-slate-700 transition-colors",
              "hover:bg-slate-100 hover:text-[#0b5cab]",
            ].join(" ")}
          >
            <ArrowLeft
              className="h-6 w-6"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>

          <form
            role="search"
            onSubmit={handleSubmit}
            className={[
              "flex h-12 min-w-0 flex-1 items-center",
              "rounded-full border border-slate-200 bg-slate-100",
              "transition-colors",
              "focus-within:border-[#0b5cab] focus-within:bg-white",
            ].join(" ")}
          >
            <Search
              className="ml-4 h-5 w-5 shrink-0 text-slate-500"
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <label htmlFor="mobile-search-input" className="sr-only">
              Buscar en Flex Industrial
            </label>

            <input
              ref={inputRef}
              id="mobile-search-input"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar en Flex Industrial"
              autoComplete="off"
              enterKeyHint="search"
              className={[
                "h-full min-w-0 flex-1 bg-transparent px-3",
                "text-sm text-slate-900 outline-none",
                "placeholder:text-slate-500",
              ].join(" ")}
            />

            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                aria-label="Limpiar búsqueda"
                className={[
                  "mr-2 flex h-8 w-8 shrink-0 items-center justify-center",
                  "rounded-full text-slate-500 transition-colors",
                  "hover:bg-slate-200 hover:text-slate-800",
                ].join(" ")}
              >
                <X
                  className="h-4 w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900">
              Búsquedas recientes
            </h2>

            <button
              type="button"
              className="text-sm font-medium text-[#0b5cab] hover:underline"
            >
              Ver todo
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Tus búsquedas recientes aparecerán aquí.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MobileSearchOverlay;