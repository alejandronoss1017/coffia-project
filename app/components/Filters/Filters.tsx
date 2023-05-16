'use client';
import React, { ChangeEvent, useState } from 'react';

function Filters() {
  const [priceRange, setPriceRange] = useState(120000);

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPriceRange(parseInt(event.target.value, 10));
  };

  return (
    <div className=" md:w-96 md:h-96 sticky md:top-0 md:right-0 md:bottom-0 p-4">
      <div className='border-2 rounded-md p-5'>
        <h2 className="text-lg font-bold mb-4">Filtros</h2>

        {/* Aquí puedes agregar los elementos de los filtros */}
        <div className="mb-4">
          <h3 className="text-md font-semibold mb-2">Categoría</h3>
          <ul>
            <li className="mb-1">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Opción 1
              </label>
            </li>
            <li className="mb-1">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Opción 2
              </label>
            </li>
            {/* ... */}
          </ul>
        </div>

        {/* ... Agregar más elementos de filtros aquí ... */}

        {/* Ejemplo de un rango de precios */}
        <div>
          <h3 className="text-md font-semibold mb-2">Precio</h3>
          <input
            type="range"
            min={3000}
            max={120000}
            step={1000}
            value={priceRange}
            onChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex justify-between mt-2">
            <span>$3,000</span>
            <span>${priceRange}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
