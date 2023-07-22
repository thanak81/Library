import React from "react";
import {Link} from 'react-router-dom'

function Header({ favorite }) {
  return (
    <div className="header">
      <Title />
      <Favorite favorite={favorite} />
    </div>
  );
}
export default Header;

function Title() {
    return(
        <div className="header-library"><Link to="/">LIBRARY</Link></div>
    )
}

function Favorite({ favorite }) {
  return (
    <div className="header-fav">
      Favorite
      <Link to="favorite">
        <span className="cart">🛒</span>
        <span className="header-fav-count">{favorite.length}</span>
      </Link>
    </div>
  );
}
