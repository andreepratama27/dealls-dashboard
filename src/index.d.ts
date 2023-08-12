interface Product {
  id: number;
  title: string;
  brand: string;
  price: string;
  stock: string;
  category: string;
}

interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
