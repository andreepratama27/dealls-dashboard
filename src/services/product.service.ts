import { ApiUrl } from "@/utils/constant";

export default async function getData({ page }: { page: number }) {
  try {
    const response = await fetch(`${ApiUrl}/products?limit=10&skip=${page}`);

    return response.json();
  } catch (error) {
    throw error;
  }
}
