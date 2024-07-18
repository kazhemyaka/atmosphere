const Search = () => {
  return (
    <form action="#" className="flex justify-center">
      <div className="relative rounded-md shadow-sm">
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
          className="w-full block rounded-md border border-gray-400 py-1.5 pl-12 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none focus:ring-1 focus:ring-dodger-blue focus:border-dodger-blue transition ease-in-out duration-150"
          placeholder="Search for a city"
        />
      </div>
    </form>
  );
};

export default Search;
