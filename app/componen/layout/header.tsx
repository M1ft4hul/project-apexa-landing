"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "public/logo_rs.png";
import menu from "public/menu.png";
import Signindialog from "./Signindialog";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import info from "public/info.png";
import search from "public/search.png";
import telp from "public/telephone.png";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Temukan Dokter", href: "#home-section", current: false },
  { name: "Layanan", href: "#about-section", current: false },
  { name: "Artikel", href: "#cook-section", current: false },
  { name: "Kontak", href: "#gallery-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as='nav'
      className={`navbar ${
        isScrolled ? "bg-blue-500 shadow-lg" : "bg-white"
      } transition-colors duration-300`}>
      <>
        <div className='mx-auto max-w-7xl p-3 md:p-6 lg:px-8'>
          <div className='relative flex h-12 sm:h-20 items-center'>
            <div className='flex flex-1 items-center sm:justify-between'>
              {/* LOGO */}

              {/* untuk halaman mobile */}
              <div className='flex sm:hidden flex-shrink-0 items-center border-right'>
                <Image src={logo} width={237} height={55} alt='logo_rs'></Image>
              </div>

              {/* untuk halaman web */}
              <div className='hidden sm:flex flex-shrink-0 items-center border-right'>
                <Image src={logo} width={237} height={55} alt='logo_rs'></Image>
              </div>

              {/* LINKS */}

              <div className='hidden lg:flex items-center border-right '>
                <div className='flex justify-end space-x-4'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-[#59859D]"
                          : "navlinks hover:opacity-100",
                        "px-3 py-4 rounded-md text-lg font-normal opacity-80 hover:text-[#59859D] space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='hidden md:flex items-center space-x-3'>
                <Signindialog />

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
                        width={25}
                        height={25}
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

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className='block lg:hidden'>
              <button
                className='block h-6 w-6'
                aria-hidden='true'
                onClick={() => setIsOpen(true)}>
                <Image src={menu} width={35} height={35} alt='menu'></Image>
              </button>
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Header;
