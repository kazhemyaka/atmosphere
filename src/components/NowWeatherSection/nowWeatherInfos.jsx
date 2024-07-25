import {
  FaCloudShowersHeavy,
  FaCloudSun,
  FaDroplet,
  FaSun,
  FaTemperatureHalf,
  FaWind,
} from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";

const weatherInfos = (weatherData) => [
  {
    icon: <FaTemperatureHalf />,
    desc: "Feels like",
    value: `${Math.round(weatherData.feelslike_c)} °C`,
  },
  {
    icon: <FaWind />,
    desc: "Wind",
    value: `${weatherData.wind_kph} km/h ${weatherData.wind_degree}° ${weatherData.wind_dir}`,
  },
  {
    icon: <FaCloudSun />,
    desc: "Cloud cover",
    value: `${weatherData.cloud}%`,
  },
  {
    icon: <FaCloudShowersHeavy />,
    desc: "Precipitation",
    value: `${weatherData.precip_mm} mm`,
  },
  {
    icon: <FaDroplet />,
    desc: "Humidity",
    value: `${weatherData.humidity}%`,
  },
  {
    icon: <FaTemperatureHalf />,
    desc: "Dew point",
    value: `${Math.round(weatherData.dewpoint_c)} °C`,
  },
  {
    icon: <FaTachometerAlt />,
    desc: "Pressure",
    value: `${weatherData.pressure_mb} hPa`,
  },
  {
    icon: <FaSun />,
    desc: "UV Index",
    value: weatherData.uv,
  },
];

export default weatherInfos;
