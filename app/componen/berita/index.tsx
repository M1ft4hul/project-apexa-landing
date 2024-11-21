"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import sehat from "public/healthcare.png";
import Image from "next/image";

const News = () => {
  return (
    <div>
      <div className='px-8 md:px-8'>
        <div className='mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-0 px-0 justify-between berita'>
          <div className='flex sm:items-center justify-between mb-11 sm:flex-row flex-col'>
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              {/* Bagian Artikel terbaru dengan ikon di atas */}

              {/* Heading utama yang muncul di baris kedua */}
              <div className='leading-[3rem] text-lightgrey md:mb-0 mb-4'>
                <p className='text-[#169091] lg:text-lg font-medium mt-8 mb-4 text-lightgrey md:4px lg:text-start text-center flex items-center space-x-2 gap-2'>
                  <Image src={sehat} alt='sehat' width={25} height={25}></Image>
                  Artikel Terbaru
                </p>
                <h2 className='text-[40px] font-normal'>
                  Temukan Informasi Terbaru Untuk
                  <br />
                  Menjaga Anda Tetap Sehat.
                </h2>
              </div>

              {/* Tombol View More di baris kedua */}
              <a
                className='px-8 py-3 bg-blue-700 flex text-white sm:w-auto w-fit rounded-lg hover:bg-blue-700 transition duration-300'
                href=''>
                View more
              </a>
            </Fade>
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default News;
