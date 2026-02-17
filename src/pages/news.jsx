import { useEffect, useState } from "react";
import { CryptoNewsCard } from "../components/cryptoNews";
// import { newsApi } from "../services/cryptoApi";
import { TextH1 } from "../components/text";
import { newsMock } from "../mocks/mookNews";

export function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadNews() {
      setLoading(true);
      setError("");

      try {
        const response = await newsMock;
        const newsList = Array.isArray(response?.Data) ? response.Data : [];

        const normalizedNews = newsList.map((item) => ({
          id: item.id || item.guid || item.url,
          title: item.title,
          description: item.body,
          source: item.source_info?.name || item.source,
          imageUrl: item.imageurl,
          publishedAt: item.published_on
            ? new Date(item.published_on * 1000).toISOString()
            : "",
          url: item.url,
        }));

        if (isMounted) {
          setNews(normalizedNews);
        }
      } catch {
        if (isMounted) {
          setError("No se pudieron cargar las noticias. Inténtalo de nuevo.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadNews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="mx-auto mt-20 mb-10 w-11/12 max-w-6xl">
      <TextH1 text="Noticias Crypto" className="mb-8 text-3xl font-bold" />

      {loading ? (
        <p className="rounded-xl border border-gray-300 bg-gray-100 p-6 text-center text-gray-700">
          Cargando noticias...
        </p>
      ) : null}

      {!loading && error ? (
        <p className="rounded-xl border border-red-300 bg-red-50 p-6 text-center text-red-700">
          {error}
        </p>
      ) : null}

      {!loading && !error ? (
        <div className="grid gap-4">
          {news.map((item, index) => (
            <CryptoNewsCard
              key={item.id || item.url || index}
              title={item.title}
              description={item.description}
              source={item.source}
              imageUrl={item.imageUrl}
              publishedAt={item.publishedAt}
              url={item.url}
            />
          ))}
        </div>
      ) : null}

      {!loading && !error && news.length === 0 ? (
        <p className="rounded-xl border border-gray-300 bg-gray-100 p-6 text-center text-gray-700">
          No hay noticias disponibles ahora mismo.
        </p>
      ) : null}
    </section>
  );
}
