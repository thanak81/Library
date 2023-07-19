import { useState, useEffect } from "react";
import "./index.css";
import image from "./noimage.jpg";

function App() {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchData() {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDka0DcoWIABN35ghEVTF7rU8AvyyJzObE`
    );
    const data = await res.json();
    setBookData(data.items);
  }

  function searchInput(e) {
    e.preventDefault();
    fetchData();
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
        <Header />
        <Sidebar />
        <div className="content">
          <SearchBar
            search={search}
            setSearch={setSearch}
            searchInput={searchInput}
          />
          <div className="content-grid">
            <Card bookData={bookData} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

function Header() {
  return (
    <div className="header">
      <h1>LIBRARY</h1>
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

function Card({ bookData }) {
  return (
    <>
      {bookData.map((book) => {
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
            <div className="desc">
              <a
                className="preview-link"
                rel="noopener noreferrer"
                target="_blank"
                href={preview}
              >
                Preview
              </a>
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
