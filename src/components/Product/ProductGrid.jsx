import { useState } from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

function ProductGrid() {
  // Search State
  const [search, setSearch] = useState("");

  // Category State
  const [category, setCategory] = useState("All");

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="products" id="featured">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="label">Best sellers</p>
            <h2>Featured Products</h2>
          </div>
        </div>

        <ProductFilter
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <div className="product-grid">
          {filteredProducts.map((product) => (
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