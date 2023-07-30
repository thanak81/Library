import SearchBar from "./Searchbar"
import Card from "./Card"
import PropTypes from 'prop-types';

function Main({setaddtoCart,addtoCart,addToCart,setFavorite,favorite,search,setSearch,searchInput,bookData,handleLiked,handleRemove,Checker}) {
    return (
        <div className="content">
        <SearchBar
          search={search}
          setSearch={setSearch}
          searchInput={searchInput}
        />
        <div className="content-grid">
          <Card addtoCart={addtoCart} setaddtoCart={setaddtoCart} setFavorite={setFavorite} bookData={bookData} handleLiked={handleLiked} handleRemove={handleRemove} Checker={Checker} favorite={favorite} addToCart={addToCart} />
        </div>
      </div>
    )
}

Main.propTypes ={
  search: PropTypes.string.isRequired,
  setSearch : PropTypes.func.isRequired,
  searchInput : PropTypes.func.isRequired,
  bookData : PropTypes.array.isRequired,
  handleLiked : PropTypes.func.isRequired,
  handleRemove : PropTypes.func.isRequired,
  Checker : PropTypes.func.isRequired,
}

export default Main
