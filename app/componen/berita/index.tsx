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
          {/* data berita */}
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* Card 1 */}
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}>
                <a
                  className='flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition'
                  href='#'>
                  <div className='relative w-[410px] h-[269px] overflow-hidden rounded-t-xl'>
                    <img
                      className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl'
                      src='/berita/berita_1.png'
                      alt='Card Image'
                    />
                  </div>
                  <div className='p-4 md:p-5'>
                    <h3 className='text-lg font-bold text-gray-800'>
                      Card title
                    </h3>
                    <p className='mt-1 text-gray-500'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </a>
              </Fade>

              {/* Card 2 */}
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}>
                <a
                  className='flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition'
                  href='#'>
                  <div className='relative w-[410px] h-[269px] overflow-hidden rounded-t-xl'>
                    <img
                      className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl'
                      src='/berita/berita_2.png'
                      alt='Card Image'
                    />
                  </div>
                  <div className='p-4 md:p-5'>
                    <h3 className='text-lg font-bold text-gray-800'>
                      Card title
                    </h3>
                    <p className='mt-1 text-gray-500'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </a>
              </Fade>

              {/* Card 3 */}
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}>
                <a
                  className='flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition'
                  href='#'>
                  <div className='relative w-[410px] h-[269px] overflow-hidden rounded-t-xl'>
                    <img
                      className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl'
                      src='/berita/berita_3.png'
                      alt='Card Image'
                    />
                  </div>
                  <div className='p-4 md:p-5'>
                    <h3 className='text-lg font-bold text-gray-800'>
                      Card title
                    </h3>
                    <p className='mt-1 text-gray-500'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </a>
              </Fade>
            </div>
          </div>

          {/* end berita */}
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default News;
