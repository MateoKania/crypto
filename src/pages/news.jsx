import { useEffect, useState } from "react";
import { CryptoNewsCard } from "../components/cryptoNews";
import { TextH1 } from "../components/text";
import { keepNews } from "../services/cache";

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
        const response = await keepNews();
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
    <section className="mx-auto mb-10 mt-20 w-full max-w-6xl px-3 sm:px-4 md:w-11/12">
      <TextH1
        text="Noticias Crypto"
        className="mb-6 text-2xl font-bold sm:mb-8 md:text-3xl"
      />

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
