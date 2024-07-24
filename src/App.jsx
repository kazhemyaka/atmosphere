import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/Layout/HomeLayout";
import Home from "./pages/Home/Home";
import WeatherLayout from "./components/Layout/WeatherLayout";
import NowWeather from "./pages/NowWeather/NowWeather";
import HourlyWeather from "./pages/HourlyWeather/HourlyWeather";
import DailyWeather from "./pages/DailyWeather/DailyWeather";
import { WeatherProvider } from "./context/WeatherContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/weather",
    element: <WeatherLayout />,
    children: [
      {
        index: true,
        element: <NowWeather />,
      },
      {
        path: "now",
        element: <NowWeather />,
        children: [{ path: ":city", element: <NowWeather /> }],
      },
      {
        path: "hourly",
        element: <HourlyWeather />,
        children: [{ path: ":city", element: <HourlyWeather /> }],
      },
      {
        path: "daily",
        element: <DailyWeather />,
        children: [{ path: ":city", element: <DailyWeather /> }],
      },
    ],
  },
]);

function App() {
  return (
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  );
}

export default App;
