import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {


  const { addToCart, openCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-media media-style">
        <span className="product-tag">{product.category}</span>

    <img
      src={
        product.image
          ? `http://localhost:5000/uploads/${product.image}`
          : "https://placehold.co/120x120?text=No+Image"
      }
      alt={product.name}
      className="product-image"
      onError={(e) => {
        e.target.src =
          "https://placehold.co/120x120?text=No+Image";
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