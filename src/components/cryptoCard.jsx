export function CryptoCard({ id, image, name, price, change24h }) {
  return (
    <li
      key={id}
      className="items-center grid grid-cols-[40px_1fr_100px_100px] p-2 bg-gray-200 rounded-lg  border-b-2 border-black"
    >
      <img src={image} alt={name} />
      <p className="ml-4">{name}</p>
      <p>{price}$</p>
      <p>{change24h}%</p>
    </li>
  );
}
