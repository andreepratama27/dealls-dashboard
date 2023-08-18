import { ApiUrl } from "@/utils/constant";

export async function fetchProductData({ page = 0 }: { page: number }) {
  try {
    const response = await fetch(`${ApiUrl}/products?limit=10&skip=${page}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
