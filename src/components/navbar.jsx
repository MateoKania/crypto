import { useState } from "react";
import { NavLink } from "react-router-dom";
import monedaIcon from "../assets/moneda-icon.svg";
import { useColorMode } from "../context/useContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, changeColorMode } = useColorMode();

  const links = [
    { to: "/", label: "Mercado" },
    { to: "/grafics", label: "Graficas" },
    { to: "/favs", label: "Favoritos" },
    { to: "/news", label: "Noticias" },
    { to: "/converter", label: "Converter" },
  ];

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 drop-shadow-[0_0_6px_rgba(37,99,235,0.35)] dark:text-cyan-300 dark:drop-shadow-[0_0_6px_rgba(34,211,238,0.35)] font-bold"
      : "text-slate-700 dark:text-slate-200 hover:scale-105 hover:text-blue-700 hover:drop-shadow-[0_0_4px_rgba(37,99,235,0.25)] dark:hover:text-cyan-200 dark:hover:drop-shadow-[0_0_4px_rgba(34,211,238,0.25)] transition-colors";

  return (
    <nav className="fixed top-0 z-50 w-full border-b-2 border-gray-300 dark:border-slate-700 bg-white/95 dark:bg-slate-900 shadow-lg shadow-slate-300/60 dark:shadow-[0_10px_35px_rgba(2,6,23,0.6)] backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        <span className="font-semibold text-slate-900 dark:text-slate-100 flex flex-row items-center gap-2">
          <img src={monedaIcon} alt="Moneda" className="h-6 w-6" />
          Crypto Info
        </span>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-800 hover:bg-blue-100/80 hover:text-blue-700 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-cyan-200 md:hidden"
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
        <button
          onClick={() => changeColorMode()}
          className="border border-slate-300 bg-slate-100/90 px-3 py-1 rounded-lg text-slate-800 hover:text-blue-700 hover:border-blue-300 hover:bg-blue-50/90 dark:border dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-100 dark:hover:text-cyan-200 dark:hover:border-cyan-700 dark:hover:bg-slate-800 transition-colors"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-300 dark:border-slate-700 bg-white/95 dark:bg-slate-900 px-4 pb-4 md:hidden">
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
