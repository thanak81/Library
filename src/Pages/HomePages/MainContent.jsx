import SearchBar from "./Searchbar"
import Card from "./Card"
import PropTypes from 'prop-types';

function Main({search,setSearch,searchInput,bookData,handleLiked,handleRemove,favoriteChecker}) {
    return (
        <div className="content">
        <SearchBar
          search={search}
          setSearch={setSearch}
          searchInput={searchInput}
        />
        <div className="content-grid">
          <Card bookData={bookData} handleLiked={handleLiked} handleRemove={handleRemove} favoriteChecker={favoriteChecker} />
        </div>
      </div>
    )
}

Main.propTypes ={
  search: PropTypes.string.isRequired,
  setSearch : PropTypes.func.isRequired,
  searchInput : PropTypes.string.isRequired,
  bookData : PropTypes.array.isRequired,
  handleLiked : PropTypes.func.isRequired,
  handleRemove : PropTypes.func.isRequired,
  favoriteChecker : PropTypes.func.isRequired,
}

export default Main
