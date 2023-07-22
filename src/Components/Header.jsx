import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function Header({ favorite }) {
  return (
    <div className="header">
      <Title />
      <Favorite favorite={favorite} />
    </div>
  );
}

Header.propTypes ={
  favorite: PropTypes.array.isRequired
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
Favorite.propTypes ={
  favorite: PropTypes.array.isRequired
}