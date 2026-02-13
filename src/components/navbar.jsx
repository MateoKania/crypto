import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="flex space-x-15 justify-end items-center  fixed top-0 h-1/12 w-full bg-gray-200">
        <Link to="/">Mercado</Link>
        <Link to="/favs">Favoritos</Link>
        <Link to="/news">Noticias</Link>
        <Link className="mr-20" to="/converter">
          Converter
        </Link>
      </nav>
    </>
  );
}
