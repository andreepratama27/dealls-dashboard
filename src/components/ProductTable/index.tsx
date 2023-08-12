export default function ProductTable({ data }: { data: Product[] }) {
  return (
    <table className="border w-full">
      <thead>
        <tr className="border">
          <th>Product Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody className="border">
        {data.map((product) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
