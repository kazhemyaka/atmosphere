import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import Title from "../Title/Title";

const OPENWEATHERMAP_API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const DailyWeatherSection = () => {
  const { city } = useParams();
  const [dailyWeather, setDailyWeather] = useState(null);
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

  const fetchDailyWeather = async () => {
    try {
      if (geolocationData.length > 0) {
        const { lat, lon } = geolocationData[0];

        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,hourly&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        console.log(data);
        setDailyWeather(data);
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
      fetchDailyWeather();
    }
  }, [geolocationData]);

  useEffect(() => {
    setDailyWeather(null);
    setGeolocationData([]);
    setError(null);
  }, [city]);

  if (!dailyWeather || !geolocationData.length) {
    return <Loader />;
  }

  return (
    <section className="px-5 sm:px-10 py-5 xl:h-full">
      <Title text="Daily weather forecast for" city={geolocationData[0].name} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {dailyWeather.daily.map((day) => (
          <div
            key={day.dt}
            className="p-5 rounded-lg flex flex-col items-center text-center bg-sky-100"
          >
            <p className="text-gray-500 text-2xl">
              {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "short",
              })}
            </p>
            <WeatherIcon iconCode={day.weather[0].icon} size={70} />
            <p className="text-lg mb-2">{day.weather[0].main}</p>
            <p className="text-lg mb-2">{day.summary}</p>
            <div className="text-2xl flex gap-5 mb-4">
              <div>
                <span className="text-lg">Min: </span>
                {Math.round(day.temp.min)} °C{" "}
              </div>
              <div>
                <span className="text-lg">Max: </span>
                {Math.round(day.temp.max)} °C{" "}
              </div>
            </div>
            <WeatherInfos weatherData={day} center={true} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyWeatherSection;
