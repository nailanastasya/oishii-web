import React from "react";
import Image from "next/image";
import { Borel, Poppins } from "next/font/google";
import Menu from "../menu/pages";
import Link from 'next/link';
import Footer from "../footer/pages";

const borel = Borel({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <div className="bg-[#FDF9F3] min-h-screen w-full">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-5 bg-[#FFF6EA]">
        <Image src="/logo/oishi.svg" alt="Oishii Logo" width={150} height={50} />
        <nav className="flex space-x-8">
        
         <Link href="/home" className={`${borel.className} hover:underline text-[#3D5300] dark:text-gray-300`}>
           ABOUT US
        </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-[#FFF6EA]">
        <h1
          className={`${borel.className} text-3xl sm:text-5xl font-bold text-[#3D5300]`}
        >
          Meet your expectation <br />{" "}
          <span className="text-[#E5962D]">beyond FOOD!</span>
        </h1>
        <p className="text-[#B9C398] mt-4 text-lg">
          Discover recipes, share, and find
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-8 py-2 bg-[#3D5300] text-white rounded-full hover:bg-[#5C7300]">
          <Link href="/login" className={`${borel.className} hover:underline text-white dark:text-gray-300`}>
           LOG IN
          </Link>
          </button>
          <button className="px-8 py-2 bg-[#E5962D] text-white rounded-full hover:bg-[#D47F00]">
          <Link href="/login" className={`${borel.className} hover:underline text-white dark:text-gray-300`}>
           SIGN UP
          </Link>
          </button>
        </div>
      </section>

      {/* Recipes of the Week */}
      <Menu/>

      {/* About Section */}
      <section id="about" className="py-20 px-10 bg-[#FFF6EA]">
        <p className={`${poppins.className} text-center text-[#3D5300] text-lg`}>
          di <span className="font-bold">Oishii</span>, kami percaya memasak bukan sekedar
          kegiatan—melainkan adalah sebuah *ekspresi*.
        </p>
        <p className={`${poppins.className} text-center text-[#3D5300] mt-4 text-lg`}>
          kami paham betul, memasak bisa menjadi pengalaman berbeda bagi tiap orang. <br />
          maka Oishii hadir menemani petualangan anda.
        </p>
        <Footer/>
      </section>
      
    </div>
  
  );
};

export default LandingPage;
