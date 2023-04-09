import React from 'react';
import CategoryItem from '../categoryItem/categoryItem';
import { categoriesData } from '../../data';

function Categories() {
  return (
    <div className="px-4 py-8">
      <div className="mb-8">
        <h1 class="text-3xl font-bold text-center mb-10">
          <span class="border-b-2 border-gray-900 pb-1">Our Categories</span>
        </h1>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
        {categoriesData.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
