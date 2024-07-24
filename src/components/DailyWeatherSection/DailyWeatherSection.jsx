import { useEffect } from "react";
import { useParams } from "react-router-dom";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import Loader from "../Loader/Loader";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import Title from "../Title/Title";
import NoCity from "../NoCity/NoCity";
import { useWeather } from "../../context/WeatherContext";
import { FaWind, FaCloudShowersHeavy, FaDroplet, FaSun } from "react-icons/fa6";

const DailyWeatherSection = () => {
  const { city } = useParams();
  const { weatherData, error, loading, fetchData } = useWeather();

  useEffect(() => {
    if (city && (!weatherData || city !== weatherData.location.name)) {
      fetchData(city);
    }
  }, [city, weatherData]);
  if (!city) return <NoCity />;
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!weatherData) return <div>No weather data available</div>;

  return (
    <section className="px-5 sm:px-10 py-5 xl:h-full">
      <Title
        text="Daily weather forecast for"
        city={weatherData.location.name}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {weatherData.forecast.forecastday.map((day) => {
          const weatherInfos = [
            {
              icon: <FaWind />,
              desc: "Max wind",
              value: `${day.day.maxwind_kph} km/h`,
            },
            {
              icon: <FaCloudShowersHeavy />,
              desc: "Total precipitation",
              value: `${day.day.totalprecip_mm} mm`,
            },
            {
              icon: <FaDroplet />,
              desc: "Avg humidity",
              value: `${day.day.avghumidity}%`,
            },
            {
              icon: <FaSun />,
              desc: "UV index",
              value: `${day.day.uv}`,
            },
          ];

          return (
            <div
              key={day.date_epoch}
              className="p-5 rounded-lg flex flex-col items-center text-center bg-sky-100"
            >
              <p className="text-gray-500 text-2xl">
                {new Date(day.date_epoch * 1000).toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </p>
              <WeatherIcon
                weatherCode={day.day.condition.code}
                isDay={true}
                size={70}
              />
              {console.log(day.day.condition.code)}
              <p className="text-3xl">
                <span className="text-2xl">Avg:</span>{" "}
                {Math.round(day.day.avgtemp_c)} °C{" "}
                <span className="text-2xl">{day.day.condition.text}</span>
              </p>
              <p className="text-3xl">
                <span className="text-2xl">Max:</span>{" "}
                {Math.round(day.day.maxtemp_c)} °C
              </p>
              <p className="text-3xl mb-4">
                <span className="text-2xl">Min:</span>{" "}
                {Math.round(day.day.mintemp_c)} °C
              </p>

              <WeatherInfos weatherInfos={weatherInfos} center={true} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DailyWeatherSection;
