import React from 'react';
import './hero.css';
const Categories = () => {
    const fashionCategories = [
        { id: 1, name: "Men's Wear", image: "/images/mens-wear.jpg" },
        { id: 2, name: "Women's Wear", image: "/images/womens-wear.jpg" },
        { id: 3, name: "Kids' Clothing", image: "/images/kids-clothing.jpg" },
        { id: 4, name: "Footwear", image: "/images/footwear.jpg" },
        { id: 5, name: "Accessories", image: "/images/accessories.jpg" },
        { id: 6, name: "Accessories", image: "/images/accessories.jpg" },
      ];
  return (
    <>
    <div className='mt-5 font-semibold'>Shop by Categories</div>
    <div className='flex shrink-0 space-x-11 pt-10 overflow-x-scroll  no-scrollbar'>
    {fashionCategories.map((category:any)=>
    <div className='shrink-0 flex flex-col justify-center items-center gap-4' key={category.id}>
        <img className='h-[130px] w-[130px] md:h-[250px] md:w-[250px] object-cover rounded-full' src='https://i.ytimg.com/vi/tHxip2x-PLc/maxresdefault.jpg' alt="" />
        <p className='font-semibold'>{category.name}</p>
    </div>
    )}
    </div>
    </>
    
  )
}

export default Categories