import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useState, useEffect } from "react";
import { mockData } from "../mocks/mookGrafics";

const Gradient = () => {
  return (
    <defs>
      <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  );
};

export const AreaChartFillByValue = () => {
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(7);
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const cryptos = [
    { id: "bitcoin", name: "Bitcoin" },
    { id: "ethereum", name: "Ethereum" },
    { id: "tether", name: "Tether" },
    { id: "binancecoin", name: "BNB" },
    { id: "solana", name: "Solana" },
  ];

  useEffect(() => {
    function loadChartData() {
      setLoading(true);

      const formattedData = mockData.prices.map(([timestamp, price]) => ({
        time: new Date(timestamp).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        price: price,
      }));

      setChartData(formattedData);
      setLoading(false);
    }

    loadChartData();
  }, [days]);
  if (loading) {
    return <p>Cargando gráfica...</p>;
  }

  if (chartData.length === 0) {
    return <p>No hay datos disponibles</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        {cryptos.map((crypto) => (
          <button
            key={crypto.id}
            onClick={() => setSelectedCrypto(crypto.id)}
            className={`px-4 py-2 rounded ${
              selectedCrypto === crypto.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {crypto.name}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mb-4 justify-center">
        <button
          onClick={() => setDays(1)}
          className={`px-4 py-2 rounded ${
            days === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          24H
        </button>
        <button
          onClick={() => setDays(7)}
          className={`px-4 py-2 rounded ${
            days === 7 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          7D
        </button>
        <button
          onClick={() => setDays(30)}
          className={`px-4 py-2 rounded ${
            days === 30 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          30D
        </button>
        <button
          onClick={() => setDays(365)}
          className={`px-4 py-2 rounded ${
            days === 365 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          1Y
        </button>
      </div>

      <AreaChart
        className="mx-auto"
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        data={chartData}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis width="auto" />
        <Tooltip
          formatter={(value) =>
            `$${value.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`
          }
        />
        <Gradient chartData={chartData} />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    </div>
  );
};
