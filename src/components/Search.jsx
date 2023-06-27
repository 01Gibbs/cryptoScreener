import React from "react";
import searchIcon from "../assets/search-icon.svg";

const Search = () => {
  return (
    <form className="w-96 relative flex items-center ml-7 font-nunito">
      <input
        type="text"
        name="Search"
        className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-1 cursor-pointer">
        <img src={searchIcon} className="w-full h-auto" alt="Search"></img>
      </button>
    </form>
  );
};

export default Search;
