import { getTopCryptos } from "./cryptoApi";
import { newsApi } from "./newsApi";
import { priceApi } from "./priceApi";
import { getHistoryCrypto } from "./historyApi";

export async function keepInfo() {
  const cache = localStorage.getItem("getInfoCrypto");
  const cacheDate = localStorage.getItem("getInfoCryptoDate");

  if (cache && cacheDate && Date.now() - Number(cacheDate) < 5 * 60 * 1000) {
    return JSON.parse(cache);
  } else {
    const data = await getTopCryptos();
    localStorage.setItem("getInfoCrypto", JSON.stringify(data));
    localStorage.setItem("getInfoCryptoDate", Date.now());
    return data;
  }
}

export async function keepNews() {
  const cache = localStorage.getItem("getNewsCrypto");
  const cacheDate = localStorage.getItem("getNewsCryptoDate");

  if (cache && cacheDate && Date.now() - Number(cacheDate) < 5 * 60 * 1000) {
    return JSON.parse(cache);
  } else {
    const data = await newsApi();
    localStorage.setItem("getNewsCrypto", JSON.stringify(data));
    localStorage.setItem("getNewsCryptoDate", Date.now());
    return data;
  }
}

export async function keepPrice() {
  const cache = localStorage.getItem("getPriceCrypto");
  const cacheDate = localStorage.getItem("getPriceCryptoDate");

  if (cache && cacheDate && Date.now() - Number(cacheDate) < 5 * 60 * 1000) {
    return JSON.parse(cache);
  } else {
    const data = await priceApi();
    localStorage.setItem("getPriceCrypto", JSON.stringify(data));
    localStorage.setItem("getPriceCryptoDate", Date.now());
    return data;
  }
}

export async function keepHistory(cryptoId, days) {
  const key = `history_${cryptoId}_${days}`;
  const cache = localStorage.getItem(key);
  const cacheDate = localStorage.getItem(`${key}Date`);

  if (cache && cacheDate && Date.now() - Number(cacheDate) < 5 * 60 * 1000) {
    return JSON.parse(cache);
  } else {
    const data = await getHistoryCrypto({ cryptoId, days });
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(`${key}Date`, Date.now());
    return data;
  }
}
