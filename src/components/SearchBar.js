import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearchNote }) => {
  return (
    <div className="searchBar">
      <MdSearch className="searchIcon" size="1.3em" />
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => handleSearchNote(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
