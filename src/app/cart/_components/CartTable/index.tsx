"use client";

import { fetchCartList } from "@/services/cart.service";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";

export default function CartTable({ carts }: { carts: Cart[] }) {
  const [page, setPage] = useState(0);
  const [localCart, setLocalCart] = useState<Cart[]>([]);

  const { isLoading } = useQuery(
    ["fetchCartData", page],
    () => fetchCartList({ page }),
    {
      initialData: carts,
      onSuccess(data) {
        setLocalCart(data.carts);
      },
    }
  );

  const renderContent = () => {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={6}>Fetching Cart</td>
        </tr>
      );
    }
    return localCart.map((cart) => (
      <tr key={cart.id}>
        <td className="p-2 border-b border-r">{cart.total}</td>
        <td className="p-2 border-b border-r">{cart.discountedTotal}</td>
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
    ));
  };

  return (
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
        <tbody className="border">{renderContent()}</tbody>
      </table>

      <div className="pagination-component flex float-right pt-4">
        <button
          className="button border w-20 mr-4 bg-gray-100 py-2 text-sm bg-transparent"
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        >
          Prev
        </button>
        <button
          className="button w-20 bg-transparent border py-2 bg-gray-100 text-sm"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
