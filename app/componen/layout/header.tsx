"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "public/logo_rs.png";
import menu from "public/menu.png";
import info from "public/info.png";
import search from "public/search.png";
import telp from "public/telephone.png";
import bgImage from "public/logo_gram.png"; // Tambahkan gambar latar belakang

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='relative h-auto z-20 sticky inset-0 backdrop-blur-md py-9 bg-white bg-opacity-90'>
      {/* Background Image */}
      <div className='absolute right-0 hidden sm:block'>
        <div className="blur-[150px] -z-20 bg-[#05c19cb3] w-64 h-64 rounded-full"></div>
      </div>

      <div className='max-w-screen-xl mx-auto px-4 flex flex-wrap items-center justify-between p-4'>
        {/* Logo */}
        <a href='' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image src={logo} width={237} height={55} alt='logo_rs'></Image>
        </a>
        {/* Right Section */}
        <div className='flex md:order-2 space-x-3 md:space-x-9 rtl:space-x-reverse'>
          {/* Login/Register Button */}
          <a
            href='#'
            className='text-white font-semibold bg-[#169091] hover:bg-[#59859D] focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center me-2 mb-2 dark:bg-[#169091] dark:hover:bg-[#59859D]'>
            Login/Register
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type='button'
            className='inline-flex items-center p-2 w-50 h-35 justify-center text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:focus:ring-gray-200'>
            <span className='sr-only'>Open main menu</span>
            <Image src={menu} width={35} height={35} alt='menu'></Image>
          </button>

          {/* Additional Icons (Desktop Only) */}
          <div className='hidden md:flex items-center space-x-3'>
            {/* Icon Info */}
            <button
              type='button'
              className='rounded-full border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
              <Image src={info} width={29} height={29} alt='Info' />
            </button>
            {/* Garis Vertikal */}
            <div className='hidden md:block h-10 border-l border-gray-300 mx-4'></div>
            {/* Icon Search */}
            <button
              type='button'
              className='rounded-full border border-transparent p-2.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100'>
              <Image src={search} width={30} height={30} alt='Search' />
            </button>
            {/* Garis Vertikal */}
            <div className='hidden md:block h-10 border-l border-gray-300 mx-4'></div>
            {/* Emergency Contact */}
            <div className='grid grid-rows-2 grid-flow-col items-center'>
              <div className='row-span-3'>
                <button
                  type='button'
                  className='text-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
                  <Image
                    src={telp}
                    width={35}
                    height={35}
                    alt='Emergency Call'
                  />
                </button>
              </div>
              <div className='col-span-2 text-gray-700 font-semibold'>
                Panggilan Darurat
              </div>
              <div className='col-span-2 text-gray-500'>
                +62811 601 1212 (24h)
              </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#59859D] md:p-0 md:dark:hover:text-[#59859D] dark:text-black font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                aria-current='page'>
                Temukan Dokter
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#59859D] md:p-0 md:dark:hover:text-[#59859D] dark:text-black font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Layanan
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#59859D] md:p-0 md:dark:hover:text-[#59859D] dark:text-black font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Artikel
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#59859D] md:p-0 md:dark:hover:text-[#59859D] dark:text-black font-semibold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
                Kontak
              </a>
            </li>
          </ul>
        </div>
        {/* End Menu */}
      </div>
    </nav>
  );
};

export default Header;
