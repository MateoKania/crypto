import "./style.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Favorites } from "./pages/favorites";
import { Navbar } from "./components/navbar";
import { News } from "./pages/news";
import { Converter } from "./pages/converter";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="/news" element={<News />} />
        <Route path="/converter" element={<Converter />} />
      </Routes>
    </>
  );
}

export default App;
