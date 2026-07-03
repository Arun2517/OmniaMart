function ProductFilter({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy,
}){
  return (
    <div className="filter-bar">

      <input

    type="text"

    placeholder="Search products..."

    value={search}

    onChange={(e)=>setSearch(e.target.value)}

/>
      <div className="category-buttons">
        <button
    onClick={() => setCategory("All")}
>
    All
</button>
       <button
    onClick={() => setCategory("Style")}
>
    Style
</button>

<button
    onClick={() => setCategory("Tech")}
>
    Tech
</button>

<button
    onClick={() => setCategory("Essentials")}
>
    Essentials
</button>
      </div>

        <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        >
        <option value="featured">Featured</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
        <option value="name">A → Z</option>
        </select>

    </div>
  );
}

export default ProductFilter;