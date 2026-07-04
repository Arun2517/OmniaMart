import "./ProductTable.css";

function ProductTable({
  products,
  onDelete,
  onEdit,
}) {

  return (
    <div className="product-table">

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product.id}>

              <td>{product.id}</td>

              <td>{product.name}</td>

              <td>{product.category}</td>

              <td>₹{product.price}</td>

              <td>{product.stock}</td>

              <td>{product.status}</td>

              <td>

                <button
                  onClick={() => onEdit(product)}
                >
                  ✏️
                </button>

                <button
                  onClick={() => onDelete(product.id)}
                >
                  🗑
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );

}

export default ProductTable;