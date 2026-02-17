import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Forecast from "./pages/Forecast";
import WeeklyForecast from "./pages/WeeklyForecast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  // Simple auth check using localStorage
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      {/* Show Navbar only if logged in */}
      {isLoggedIn && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/weather" element={isLoggedIn ? <Weather /> : <Navigate to="/login" />} />
        <Route path="/forecast" element={isLoggedIn ? <Forecast /> : <Navigate to="/login" />} />
        <Route path="/weekly" element={isLoggedIn ? <WeeklyForecast /> : <Navigate to="/login" />} />

        {/* Catch all - redirect unknown URLs */}
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
