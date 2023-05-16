'use client';

import { Product, ProductsProps } from '@/app/types/ProductsProps';
import Image from 'next/image';

import React from 'react';
import Button from '../Button/Button';
import Link from 'next/link';
import router from 'next/router';

interface ShoppingCartProps extends ProductsProps {
  removeFromCart: (product: Product) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  products,
  removeFromCart
}) => {
  const handleRemoveFromCart = (product: Product) => {
    removeFromCart(product);
  };

  const handleCheckout = () => {
    const productIds = products.map((product) => product.id);
    router.push({
      pathname: '/checkout',
      query: { products: productIds.join(',') }
    });
  };

  return (
    <div className=" md:w-96 md:h-96 sticky md:top-0 md:right-0 md:bottom-0 p-4">
      <div className="border-2 rounded-md p-5">
        <h2 className="text-lg font-bold mb-4">Carrito</h2>

        {products.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li className="mb-1" key={product.id}>
                <div className="flex items-center text-center">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={50}
                    height={50}
                    className="layout-fill"
                  />
                  <div>
                    <h3 className="m-2 text-md font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-gray-500">{'$ ' + product.price}</p>
                  </div>
                  <button
                    className="ml-auto"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {products.length === 0 ? null : (
          <div className="mt-4 text-center">
            <Link href="/shop/checkout">
              <Button text="comprar" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
