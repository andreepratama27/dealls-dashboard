import { ApiUrl } from "@/utils/constant";

export async function getData(): Promise<Product[]> {
  try {
    const response = await fetch(`${ApiUrl}/products?limit=10&skip=0`);
    const result = await response.json();

    return result?.products;
  } catch (error) {
    throw error;
  }
}

export default async function Home() {
  const products = await getData();

  return (
    <>
      <div className="input-search w-full flex justify-end mb-4">
        <input
          type="text"
          name="search"
          placeholder="Search Product"
          className="border w-72 p-2 px-4 outline-none"
        />
      </div>
      <main className="flex w-full">
        <div className="table-product w-full">
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="p-2 border-b border-r">{product.title}</td>
                  <td className="p-2 border-b border-r">{product.brand}</td>
                  <td className="p-2 border-b border-r">{product.price}</td>
                  <td className="p-2 border-b border-r">{product.stock}</td>
                  <td className="p-2 border-b border-r">{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination-component flex float-right pt-4">
            <button className="border px-2 bg-gray-100 text-sm">Prev</button>
            <div className="page-info w-20 text-center">
              <p className="text-sm">1 / 25</p>
            </div>
            <button className="border px-2 bg-gray-100 text-sm">Next</button>
          </div>
        </div>
      </main>
    </>
  );
}
