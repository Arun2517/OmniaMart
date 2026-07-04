import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

import { getProducts } from "../../services/productService";

function ProductGrid() {

  // Products from API
  const [products, setProducts] = useState([]);

  // Loading State
  const [loading, setLoading] = useState(true);

  // Search
  const [search, setSearch] = useState("");

  // Category
  const [category, setCategory] = useState("All");

  // Sort
  const [sortBy, setSortBy] = useState("featured");

  // Load Products
  useEffect(() => {

    async function fetchProducts() {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }

    }

    fetchProducts();

  }, []);

  // Filter
  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;

  });

  // Sort
  const sortedProducts = [...filteredProducts];

  if (sortBy === "low") {

    sortedProducts.sort(
      (a, b) => Number(a.price) - Number(b.price)
    );

  }

  if (sortBy === "high") {

    sortedProducts.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );

  }

  if (sortBy === "name") {

    sortedProducts.sort(
      (a, b) => a.name.localeCompare(b.name)
    );

  }

  if (loading) {

    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        Loading Products...
      </h2>
    );

  }

  return (

    <section
      className="products"
      id="featured"
    >

      <div className="section-inner">

        <div className="section-head">

          <div>

            <p className="label">
              Best Sellers
            </p>

            <h2>
              Featured Products
            </h2>

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

          {sortedProducts.length === 0 ? (

            <h3>No Products Found</h3>

          ) : (

            sortedProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))

          )}

        </div>

      </div>

    </section>

  );

}

export default ProductGrid;