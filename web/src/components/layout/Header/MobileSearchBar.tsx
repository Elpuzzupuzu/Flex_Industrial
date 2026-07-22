import { Search } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";

type MobileSearchBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileSearchBar({
  isOpen,
  onClose,
}: MobileSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

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

  return (
    <div
      id="mobile-search"
      aria-hidden={!isOpen}
      className={[
        "grid overflow-hidden border-t border-slate-100 bg-white",
        "transition-[grid-template-rows,opacity] duration-300",
        "xl:hidden",
        isOpen
          ? "grid-rows-[1fr] opacity-100"
          : "pointer-events-none grid-rows-[0fr] opacity-0",
      ].join(" ")}
    >
      <div className="min-h-0">
        <div className="px-4 pb-4 pt-3 sm:px-6">
          <form
            role="search"
            onSubmit={handleSubmit}
            className={[
              "mx-auto flex h-12 w-full items-center",
              "rounded-full border border-slate-200 bg-slate-100",
              "transition-colors",
              "focus-within:border-[#0b5cab] focus-within:bg-white",
            ].join(" ")}
          >
            <label htmlFor="mobile-site-search" className="sr-only">
              Buscar en Flex Industrial
            </label>

            <input
              ref={inputRef}
              id="mobile-site-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscar servicios..."
              autoComplete="off"
              tabIndex={isOpen ? 0 : -1}
              className={[
                "h-full min-w-0 flex-1 bg-transparent px-5",
                "text-sm text-slate-900 outline-none",
                "placeholder:text-slate-500",
              ].join(" ")}
            />

            <button
              type="submit"
              tabIndex={isOpen ? 0 : -1}
              aria-label="Realizar búsqueda"
              className={[
                "mr-1.5 flex h-9 w-9 shrink-0 items-center justify-center",
                "rounded-full bg-[#f15a29] text-white",
                "transition-colors hover:bg-[#d94b1f]",
              ].join(" ")}
            >
              <Search
                className="h-5 w-5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MobileSearchBar;