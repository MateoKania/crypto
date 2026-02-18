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
