import Cart from "./Cart"

function MainAddtoCart({cart,checkout}) {
    console.log("Add to main card")

    return (
        <div className="cart-section">
            {cart}
            {checkout}
        </div>
    )
}

export default MainAddtoCart
