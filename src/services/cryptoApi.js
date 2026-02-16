export async function getTopCryptos() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching cryptos:", error);
    throw error;
  }
}

// export async function getHistoryCrypto({ cryptoId, days }) {
//   try {
//     const response = await fetch(
//       `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=${days}`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching history:", error);
//     throw error;
//   }
// }

export async function newsApi() {
  try {
    const response = await fetch(
      "https://min-api.cryptocompare.com/data/v2/news/?lang=ES"
    );

    if (!response.ok) {
      throw new Error(`News request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}
