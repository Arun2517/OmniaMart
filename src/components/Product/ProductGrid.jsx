import products from "../../data/products";
import ProductCard from "./ProductCard";

function ProductGrid() {
  return (
    <section className="products" id="featured">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="label">Best sellers</p>

            <h2>Featured products</h2>
          </div>

          <div className="filter-bar"></div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;