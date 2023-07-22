import image from "../../noimage.jpg";
import PropTypes from 'prop-types';


export default function Card({ bookData, handleLiked , handleRemove , favoriteChecker }) {
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

  Card.propTypes ={
    bookData : PropTypes.array.isRequired,
    handleLiked : PropTypes.func.isRequired,
    handleRemove : PropTypes.func.isRequired,
    favoriteChecker : PropTypes.func.isRequired,
  }
