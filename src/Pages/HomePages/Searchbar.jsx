import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

function SearchBar({ search, setSearch, searchInput }) {
  console.log("Search bar");
  const inputEl = useRef(null);

  useEffect(() => {
    function callback(e) {
      if(document.activeElement === inputEl.current) return;

      if(e.code === "Enter"){
        inputEl.current.focus();
        setSearch("");
      }
    }
    document.addEventListener("keydown",callback);
    return ()=> document.addEventListener("keydoown",callback)
  },[setSearch]);


  return (
    <form onSubmit={searchInput} className="input">
      <label htmlFor="">Search</label>
      <input
        type="text"
        className="search-input"
        placeholder="Books"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        ref={inputEl}
      />
    </form>
  );
}

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  searchInput: PropTypes.func.isRequired,
};

export default SearchBar;
