import { useEffect, useState } from "react";
import "./index.css";
import FavoritePage from "./Pages/FavoritePages";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Pages/HomePages/MainContent";
import { book } from "./Data/DefaultBookData";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/AddtoCartPages/Cart";
import MainAddtoCart from "./Pages/AddtoCartPages/MainAddtoCart";

// book.volumeInfo.title

function App() {
  console.log("App")
  const [bookData, setBookData] = useState(book);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [addtoCart,setaddtoCart] = useState([])
  const [title,setTitle] = useState("Home | Library")

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
    // const oldFavorite = [...favorite];

    // const oldFavorite = bookData.map((fav)=>{
    //   fav.id === id ? {
    //     ...fav,
    //     isLiked : !fav.isLiked
    //   }: [...favorite]
    // })

    // console.log(oldFavorite)
    // const newFavorite = oldFavorite.concat(book)

    const newFavorite = [...favorite, book];

    console.log(newFavorite);
    setFavorite(newFavorite);
  }

  useEffect(()=>{
    document.title = title
  },[title])

  function handleRemove(arr,id,setState) {
    const oldFavorite = [...arr];
    const newFavorite = oldFavorite.filter((fil) => {
      return fil.id !== id;
    });
    setState(newFavorite);
  }

  function Checker(arr,id) {
    const boolean = arr.some((book) => book.id === id);
    return boolean;
  }


  function addToCart(book){
    const cart = [...addtoCart,book]
    setaddtoCart(cart)
    console.log(cart)
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
        <Header favorite={favorite} addtoCart={addtoCart} />
        <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <MainContent
                  search={search}
                  setSearch={setSearch}
                  searchInput={searchInput}
                  bookData={bookData}
                  handleLiked={handleLiked}
                  handleRemove={handleRemove}
                  Checker={Checker}
                  setFavorite={setFavorite}
                  favorite={favorite}
                  addToCart={addToCart}
                  addtoCart={addtoCart}
                  setaddtoCart={setaddtoCart}
                />
              }
            />
            <Route
              path="favorite"
              element={<FavoritePage setFavorite={setFavorite} favorite={favorite} handleRemove={handleRemove} setTitle={setTitle} title={title}/>}
            />
            <Route 
              path="cart"
              // element={<Cart setaddtoCart={setaddtoCart} addtoCart={addtoCart} handleRemove={handleRemove}/>}
              element={<MainAddtoCart setaddtoCart={setaddtoCart} addtoCart={addtoCart} handleRemove={handleRemove}/>}
            />
          </Routes>

      </div>
    </>
  );
}
export default App;
