import { IconContext } from "react-icons";

const WeatherInfo = ({ icon, desc, value }) => {
  return (
    <li className="bg-sky-200 p-2 rounded-lg flex items-center gap-2">
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
