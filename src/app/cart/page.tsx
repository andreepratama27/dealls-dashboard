import { ApiUrl } from "@/utils/constant";
import CartTable from "./_components/CartTable";

async function getData(): Promise<Cart[]> {
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
      <CartTable carts={carts} />
    </main>
  );
}
