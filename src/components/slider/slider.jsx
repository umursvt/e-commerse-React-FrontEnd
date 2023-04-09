import React, { useState } from 'react';
import candle1 from '../../img/candle/candle1.jpg';
import candle2 from '../../img/candle/candle2.jpg';
import candle3 from '../../img/candle/candle3.jpg';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';

const slides = [
  {
    image: candle1,
  },
  {
    image: candle2,
  },
  {
    image: candle3,
  },
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nexSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="max-w-[1350px] h-[720px] w-full m-auto py-16 px-4 relative group ">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20  text-white cursor-pointer ">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20  text-white cursor-pointer ">
        <BsChevronCompactRight onClick={nexSlide} size={30} />
      </div>
    </div>
  );
}

export default Slider;
