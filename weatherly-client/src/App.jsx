import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  // Dummy data for now
  const mockWeatherData = {
    city: "Delhi",
    country: "IN",
    temperature: 32,
    description: "Clear sky",
    icon: "01d",
    feelsLike: 35,
    humidity: 42,
    windSpeed: 10,
  };

  return (
    <>
      <Navbar />
      <SearchBar />
      <WeatherCard weatherData={mockWeatherData} />
    </>
  );
}

export default App;
