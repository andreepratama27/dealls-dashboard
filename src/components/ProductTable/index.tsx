export default function ProductTable({ product }: { product: Product[] }) {
  console.log("fff", { product });
  return (
    <table className="border w-full">
      <thead>
        <tr className="border text-left">
          <th className="p-2 border-r">Product Name</th>
          <th className="p-2 border-r">Brand</th>
          <th className="p-2 border-r">Price</th>
          <th className="p-2 border-r">Stock</th>
          <th className="p-2 border-r">Category</th>
        </tr>
      </thead>
      <tbody className="border">
        {product?.map((item) => (
          <tr key={item.id}>
            <td className="p-2 border-b border-r">{item.title}</td>
            <td className="p-2 border-b border-r">{item.brand}</td>
            <td className="p-2 border-b border-r">{item.price}</td>
            <td className="p-2 border-b border-r">{item.stock}</td>
            <td className="p-2 border-b border-r">{item.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
