import { Product } from '../types/ProductsProps';

async function getProducts(): Promise<{ products: Product[] }> {
  try {
    const response = await fetch(
      'http://' + process.env.API_HOSTNAME + '/products'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.error('Failed to fetch data from API:', error);

    // If fetch fails to the call the API makes a new request to the localhost
    // const fallbackResponse = await fetch('http://localhost:3333/clients');
    // if (!fallbackResponse.ok) {
    // throw new Error('Failed to fetch data from fallback');
    // }


    return { products: [] };
    // return fallbackResponse.json();
  }
}

export default getProducts;
