import React from 'react';
import Image from 'next/image';
import { ProductsProps } from '@/app/types/ProductsProps';
import Button from '@/app/components/Button/Button';

const Products: React.FC<ProductsProps> = ({ products, addToCart }) => {
  return (
    <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 border-2 rounded-md">
          <Image
            src={product.image}
            alt={product.alt}
            width={product.width}
            height={product.height}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.price}</p>
          <p> {product.description}</p>
          <div className=" text-center">
            <Button
              text="Añadir"
              onClick={() => addToCart && addToCart(product)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
