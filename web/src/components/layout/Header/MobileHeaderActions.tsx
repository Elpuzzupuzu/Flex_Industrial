import { Search, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

type MobileHeaderActionsProps = {
  onSearchClick: () => void;
};

function MobileHeaderActions({
  onSearchClick,
}: MobileHeaderActionsProps) {
  return (
    <div className="ml-auto flex shrink-0 items-center gap-2 xl:hidden">
      <button
        type="button"
        aria-label="Abrir búsqueda"
        onClick={onSearchClick}
        className={[
          "flex h-10 w-10 items-center justify-center rounded-full",
          "border border-slate-300 text-slate-700",
          "transition-colors",
          "hover:border-[#0b5cab] hover:bg-[#0b5cab] hover:text-white",
        ].join(" ")}
      >
        <Search
          className="h-5 w-5"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </button>

      <Link
        to="/acceso"
        aria-label="Acceso de cliente"
        className={[
          "flex h-10 w-10 items-center justify-center rounded-full",
          "border border-slate-300 text-slate-700",
          "transition-colors",
          "hover:border-[#0b5cab] hover:bg-[#0b5cab] hover:text-white",
        ].join(" ")}
      >
        <UserRound
          className="h-5 w-5"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

export default MobileHeaderActions;