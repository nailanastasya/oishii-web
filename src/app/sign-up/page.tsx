import React from "react";
import Image from "next/image";
import { Borel } from 'next/font/google';

const borel = Borel({
    weight: '400',
    subsets: ['latin'],
  });

const SignUp = () => {
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
          <div className="absolute"
          style={{
            top: '0px', // Tetap di bagian bawah layar
            right: '0px',  // Tetap di bagian kanan layar
            overflow: 'hidden' // Opsional, agar kontennya tidak meluber
          }}
        >
          <Image
            src="/element/capcay.png" // Pastikan path benar
            alt="Deskripsi gambar"
            width={600} // Lebar gambar yang diinginkan
            height={600} // Tinggi gambar yang diinginkan
            priority
          />
        </div>
          {/* About Us and Sign Up links */}
          <header className="absolute top-4 right-4 block font-light text-[#F09319] p-9 flex flex-col items-end gap-8 items-start p-20">
            <nav className="flex space-x-6 text-lg sm:text-xl">
              <a href="/sign-up" className="hover:underline text-customOrange dark:text-gray-300">
                SIGN UP
              </a>
              <a href="/about-us" className="hover:underline text-customOrange dark:text-gray-300">
                ABOUT US
              </a>
            </nav>
          </header>
          {/* Kontainer untuk komponen email dan tombol di bagian kiri */}
            <div className="flex flex-col justify-center gap-4 ml-20 p-8 items-start translate-x-[-20rem] mt-10">
              {/* Left side - Login Form */}
              <div className="space-y-6 w-1/2">
                {/* Username Input */}
                <div>
                  <label className="block font-light text-[#5F6312] text-2xl mb-2">EMAIL</label>
                  <input
                    className="w-[300px] py-3 px-4 rounded-full border-2 border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#B9C398] transition-all duration-300 hover:w-[240px]"
                    type="text"
                    placeholder="masukan email kamu"
                  />
                </div>
                <div>
                  <label className="block font-light text-[#5F6312] text-2xl mb-2">KODE</label>
                  <input
                    className="w-[300px] py-3 px-4 rounded-full border-2 border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#B9C398] transition-all duration-300 hover:w-[240px]"
                    type="text"
                    placeholder="kami kirim ke email mu!"
                  />
                </div>
                <div>
                  <label className="block font-light text-[#5F6312] text-2xl mb-2">PASSWORD</label>
                  <input
                    className="w-[300px] py-3 px-4 rounded-full border-2 border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#B9C398] transition-all duration-300 hover:w-[240px]"
                    type="text"
                    placeholder="masukan sandi kamu!"
                  />
                </div>
              </div>
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
export default SignUp;
