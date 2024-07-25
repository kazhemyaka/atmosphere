import DateTime from "../DateTime/DateTime";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import TempWithDesc from "../TempWithDesc/TempWithDesc";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import weatherInfos from "./hourlyWeatherInfos";

const HourlyWeatherCard = ({ hour, timeZone }) => {
  return (
    <div
      key={hour.time_epoch}
      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <DateTime
        datetimeEpoch={hour.time_epoch}
        timeZone={timeZone}
        hours={true}
      />
      <div className="p-6 flex flex-col">
        <div className="flex items-center mb-4">
          <WeatherIcon
            weatherCode={hour.condition.code}
            isDay={hour.is_day}
            size={80}
          />
          <TempWithDesc temp={hour.temp_c} aftertext={hour.condition.text} />
        </div>
        <WeatherInfos weatherInfos={weatherInfos(hour)} />
      </div>
    </div>
  );
};

export default HourlyWeatherCard;
