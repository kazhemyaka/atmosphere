import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import Loader from "../Loader/Loader";

const OPENWEATHERMAP_API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const NowWeatherSection = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [cityPhoto, setCityPhoto] = useState(null);
  const [weatherOverview, setWeatherOverview] = useState(null);
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

  const fetchWeatherData = async () => {
    try {
      if (geolocationData.length > 0) {
        const { lat, lon } = geolocationData[0];

        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);
      } else {
        console.error("City not found");
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const fetchWeatherOverview = async () => {
    try {
      if (geolocationData.length > 0) {
        const { lat, lon } = geolocationData[0];

        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall/overview?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await response.json();
        setWeatherOverview(data);
      }
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  const fetchCityPhoto = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${geolocationData[0].name}&orientation=landscape&client_id=${UNSPLASH_API_KEY}`
      );
      const data = await response.json();
      setCityPhoto(data.results[0].urls.regular);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchGeolocation();
    }
  }, [city]);

  useEffect(() => {
    if (geolocationData.length > 0) {
      fetchWeatherData();
      fetchWeatherOverview();
      fetchCityPhoto();
    }
  }, [geolocationData]);

  useEffect(() => {
    setWeatherData(null);
    setCityPhoto(null);
    setWeatherOverview(null);
    setGeolocationData([]);
    setError(null);
  }, [city]);

  if (!weatherData || !cityPhoto || !weatherOverview || !geolocationData) {
    return <Loader />;
  }

  return (
    <section className="px-5 sm:px-10 py-5 flex gap-10 xl:h-full flex-wrap-reverse xl:flex-nowrap">
      <div className="basis-full xl:basis-3/5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Weather in{" "}
              <span className="bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent">
                {geolocationData[0].name}
              </span>
            </h1>
            <div className="text-4xl sm:text-5xl mb-4">
              {Math.round(weatherData.current.temp)} °C{" "}
              <span className="text-3xl">
                {weatherData.current.weather[0].main}
              </span>
            </div>
          </div>
          <div>
            <WeatherIcon
              iconCode={weatherData.current.weather[0].icon}
              size={100}
            />
          </div>
        </div>
        <WeatherInfos weatherData={weatherData.current} />
        <h2 className="mt-5 mb-3 text-2xl sm:text-3xl font-bold">Overview:</h2>
        <p className="text-lg">{weatherOverview.weather_overview}</p>
      </div>
      <div className="w-full h-64 sm:h-80 xl:h-full xl:basis-full">
        <img
          src={cityPhoto}
          alt={city}
          className="rounded-lg shadow-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default NowWeatherSection;
