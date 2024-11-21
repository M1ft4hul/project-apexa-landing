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
                  className='flex flex-col group rounded-s-3xl rounded-e-3xl bg-white shadow-2xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition'
                  href='#'>
                  <div className='relative w-[510px] h-[269px] overflow-hidden rounded-t-xl'>
                    <img
                      className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl'
                      src='/berita/berita_1.png'
                      alt='Card Image'
                    />
                  </div>
                  {/* konten berita */}
                  <div className='p-4 md:p-5 ml-5 mt-2 mr-5 md-5'>
                    {/* Baris dengan dua kolom */}
                    <div className='flex items-center justify-between mb-5'>
                      {/* Kolom 1 - Kalender */}
                      <div className='flex items-center space-x-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 text-gray-700'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='text-sm text-gray-700'>
                          October 19, 2022
                        </span>
                      </div>

                      {/* Kolom 3 - User */}
                      <div className='flex items-center space-x-2'>
                        <img
                          src='/berita/user.svg'
                          alt='icon user'
                          className='w-5 h-5 text-gray-700'
                        />
                        <span className='text-sm text-gray-700'>Mesbah</span>
                      </div>
                    </div>

                    {/* Heading utama */}
                    <h3 className='text-xl leading-relaxed mb-5 font-bold text-gray-800'>
                      Smile Brighter Smile Healthier Your Dental Destination
                    </h3>
                    <p className='mt-1 text-[#949494] leading-relaxed'>
                      Explore the dynamic commerce through our insightful blogs.
                      Learn Explore the dynamic
                    </p>

                    {/* tombol */}
                    <div className='flex items-center mt-8 mb-5'>
                      <button className='flex items-center space-x-2 font-semibold text-sm text-gray-700 transition duration-300 group hover:text-[#169091]'>
                        <span className='group-hover:no-underline'>
                          Read More
                        </span>
                        <div className='w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-[#169091] transition-all duration-300'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-3 h-3 text-gray-700 group-hover:text-white transition duration-300'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={3}>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 4v16m8-8H4'
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    {/* end tombol */}
                  </div>
                  {/* end */}
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
                  className='flex flex-col group bg-white shadow-2xl rounded-s-3xl rounded-e-3xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition'
                  href='#'>
                  <div className='relative w-[510px] h-[269px] overflow-hidden rounded-t-xl'>
                    <img
                      className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl'
                      src='/berita/berita_2.png'
                      alt='Card Image'
                    />
                  </div>
                  {/* konten berita */}
                  <div className='p-4 md:p-5 ml-5 mt-2 mr-5 md-5'>
                    {/* Baris dengan dua kolom */}
                    <div className='flex items-center justify-between mb-5'>
                      {/* Kolom 1 - Kalender */}
                      <div className='flex items-center space-x-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 text-gray-700'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='text-sm text-gray-700'>
                          October 19, 2022
                        </span>
                      </div>

                      {/* Kolom 3 - User */}
                      <div className='flex items-center space-x-2'>
                        <img
                          src='/berita/user.svg'
                          alt='icon user'
                          className='w-5 h-5 text-gray-700'
                        />
                        <span className='text-sm text-gray-700'>Mesbah</span>
                      </div>
                    </div>

                    {/* Heading utama */}
                    <h3 className='text-xl leading-relaxed mb-5 font-bold text-gray-800'>
                      Bringing Confidence to Your Smile Dental Excellence
                    </h3>
                    <p className='mt-1 text-[#949494] leading-relaxed'>
                      Explore the dynamic commerce through our insightful blogs.
                      Learn Explore the dynamic
                    </p>

                    {/* tombol */}
                    <div className='flex items-center mt-8 mb-5'>
                      <button className='flex items-center space-x-2 font-semibold text-sm text-gray-700 transition duration-300 group hover:text-[#169091]'>
                        <span className='group-hover:no-underline'>
                          Read More
                        </span>
                        <div className='w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-[#169091] transition-all duration-300'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-3 h-3 text-gray-700 group-hover:text-white transition duration-300'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={3}>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 4v16m8-8H4'
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    {/* end tombol */}
                  </div>
                  {/* end */}
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
                  className='flex flex-col group bg-white shadow-2xl rounded-s-3xl rounded-e-3xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition'
                  href='#'>
                  <div className='relative w-[510px] h-[269px] overflow-hidden rounded-t-xl'>
                    <img
                      className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl'
                      src='/berita/berita_3.png'
                      alt='Card Image'
                    />
                  </div>
                  {/* konten berita */}
                  <div className='p-4 md:p-5 ml-5 mt-2 mr-5 md-5'>
                    {/* Baris dengan dua kolom */}
                    <div className='flex items-center justify-between mb-5'>
                      {/* Kolom 1 - Kalender */}
                      <div className='flex items-center space-x-2'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 text-gray-700'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth={2}>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                        <span className='text-sm text-gray-700'>
                          October 19, 2022
                        </span>
                      </div>

                      {/* Kolom 3 - User */}
                      <div className='flex items-center space-x-2'>
                        <img
                          src='/berita/user.svg'
                          alt='icon user'
                          className='w-5 h-5 text-gray-700'
                        />
                        <span className='text-sm text-gray-700'>Mesbah</span>
                      </div>
                    </div>

                    {/* Heading utama */}
                    <h3 className='text-xl leading-relaxed mb-5 font-bold text-gray-800'>
                      Painting a Brighter Health Landscape
                    </h3>
                    <p className='mt-1 text-[#949494] leading-relaxed'>
                      Explore the dynamic commerce through our insightful blogs.
                      Learn Explore the dynamic
                    </p>

                    {/* tombol */}
                    <div className='flex items-center mt-8 mb-5'>
                      <button className='flex items-center space-x-2 font-semibold text-sm text-gray-700 transition duration-300 group hover:text-[#169091]'>
                        <span className='group-hover:no-underline'>
                          Read More
                        </span>
                        <div className='w-5 h-5 flex items-center justify-center bg-gray-200 rounded-full group-hover:bg-[#169091] transition-all duration-300'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-3 h-3 text-gray-700 group-hover:text-white transition duration-300'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            strokeWidth={3}>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M12 4v16m8-8H4'
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                    {/* end tombol */}
                  </div>
                  {/* end */}
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
