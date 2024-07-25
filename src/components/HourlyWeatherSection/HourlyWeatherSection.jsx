import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWeather } from "../../context/WeatherContext";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import NoCity from "../NoCity/NoCity";
import Error from "../Error/Error";
import HourlyWeatherCard from "../HourlyWeatherCard/HourlyWeatherCard";

const HourlyWeatherSection = () => {
  const { city } = useParams();
  const { weatherData, loading, error, fetchData } = useWeather();

  useEffect(() => {
    if (city && (!weatherData || city !== weatherData.location.name)) {
      fetchData(city);
    }
  }, [city, weatherData]);

  return (
    <Fragment>
      {!city ? (
        <NoCity />
      ) : error ? (
        <Error>{error}</Error>
      ) : loading || !weatherData ? (
        <Loader />
      ) : (
        <section className="px-5 sm:px-10 py-5 xl:h-full">
          <Title
            text="Hourly weather forecast for"
            cityName={weatherData.location.name}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {weatherData.forecast.forecastday[0].hour.map((hour) => (
              <HourlyWeatherCard
                key={hour.time_epoch}
                hour={hour}
                timeZone={weatherData.location.tz_id}
              />
            ))}
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default HourlyWeatherSection;
