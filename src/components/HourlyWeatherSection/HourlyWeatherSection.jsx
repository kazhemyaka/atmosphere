import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";
import WeatherInfos from "../WeatherInfos/WeatherInfos";

const OPENWEATHERMAP_API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const HourlyWeatherSection = () => {
  const { city } = useParams();
  const [hourlyWeather, setHourlyWeather] = useState(null);
  const [geolocationData, setGeolocationData] = useState([]);
  const [error, setError] = useState(null);

  const fetchGeolocation = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${OPENWEATHERMAP_API_KEY}`
      );
      const data = await response.json();
      setGeolocationData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const fetchHourlyWeather = async () => {
    try {
      if (geolocationData.length > 0) {
        const { lat, lon } = geolocationData[0];

        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,daily,alerts&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        console.log(data);
        setHourlyWeather(data);
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const getWindDirection = (degrees) => {
    const directions = [
      "↓ N",
      "↙ NE",
      "← E",
      "↖ SE",
      "↑ S",
      "↗ SW",
      "→ W",
      "↘ NW",
    ];
    return directions[Math.round(degrees / 45) % 8];
  };

  useEffect(() => {
    fetchGeolocation();
  }, [city]);

  useEffect(() => {
    if (geolocationData.length > 0) {
      fetchHourlyWeather();
    }
  }, [geolocationData]);

  useEffect(() => {
    setHourlyWeather(null);
    setGeolocationData([]);
    setError(null);
  }, [city]);

  if (!hourlyWeather || !geolocationData) {
    return <Loader />;
  }

  return (
    <section className="px-5 sm:px-10 py-5 xl:h-full">
      <h1 className="text-4xl sm:text-5xl font-bold mb-10">
        Hourly weather forecast for{" "}
        <span className="bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent">
          {geolocationData[0].name}
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {hourlyWeather.hourly.map((hour) => (
          <div
            key={hour.dt}
            className="p-5 rounded-lg flex flex-col items-center text-center bg-sky-100"
          >
            <p className="text-gray-500 text-2xl">
              {new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
                day: "numeric",
                month: "short",
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
            <WeatherIcon iconCode={hour.weather[0].icon} size={70} />
            <p className="text-2xl mb-5">
              {Math.round(hour.temp)} °C{" "}
              <span className="text-lg">{hour.weather[0].main}</span>
            </p>
            <WeatherInfos weatherData={hour} center={true} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyWeatherSection;
