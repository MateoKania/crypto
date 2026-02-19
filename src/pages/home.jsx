import { TextH1 } from "../components/text";
import { useEffect } from "react";
import { CryptoCard } from "../components/cryptoCard";
import { useState } from "react";
import { keepInfo } from "../services/cache";

export function Home() {
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    async function loadCryptos() {
      const data = await keepInfo();
      setCrypto(data);
    }
    loadCryptos();
  }, []);

  return (
    <>
      <div className="mx-auto mt-20 flex h-auto w-full max-w-7xl flex-col items-center justify-center px-3 sm:px-4 md:w-11/12">
        <TextH1
          text="Top Cryptos"
          className="mb-6 flex text-center text-2xl font-bold sm:mb-8 md:mb-10 md:text-3xl"
        />

        <div className="w-full">
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

          <ul className="mb-10 flex w-full flex-col gap-3 rounded-lg md:gap-0">
            {crypto.map((crypto) => (
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
        </div>
      </div>
    </>
  );
}
