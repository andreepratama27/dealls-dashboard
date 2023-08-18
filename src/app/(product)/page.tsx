/* eslint-disable @next/next/no-async-client-component */
import { ApiUrl } from "@/utils/constant";
import ProductTable from "./components/ProductTable";

export async function getData(): Promise<Product[]> {
  try {
    const response = await fetch(`${ApiUrl}/products?limit=10&skip=0`);
    const result = await response.json();

    return result.products;
  } catch (error) {
    throw error;
  }
}

export default async function Home() {
  const products = await getData();

  return (
    <>
      <main className="flex w-full">
        <div className="table-product w-full">
          <ProductTable product={products} />
        </div>
      </main>
    </>
  );
}
