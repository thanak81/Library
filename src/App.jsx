import { useState, useEffect } from "react";
import "./index.css";
import image from "./noimage.jpg";

// book.volumeInfo.title

const book = [
  {
    id: 12,
    isLiked: false,
    volumeInfo: {
      title: "Manchester City | Triple Winner",
      author: "Pep GUADIOLA",
    },
  },
  {
    id: 13,
    isLiked: false,
    volumeInfo: {
      title: "Manchester United | Noob Team",
      author: "Ronaldo",
    },
  },
  {
    id: 14,
    isLiked: false,
    volumeInfo: {
      title: "Manchester United | Noob Team",
      author: "Ronaldo",
    },
  },
];

function App() {
  const [bookData, setBookData] = useState(book);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);

  async function fetchData() {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDka0DcoWIABN35ghEVTF7rU8AvyyJzObE`
    );
    const data = await res.json();
    setBookData(data.items);
  }

  function searchInput(e) {
    e.preventDefault();
    if (search === "") {
      setBookData(book);
    } else {
      fetchData();
    }
  }


  function handleLiked(book) {
    const oldFavorite = [...favorite];

    // const oldFavorite = bookData.map((fav)=>{
    //   fav.id === id ? {
    //     ...fav,
    //     isLiked : !fav.isLiked
    //   }: [...favorite]
    // })

    console.log(oldFavorite)
    const newFavorite = oldFavorite.concat(book)

    console.log(newFavorite)
    setFavorite(newFavorite)
  }

  function handleRemove(id){
    const oldFavorite = [...favorite];
    const newFavorite = oldFavorite.filter((fil)=>{
      return fil.id !== id
    })
    setFavorite(newFavorite)

  }

  console.log(favorite)

  function favoriteChecker(id){
    const boolean = favorite.some((book)=>book.id === id)
    return boolean;
  }

  // useEffect(()=>{
  //   async function fetchData() {
  //     const res = await fetch(
  //       "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=AIzaSyDka0DcoWIABN35ghEVTF7rU8AvyyJzObE"
  //     );
  //     const data = await res.json();
  //     setBookData(data.items);
  //   }
  //   fetchData();
  // },[])

  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
          <Favorite favorite={favorite} />
        </div>

        <Sidebar />
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
      </div>
    </>
  );
}
export default App;

function Header() {
  return <div className="header-library">LIBRARY</div>;
}

function Favorite({favorite}) {


  return (
    <div className="header-fav">
      Favorite
      <span className="cart">🛒</span>
     <span className="header-fav-count" >{favorite.length}</span>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div className="options">
        <span>Profile</span>
        <span>Setting</span>
        <span>Users</span>
      </div>
    </div>
  );
}

function Card({ bookData, handleLiked , handleRemove , favoriteChecker }) {
  return (
    <>
      {bookData?.map((book) => {
        let thumbnails =
          book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.smallThumbnail;
        let title = book.volumeInfo.title;
        let author = book.volumeInfo.authors;
        let categories = book.volumeInfo.categories;
        let pageCount = book.volumeInfo.pageCount;
        let preview = book.volumeInfo.previewLink;
        let subtitles = book.volumeInfo.subtitle;
        let none = "No Details";

        return (
          <div className="card" key={book.id}>
            <div className="title">{title}</div>
            <img
              src={!thumbnails ? image : thumbnails}
              alt={title}
              onError={({ e }) => {
                e.onerror = null;
                e.src = image;
              }}
            />
            <div className="desc">{!subtitles ? none : subtitles}</div>
            <div className="pages-count">Pages count: {pageCount}</div>
            <div className="preview-heart">
              <a
                className="preview-link"
                rel="noopener noreferrer"
                target="_blank"
                href={preview}
              >
                Preview
              </a>
              {favoriteChecker(book.id) ? 
              
              <button onClick={() => handleRemove(book.id)}>
                💔
              </button>
              : 
              <button onClick={() => handleLiked(book)}>
              ❤️
              </button>
              }
            </div>
            <div className="type">
              <div className="category">Categories:</div>
              <span>{!categories ? none : categories}</span>
            </div>
            <div className="type">
              <div className="author">Author:</div>
              <span>{!author ? none : author}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

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
