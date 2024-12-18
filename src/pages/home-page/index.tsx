import Image from "next/image";
import { Borel } from 'next/font/google';
import { Poppins } from 'next/font/google';
import React from "react";
import { FaSearch } from 'react-icons/fa';
import Menu from "@/pages/menu/pages";
import Link from 'next/link';

const borel = Borel({
  weight: '400',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '700'], // Pilih bobot yang Anda butuhkan
  subsets: ['latin'],
});

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#FFF6EA] p-4 z-10">
        <div className="flex items-center justify-between ml-6">
          {/* Logo on the left */}
          <div>
            <Image
              className="dark:invert"
              src="/logo/oishi.svg"
              alt="Next.js logo"
              width={235}
              height={39}
              priority
            />
          </div>

          {/* About Us and Sign Up links */}
          <nav className="flex space-x-6 text-sm sm:text-base mr-20">
          <Link href="/login" className={`${borel.className} hover:underline text-[#3D5300] dark:text-gray-300`}>
           LOG IN
          </Link>
          <Link href="/sign-up" className={`${borel.className} hover:underline text-[#3D5300] dark:text-gray-300`}>
       SIGN UP
          </Link>

          </nav>
        </div>
        <div className="mt-10 flex justify-center relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B9C398]" />
          <input
            type="text"
            placeholder="mau masak apa?"
            className={`${poppins.className} w-full px-10 py-2 border rounded-full border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#ABBA7C94]`}
          />
        </div>  
      </header>

      {/* Main content with login form and right-side content */}
      <div className="flex flex-col items-center justify-start min-h-screen bg-[#FFF6EA] p-8 pt-32">
        {/* Section with heading */}
        <div className="text-lg font-bold mb-2.5 text-[#3D5300]">
          <h2 className={`${borel.className} text-lg font-bold mb-2.5 text-[#3D5300] mt-32`}>PUNYA BAHAN APA?</h2>
          
          <div className="grid grid-cols-8 gap-4 mb-10">
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
            <div className="bg-customBeige p-20 text-center rounded-[35px] border-4 border-[#E5962D]"></div>
          </div>
        </div>

        {/* Content after grid */}
        <div className="bg-customBeige p-6 rounded-lg mb-32 w-full ">
          {/* Contoh konten lain setelah grid */}
          <h2 className={`${borel.className} text-lg font-bold mb-2.5 text-[#3D5300] mt-32`}>PILIH TINGKAT KESULITAN MU!</h2>
          
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-[#F9CF96] p-20 text-center rounded-[35px] border-4 border-[#E5962D]">
              <a href="/beginner" className={`${borel.className} text-[#3D5300]`}>
                  BEGINNER
              </a>
            </div>
            <div className="bg-[#F9CF96] p-20 text-center rounded-[35px] border-4 border-[#E5962D]">
            <a href="/beginner" className={`${borel.className} text-[#3D5300]`}>
                INTERMEDIATE
              </a>
            </div>
            <div className="bg-[#F9CF96] p-20 text-center rounded-[35px] border-4 border-[#E5962D]">
            <a href="/beginner" className={`${borel.className} text-[#3D5300]`}>
            ADVANCE
              </a>
            </div>
          </div>
        </div>
        <Menu/>
      </div>

    </div>
  );
}

export default HomePage;
