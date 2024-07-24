import React, { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityPhoto, setCityPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [lastFetchedCity, setLastFetchedCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (query) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&q=${query}&days=8&aqi=no&alerts=no`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const fetchCityPhoto = async (cityName) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${cityName}&orientation=landscape&client_id=${
        import.meta.env.VITE_UNSPLASH_API_KEY
      }&per_page=1&page=1`
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  const fetchData = async (city) => {
    if (city === lastFetchedCity && weatherData) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const weatherData = await fetchWeather(city);
      const photoData = await fetchCityPhoto(weatherData.location.name);

      setWeatherData(weatherData);
      setCityPhoto(photoData);
      setLastFetchedCity(city);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        cityPhoto,
        error,
        loading,
        fetchData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
