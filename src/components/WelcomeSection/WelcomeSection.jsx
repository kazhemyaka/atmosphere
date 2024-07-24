import Search from "../Search/Search";

const WelcomeSection = () => {
  return (
    <section className="px-5 sm:px-10 text-center flex flex-col gap-6 h-full justify-center items-center">
      <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent">
        Discover Your City's Weather with Atmosphere!
      </h1>
      <p className="w-4/5 sm:w-6/12">
        Explore the latest weather updates for any city with Atmosphere. Just
        type in the name of your city and get accurate, real-time weather
        information at your fingertips!
      </p>
      <Search />
    </section>
  );
};

export default WelcomeSection;
