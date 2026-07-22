import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";
import MobileHeaderActions from "./MobileHeaderActions";
import MobileSearchBar from "./MobileSearchBar";

function Header() {
  const handleDesktopSearchClick = () => {
    console.log("Abrir buscador de escritorio");
  };

  return (
    <header className="relative z-50 w-full border-b border-gray-200 bg-white">
      <div
        className={[
          "mx-auto flex w-full max-w-[1800px] items-center",
          "h-[76px] px-4",
          "sm:px-6",
          "lg:h-[82px] lg:px-8",
        ].join(" ")}
      >
        <HeaderLogo />

        <DesktopNavigation />

        <HeaderActions onSearchClick={handleDesktopSearchClick} />

        <MobileHeaderActions />
      </div>

      <MobileSearchBar />
    </header>
  );
}

export default Header;