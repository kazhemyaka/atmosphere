function Home() {
  return (
    <section className="py-6 px-10 text-center flex flex-col gap-12">
      <h1 className="text-6xl font-bold">Start by searching a city!</h1>
      <form action="#">
        <input
          type="text"
          placeholder="Search for a city"
          className="border border-gray-300 p-2 rounded-lg w-64 transition ease-in-out"
        />
      </form>
    </section>
  );
}

export default Home;
