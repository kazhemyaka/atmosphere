const Footer = () => {
  return (
    <footer className="bg-transparent text-center py-3 px-5 sm:px-10">
      <p>© All rights reserved.</p>
      <p>
        Powered by{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Free Weather API"
          className="hover:text-dodger-blue transition"
        >
          WeatherAPI.com
        </a>
        ,{" "}
        <a
          href="https://unsplash.com/"
          title="Free Images"
          className="hover:text-dodger-blue transition"
        >
          Unsplash
        </a>{" "}
        and{" "}
        <a
          href="https://www.openstreetmap.org/"
          className="hover:text-dodger-blue transition"
        >
          OpenStreetMap
        </a>
      </p>
    </footer>
  );
};

export default Footer;
