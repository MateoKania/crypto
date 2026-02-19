import { formatter } from "../utils/formatNumbers";
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

  const favoriteIcon = isCurrentlyFavorite ? estrellaAmarilla : estrellaVacia;
  const favoriteAlt = isCurrentlyFavorite
    ? "estrellaAmarilla"
    : "estrellaVacia";

  return (
    <li
      key={id}
      className="border border-gray-300 bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-300"
    >
      <div className="p-3 md:hidden">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={image} alt={name} className="h-8 w-8" />
            <div>
              <p className="font-semibold text-gray-900">{name}</p>
              <p className="text-xs uppercase text-gray-600">{symbol}</p>
            </div>
          </div>

          <button onClick={handleFavorite} className="h-10 w-10 rounded p-1">
            <img src={favoriteIcon} alt={favoriteAlt} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
          <p className="text-gray-600">Price</p>
          <p className="text-right font-medium">{formatter.format(price)}</p>

          <p className="text-gray-600">Volume</p>
          <p className="text-right font-medium">{formatter.format(volume)}</p>

          <p className="text-gray-600">Market Cap</p>
          <p className="text-right font-medium">
            {formatter.format(marketCap)}
          </p>

          <p className="text-gray-600">Change 24h</p>
          <p className={`text-right font-semibold ${changeColor}`}>
            {formatter.format(change24h)}%
          </p>
        </div>
      </div>

      <div className="hidden grid-cols-[40px_1fr_100px_120px_180px_180px_120px_120px] items-center justify-items-end gap-x-4 p-2 md:grid">
        <img src={image} alt={name} />
        <p className="ml-4 justify-self-start font-semibold">{name}</p>
        <p className="justify-self-start">{symbol.toUpperCase()}</p>
        <p>{formatter.format(price)}</p>
        <p>{formatter.format(marketCap)}</p>
        <p>{formatter.format(volume)}</p>
        <p className={changeColor}>{formatter.format(change24h)}%</p>
        <button onClick={handleFavorite} className="h-12 w-12 rounded p-2">
          <img src={favoriteIcon} alt={favoriteAlt} />
        </button>
      </div>
    </li>
  );
}
