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
      <div className="flex h-auto mt-20 items-center justify-center w-9/12 mx-auto ">
        <ul className="flex flex-col w-full  ">
          {mockData.map((crypto) => (
            <CryptoCard
              id={crypto.id}
              image={crypto.image}
              name={crypto.name}
              price={crypto.current_price}
              change24h={crypto.price_change_percentage_24h}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
