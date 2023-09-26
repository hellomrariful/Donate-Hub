import { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput);
    setSearchInput("");
  };

  return (
    <div className="absolute top-96 md:mt-2 mt-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex rounded-lg border border-[#df0404] mx-auto lg:mt-4">
      <input
        type="text"
        className="p-4 rounded-lg md:mr-60 md:focus:w-64 outline-none"
        placeholder="Search Category here...."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
        autoComplete="off"
      />

      <button
        type="button"
        onClick={handleSearch}
        className="h-full p-4 text-white bg-[#FF444A] rounded-r-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Search;