import React from 'react';
import './hero.css'
import Carousel from './carousel';
import Categories from './Categories';
const HeroSection = () => {
  const arr: any = [1, 2, 3, 4, 5];
  return (
    <>
    <ul className="w-full my-10 flex justify-center items-center space-x-3 overflow-x-scroll no-scrollbar">
      {arr.map((__, index: number) => (
        <div
          className="   shrink-0"
          key={index}
        >
          <video
            autoPlay
            loop
            muted
            className="h-[60px] w-[60px] md:h-[100px]  md:w-[100px]  object-cover rounded-full border border-purple-700 p-1"
            src="/ad2.mp4"
          ></video>
          <h1 className="text-center mt-2 text-xs sm:text-base md:text-lg">
            Top Wear
          </h1>
        </div>
      ))}
    </ul>
    <Carousel />
    <Categories />
    </>
  );
};

export default HeroSection;
