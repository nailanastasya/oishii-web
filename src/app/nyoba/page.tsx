'use client';

import { useQuery } from '@tanstack/react-query';  // Impor useQuery
import { fetchMenuItems } from '@/app/api/api'; // Fungsi untuk mengambil data
import { Borel } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Footer from '@/pages/footer/pages';
import Header from '@/pages/header/page';
import { FaSearch } from 'react-icons/fa';
import React, { useState } from 'react';

const borel = Borel({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

type MenuItem = {
  name: string;
  image_url: string;
  status: string;
  difficulty: string;
};

const Menus = () => {
  const { data, error, isLoading } = useQuery<MenuItem[]>({
    queryKey: ['menuItems'],
    queryFn: fetchMenuItems, // Ambil data dari fungsi fetchMenuItems
  });

  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredMenuItems = data?.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#FFF6EA] min-h-screen flex flex-col items-center pt-40 px-4">
      <Header />
      <div className="mt-6 flex justify-center relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B9C398]" />
        <input
          type="text"
          placeholder="Mau masak apa?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`${poppins.className} w-full max-w-[600px] px-10 py-2 border rounded-full border-[#E5962D] text-[#B9C398] text-lg focus:outline-none placeholder:text-[#ABBA7C94]`}
        />
      </div>
      <h2 className={`${borel.className} text-3xl font-bold text-[#3D5300] mt-10 mb-6`}>
        MENU OISHII
      </h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : error instanceof Error ? (
        <p className="text-red-500 font-bold">Oops! {error.message}</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 text-lg font-semibold text-[#3D5300]">Daftar</th>
                <th className="px-4 py-2 text-lg font-semibold text-[#3D5300]">Status</th>
                <th className="px-4 py-2 text-lg font-semibold text-[#3D5300]">Tingkat Kesulitan</th>
                <th className="px-4 py-2 text-lg font-semibold text-[#3D5300]">Nama Makanan</th>
                <th className="px-4 py-2 text-lg font-semibold text-[#3D5300]">ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredMenuItems?.map((item) => (
                <tr key={item.name} className="border-b border-[#E5962D]">
                  <td className="px-4 py-2">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-[#E5962D]">{item.status}</td>
                  <td className="px-4 py-2 text-[#E5962D]">{item.difficulty}</td>
                  <td className="px-4 py-2 text-[#3D5300]">{item.name}</td>
                  <td className="px-4 py-2 text-[#3D5300]">{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {filteredMenuItems?.length === 0 && !isLoading && (
        <p className={`${poppins.className} text-3xl font-bold text-[#3D5300] mt-10 mb-6`}>
          No recipes found for "{searchQuery}"
        </p>
      )}

      <Footer />
    </div>
  );
};

export default Menus;
