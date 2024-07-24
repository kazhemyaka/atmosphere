import WeatherInfo from "../WeatherInfo/WeatherInfo";

const WeatherInfos = ({ weatherInfos, center }) => {
  return (
    <ul className={`flex gap-4 flex-wrap ${center && "justify-center"}`}>
      {weatherInfos.map((info, index) => (
        <WeatherInfo key={index} {...info} />
      ))}
    </ul>
  );
};

export default WeatherInfos;
