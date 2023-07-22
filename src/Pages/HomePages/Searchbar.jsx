function SearchBar({ search, setSearch, searchInput }) {
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

export default SearchBar
