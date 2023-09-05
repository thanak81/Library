import React from "react";
import { useState } from "react";
import image from "../noimage.jpg";

function Modals({ openModal, onClose, selectedBook, closeModal }) {
  console.log(selectedBook);
  if (!openModal) return null;

  let thumbnails =
    selectedBook.volumeInfo.imageLinks &&
    selectedBook.volumeInfo.imageLinks.smallThumbnail;
  let title = selectedBook.volumeInfo.title;
  let author = selectedBook.volumeInfo.authors;
  let categories = selectedBook.volumeInfo.categories;
  let pageCount = selectedBook.volumeInfo.pageCount;
  let preview = selectedBook.volumeInfo.previewLink;
  let subtitles = selectedBook.volumeInfo.subtitle;
  let none = "No Details";
  return (
    <div className="overlay">
      <div className="modalContainer" key={selectedBook.volumeInfo.id}>
        <img
          src={!thumbnails ? image : thumbnails}
          alt={title}
          onError={({ e }) => {
            e.onerror = null;
            e.src = image;
          }}
          className="modal-img"
        />
        <div className="modalRight">
          <p className="closeBtn" onClick={closeModal}>
            X
          </p>
          <div className="modal-content">
            <p className="modal-title">{title}</p>
            <p className="modal-subname">
              <span>Author: </span>
              <span>{author}</span>
            </p>
            <p className="modal-subname">
              <span>Categories: </span>
              <span>{categories}</span>
            </p>
            <p className="modal-subname">
              <span>Pages Count: </span>
              <span>{pageCount}</span>
            </p>
            <div className="summary-title">Summary</div>
            <div className="modal-paragraph">{!selectedBook.searchInfo?"No Summary":selectedBook.searchInfo?.textSnippet}</div>
            <a className="preview-link modal-preview-link" href={preview} target="_blank" rel="noreferrer">
                Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
