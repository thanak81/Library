import {useState} from "react";
import "./index.css";
import FavoritePage from "./Pages/FavoritePages";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Pages/HomePages/MainContent";
import {book} from "./Data/DefaultBookData"
import {Route,Routes} from 'react-router-dom';

// book.volumeInfo.title

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
        <Header favorite={favorite}/>
        <Sidebar />
        <Routes>
          <Route path="/" element ={<MainContent search={search} setSearch={setSearch} searchInput={searchInput} bookData={bookData} handleLiked={handleLiked} handleRemove={handleRemove} favoriteChecker={favoriteChecker}/>} />
          <Route path="favorite" element={<FavoritePage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;







