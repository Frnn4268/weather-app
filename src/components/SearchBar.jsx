import React from "react";
import search_icon from "../assets/search.png";
import "../css/Weather.css";

const SearchBar = ({ inputRef, onSearch }) => {
  return (
    <div className="search-bar">
      <input ref={inputRef} type="text" placeholder="Search" />
      <img
        src={search_icon}
        alt="search-icon"
        data-testid="search-button"
        onClick={() => onSearch(inputRef.current.value)}
      />
    </div>
  );
};

export default SearchBar;
