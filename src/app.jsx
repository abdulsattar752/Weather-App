import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Forecast from "./pages/Forecast";
import WeeklyForecast from "./pages/WeeklyForecast";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/weekly" element={<WeeklyForecast />} />
        
      </Routes>
    </Router>
  );
}

export default App;
