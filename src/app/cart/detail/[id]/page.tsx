/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ProductTable from "@/components/ProductTable";
import { ApiUrl } from "@/utils/constant";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartDetail() {
  const [cart, setCart] = useState<Cart | null>(null);
  const params = useParams();

  const fetchCartDetail = async () => {
    try {
      const response = await fetch(`${ApiUrl}/carts/${params.id}`);
      const result = await response.json();
      setCart(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartDetail();
  }, []);

  return (
    <main>
      <div className="cart-title mb-6">
        <p className="text-lg font-bold">Cart 1</p>
      </div>

      <div className="cart-detail mb-6">
        <div className="cart-detail__title mb-2">
          <p>Details</p>
        </div>

        <div className="cart-detail__box grid grid-cols-2 w-full bg-gray-100 p-4 border border-gray-200">
          <div className="box-grid--left">
            <div className="box-grid flex gap-4">
              <div className="box-grid__title">User: </div>
              <div className="box-grid__value">{cart?.userId}</div>
            </div>
            <div className="box-grid flex gap-4">
              <div className="box-grid__title">Discounted Total: </div>
              <div className="box-grid__value">{cart?.discountedTotal}</div>
            </div>
          </div>
          <div className="box-grid--right">
            <div className="box-grid flex gap-4">
              <div className="box-grid__title">Total Products: </div>
              <div className="box-grid__value">{cart?.totalProducts}</div>
            </div>
            <div className="box-grid flex gap-4">
              <div className="box-grid__title">Total Quantity: </div>
              <div className="box-grid__value">{cart?.totalQuantity}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-product">
        <div className="cart-product__title mb-2">Products</div>
        <div className="cart-product__table">
          <table className="border w-full">
            <thead>
              <tr className="border text-left">
                <th className="p-2 border-r">Product Name</th>
                <th className="p-2 border-r">Price</th>
                <th className="p-2 border-r">Discounted Price</th>
                <th className="p-2 border-r">Discounted Percentage</th>
                <th className="p-2 border-r">Quantity</th>
                <th className="p-2 border-r">Total</th>
              </tr>
            </thead>
            <tbody className="border">
              {cart?.products?.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 border-b border-r">{item.title}</td>
                  <td className="p-2 border-b border-r">{item.price}</td>
                  <td className="p-2 border-b border-r">
                    {item.discountedPrice}
                  </td>
                  <td className="p-2 border-b border-r">
                    {item.discountedPrice}
                  </td>
                  <td className="p-2 border-b border-r">{item.quantity}</td>
                  <td className="p-2 border-b border-r">{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
