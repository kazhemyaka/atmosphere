import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayRain,
  WiNightAltRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "weather-icons-react";

const weatherIconMap = {
  "01d": "day-sunny",
  "01n": "night-clear",
  "02d": "day-cloudy",
  "02n": "night-alt-cloudy",
  "03d": "cloud",
  "03n": "cloud",
  "04d": "cloudy",
  "04n": "cloudy",
  "09d": "showers",
  "09n": "showers",
  "10d": "day-rain",
  "10n": "night-alt-rain",
  "11d": "thunderstorm",
  "11n": "thunderstorm",
  "13d": "snow",
  "13n": "snow",
  "50d": "fog",
  "50n": "fog",
};

const WeatherIcon = ({ iconCode, size }) => {
  const iconName = weatherIconMap[iconCode];

  const icons = {
    "day-sunny": <WiDaySunny size={size} color="#000" />,
    "night-clear": <WiNightClear size={size} color="#000" />,
    "day-cloudy": <WiDayCloudy size={size} color="#000" />,
    "night-alt-cloudy": <WiNightAltCloudy size={size} color="#000" />,
    cloud: <WiCloud size={size} color="#000" />,
    cloudy: <WiCloudy size={size} color="#000" />,
    showers: <WiShowers size={size} color="#000" />,
    "day-rain": <WiDayRain size={size} color="#000" />,
    "night-alt-rain": <WiNightAltRain size={size} color="#000" />,
    thunderstorm: <WiThunderstorm size={size} color="#000" />,
    snow: <WiSnow size={size} color="#000" />,
    fog: <WiFog size={size} color="#000" />,
  };

  return icons[iconName] || null;
};

export default WeatherIcon;
