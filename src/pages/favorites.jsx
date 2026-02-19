import { TextH1 } from "../components/text";
import { CryptoCard } from "../components/cryptoCard";
import { useFavorites } from "../context/useContext";
import { keepInfo } from "../services/cache";
import { AreaChartFillByValue } from "../components/cryptoGrafics";
import { useEffect, useState } from "react";

export function Favorites() {
  const { favorites } = useFavorites();
  const [favoriteCryptos, setFavoriteCryptos] = useState([]);

  useEffect(() => {
    async function loadCryptos() {
      const data = await keepInfo();
      setFavoriteCryptos(
        data.filter((crypto) => favorites.includes(crypto.id))
      );
    }
    loadCryptos();
  }, [favorites]);

  return (
    <div className="mx-auto mt-20 flex h-auto w-full max-w-7xl flex-col items-center justify-center px-3 sm:px-4 md:w-11/12">
      <TextH1
        text="Mis Favoritas"
        className="mb-6 flex text-center text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl"
      />

      {favoriteCryptos.length === 0 ? (
        <p className="text-center text-base text-gray-500 sm:text-lg">
          No tienes favoritas aún. Añade algunas desde el mercado
        </p>
      ) : (
        <>
          <div className="hidden w-full grid-cols-[40px_1fr_100px_120px_180px_180px_120px_120px] items-center justify-items-end gap-x-4 p-2 text-sm font-semibold uppercase md:grid">
            <p>#</p>
            <p className="ml-4 justify-self-start">Name</p>
            <p className="justify-self-start">Sym</p>
            <p>Price</p>
            <p>Volume</p>
            <p>Market Cap</p>
            <p>Change 24h</p>
            <p>Favoritos</p>
          </div>
          <ul className="mb-8 flex w-full flex-col gap-3 rounded-lg md:mb-10 md:gap-0">
            {favoriteCryptos.map((crypto) => (
              <CryptoCard
                key={crypto.id}
                id={crypto.id}
                symbol={crypto.symbol}
                image={crypto.image}
                name={crypto.name}
                marketCap={crypto.market_cap}
                volume={crypto.total_volume}
                price={crypto.current_price}
                change24h={crypto.price_change_percentage_24h}
              />
            ))}
          </ul>

          <div className="mt-6 w-full space-y-6 sm:space-y-8 md:mt-10">
            {favoriteCryptos.map((crypto) => (
              <div
                key={`chart-${crypto.id}`}
                className="rounded-lg border-2 border-gray-300 p-3 sm:p-4"
              >
                <h2 className="mb-3 text-center text-xl font-bold sm:mb-4 sm:text-2xl">
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </h2>
                <AreaChartFillByValue cryptoId={crypto.id} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
