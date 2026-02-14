import { formatter } from "../utils/formatNumbers";

export function CryptoCard({
  id,
  image,
  symbol,
  name,
  marketCap,
  volume,
  price,
  change24h,
}) {
  const changeColor = change24h > 0 ? "text-green-500" : "text-red-500";

  return (
    <li
      key={id}
      className="grid grid-cols-[40px_1fr_100px_120px_180px_180px_120px] items-center justify-items-end gap-x-4 p-2  border-b-2  transition-colors duration-200 bg-gray-200 hover:bg-gray-300 "
    >
      <img src={image} alt={name} />
      <p className="ml-4 justify-self-start font-semibold">{name}</p>
      <p className="justify-self-start">{symbol.toUpperCase()}</p>
      <p>{formatter.format(price)}</p>
      <p>{formatter.format(marketCap)}</p>
      <p>{formatter.format(volume)}</p>
      <p className={changeColor}>{formatter.format(change24h)}%</p>
    </li>
  );
}
