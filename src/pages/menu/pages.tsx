'use client';

import React from "react";
import Image from "next/image";
import { Borel } from 'next/font/google';
import Link from 'next/link';
const borel = Borel({
    weight: '400',
    subsets: ['latin'],
  });
const Menu = () => {
    const recipes = [
      {
        name: "GYUDON",
        author: "maria helena",
        image: "/menu/gyudon.jpg", // Ganti dengan path gambar Anda
        rating: 3.5,
      },
      {
        name: "CREAMY TURKEY",
        author: "julia levi",
        image: "/menu/turkey.png", // Ganti dengan path gambar Anda
        rating: 4,
      },
      {
        name: "SOP BUNTUT",
        author: "ratna sari",
        image: "/menu/sop-buntut.png", // Ganti dengan path gambar Anda
        rating: 5,
      },
    ];
  
    return (
      <div className="bg-[#FFF6EA] min-h-screen flex flex-col items-center p-10">
        {/* Section Title */}
        <h2 className={`${borel.className} text-3xl font-bold text-[#3D5300] mb-8`}>RECIPES OF THE WEEK!</h2>
  
        {/* Recipe Cards */}
        <div className="grid grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-[#FFF] border-2 border-[#E5962D] rounded-[20px] w-[368px] h-[440px] flex flex-col items-center p-4 shadow-lg"
            >
              {/* Recipe Image */}
              <div className="rounded-full overflow-hidden w-40 h-40 mt-12">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              </div>
  
              {/* Recipe Name */}
              <h3 className={`${borel.className} text-xl font-bold text-[#3D5300] mt-10`}>{recipe.name}</h3>
  
              {/* Author Name */}
              <p className={`${borel.className} no-underline text-[#CED3AA] dark:text-gray-300 text-sm text-[#ABBA7C94] mt-2 `}>{recipe.author}</p>
  
              {/* Stars */}
              <div className="flex items-center justify-center mt-4 text-[#3D5300]">
                {Array.from({ length: recipe.rating }).map((_, i) => (
                  <span key={i} className="text-xl ">★</span>
                ))}
              </div>
            </div>
          ))}
         
        </div>
        <div className="">
          <Link href="/menu-list" className={`${borel.className} hover:underline text-[#3D5300] dark:text-gray-300 `}>
   see more..
          </Link>
          </div>
      </div>
    );
  };
  
  export default Menu;