import Image from "next/image";
import React from "react";
import logo from "public/logo_rs.png";

const Header = () => {
  return (
    <header>
      <div>
        {/* logo */}
        <Image
          src={logo}
          width={237}
          height={55}
          alt='gambar logo rumah sakit'></Image>
        {/* menu */}
        <ul className='flex h-full items-center duration-300 gap-x-4 sm:gap-x-8 text-16'>
          <li>
            <a href=''>Temukan Dokter</a>
          </li>
          <li>
            <a href=''>Layanan</a>
          </li>
          <li>
            <a href=''>Artikel</a>
          </li>
          <li>
            <a href=''>Kontak</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
