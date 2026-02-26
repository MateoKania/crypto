import { useState, useEffect } from "react";
import { formatterCrypto } from "../utils/formatNumbers";
import { TextH1 } from "../components/text";
import { keepPrice } from "../services/cache";

export function Converter() {
  const [input, setInput] = useState(1);
  const [convertApi, setConvertApi] = useState({});
  const [priceFrom, setPriceFrom] = useState(0);
  const [amountOf, setAmountOf] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPrices() {
      try {
        const response = await keepPrice();
        setConvertApi(response);
        setPriceFrom(response.bitcoin.usd);
        setAmountOf(response.usd.usd);
      } catch (error) {
        console.error("Error fetching price:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPrices();
  }, []);

  const keys = Object.keys(convertApi);

  function getInput(e) {
    setInput(Number(e.target.value));
  }

  function calculoCrypto({ input, precioFrom, cantidadTo }) {
    return (input * precioFrom) / cantidadTo;
  }

  function selectCrypto(e) {
    setPriceFrom(convertApi[e.target.value].usd);
  }

  function selectCrypto2(e) {
    setAmountOf(convertApi[e.target.value].usd);
  }

  return (
    <>
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 dark:border-cyan-300 border-gray-700 border-t-transparent"></span>
      ) : null}
      {!loading && (
        <div className="flex w-full flex-col items-center justify-center">
          <TextH1
            text="Converter Crypto"
            className="mb-6 flex text-center text-2xl font-bold text-slate-900 dark:text-slate-100 sm:mb-8 md:mb-10 md:text-3xl"
          />
          <div className="grid w-full max-w-3xl grid-cols-2 gap-3 rounded-2xl border border-gray-300 dark:border-slate-700 bg-gray-200 dark:bg-slate-900 dark:shadow-[0_14px_40px_rgba(2,6,23,0.5)] p-4 sm:p-6 md:flex md:flex-row md:items-center md:gap-4">
            <input
              className="h-10 w-full text-black dark:text-slate-100 rounded-2xl border dark:border-slate-600 dark:focus:border-cyan-400 dark:focus:ring-2 dark:focus:ring-cyan-700/40 border-gray-300 bg-white px-2 text-center dark:bg-slate-800"
              type="number"
              value={input}
              onChange={getInput}
            ></input>
            <select
              className="h-10 w-full text-black dark:text-slate-100 rounded-2xl border dark:border-slate-600 dark:focus:border-cyan-400 dark:focus:ring-2 dark:focus:ring-cyan-700/40 border-gray-300 bg-white px-2 text-center md:w-52 dark:bg-slate-800"
              onChange={selectCrypto}
              defaultValue="bitcoin"
            >
              {keys.map((nombre) => {
                return (
                  <option key={nombre} value={nombre}>
                    {nombre}
                  </option>
                );
              })}
            </select>

            <p className="flex h-10 w-full items-center text-black dark:text-slate-100 justify-center dark:bg-slate-800 rounded-2xl border border-gray-300 dark:border-slate-600 dark:shadow-inner dark:shadow-slate-950/70 bg-white text-center md:w-52">
              {formatterCrypto.format(
                calculoCrypto({
                  input,
                  precioFrom: priceFrom,
                  cantidadTo: amountOf,
                })
              )}
            </p>
            <select
              className="h-10 w-full text-black dark:text-slate-100 rounded-2xl border dark:border-slate-600 dark:focus:border-cyan-400 dark:focus:ring-2 dark:focus:ring-cyan-700/40 border-gray-300 bg-white px-2 text-center md:w-52 dark:bg-slate-800"
              onChange={selectCrypto2}
              defaultValue="usd"
            >
              {keys.map((nombre) => {
                return (
                  <option key={nombre} value={nombre}>
                    {nombre}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
    </>
  );
}
