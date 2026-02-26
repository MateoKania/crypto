import { createContext, useContext } from "react";
import { useFavorites as useFavoritesHook } from "../hooks/useFavorites";
import { useState } from "react";
import { useEffect } from "react";

const FavoritesContext = createContext();
const ColorModeContext = createContext();

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

export const ColorModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  function changeColorMode() {
    setDarkMode(!darkMode);
  }
  useEffect(() => {
    const saved = localStorage.getItem("saveMode");
    if (saved === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saveMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <ColorModeContext.Provider value={{ darkMode, changeColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => {
  return useContext(ColorModeContext);
};
