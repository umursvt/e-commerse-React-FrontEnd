import React from 'react';
import { productsData } from '../../data';
import ProductItem from './productItem';

function Products() {
  return (
    <>
      <div className="    container px-4 py-8">
        <div className="  mb-8">
          <h1 className="text-3xl font-bold text-center mb-10">
            <span classname="border-b-2 border-gray-900 pb-1">
              Our Products
            </span>
          </h1>
        </div>
        <div className="flex overflow-hidden  flex-wrap justify-center align-items-center gap-8 my-2 ">
          {productsData.map((item) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
