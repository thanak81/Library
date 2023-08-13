import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

function Header({ favorite,addtoCart }) {
  console.log("Header")
  return (
    <div className="header">
      <Title />
      <div className="header-feature">
      <Favorite favorite={favorite} />
      <AddToCart addtoCart={addtoCart} />
      </div>
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
        <span className="cart">❤️</span>
        <span className="header-fav-count">{favorite.length}</span>
      </Link>
    </div>
  );
}
Favorite.propTypes ={
  favorite: PropTypes.array.isRequired
}

function AddToCart({addtoCart}){
  return(
    <div className="header-fav">
      Cart
      <Link to="cart">
        <span className="cart">🛒</span>
        <span className="header-fav-count">{addtoCart.length}</span>
      </Link>
    </div>
  )
}