function ProductFilter({

    search,
    setSearch,

    category,
    setCategory,

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

      <select>
        <option>Featured</option>
        <option>Price Low → High</option>
        <option>Price High → Low</option>
        <option>A → Z</option>
      </select>

    </div>
  );
}

export default ProductFilter;