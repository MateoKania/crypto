import { useState } from "react";
import { NavLink } from "react-router-dom";
import monedaIcon from "../assets/moneda-icon.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Mercado" },
    { to: "/grafics", label: "Graficas" },
    { to: "/favs", label: "Favoritos" },
    { to: "/news", label: "Noticias" },
    { to: "/converter", label: "Converter" },
  ];

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-bold"
      : "text-gray-800 hover:scale-105 hover:text-blue-600 transition-colors";

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-black bg-gray-200 shadow-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        <span className="font-semibold text-gray-900 flex flex-row items-center gap-2">
          <img src={monedaIcon} alt="Moneda" className="h-6 w-6" />
          Crypto Info
        </span>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-900 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Menú</span>
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition-transform duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={getLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-black/20 bg-gray-200 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={getLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
