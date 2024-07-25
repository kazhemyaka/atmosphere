import { Outlet } from "react-router-dom";
import HomeHeader from "../Header/HomeHeader";

const HomeLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <HomeHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
