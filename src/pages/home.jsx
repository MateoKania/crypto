import { TextH1 } from "../components/text";
// import { useEffect } from "react";
import { CryptoCard } from "../components/cryptoCard";
// import { getTopCryptos } from "../services/cryptoApi";
// import { useState } from "react";
import { mockData } from "../mocks/mook";

export function Home() {
  // const [crypto, setCrypto] = useState([]);

  // useEffect(() => {
  //   async function loadCryptos() {
  //     const data = await getTopCryptos();
  //     setCrypto(data);
  //   }
  //   loadCryptos();
  // }, []);

  return (
    <>
      <div className="flex flex-col h-auto mt-20 items-center justify-center w-9/12 mx-auto">
        <TextH1
          text="Top Cryptos"
          className="mb-10 flex text-center text-3xl font-bold"
        />
        <div className="grid grid-cols-[40px_1fr_100px_120px_180px_180px_120px] items-center justify-items-end gap-x-4 w-full p-2 text-sm font-semibold uppercase  border-b-2">
          <p>#</p>
          <p className="ml-4 justify-self-start">Name</p>
          <p className="justify-self-start">Sym</p>
          <p>Price</p>
          <p>Volume</p>
          <p>Market Cap</p>
          <p>Change 24h</p>
        </div>
        <ul className="flex flex-col w-full rounded-lg ">
          {mockData.map((crypto) => (
            <CryptoCard
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
    </>
  );
}
