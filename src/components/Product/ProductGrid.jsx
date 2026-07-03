import { useState } from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

function ProductGrid() {
  // Search State
  const [search, setSearch] = useState("");

  // Category State
  const [category, setCategory] = useState("All");

  // Sort State
  const [sortBy, setSortBy] = useState("featured");

  // Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sort Products
  const sortedProducts = [...filteredProducts];

  if (sortBy === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "name") {
    sortedProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

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
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="product-grid">
          {sortedProducts.map((product) => (
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