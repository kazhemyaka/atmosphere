import { Outlet } from "react-router-dom";
import WeatherHeader from "../WeatherHeader/WeatherHeader";

function WeatherLayout() {
  return (
    <div>
      <WeatherHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default WeatherLayout;
