import "./style.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Favorites } from "./pages/favorites";
import { Grafics } from "./pages/grafics";
import { Navbar } from "./components/navbar";
import { News } from "./pages/news";
import { ConverterPage } from "./pages/converter";
import { FavoritesProvider } from "./context/useContext";
import { ColorModeProvider } from "./context/useContext";

function App() {
  return (
    <>
      <FavoritesProvider>
        <ColorModeProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grafics" element={<Grafics />} />
            <Route path="/favs" element={<Favorites />} />
            <Route path="/news" element={<News />} />
            <Route path="/converter" element={<ConverterPage />} />
          </Routes>
        </ColorModeProvider>
      </FavoritesProvider>
    </>
  );
}

export default App;
