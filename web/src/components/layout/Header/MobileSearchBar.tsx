import { Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function MobileSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedQuery = searchQuery.trim();

    if (!normalizedQuery) {
      return;
    }

    navigate(`/buscar?q=${encodeURIComponent(normalizedQuery)}`);
  };

  return (
    <div className="border-t border-slate-100 px-4 pb-3 pt-2 sm:px-6 xl:hidden">
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
          id="mobile-site-search"
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Buscar servicios..."
          autoComplete="off"
          className={[
            "h-full min-w-0 flex-1 bg-transparent px-5",
            "text-sm text-slate-900 outline-none",
            "placeholder:text-slate-500",
          ].join(" ")}
        />

        <button
          type="submit"
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
  );
}

export default MobileSearchBar;