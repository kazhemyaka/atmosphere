import { Outlet } from "react-router-dom";
import HomeHeader from "../HomeHeader/HomeHeader";

function HomeLayout() {
  return (
    <div>
      <HomeHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
