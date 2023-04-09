import React from 'react';
import '../../components/categoryItem/card.css';

function CategoryItem({ item }) {
  return (
    <div className="card-container w-full transform hover:scale-110 transition-transform hover:opacity-90">
      <div>
        <img className="card-image" src={item.img} alt="adasda" />
      </div>
      <div className="absolute card-body">
        <div className="title d-flex justify-center mt-2 font-bold rounded bg-green-800 text-orange-400 p-2 text-3xl py-1">
          {item.title}
        </div>
        <div className="flex justify-center  border-white-800 m-2 rounded text-dark p-2">
          <button className="button">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
