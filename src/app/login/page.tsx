"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Borel } from "next/font/google";
import Link from 'next/link';

const borel = Borel({
  subsets: ["latin"], // Pastikan subset Latin diaktifkan
  weight: "400", // Pilih berat font yang diinginkan
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Background */}
      <div className="absolute inset-0 bg-[#FFF6EA] -z-10"></div>
      {/* Kontainer untuk logo di bagian kiri */}
      <div className="flex flex-col justify-center items-start p-20">
        <Image
          className="flex justify-start items-start translate-y-[-20rem]"
          src="./logo/oishi.svg" // Perbarui path jika nama file diganti
          alt="Oishii Logo"
          width={200}
          height={38}
          priority
        />
      </div>
      {/* gambar */}
      <div
        className="absolute"
        style={{
          bottom: "0px", // Tetap di bagian bawah layar
          right: "0px", // Tetap di bagian kanan layar
          overflow: "hidden", // Opsional, agar kontennya tidak meluber
        }}
      >
        <Image
          src="/element/3-makanan.svg" // Pastikan path benar
          alt="Deskripsi gambar"
          width={500} // Lebar gambar yang diinginkan
          height={500} // Tinggi gambar yang diinginkan
          priority
        />
      </div>
      {/* About Us and Sign Up links */}
      <header className="absolute top-4 right-4 block font-light text-[#F09319] p-9 flex flex-col items-end gap-8 items-start p-20">
        <nav className="flex space-x-6 text-lg sm:text-xl">
        <Link href="/login" className={`${borel.className} hover:underline text-[#3D5300] text-md dark:text-gray-300`}>
          SIGN UP
          </Link>
          <Link href="/login" className={`${borel.className} hover:underline text-[#3D5300] text-md dark:text-gray-300`}>
         ABOUT US
          </Link>
        </nav>
      </header>
      {/* Kontainer untuk komponen email dan tombol di bagian kiri */}
      <div className="flex flex-col justify-center gap-4 ml-20 p-8 items-start translate-x-[-20rem] mt-10">
        {/* Left side - Login Form */}
        <div className="space-y-6 w-1/2">
          {/* Username Input */}
          <div>
            <label className="block font-light text-[#5F6312] text-2xl mb-2">USERNAME</label>
            <input
              className="w-[300px] py-3 px-4 rounded-full border-2 border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#B9C398] transition-all duration-300 hover:w-[240px]"
              type="text"
              placeholder="masukan username kamu"
            />
          </div>
          {/* Password Input */}
          <div>
            <label className="block font-light text-[#5F6312] text-2xl mb-2">PASSWORD</label>
            <div className="relative">
              <input
                className="w-[300px] py-3 px-4 rounded-full border-2 border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#B9C398] transition-all duration-300 hover:w-[240px]"
                type={showPassword ? "text" : "password"}
                placeholder="masukan password kamu!"
              />
            </div>
            <div>
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-[-50px] top-1/2 transform text-[#E5962D] hover:text-[#D4801C]"
              >
                {showPassword ? "Sembunyikan" : "Tampilkan"}
              </button>
            </div>
          </div>
          <div>
            <a href="#" className="ml-4 text-xs font-semibold text-[#5F6312]">
              FORGOT PASSWORD?{" "}
            </a>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-center mt-4 items-start">
          <a
            className="rounded-full border border-solid font-bold text-[#3D5300] dark:border-white/[.145] transition-colors flex items-center justify-center bg-[#ABBA7C] hover:bg-[#9DB06E] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 shadow-lg hover:shadow-x3"
            href=""
            rel="noopener noreferrer"
          >
            Ayo!
          </a>
        </div>
      </div>
    </div>
  );
}