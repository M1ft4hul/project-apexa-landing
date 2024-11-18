import React from "react";
import Link from "next/link";
import telp from "public/telephone.png";
import Image from "next/image";

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

const Drawerdata = () => {
  return (
    <div className='rounded-md max-w-sm w-full mx-auto'>
      <div className='flex-1 space-y-4 py-1'>
        <div className='sm:block'>
          <div className='space-y-1 px-5 pt-2 pb-3'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-[#59859D]"
                    : "text-black hover:bg-gray-100 hover:text-[#59859D]",
                  "block py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}>
                {item.name}
              </Link>
            ))}

            <br />
            <div className='grid grid-rows-2 grid-flow-col items-center ml-7'>
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
            <br />
            <a
              href=''
              className='flex justify-center text-base w-full font-normal rounded-full bg-[#169091] hover:bg-[#59859D] focus:outline-none text-white py-3 px-4 lg:px-8 navbutton hover:text-white hover:bg-[#59859D]'>
              Login/Register
            </a>

            {/* <Contactusform /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawerdata;
