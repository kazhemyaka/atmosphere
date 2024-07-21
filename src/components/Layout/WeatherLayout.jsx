import { Outlet } from "react-router-dom";
import WeatherHeader from "../Header/WeatherHeader";

function WeatherLayout() {
  return (
    <div className="flex flex-col h-screen">
      <WeatherHeader />
      <main className="flex-grow content-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default WeatherLayout;
