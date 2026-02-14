export function createCrypto(data) {
  return {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    price: data.current_price,
    marketCap: data.market_cap,
    volume: data.total_volume,
    change24h: data.price_change_percentage_24h,
    image: data.image,
    isFavorite: false,
  };
}
