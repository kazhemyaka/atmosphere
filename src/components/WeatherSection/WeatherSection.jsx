import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "09047e3382ae3a02c27e67fe96f35723";

const WeatherSection = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const geolocationResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );
      const geolocationData = await geolocationResponse.json();

      if (geolocationData.length > 0) {
        const { lat, lon } = geolocationData[0];

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);
      } else {
        console.error("City not found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>{weatherData.current.temp}</p>
    </div>
  );
};

export default WeatherSection;
