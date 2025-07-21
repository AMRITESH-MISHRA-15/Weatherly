import React from "react";

function WeatherCard({ weatherData }) {
  if (!weatherData) {
    return (
      <div className="text-center text-gray-400 mt-10">
        Search for a city to see the weather.
      </div>
    );
  }

  const {
    city,
    country,
    temperature,
    description,
    icon,
    feelsLike,
    humidity,
    windSpeed,
  } = weatherData;

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-xl rounded-2xl p-6 max-w-md mx-auto mt-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{city}, {country}</h2>
          <p className="text-gray-500 capitalize">{description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather Icon"
          className="w-16 h-16"
        />
      </div>

      <div className="mt-6 flex justify-between text-center">
        <div>
          <h3 className="text-4xl font-bold">{temperature}°C</h3>
          <p className="text-gray-500 text-sm">Feels like {feelsLike}°C</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">💧 Humidity: {humidity}%</p>
          <p className="text-sm text-gray-600">💨 Wind: {windSpeed} km/h</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
