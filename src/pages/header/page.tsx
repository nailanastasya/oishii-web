import Image from "next/image";
import React from "react";
import { FaSearch } from 'react-icons/fa'; // Menggunakan react-icons untuk ikon
import { Borel } from 'next/font/google';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const borel = Borel({
    weight: '400',
    subsets: ['latin'],
});

const poppins = Poppins({
    weight: ['400', '700'], // Pilih bobot yang Anda butuhkan
    subsets: ['latin'],
});

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-[#FFF6EA] p-4 z-10 ">
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
                <nav className="flex space-x-6 text-sm sm:text-base">
                    <Link href="/login" className={`${borel.className} hover:underline text-[#3D5300] dark:text-gray-300`}>
                        LOG IN
                    </Link>
                    <Link href="/sign-up" className={`${borel.className} hover:underline text-[#3D5300] dark:text-gray-300`}>
                        SIGN UP
                    </Link>
                </nav>
            </div>

            {/* Search Input */}
            
        </header>
    );
};

export default Header;
