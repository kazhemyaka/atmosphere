import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useWeather } from "../../context/WeatherContext";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import Loader from "../Loader/Loader";
import Title from "../Title/Title";
import NoCity from "../NoCity/NoCity";
import Error from "../Error/Error";
import CityPhoto from "../CityPhoto/CityPhoto";
import CityMap from "../CityMap/CityMap";
import TempWithDesc from "../TempWithDesc/TempWithDesc";
import weatherInfos from "./nowWeatherInfos";

const NowWeatherSection = () => {
  const { city } = useParams();
  const { weatherData, loading, cityPhoto, error, fetchData } = useWeather();

  useEffect(() => {
    if (city && (!weatherData || city !== weatherData?.location?.name)) {
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
        <section className="px-5 sm:px-10 py-5 flex gap-7 xl:h-full flex-wrap-reverse xl:flex-nowrap">
          <div
            className={`basis-full h-full flex gap-7 flex-col ${
              cityPhoto.results[0] ? "xl:basis-2/4" : ""
            }`}
          >
            <div className="flex justify-between">
              <div>
                <Title text="Weather in" cityName={weatherData.location.name} />
                <TempWithDesc
                  temp={weatherData.current.temp_c}
                  aftertext={weatherData.current.condition.text}
                />
              </div>
              <WeatherIcon
                weatherCode={weatherData.current.condition.code}
                isDay={weatherData.current.is_day}
                size={100}
              />
            </div>
            <WeatherInfos weatherInfos={weatherInfos(weatherData.current)} />
            <CityMap city={weatherData.location} />
          </div>
          {cityPhoto.results[0] && (
            <CityPhoto
              cityPhoto={cityPhoto.results[0].urls.regular}
              photoAuthor={cityPhoto.results[0].user.name}
              photoLink={cityPhoto.results[0].links.html}
              city={city}
            />
          )}
        </section>
      )}
    </Fragment>
  );
};

export default NowWeatherSection;
