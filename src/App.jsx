import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/Layout/HomeLayout";
import Home from "./pages/Home/Home";
import WeatherLayout from "./components/Layout/WeatherLayout";
import NowWeather from "./pages/NowWeather/NowWeather";

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
        path: "now",
        element: <NowWeather />,
        children: [{ path: ":city", element: <NowWeather /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
