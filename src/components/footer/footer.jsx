import React from 'react';
import logo from '../../img/logo.png';

function Footer() {
  return (
    <>
      <div className=" footer flex flex-col sm:flex-row bg-green-900 ">
        <div className="flex-1 flex justify-center  ">
          <img src={logo} alt="asdasd" />
          <div className=" left flex justify-center items-center    sm:border-r-2  pe-3 border-orange-600  ">
            <h1 className="text-center sm:font-bold text-gray-200 shadow-xl mt-4 ">
              HGK
            </h1>
          </div>
        </div>
        <div className="flex-1 justify-center text-center sm:border-r-2  pe-3 border-orange-600  ">
          <h4 className=" text-white mt-3 ">Usefull Link</h4>
          <p className=" text-white ">Products</p>
          <p className="text-white">Categories</p>
          <p className="  text-white ">Login</p>
        </div>
        <div className="flex-1 text-center ">
          <h4 className=" text-white mt-3 ">Usefull Link</h4>
          <p className=" text-white ">Products</p>
          <p className="text-white">Categories</p>
          <p className="  text-white ">Login</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
