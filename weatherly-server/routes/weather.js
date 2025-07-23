const express = require('express');
const axios = require('axios');
const router = express.Router();


const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
router.get('/city/:cityName', async (req, res) => {
  const { cityName } = req.params;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${WEATHER_API_KEY}`
    );

    const data = response.data;

   res.json({
    city: data.name,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    condition: data.weather[0].main,
    description: data.weather[0].description,
    wind_speed: data.wind.speed,
    visibility: data.visibility,
    coordinates: {
      lat: data.coord.lat,
      lon: data.coord.lon,
    },
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
  });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch weather data', error: err.message });
  }
});

module.exports = router;
