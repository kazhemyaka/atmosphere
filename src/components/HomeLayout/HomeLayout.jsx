import { Outlet } from "react-router-dom";
import HomeHeader from "../HomeHeader/HomeHeader";

function HomeLayout() {
  return (
    <div className="flex flex-col h-screen">
      <HomeHeader />
      <main className="flex-grow content-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
