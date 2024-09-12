/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import searchImg from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/locationData";
import useDebounce from "../../hooks/useDebounce";
const Search = () => {
  const { setSearchLocation } = useContext(LocationContext);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  const doSearch = useDebounce((term) => {
    const searchingData = getLocationByName(term);
    setSearchLocation({ ...searchingData });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  };

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={handleChange}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={searchImg} />
        </button>
      </div>
    </form>
  );
};

export default Search;
