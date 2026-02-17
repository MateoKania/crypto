// import { TextH1 } from "../components/text";

// export function Favorites() {
//   return (
//     <>
//       <div className="flex h-screen items-center justify-center">
//         <TextH1 text="Favoritos" />
//       </div>
//     </>
//   );
// }

import { TextH1 } from "../components/text";
import { CryptoCard } from "../components/cryptoCard";
import { useFavorites } from "../context/useContext";
import { mockData } from "../mocks/mook";
import { AreaChartFillByValue } from "../components/cryptoGrafics";

export function Favorites() {
  const { favorites } = useFavorites();

  const favoriteCryptos = mockData.filter((crypto) =>
    favorites.includes(crypto.id)
  );

  return (
    <div className="flex flex-col h-auto mt-20 items-center justify-center w-9/12 mx-auto">
      <TextH1
        text="Mis Favoritas"
        className="mb-10 flex text-center text-3xl font-bold"
      />

      {favoriteCryptos.length === 0 ? (
        <p className="text-gray-500 text-lg">
          No tienes favoritas aún. Añade algunas desde el mercado ⭐
        </p>
      ) : (
        <>
          <div className="grid grid-cols-[40px_1fr_100px_120px_180px_180px_120px_120px] items-center justify-items-end gap-x-4 w-full p-2 text-sm font-semibold uppercase">
            <p>#</p>
            <p className="ml-4 justify-self-start">Name</p>
            <p className="justify-self-start">Sym</p>
            <p>Price</p>
            <p>Volume</p>
            <p>Market Cap</p>
            <p>Change 24h</p>
            <p>Favoritos</p>
          </div>
          <ul className="flex flex-col w-full rounded-lg mb-10">
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

          <div className="w-full space-y-8 mt-10">
            {favoriteCryptos.map((crypto) => (
              <div
                key={`chart-${crypto.id}`}
                className="border-2 border-gray-300 rounded-lg p-4"
              >
                <h2 className="text-2xl font-bold mb-4 text-center">
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
