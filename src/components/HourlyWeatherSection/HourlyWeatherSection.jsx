import { useEffect } from "react";
import { useParams } from "react-router-dom";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import Title from "../Title/Title";
import NoCity from "../NoCity/NoCity";
import { useWeather } from "../../context/WeatherContext";
import {
  FaCloudShowersHeavy,
  FaCloudSun,
  FaDroplet,
  FaSun,
  FaTemperatureHalf,
  FaWind,
} from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import Error from "../Error/Error";

const HourlyWeatherSection = () => {
  const { city } = useParams();
  const { weatherData, loading, error, fetchData } = useWeather();

  useEffect(() => {
    if (city && (!weatherData || city !== weatherData.location.name)) {
      fetchData(city);
    }
  }, [city, weatherData]);

  if (!city) return <NoCity />;
  if (error) return <Error>{error}</Error>;
  if (loading || !weatherData) return <Loader />;

  return (
    <section className="px-5 sm:px-10 py-5 xl:h-full">
      <Title
        text="Hourly weather forecast for"
        city={weatherData.location.name}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {weatherData.forecast.forecastday[0].hour.map((hour) => {
          const weatherInfos = [
            {
              icon: <FaTemperatureHalf />,
              desc: "Feels like",
              value: `${Math.round(hour.feelslike_c)} °C`,
            },
            {
              icon: <FaWind />,
              desc: "Wind",
              value: `${hour.wind_kph} km/h ${hour.wind_degree}° ${hour.wind_dir}`,
            },
            {
              icon: <FaCloudSun />,
              desc: "Cloud cover",
              value: `${hour.cloud}%`,
            },
            {
              icon: <FaCloudShowersHeavy />,
              desc: "Precipitation",
              value: `${hour.precip_mm} mm`,
            },
            {
              icon: <FaDroplet />,
              desc: "Humidity",
              value: `${hour.humidity}%`,
            },
            {
              icon: <FaTemperatureHalf />,
              desc: "Dew point",
              value: `${Math.round(hour.dewpoint_c)} °C`,
            },
            {
              icon: <FaTachometerAlt />,
              desc: "Pressure",
              value: `${hour.pressure_mb} hPa`,
            },
            {
              icon: <FaSun />,
              desc: "UV Index",
              value: hour.uv,
            },
          ];

          return (
            <div
              key={hour.time_epoch}
              className="p-5 rounded-lg flex flex-col items-center text-center bg-sky-100"
            >
              <p className="text-gray-500 text-2xl">
                {new Date(hour.time_epoch * 1000).toLocaleTimeString("en-US", {
                  day: "numeric",
                  month: "short",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </p>
              <WeatherIcon
                weatherCode={hour.condition.code}
                isDay={hour.is_day}
                size={70}
              />
              <p className="text-3xl mb-4">
                {Math.round(hour.temp_c)} °C{" "}
                <span className="text-2xl">{hour.condition.text}</span>
              </p>
              <WeatherInfos weatherInfos={weatherInfos} center={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HourlyWeatherSection;
