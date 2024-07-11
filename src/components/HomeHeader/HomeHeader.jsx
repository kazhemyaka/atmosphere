import Logo from "../../assets/logo-big.svg";

function HomeHeader() {
  return (
    <header className="bg-white flex items-center justify-between py-6 px-10">
      <div className="flex gap-4">
        <a href="#">
          <img src={Logo} alt="Logo" className="h-14 w-auto" />
        </a>
        {/* <form action="#">
          <input
            type="text"
            placeholder="Search for a city"
            className="border border-gray-300 p-2 rounded-lg w-64 transition ease-in-out"
          />
        </form> */}
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
          {/* <li>
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
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default HomeHeader;
