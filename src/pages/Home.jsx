import React from 'react';
import Slider from '../../src/components/slider/slider';
import Categories from '../components/categories/categories';
import Products from '../components/products/products';
import GetNews from '../components/getNews/getNews';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/Navbar';

function Home() {
  return (
    <div className="container mx-auto ">
      <Navbar />

      <Slider />

      <Categories />

      <Products />

      <GetNews />

      <Footer />
    </div>
  );
}

export default Home;
