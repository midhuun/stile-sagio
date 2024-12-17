'use client';
import Image from "next/image";
import React, { useState } from "react";

const Carousel = () => {
  const items = [
    { id: 1, image: "https://png.pngtree.com/template/20220330/ourlarge/pngtree-orange-simple-and-atmospheric-women-s-clothing-autumn-and-winter-fashion-image_906464.jpg", title: "Item 1" },
    { id: 2, image: "https://png.pngtree.com/template/20220330/ourlarge/pngtree-orange-simple-and-atmospheric-women-s-clothing-autumn-and-winter-fashion-image_906464.jpg", title: "Item 2" },
    { id: 3, image: "https://png.pngtree.com/template/20220330/ourlarge/pngtree-orange-simple-and-atmospheric-women-s-clothing-autumn-and-winter-fashion-image_906464.jpg", title: "Item 3" },
    { id: 4, image: "https://png.pngtree.com/template/20220330/ourlarge/pngtree-orange-simple-and-atmospheric-women-s-clothing-autumn-and-winter-fashion-image_906464.jpg", title: "Item 4" },
    { id: 5, image: "https://png.pngtree.com/template/20220330/ourlarge/pngtree-orange-simple-and-atmospheric-women-s-clothing-autumn-and-winter-fashion-image_906464.jpg", title: "Item 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform ease-in-out duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-full flex-shrink-0 flex flex-col items-center"
          >
            <Image width={400} height={400}
              src={item.image}
              alt={item.title}
              className="h-[300px] w-full md:h-[600px]  object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute h-10 w-10  top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goPrev}
        disabled={currentIndex === 0}
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        className="absolute h-10 w-10 top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goNext}
        disabled={currentIndex === items.length - 1}
      >
        &#8594;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
