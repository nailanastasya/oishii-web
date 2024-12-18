import { Borel } from 'next/font/google';
import React from "react";

const borel = Borel({
    weight: '400',
    subsets: ['latin'],
  });
const Footer = () => {
    return(
        <footer className=" text-[#3D5300] text-center py-4  w-full mt-10">
        <p className={`${borel.className}`}>
          © 2024 all rights reserved to oishii ですか
        </p>
      </footer>
    );
}
export default Footer;
