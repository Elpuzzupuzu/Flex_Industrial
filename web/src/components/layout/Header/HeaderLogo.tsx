import { Link } from "react-router-dom";

import flexIndustrialLogo from "@/assets/images/logo.png";

type HeaderLogoProps = {
  onClick?: () => void;
};

function HeaderLogo({ onClick }: HeaderLogoProps) {
  return (
    <div className="flex shrink-0 items-center">
      <Link
        to="/"
        className="flex shrink-0 items-center"
        aria-label="Ir al inicio"
        onClick={onClick}
      >
        <div className="relative h-[54px] w-[190px] overflow-hidden sm:h-[58px] sm:w-[205px] lg:h-[64px] lg:w-[230px]">
          <img
            src={flexIndustrialLogo}
            alt="Flex Industrial Services"
            className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center"
          />
        </div>
      </Link>

      <div
        aria-hidden="true"
        className="mx-5 hidden h-8 w-px shrink-0 bg-gray-500 lg:block"
      />

      <Link
        to="/"
        onClick={onClick}
        className="hidden shrink-0 whitespace-nowrap text-[15px] font-semibold text-[#123f78] transition-colors hover:text-[#f15a29] lg:block"
      >
        Soluciones industriales
      </Link>
    </div>
  );
}

export default HeaderLogo;