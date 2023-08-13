import Cart from "./Cart"
import Checkout from "./Checkout"

function MainAddtoCart({addtoCart,handleRemove,setaddtoCart}) {
    console.log("Add to main card")

    return (
        <div className="cart-section">
            <Cart addtoCart={addtoCart} handleRemove={handleRemove} setaddtoCart={setaddtoCart}/>
            <Checkout />
        </div>
    )
}

export default MainAddtoCart
