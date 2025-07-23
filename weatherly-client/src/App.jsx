// src/App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./api/weatherAPI";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col justify-start">
      <div className="w-full flex flex-col gap-8 px-4 sm:px-12 lg:px-24">
        <Navbar />
        <SearchBar onSearch={handleSearch} />
        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && <p className="text-center text-red-300">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
