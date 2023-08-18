"use client";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import { ApiUrl } from "@/utils/constant";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductTableProps {
  product: Product[];
}

export default function ProductTable({ product }: ProductTableProps) {
  const [localProduct, setLocalProduct] = useState<Product[]>(product);
  const searchParams = useSearchParams();

  const skip = parseInt(searchParams.get("skip") as string, 10) || 0;

  const handleSearchResult = (searchItem: Product[]) => {
    setLocalProduct(searchItem);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${ApiUrl}/products?limit=10&skip=${skip}`);
      const result = await response.json();

      setLocalProduct(result.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  return (
    <>
      <SearchBar onGetResult={handleSearchResult} />
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
          {localProduct?.map((item) => (
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

      {product.length >= 10 && <Pagination />}
    </>
  );
}
