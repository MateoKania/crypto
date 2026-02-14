import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="flex space-x-25 justify-end items-center  fixed top-0 h-1/12 w-full  bg-gray-200 z-50 border-b-2 border-black shadow-lg mr-20">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:scale-110"
          }
        >
          Mercado
        </NavLink>
        <NavLink
          to="/favs"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:scale-110"
          }
        >
          Favoritos
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:scale-110"
          }
        >
          Noticias
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold mr-20" : "hover:scale-110 mr-20"
          }
          to="/converter"
        >
          Converter
        </NavLink>
      </nav>
    </>
  );
}
