import { useState } from "react";

import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import HeaderLogo from "./HeaderLogo";
import MobileHeaderActions from "./MobileHeaderActions";
import MobileSearchOverlay from "./MobileSearchOverlay";

function Header() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const handleDesktopSearchClick = () => {
    console.log("Abrir buscador de escritorio");
  };

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      <header className="relative z-50 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-[76px] w-full max-w-[1800px] items-center px-4 sm:px-6 lg:h-[82px] lg:px-8">
          <HeaderLogo />

          <DesktopNavigation />

          <HeaderActions onSearchClick={handleDesktopSearchClick} />

          <MobileHeaderActions onSearchClick={openMobileSearch} />
        </div>
      </header>

      <MobileSearchOverlay
        isOpen={isMobileSearchOpen}
        onClose={closeMobileSearch}
      />
    </>
  );
}

export default Header;