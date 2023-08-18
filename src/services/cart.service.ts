import { ApiUrl } from "@/utils/constant";

export async function fetchCartList({ page }: { page: number }) {
  try {
    const response = await fetch(`${ApiUrl}/carts?limit=10&skip=${page}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function fetchCartDetail({ id }: { id: number }) {
  try {
    const response = await fetch(`${ApiUrl}/carts/${id}`);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}
