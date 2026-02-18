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
