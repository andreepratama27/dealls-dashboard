"use client";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import { fetchProductData } from "@/services/product.service";
import { ApiUrl } from "@/utils/constant";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface ProductTableProps {
  product: Product[];
}

export default function ProductTable({ product }: ProductTableProps) {
  const [localProduct, setLocalProduct] = useState<Product[]>([]);
  const [page, setPage] = useState(0);

  const { isLoading } = useQuery(
    ["fetchProduct", page],
    () => fetchProductData({ page }),
    {
      initialData: product,
      onSuccess(data) {
        setLocalProduct(data.products);
      },
    }
  );

  const handleSearchResult = (searchItem: Product[]) => {
    setLocalProduct(searchItem);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={5}>Fetching Product..</td>
        </tr>
      );
    }
    return localProduct?.map((item: Product) => (
      <tr key={item.id}>
        <td className="p-2 border-b border-r">{item.title}</td>
        <td className="p-2 border-b border-r">{item.brand}</td>
        <td className="p-2 border-b border-r">{item.price}</td>
        <td className="p-2 border-b border-r">{item.stock}</td>
        <td className="p-2 border-b border-r">{item.category}</td>
      </tr>
    ));
  };

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
    </>
  );
}
