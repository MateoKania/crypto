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
