import { Search, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

type HeaderActionsProps = {
  onSearchClick?: () => void;
};

function HeaderActions({
  onSearchClick,
}: HeaderActionsProps) {
  return (
    <div
      className={[
        "ml-auto hidden shrink-0 items-center",
        "gap-5 xl:flex",
        "2xl:gap-7",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={onSearchClick}
        aria-label="Buscar"
        className={[
          "flex shrink-0 items-center gap-2",
          "text-sm font-medium text-gray-800",
          "transition-colors hover:text-[#0b5cab]",
        ].join(" ")}
      >
        <span>Buscar</span>

        <Search
          className="h-5 w-5"
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </button>

      <Link
        to="/contacto"
        className={[
          "shrink-0 whitespace-nowrap",
          "text-sm font-medium text-gray-800",
          "transition-colors hover:text-[#0b5cab]",
        ].join(" ")}
      >
        Solicitar cotización
      </Link>

      <Link
        to="/acceso"
        aria-label="Acceso de cliente"
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center",
          "rounded-full border border-gray-700 text-gray-800",
          "transition-colors",
          "hover:border-[#0b5cab] hover:bg-[#0b5cab] hover:text-white",
        ].join(" ")}
      >
        <UserRound
          className="h-5 w-5"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

export default HeaderActions;