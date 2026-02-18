export async function priceApi() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=usd,bitcoin,ethereum,solana,cardano,tether,binancecoin&vs_currencies=usd"
    );
    if (!response.ok) {
      throw new Error(`News request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching price:", error);
    throw error;
  }
}
