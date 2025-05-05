import axios from "axios";

const API_KEY = "ade49c10efd0e306a1df07cf6c5bb463"; 
// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

const getWeather = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    });

    return {
      temp: response.data.main.temp,
      condition: response.data.weather[0].description,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

export default getWeather;
