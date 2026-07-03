import logo from "../../assets/images/logo.png";
import { useCart } from "../../context/CartContext";

function Navbar() {

  const { cart, openCart } = useCart();

  return (
    <header>

      <div className="brand">
        <img
          src={logo}
          alt="Omnia Mart"
          style={{
            width: "56px",
            height: "56px",
            objectFit: "contain",
          }}
        />

        <div className="brand-name">
          OMNIA <span>MART</span>
        </div>
      </div>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#featured">Shop</a></li>
          <li><a href="#trust">Why Us</a></li>
        </ul>
      </nav>

      <div className="nav-right">

        <button
  className="icon-btn"
  onClick={openCart}
>

          🛒

          <span className="badge-count">
            {cart.reduce((sum, item) => sum + item.quantity, 0)}
          </span>

        </button>

      </div>

    </header>
  );
}

export default Navbar;