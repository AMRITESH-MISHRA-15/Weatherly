// src/components/WeatherCard.jsx
function WeatherCard({ weather }) {
  const { city, temperature, humidity, condition } = weather;

  return (
    <div className="w-full bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl border border-white/30">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">{city}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-lg sm:text-xl">
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🌡 {temperature}°C</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">💧 Humidity: {humidity}%</div>
        <div className="bg-white/10 p-4 rounded-xl text-center shadow-inner">🌥 Condition: {condition}</div>
      </div>
    </div>
  );
}

export default WeatherCard;
