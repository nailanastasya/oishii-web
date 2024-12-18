'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Borel, Poppins } from "next/font/google";
import Menu from "../menu/pages";
import Link from 'next/link';
import Footer from "../footer/pages";
import { FaStar } from "react-icons/fa"; // Make sure to import the FaStar icon

const borel = Borel({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Profile = () => {
  return (
    <div className="bg-[#FFF6EA] p-4 rounded-lg w-full">
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        ></svg>
        <div className="ml-2 flex flex-col items-start">
          <div className="flex items-center">
            <FaStar className="ml-2 text-green-500" /> {/* Green leaf star icon */}
            <h2 className="text-lg font-medium text-[#3D5300] ml-1">Desthrie Tsa</h2>
          </div>
          <span className="text-sm text-gray-500 mt-1">Beginner</span>
        </div>
      </div>
      <ul>
        <li className="cursor-pointer text-[#3D5300] hover:text-[#F09319] p-2 rounded-md mb-2">Resep Saya</li>
        <li className="cursor-pointer text-[#3D5300] hover:text-[#F09319] p-2 rounded-md mb-2">Tulis Resep</li>
        <li className="cursor-pointer text-[#3D5300] hover:text-[#F09319] p-2 rounded-md mb-2">Aktivitas</li>
        <li className="cursor-pointer text-[#3D5300] hover:text-[#F09319] p-2 rounded-md mb-2">Pengaturan</li>
      </ul>
    </div>
  );
};

const LandingPage = () => {
  const [isAboutPopupOpen, setIsAboutPopupOpen] = useState(false); // State to handle popup visibility

  // Function to open the popup
  const openAboutPopup = () => setIsAboutPopupOpen(true);

  // Function to close the popup
  const closeAboutPopup = () => setIsAboutPopupOpen(false);

  return (
    <div className="bg-[#FDF9F3] min-h-screen w-full">
      {/* Header */}
      <header className="flex items-center justify-between px-10 py-5 bg-[#FFF6EA]">
        <Image src="/logo/oishi.svg" alt="Oishii Logo" width={150} height={50} />
        <nav className="flex space-x-8">
          {/* Triggering the popup when clicked */}
          <button
            onClick={openAboutPopup}
            className={`${borel.className} hover:underline text-[#3D5300] dark:text-gray-300`}
          >
            ABOUT US
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-[#FFF6EA]">
        <h1 className={`${borel.className} text-3xl sm:text-5xl font-bold text-[#3D5300]`}>
          Meet your expectation <br />
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
      <Menu />

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
        <Footer />
      </section>

      {/* Popup Modal for About Us positioned at top-right */}
      {isAboutPopupOpen && (
        <div className="fixed top-20 right-10 bg-white p-6 rounded-lg shadow-lg z-50">
          <h2 className={`${borel.className} text-3xl text-[#3D5300]`}>PROFILE</h2>
          <Profile /> {/* Profile component inside the popup */}
          <div className="mt-6">
            <button
              onClick={closeAboutPopup}
              className="px-6 py-2 bg-[#E5962D] text-white rounded-full hover:bg-[#D47F00]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
