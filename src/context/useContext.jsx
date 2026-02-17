import { createContext, useContext } from "react";
import { useFavorites as useFavoritesHook } from "../hooks/useFavorites";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const favoritesData = useFavoritesHook();

  return (
    <FavoritesContext.Provider value={favoritesData}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
