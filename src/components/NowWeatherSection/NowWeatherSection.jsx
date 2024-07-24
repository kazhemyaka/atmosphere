import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWeather } from "../../context/WeatherContext";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import NoCity from "../NoCity/NoCity";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import {
  FaCloudShowersHeavy,
  FaCloudSun,
  FaDroplet,
  FaSun,
  FaTemperatureHalf,
  FaWind,
} from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";

const NowWeatherSection = () => {
  const { city } = useParams();
  const { weatherData, cityPhoto, error, loading, fetchData } = useWeather();

  useEffect(() => {
    if (city && (!weatherData || city !== weatherData.location.name)) {
      fetchData(city);
    }
  }, [city, weatherData]);

  if (!city) return <NoCity />;
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>No weather data available</div>;

  const weatherInfos = [
    {
      icon: <FaTemperatureHalf />,
      desc: "Feels like",
      value: `${Math.round(weatherData.current.feelslike_c)} °C`,
    },
    {
      icon: <FaWind />,
      desc: "Wind",
      value: `${weatherData.current.wind_kph} km/h ${weatherData.current.wind_degree}° ${weatherData.current.wind_dir}`,
    },
    {
      icon: <FaCloudSun />,
      desc: "Cloud cover",
      value: `${weatherData.current.cloud}%`,
    },
    {
      icon: <FaCloudShowersHeavy />,
      desc: "Precipitation",
      value: `${weatherData.current.precip_mm} mm`,
    },
    {
      icon: <FaDroplet />,
      desc: "Humidity",
      value: `${weatherData.current.humidity}%`,
    },
    {
      icon: <FaTemperatureHalf />,
      desc: "Dew point",
      value: `${Math.round(weatherData.current.dewpoint_c)} °C`,
    },
    {
      icon: <FaTachometerAlt />,
      desc: "Pressure",
      value: `${weatherData.current.pressure_mb} hPa`,
    },
    {
      icon: <FaSun />,
      desc: "UV Index",
      value: weatherData.current.uv,
    },
  ];

  return (
    <section className="px-5 sm:px-10 py-5 flex gap-7 xl:h-full flex-wrap-reverse xl:flex-nowrap">
      <div
        className={`basis-full h-full flex gap-7 flex-col ${
          cityPhoto.results[0] ? "xl:basis-2/4" : ""
        }`}
      >
        <div className="flex justify-between">
          <div>
            <Title text="Weather in" city={weatherData.location.name} />
            <div className="text-4xl sm:text-5xl">
              {Math.round(weatherData.current.temp_c)} °C{" "}
              <span className="text-3xl">
                {weatherData.current.condition.text}
              </span>
            </div>
          </div>
          <div>
            <WeatherIcon
              weatherCode={weatherData.current.condition.code}
              isDay={weatherData.current.is_day}
              size={100}
            />
          </div>
        </div>
        <WeatherInfos weatherInfos={weatherInfos} />
        <MapContainer
          center={[weatherData.location.lat, weatherData.location.lon]}
          zoom={10}
          className="h-80 sm:h-96 xl:h-full rounded-lg shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      {cityPhoto.results[0] && (
        <div className="w-full h-64 sm:h-80 xl:h-full xl:basis-full">
          <img
            src={cityPhoto.results[0].urls.regular}
            alt={city}
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default NowWeatherSection;
