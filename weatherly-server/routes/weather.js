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
      humidity: data.main.humidity,
      condition: data.weather[0].main,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch weather data', error: err.message });
  }
});

module.exports = router;
