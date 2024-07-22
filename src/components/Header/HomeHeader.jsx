import Logo from "../../assets/logo-big.svg";
import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";

function HomeHeader() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-white flex items-center justify-between py-6 px-5 sm:px-10">
      <div className="flex gap-4">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
        </NavLink>
      </div>
      <div className="md:hidden z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} rounded />
      </div>
      <nav
        className={`${
          isOpen
            ? "fixed inset-0 flex items-center justify-center bg-white z-40"
            : "hidden"
        } md:block md:static`}
      >
        <ul className="flex items-center gap-5 flex-col md:flex-row">
          <li className="text-2xl md:text-base hover:text-dodger-blue transition">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
