import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    title: "Servicios",
    links: [
      {
        label: "Mantenimiento a edificios",
        href: "/servicios/mantenimiento-edificios",
      },
      {
        label: "Mantenimiento industrial",
        href: "/servicios/mantenimiento-industrial",
      },
      {
        label: "Servicios logísticos",
        href: "/servicios/logistica-transporte",
      },
      {
        label: "Renta de campers",
        href: "/servicios/renta-campers",
      },
    ],
  },
  {
    title: "Flex Industrial",
    links: [
      {
        label: "Nosotros",
        href: "/nosotros",
      },
      {
        label: "Proyectos",
        href: "/proyectos",
      },
      {
        label: "Industrias",
        href: "/industrias",
      },
      {
        label: "Contacto",
        href: "/contacto",
      },
    ],
  },
  {
    title: "Recursos",
    links: [
      {
        label: "Preguntas frecuentes",
        href: "/preguntas-frecuentes",
      },
      {
        label: "Solicitar cotización",
        href: "/contacto",
      },
      {
        label: "Cobertura de servicios",
        href: "/cobertura",
      },
      {
        label: "Aviso de privacidad",
        href: "/aviso-de-privacidad",
      },
    ],
  },
];

const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-slate-100 text-slate-700">
      {/* Redes sociales */}
      <div className="border-b border-slate-200 bg-white">
        <div
          className={[
            "mx-auto flex w-full max-w-7xl",
            "flex-col gap-5 px-5 py-7",
            "sm:px-6 sm:py-8",
            "md:flex-row md:items-center md:justify-between",
            "lg:px-8",
          ].join(" ")}
        >
          <div className="flex flex-col gap-1">
            <p className="text-base font-semibold text-slate-950 sm:text-lg">
              Sigue a Flex Industrial
            </p>

            <p className="text-sm leading-6 text-slate-600">
              Conoce nuestros servicios, proyectos y soluciones industriales.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-2 sm:gap-3"
            aria-label="Redes sociales de Flex Industrial"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visitar ${social.label} de Flex Industrial`}
                  className={[
                    "group flex size-11 items-center justify-center",
                    "rounded-full border border-slate-300",
                    "bg-white text-slate-800",
                    "transition-[background-color,border-color,color,transform]",
                    "duration-300",
                    "hover:-translate-y-0.5",
                    "hover:border-orange-500",
                    "hover:bg-orange-500",
                    "hover:text-white",
                    "focus-visible:outline-2",
                    "focus-visible:outline-offset-2",
                    "focus-visible:outline-orange-500",
                    "sm:size-12",
                  ].join(" ")}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5 sm:size-6"
                  />
                </a>
              );
            })}

            <a
              href="mailto:contacto@flexindustrial.com"
              aria-label="Enviar correo a Flex Industrial"
              className={[
                "group flex size-11 items-center justify-center",
                "rounded-full border border-slate-300",
                "bg-white text-slate-800",
                "transition-[background-color,border-color,color,transform]",
                "duration-300",
                "hover:-translate-y-0.5",
                "hover:border-orange-500",
                "hover:bg-orange-500",
                "hover:text-white",
                "focus-visible:outline-2",
                "focus-visible:outline-offset-2",
                "focus-visible:outline-orange-500",
                "sm:size-12",
              ].join(" ")}
            >
              <Mail
                aria-hidden="true"
                className="size-5 sm:size-6"
                strokeWidth={1.9}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div
          className={[
            "grid grid-cols-1 gap-10",
            "sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12",
            "lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-12",
          ].join(" ")}
        >
          {/* Información de la empresa */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Ir al inicio de Flex Industrial"
              className="inline-flex flex-col"
            >
              <span className="text-2xl font-bold tracking-tight text-slate-950">
                Flex Industrial
              </span>

              <span className="mt-1 text-xs font-semibold tracking-[0.18em] text-orange-500 uppercase">
                Soluciones industriales
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Soluciones especializadas en mantenimiento, construcción,
              logística, transporte y renta de espacios móviles para proyectos
              industriales.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+529999999999"
                className={[
                  "flex w-fit items-start gap-3 text-sm",
                  "transition-colors duration-300",
                  "hover:text-orange-600",
                  "focus-visible:outline-2",
                  "focus-visible:outline-offset-4",
                  "focus-visible:outline-orange-500",
                ].join(" ")}
              >
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-orange-500"
                  strokeWidth={1.9}
                />

                <span>+52 999 999 9999</span>
              </a>

              <a
                href="mailto:contacto@flexindustrial.com"
                className={[
                  "flex w-fit items-start gap-3 text-sm",
                  "transition-colors duration-300",
                  "hover:text-orange-600",
                  "focus-visible:outline-2",
                  "focus-visible:outline-offset-4",
                  "focus-visible:outline-orange-500",
                ].join(" ")}
              >
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-orange-500"
                  strokeWidth={1.9}
                />

                <span className="break-all">
                  contacto@flexindustrial.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-orange-500"
                  strokeWidth={1.9}
                />

                <span className="leading-6">
                  México
                </span>
              </div>
            </div>
          </div>

          {/* Columnas de enlaces */}
          {footerSections.map((section) => (
            <nav
              key={section.title}
              aria-label={section.title}
            >
              <h2 className="text-base font-bold text-slate-950">
                {section.title}
              </h2>

              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.label}`}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={[
                          "inline-flex text-sm leading-6 text-slate-600",
                          "transition-colors duration-300",
                          "hover:text-orange-600",
                          "focus-visible:outline-2",
                          "focus-visible:outline-offset-4",
                          "focus-visible:outline-orange-500",
                        ].join(" ")}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className={[
                          "inline-flex text-sm leading-6 text-slate-600",
                          "transition-colors duration-300",
                          "hover:text-orange-600",
                          "focus-visible:outline-2",
                          "focus-visible:outline-offset-4",
                          "focus-visible:outline-orange-500",
                        ].join(" ")}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Parte inferior */}
      <div className="border-t border-slate-300">
        <div
          className={[
            "mx-auto flex w-full max-w-7xl",
            "flex-col gap-5 px-5 py-6",
            "sm:px-6",
            "lg:flex-row lg:items-center lg:justify-between lg:px-8",
          ].join(" ")}
        >
          <p className="text-center text-xs leading-5 text-slate-600 sm:text-left sm:text-sm">
            © {currentYear} Flex Industrial. Todos los derechos reservados.
          </p>

          <nav
            aria-label="Enlaces legales"
            className={[
              "flex flex-wrap items-center justify-center",
              "gap-x-5 gap-y-3",
              "lg:justify-end",
            ].join(" ")}
          >
            <Link
              to="/aviso-de-privacidad"
              className="text-xs text-slate-600 transition-colors duration-300 hover:text-orange-600 sm:text-sm"
            >
              Aviso de privacidad
            </Link>

            <Link
              to="/terminos-y-condiciones"
              className="text-xs text-slate-600 transition-colors duration-300 hover:text-orange-600 sm:text-sm"
            >
              Términos y condiciones
            </Link>

            <Link
              to="/politica-de-cookies"
              className="text-xs text-slate-600 transition-colors duration-300 hover:text-orange-600 sm:text-sm"
            >
              Política de cookies
            </Link>

            <Link
              to="/contacto"
              className="text-xs text-slate-600 transition-colors duration-300 hover:text-orange-600 sm:text-sm"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;