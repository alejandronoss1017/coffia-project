import { Product } from '../types/ProductsProps';

export const productsData: Product[] = [];

for (let i = 1; i <= 20; i++) {
  const product = {
    id: i,
    name: `Product ${i}`,
    description: `Product ${i} description`,
    price: i * 3000,
    image: 'https://via.placeholder.com/150',
    alt: `Product ${i}`,
    width: 150,
    height: 150,
    category: `Category ${i}`
  };
  productsData.push(product);
}
