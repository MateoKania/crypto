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
      className="border border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 transition-all duration-200 hover:-translate-y-0.5 dark:hover:bg-slate-800 dark:hover:border-slate-600 dark:hover:shadow-[0_8px_24px_rgba(2,6,23,0.45)] hover:bg-gray-300"
    >
      <div className="p-3 md:hidden">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={image} alt={name} className="h-8 w-8" />
            <div>
              <p className="font-semibold dark:text-slate-100 text-gray-900">
                {name}
              </p>
              <p className="text-xs uppercase text-gray-600 dark:text-slate-400">
                {symbol}
              </p>
            </div>
          </div>

          <button
            onClick={handleFavorite}
            className="h-10 w-10 rounded p-1 dark:hover:bg-slate-700/70"
          >
            <img src={favoriteIcon} alt={favoriteAlt} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
          <p className="text-gray-600 dark:text-slate-400">Price</p>
          <p className="text-right font-medium dark:text-slate-100">
            {formatter.format(price)}
          </p>

          <p className="text-gray-600 dark:text-slate-400">Volume</p>
          <p className="text-right font-medium dark:text-slate-100">
            {formatter.format(volume)}
          </p>

          <p className="text-gray-600 dark:text-slate-400">Market Cap</p>
          <p className="text-right font-medium dark:text-slate-100">
            {formatter.format(marketCap)}
          </p>

          <p className="text-gray-600 dark:text-slate-400">Change 24h</p>
          <p className={`text-right font-semibold ${changeColor}`}>
            {formatter.format(change24h)}%
          </p>
        </div>
      </div>

      <div className="hidden grid-cols-[40px_1fr_100px_120px_180px_180px_120px_120px] items-center justify-items-end gap-x-4 p-2 md:grid">
        <img src={image} alt={name} />
        <p className="ml-4 justify-self-start font-semibold dark:text-slate-100 text-gray-900">
          {name}
        </p>
        <p className="justify-self-start dark:text-slate-200 text-gray-900">
          {symbol.toUpperCase()}
        </p>
        <p className="dark:text-slate-100 text-gray-900">
          {formatter.format(price)}
        </p>
        <p className="dark:text-slate-100 text-gray-900">
          {formatter.format(marketCap)}
        </p>
        <p className="dark:text-slate-100 text-gray-900">
          {formatter.format(volume)}
        </p>
        <p className={changeColor}>{formatter.format(change24h)}%</p>
        <button
          onClick={handleFavorite}
          className="h-12 w-12 rounded p-2 dark:hover:bg-slate-700/70"
        >
          <img src={favoriteIcon} alt={favoriteAlt} />
        </button>
      </div>
    </li>
  );
}
