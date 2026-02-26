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
    <article className="overflow-hidden rounded-2xl border border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-900 shadow-sm dark:shadow-[0_8px_24px_rgba(2,6,23,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:hover:bg-slate-800 dark:hover:border-slate-600">
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
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-cyan-300">
              {source || "Fuente desconocida"}
            </p>
            <h3 className="line-clamp-2 text-lg font-bold leading-tight text-gray-900 dark:text-slate-100">
              {title || "Título no disponible"}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-gray-700 dark:text-slate-300">
              {description || "Sin descripción disponible para esta noticia."}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-slate-400">
            <span>{formatNewsDate(publishedAt)}</span>
            <span className="font-semibold text-blue-700 dark:text-cyan-300">
              Leer más →
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
