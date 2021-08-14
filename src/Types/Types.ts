export interface Price {
  amount: string;
  billingFrequency: string;
  periodStart: number;
}

export interface Product {
  name?: string;
  description?: string;
  price: Price[];
  checked?: boolean;
}

export interface Category {
  name?: string;
  products: Product[];
}
