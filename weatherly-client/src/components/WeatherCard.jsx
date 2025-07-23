// src/components/WeatherCard.jsx
function WeatherCard({ weather }) {
  const {
    city,
    temperature,
    feels_like,
    humidity,
    condition,
    description,
    wind_speed,
    visibility,
    coordinates,
    sunrise,
    sunset,
  } = weather;

  // Convert sunrise/sunset Unix timestamps to readable time
  const formatTime = (unix) =>
    new Date(unix * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="w-full bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl border border-white/30">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">{city}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg sm:text-xl">
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🌡 Temperature: {temperature}°C</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🤒 Feels Like: {feels_like}°C</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">💧 Humidity: {humidity}%</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🌥 Condition: {condition} ({description})</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">💨 Wind Speed: {wind_speed} m/s</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">👁 Visibility: {visibility / 1000} km</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🧭 Coordinates: {coordinates.lat}, {coordinates.lon}</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🌅 Sunrise: {formatTime(sunrise)}</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🌇 Sunset: {formatTime(sunset)}</div>
      </div>
    </div>
  );
}

export default WeatherCard;
