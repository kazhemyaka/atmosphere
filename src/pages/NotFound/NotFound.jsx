const NotFound = () => {
  return (
    <section className="h-full flex flex-col gap-5 px-5 sm:px-10 py-5 xl:h-full bg-gradient-to-t from-red-100 to-white">
      <h1 className="text-6xl text-red-500 font-bold">Error!</h1>
      <p className="text-4xl">Page not found!</p>
    </section>
  );
};

export default NotFound;
