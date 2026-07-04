import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { cart, openCart } = useCart();

  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header>

      <div className="brand">

        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
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
        </Link>

      </div>

      <nav>

        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <a href="#featured">Shop</a>
          </li>

          <li>
            <a href="#trust">Why Us</a>
          </li>

          {isAuthenticated ? (
            <>
              <li>
                <Link to="/orders">Orders</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <button
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}

        </ul>

      </nav>

      <div className="nav-right">

        <button
          className="icon-btn"
          onClick={openCart}
        >

          🛒

          <span className="badge-count">
            {cart.reduce(
              (sum, item) => sum + item.quantity,
              0
            )}
          </span>

        </button>

      </div>

    </header>
  );
}

export default Navbar;