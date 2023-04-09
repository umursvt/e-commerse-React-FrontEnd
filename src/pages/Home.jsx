import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Announcment from '../components/navbar/Announcment';
import Slider from '../../src/components/slider/slider';
import Categories from '../components/categories/categories';
import Products from '../components/products/products';

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Announcment />
      </div>
      <div className=" mt-5">
        <Slider />
      </div>
      <div className=" container ">
        <Categories />
      </div>
      <div>
        <Products />
      </div>
    </>
  );
}

export default Home;
