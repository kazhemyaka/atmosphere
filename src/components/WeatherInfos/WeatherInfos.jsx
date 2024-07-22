import WeatherInfo from "../WeatherInfo/WeatherInfo";
import {
  FaTemperatureHalf,
  FaWind,
  FaDroplet,
  FaSun,
  FaEye,
} from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";

const WeatherInfos = ({ weatherData, center }) => {
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

  const weatherInfos = [
    {
      icon: <FaTemperatureHalf />,
      desc: "Feels like",
      value: `${Math.round(weatherData.feels_like)} °C`,
    },
    {
      icon: <FaWind />,
      desc: "Wind",
      value: `${weatherData.wind_speed.toFixed(1)} m/s ${getWindDirection(
        weatherData.wind_deg
      )}`,
    },
    {
      icon: <FaTachometerAlt />,
      desc: "Pressure",
      value: `${weatherData.pressure} hPa`,
    },
    {
      icon: <FaDroplet />,
      desc: "Humidity",
      value: `${weatherData.humidity}%`,
    },
    {
      icon: <FaSun />,
      desc: "UV",
      value: Math.round(weatherData.uvi),
    },
    {
      icon: <FaTemperatureHalf />,
      desc: "Dew point",
      value: `${Math.round(weatherData.dew_point)} °C`,
    },
    {
      icon: <FaEye />,
      desc: "Visibility",
      value: `${(weatherData.visibility / 1000).toFixed(1)} km`,
    },
  ];

  return (
    <ul className={`flex gap-4 flex-wrap ${center && "justify-center"}`}>
      {weatherInfos.map((info, index) => (
        <WeatherInfo key={index} {...info} />
      ))}
    </ul>
  );
};

export default WeatherInfos;
