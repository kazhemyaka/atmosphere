function Home() {
  return (
    <section className="py-6 px-10 text-center flex flex-col gap-12 bg-gradient-to-t from-sky-100 to-white h-full justify-center">
      <h1 className="text-6xl font-bold bg-gradient-to-bl from-dodger-blue to-cyan-600 bg-clip-text text-transparent">
        Start by searching a city!
      </h1>
      <form action="#" className="flex justify-center">
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="city"
            id="city"
            className="block rounded-md border border-gray-400 py-1.5 pl-12 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:ring-1 focus:ring-dodger-blue focus:border-dodger-blue transition ease-in-out duration-150"
            placeholder="Search for a city"
          />
        </div>
      </form>
    </section>
  );
}

export default Home;
