import Logo from "../../assets/logo.svg";
import Search from "../Search/Search";

function WeatherHeader() {
  return (
    <header className="bg-white flex items-center justify-between py-8 px-10">
      <div className="flex gap-4 align-center">
        <a href="#">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </a>
        <Search />
      </div>
      <nav>
        <ul className="flex items-center justify-content space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition ease-in-out"
            >
              Today
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition ease-in-out"
            >
              Tomorrow
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition ease-in-out"
            >
              Week
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default WeatherHeader;
