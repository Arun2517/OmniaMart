import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {


  const { addToCart, openCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-media media-style">
        <span className="product-tag">{product.category}</span>

        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#ddd",
          }}
        />
      </div>

      <div className="product-info">

        <h4>{product.name}</h4>

        <span className="cat">{product.status}</span>

        <div className="product-bottom">

          <span className="price">
            ₹{product.price}
          </span>

          <button
            className="add-btn"
            onClick={() => {
            addToCart(product);
            openCart();
            }}      
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;