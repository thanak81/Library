import { useEffect } from "react";
import image from "../../noimage.jpg";
import PropTypes from "prop-types";
import Modals from "../../Components/Modals";

export default function Card({
  favorite,
  setFavorite,
  bookData,
  handleLiked,
  handleRemove,
  Checker,
  addToCart,
  addtoCart,
  setaddtoCart,
  openModal,
  setOpenModal,
  selectedBook,
  expandModal,
  closeModal
}) {
  console.log("card")

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
              {Checker(addtoCart, book.id) ? (
                <button
                  className="btn add-to-card remove"
                  onClick={() => handleRemove(addtoCart, book.id,setaddtoCart)}
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  className="btn add-to-card"
                  onClick={() => addToCart(book)}
                >
                  Add to cart
                </button>
              )}

              {/* <a
                className="preview-link"
                rel="noopener noreferrer"
                target="_blank"
                href={<Modals openModal={openModal}/>}
              >
                Preview
              </a> */}
              <button className="preview-link" onClick={()=> expandModal(book)}>Preview</button>
              {Checker(favorite, book.id) ? (
                <button className="heart-btn" onClick={() => handleRemove(favorite, book.id,setFavorite)}>
                  💔
                </button>
              ) : (
                <button className="heart-btn" onClick={() => handleLiked(book)}>❤️</button>
              )}
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
      <Modals openModal={openModal} selectedBook={selectedBook} closeModal={closeModal}/>
    </>
  );
}

Card.propTypes = {
  bookData: PropTypes.array.isRequired,
  handleLiked: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  Checker: PropTypes.func.isRequired,
};
