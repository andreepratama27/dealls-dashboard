interface Product {
  id: number;
  title: string;
  brand: string;
  price: string;
  stock: string;
  category: string;
}

interface ProductCart extends Product {
  discountedPrice: string;
  quantity: string;
  total: string;
}

interface CartProduct {
  discountedPercentage: number;
  discountedPrice: number;
  id: number;
  price: number;
  quantity: number;
  title: string;
  total: number;
}

interface Cart {
  id: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface BaseResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
