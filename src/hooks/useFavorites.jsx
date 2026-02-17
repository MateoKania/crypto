import { useState, useEffect } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("cryptoFavorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cryptoFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (cryptoId) => {
    setFavorites((prev) => [...prev, cryptoId]);
  };

  const removeFavorite = (cryptoId) => {
    setFavorites((prev) => prev.filter((id) => id !== cryptoId));
  };

  const isFavorite = (cryptoId) => {
    return favorites.includes(cryptoId);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
}
