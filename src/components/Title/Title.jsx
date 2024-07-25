const Title = ({ text, cityName }) => {
  return (
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
      {text}{" "}
      <span className="bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent">
        {cityName}
      </span>
    </h1>
  );
};

export default Title;
