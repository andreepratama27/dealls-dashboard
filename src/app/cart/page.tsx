import { ApiUrl } from "@/utils/constant";
import Link from "next/link";

export async function getData(): Promise<Cart[]> {
  try {
    const response = await fetch(`${ApiUrl}/carts?limit=10&skip=0`);
    const result = await response.json();

    return result.carts;
  } catch (error) {
    throw error;
  }
}

export default async function Cart() {
  const carts = await getData();

  return (
    <main className="flex w-full">
      <div className="table-product w-full">
        <table className="border w-full">
          <thead>
            <tr className="border text-left">
              <th className="p-2 border-b border-r">Total</th>
              <th className="p-2 border-b border-r">Discounted Total</th>
              <th className="p-2 border-b border-r">User ID</th>
              <th className="p-2 border-b border-r">Total Products</th>
              <th className="p-2 border-b border-r">Total Quantity</th>
              <th className="p-2 border-b border-r">Action</th>
            </tr>
          </thead>
          <tbody className="border">
            {carts.map((cart) => (
              <tr key={cart.id}>
                <td className="p-2 border-b border-r">{cart.total}</td>
                <td className="p-2 border-b border-r">
                  {cart.discountedTotal}
                </td>
                <td className="p-2 border-b border-r">{cart.userId}</td>
                <td className="p-2 border-b border-r">{cart.totalProducts}</td>
                <td className="p-2 border-b border-r">{cart.totalQuantity}</td>
                <td className="p-2 border-b border-r">
                  <Link href={`cart/detail/${cart.id}`}>
                    <p className="text-center text-sm text-violet-500 hover:underline">
                      View
                    </p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-component flex float-right pt-4">
          <button className="border px-2 bg-gray-100">Prev</button>
          <div className="page-info w-20 flex items-center justify-center">
            <p className="">1 / 25</p>
          </div>
          <button className="border px-2 bg-gray-100">Next</button>
        </div>
      </div>
    </main>
  );
}
