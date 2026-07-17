import { useState } from "react";
import {
  ChevronDown,
  Menu,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import flexIndustrialLogo from "@/assets/images/logo.png";

type NavigationItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

const navigationItems: NavigationItem[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/servicios",
    hasDropdown: true,
  },
  {
    label: "Industrias",
    href: "/industrias",
    hasDropdown: true,
  },
  {
    label: "Proyectos",
    href: "/proyectos",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
    hasDropdown: true,
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="relative z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[76px] w-full max-w-[1720px] items-center px-4 sm:px-6 lg:h-[82px] lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Ir al inicio"
          onClick={closeMobileMenu}
        >
          <div className="relative h-[54px] w-[190px] overflow-hidden sm:h-[58px] sm:w-[205px] lg:h-[64px] lg:w-[230px]">
            <img
              src={flexIndustrialLogo}
              alt="Flex Industrial Services"
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center"
            />
          </div>
        </Link>

        {/* Separador */}
        <div className="mx-5 hidden h-8 w-px shrink-0 bg-gray-500 lg:block" />

        {/* Leyenda */}
        <Link
          to="/"
          className="hidden shrink-0 whitespace-nowrap text-[15px] font-semibold text-[#123f78] transition-colors hover:text-[#f15a29] lg:block"
        >
          Soluciones industriales
        </Link>

        {/* Navegación de escritorio */}
        <nav
          className="ml-7 hidden flex-1 items-center gap-1 xl:flex"
          aria-label="Navegación principal"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                [
                  "group flex h-[82px] items-center gap-1.5 border-b-2 px-3 text-sm font-medium transition-colors",
                  isActive
                    ? "border-[#0b5cab] text-[#0b5cab]"
                    : "border-transparent text-gray-800 hover:border-gray-300 hover:text-[#0b5cab]",
                ].join(" ")
              }
            >
              <span>{item.label}</span>

              {item.hasDropdown && (
                <ChevronDown
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                  strokeWidth={1.8}
                />
              )}
            </NavLink>
          ))}
        </nav>

        {/* Acciones de escritorio */}
        <div className="ml-auto hidden shrink-0 items-center gap-6 xl:flex">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-[#0b5cab]"
            aria-label="Buscar"
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
            className="text-sm font-medium text-gray-800 transition-colors hover:text-[#0b5cab]"
          >
            Solicitar cotización
          </Link>

          <Link
            to="/acceso"
            aria-label="Acceso de cliente"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-gray-800 transition-colors hover:border-[#0b5cab] hover:bg-[#0b5cab] hover:text-white"
          >
            <UserRound
              className="h-5 w-5"
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Acciones para tablet y móvil */}
        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <button
            type="button"
            aria-label="Buscar"
            className="flex h-10 w-10 items-center justify-center text-gray-800 transition-colors hover:text-[#0b5cab]"
          >
            <Search
              className="h-5 w-5"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMobileMenuOpen((currentValue) => !currentValue)
            }
            className="flex h-10 w-10 items-center justify-center text-gray-800 transition-colors hover:text-[#0b5cab]"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-navigation"
        className={[
          "absolute left-0 top-full w-full border-t border-gray-200 bg-white shadow-lg transition-all duration-300 xl:hidden",
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <nav
          className="mx-auto flex max-w-[1720px] flex-col px-4 py-4 sm:px-6"
          aria-label="Navegación móvil"
        >
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="mb-2 border-b border-gray-100 pb-4 text-sm font-semibold text-[#123f78]"
          >
            Soluciones industriales
          </Link>

          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                [
                  "flex items-center justify-between border-b border-gray-100 py-4 text-sm font-medium transition-colors",
                  isActive
                    ? "text-[#0b5cab]"
                    : "text-gray-800 hover:text-[#0b5cab]",
                ].join(" ")
              }
            >
              <span>{item.label}</span>

              {item.hasDropdown && (
                <ChevronDown
                  className="h-4 w-4"
                  aria-hidden="true"
                  strokeWidth={1.8}
                />
              )}
            </NavLink>
          ))}

          <Link
            to="/contacto"
            onClick={closeMobileMenu}
            className="mt-5 flex h-11 items-center justify-center bg-[#0b5cab] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#084a89]"
          >
            Solicitar cotización
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;