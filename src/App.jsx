import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./components/Layout/HomeLayout";
import Home from "./pages/Home/Home";
import WeatherLayout from "./components/Layout/WeatherLayout";
import Weather from "./pages/Weather/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/weather",
    element: <WeatherLayout />,
    children: [{ index: true, element: <Weather /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
