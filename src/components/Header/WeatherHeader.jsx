import Logo from "../../assets/logo.svg";
import Search from "../Search/Search";
import { NavLink, useParams } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

const elements = [
  {
    name: "Now",
    href: "now",
  },
  {
    name: "Hourly",
    href: "hourly",
  },
  {
    name: "Daily",
    href: "daily",
  },
];

function WeatherHeader() {
  const [isOpen, setOpen] = useState(false);
  const { city } = useParams();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <header className="bg-white flex items-center justify-between py-8 px-5 sm:px-10 gap-4">
      <div className="flex align-center gap-4">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </NavLink>
        <Search />
      </div>
      <div className="md:hidden z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 overflow-hidden md:hidden">
          <nav className="h-full flex items-center justify-center">
            <ul className="flex items-center gap-5 flex-col">
              {elements.map((element, index) => (
                <li key={index}>
                  <NavLink
                    to={`${element.href}/${city || ""}`}
                    className="text-2xl hover:text-dodger-blue transition"
                    onClick={() => setOpen(false)}
                  >
                    {element.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5">
          {elements.map((element, index) => (
            <li key={index}>
              <NavLink
                to={`${element.href}/${city || ""}`}
                className="text-base hover:text-dodger-blue transition"
              >
                {element.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default WeatherHeader;
