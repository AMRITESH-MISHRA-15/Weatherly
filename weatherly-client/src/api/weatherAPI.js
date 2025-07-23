import axios from "axios";

const BASE_URL = "http://localhost:5000/api/weather";

export const fetchWeather = async (cityName) => {
  try {
    const response = await axios.get(`${BASE_URL}/city/${cityName}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch weather");
  }
};
