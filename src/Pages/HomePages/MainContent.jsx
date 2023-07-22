import SearchBar from "./Searchbar"
import Card from "./Card"

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

export default Main
