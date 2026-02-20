import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CurrentWeather from "./pages/CurrentWeather";
import Forecast from "./pages/Forecast";
import AirQuality from "./pages/AirQuality";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <div style={{minHeight: "80vh", padding: "20px", backgroundColor: "#F1F5F9"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/current" element={<CurrentWeather />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/air-quality" element={<AirQuality />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;