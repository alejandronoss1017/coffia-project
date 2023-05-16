'use client';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Filters from '../components/Filters/Filters';
import Products from '../components/Products/Products';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

import { productsData } from '../data/productsData';
import { Product } from '../types/ProductsProps';

function ShopPage() {
  // Estado para almacenar los productos del carrito
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Función para manejar el evento de click del botón "Añadir"
  const handleAddToCart = (product: Product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  // Función para manejar el evento de click del botón "X"
  const handleRemoveFromCart = (product: Product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  return (
    <>
      <Header />

      <main className="flex flex-col md:flex-row ">
        <aside>
          <Filters />
        </aside>
        <section className="flex-grow">
          <Products products={productsData} addToCart={handleAddToCart} />
        </section>

        <aside className="flex-grow">
          <ShoppingCart
            products={cartItems}
            removeFromCart={handleRemoveFromCart}
          />
        </aside>
      </main>

      <Footer />
    </>
  );
}

export default ShopPage;
