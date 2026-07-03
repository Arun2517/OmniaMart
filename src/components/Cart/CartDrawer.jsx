import { useCart } from "../../context/CartContext";

function CartDrawer() {

const {
  cart,
  total,
  isCartOpen,
  closeCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
} = useCart();

    return (
  <>
    <div
      className={`overlay-bg ${isCartOpen ? "show" : ""}`}
      onClick={closeCart}
    />

    <div
      className={`drawer ${isCartOpen ? "show" : ""}`}
    >
      <div className="drawer-head">
        <h3>Shopping Cart</h3>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="cart-row"
            >
              <div className="cart-row-info">
                <h5>{item.name}</h5>

                <span>₹{item.price}</span>

                <div className="qty-control">

                <button onClick={() => decreaseQty(item.id)}>
                    -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>
                    +
                </button>

                <button
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id)}
                >
                    Remove
                </button>

                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="drawer-foot">
        <div className="drawer-total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button className="btn btn-block">
          Checkout
        </button>
      </div>
    </div>
  </>
);
}

export default CartDrawer;