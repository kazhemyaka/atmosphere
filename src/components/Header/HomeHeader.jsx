import Logo from "../../assets/logo-big.svg";
import { NavLink } from "react-router-dom";

function HomeHeader() {
  return (
    <header className="bg-white flex items-center justify-between py-6 px-5 sm:px-10">
      <div className="flex gap-4">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
        </NavLink>
      </div>
      <nav>
        <ul className="flex items-center justify-content space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition ease-in-out"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
