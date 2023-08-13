import PropTypes from 'prop-types';


function SearchBar({ search, setSearch, searchInput }) {
  console.log("Search bar")
    return (
      <form onSubmit={searchInput} className="input">
        <label htmlFor="">Search</label>
        <input
          type="text"
          className="search-input"
          placeholder="Books"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    );
  }

  SearchBar.propTypes ={
    search: PropTypes.string.isRequired,
    setSearch : PropTypes.func.isRequired,
    searchInput : PropTypes.func.isRequired,
  }

export default SearchBar
