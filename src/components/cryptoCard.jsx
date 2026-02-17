import { formatter } from "../utils/formatNumbers";
// import { useState } from "react";
import estrellaVacia from "../assets/estrellaVacia.png";
import estrellaAmarilla from "../assets/estrellaAmarilla.png";
import { useFavorites } from "../context/useContext";

export function CryptoCard({
  id,
  image,
  symbol,
  name,
  marketCap,
  volume,
  price,
  change24h,
}) {
  const changeColor = change24h > 0 ? "text-green-500" : "text-red-500";

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isCurrentlyFavorite = isFavorite(id);

  const handleFavorite = () => {
    if (isCurrentlyFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <li
      key={id}
      className="grid grid-cols-[40px_1fr_100px_120px_180px_180px_120px_120px] items-center justify-items-end gap-x-4 p-2  hover:-translate-y-0.5  transition-all duration-200 border border-gray-300 bg-gray-100 hover:bg-gray-300 "
    >
      <img src={image} alt={name} />
      <p className="ml-4 justify-self-start font-semibold">{name}</p>
      <p className="justify-self-start">{symbol.toUpperCase()}</p>
      <p>{formatter.format(price)}</p>
      <p>{formatter.format(marketCap)}</p>
      <p>{formatter.format(volume)}</p>
      <p className={changeColor}>{formatter.format(change24h)}%</p>
      <button onClick={handleFavorite} className=" w-12 h-12 p-2 rounded">
        {isCurrentlyFavorite ? (
          <img src={estrellaAmarilla} alt="estrellaAmarilla" />
        ) : (
          <img src={estrellaVacia} alt="estrellaVacia" />
        )}
      </button>
    </li>
  );
}
