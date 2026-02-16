function formatNewsDate(dateString) {
  if (!dateString) return "Fecha no disponible";

  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.getTime())) return "Fecha no disponible";

  return parsedDate.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function CryptoNewsCard({
  title,
  description,
  source,
  imageUrl,
  publishedAt,
  url,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-300 bg-gray-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <a
        href={url || "#"}
        target="_blank"
        rel="noreferrer"
        className="grid gap-4 p-4 sm:grid-cols-[160px_1fr] sm:items-start"
      >
        <img
          src={
            imageUrl ||
            "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80"
          }
          alt={title || "Noticia crypto"}
          className="h-40 w-full rounded-xl object-cover sm:h-32"
          loading="lazy"
        />

        <div className="flex min-h-full flex-col justify-between gap-3">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              {source || "Fuente desconocida"}
            </p>
            <h3 className="line-clamp-2 text-lg font-bold leading-tight text-gray-900">
              {title || "Título no disponible"}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">
              {description || "Sin descripción disponible para esta noticia."}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>{formatNewsDate(publishedAt)}</span>
            <span className="font-semibold text-blue-700">Leer más →</span>
          </div>
        </div>
      </a>
    </article>
  );
}
