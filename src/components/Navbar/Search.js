import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchText } from "../../features/filter/filterSlice";
import serachSvg from "../../assets/search.svg";

const Search = () => {
  const { searchKey } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(searchKey);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchText(search));
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <img
          className="inline h-4 cursor-pointer"
          src={serachSvg}
          alt="Search"
        />
      </button>
    </form>
  );
};

export default Search;
