import DateTime from "../DateTime/DateTime";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import TempWithDesc from "../TempWithDesc/TempWithDesc";
import WeatherInfos from "../WeatherInfos/WeatherInfos";
import weatherInfos from "./dailyWeatherInfos";

const DailyWeatherCard = ({ day, timeZone }) => {
  return (
    <div
      key={day.date_epoch}
      className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <DateTime
        datetimeEpoch={day.date_epoch}
        hours={false}
        timeZone={timeZone}
      />
      <div className="p-6 flex flex-col">
        <div className="flex items-center gap-2">
          <WeatherIcon
            weatherCode={day.day.condition.code}
            isDay={true}
            size={70}
          />
          <TempWithDesc
            pretext="Avg:"
            temp={day.day.avgtemp_c}
            aftertext={day.day.condition.text}
          />
        </div>
        <div className="flex flex-wrap gap-5 mt-4 mb-4">
          <TempWithDesc pretext="Max:" temp={day.day.maxtemp_c} />
          <TempWithDesc pretext="Min:" temp={day.day.mintemp_c} />
        </div>
        <WeatherInfos weatherInfos={weatherInfos(day.day)} />
      </div>
    </div>
  );
};

export default DailyWeatherCard;
