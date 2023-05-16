export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    alt: string;
    width: number;
    height: number;
    category: string;
};

export type ProductsProps = {
  products: Product[];
  addToCart?: (product: Product) => void;
};
