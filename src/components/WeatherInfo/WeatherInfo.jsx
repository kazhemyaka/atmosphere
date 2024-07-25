import { IconContext } from "react-icons";

const WeatherInfo = ({ icon, desc, value }) => {
  return (
    <li className="p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2">
      <IconContext.Provider value={{ size: "1.5rem" }}>
        {icon}
      </IconContext.Provider>
      <div>
        <p className="font-bold">{desc}</p>
        <p>{value}</p>
      </div>
    </li>
  );
};

export default WeatherInfo;
