import { useEffect, useState } from "react";
import image from "../noimage.jpg";


function FavoritePage({favorite,handleRemove,setFavorite,setTitle,title}) {
  const [sortBy,setSortBy] = useState("input")
  const [validation,setValidation] = useState(false)

  let sortedBook;
  if(sortBy === "input") sortedBook = favorite;
  if(sortBy === "name") sortedBook = favorite.slice().sort((a,b)=>a.volumeInfo.title.localeCompare(b.volumeInfo.title))
  if(sortBy === "rating") sortedBook = favorite.slice().sort((a,b)=>a.volumeInfo.title.localeCompare(b.volumeInfo.title))


  useEffect(()=>{
    if(sortedBook.length > 0 ){
      setValidation(true)
    }else{
      setValidation(false)
    }
  },[sortedBook.length])

  return (
    <div className="content">
      {validation === false ? (<div className="no-favorite">No Favorite</div>): (
        <>
             <div className="favorite-header">
             <div>Favorite List</div>
             <div className="sort">
               <label htmlFor="sort">Sort</label>
               <select name="sortBook" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
               <option value="input">Input</option>
                 <option value="name">Name</option>
                 <option value="rating">Most Rating</option>
               </select>
             </div>
           </div>
           <div className="content-grid favorite-lists">
           {sortedBook?.map((book) => {
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
                     <button
                       className="favorite-remove"
                       onClick={()=>handleRemove(sortedBook,book.id,setFavorite)}
                     >
                       Remove from favorite
                     </button>
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
         </div>
        </>
      )}
 
    </div>
  );
}

export default FavoritePage;
