"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import sehat from "public/healthcare.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const News = () => {
  const beritaData = [
    {
      id: 1,
      image: "/berita/berita_1.png",
      date: "October 19, 2022",
      author: "Mesbah",
      title: "Smile Brighter Smile Healthier Your Dental Destination",
      description:
        "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    },
    {
      id: 2,
      image: "/berita/berita_2.png",
      date: "October 19, 2022",
      author: "Mesbah",
      title: "Bringing Confidence to Your Smile Dental Excellence",
      description:
        "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    },
    {
      id: 3,
      image: "/berita/berita_3.png",
      date: "October 19, 2022",
      author: "Mesbah",
      title: "Painting a Brighter Health Landscape",
      description:
        "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    },
    {
      id: 4,
      image: "/berita/berita_1.png",
      date: "October 20, 2022",
      author: "Ali",
      title: "Painting a Brighter Health Landscape",
      description:
        "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    },
    {
      id: 5,
      image: "/berita/berita_2.png",
      date: "October 21, 2022",
      author: "Sara",
      title: "Painting a Brighter Health Landscape",
      description:
        "Explore the dynamic commerce through our insightful blogs. Learn Explore the dynamic",
    },
  ];
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

              {/* Tombol Back dan Next */}
              <div className='flex items-center justify-center space-x-4 mt-4'>
                {/* Tombol Back */}
                <button className='prev-btn w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#e0e8f4] hover:bg-[#169091] transition-all duration-300 group'>
                  <img
                    src='/berita/back.png'
                    width={16}
                    height={16}
                    alt='Back'
                    className='w-6 h-6 transition duration-300 group-hover:hidden'
                  />
                  <img
                    src='/berita/back-putih.png'
                    width={16}
                    height={16}
                    alt='Back Hover'
                    className='w-6 h-6 transition duration-300 hidden group-hover:inline-block'
                  />
                </button>

                {/* Tombol Next */}
                <button className='next-btn w-[60px] h-[60px] flex items-center justify-center rounded-full bg-[#e0e8f4] hover:bg-[#169091] transition-all duration-300 group'>
                  <img
                    src='/berita/maju.png'
                    width={16}
                    height={16}
                    alt='Next'
                    className='w-6 h-6 transition duration-300 group-hover:hidden'
                  />
                  <img
                    src='/berita/maju-putih.png'
                    width={16}
                    height={16}
                    alt='Next Hover'
                    className='w-6 h-6 transition duration-300 hidden group-hover:inline-block'
                  />
                </button>
              </div>
            </Fade>
          </div>
          {/* data berita */}

          <div className='flex justify-center'>
            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 }, // Tampilan mobile
                768: { slidesPerView: 2 }, // Tampilan tablet
                1024: { slidesPerView: 3 }, // Tampilan desktop
              }}>
              {beritaData.map((berita) => (
                <SwiperSlide key={berita.id}>
                  <a
                    href='/'
                    className='flex flex-col group bg-gray-100 rounded-s-3xl rounded-e-3xl overflow-hidden transition'>
                    {/* Mengganti bg-white dengan warna lain dan menghapus shadow */}
                    <div className='relative w-[510px] h-[269px] overflow-hidden rounded-t-xl'>
                      <img
                        className='size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl'
                        src={berita.image}
                        alt={berita.title}
                      />
                    </div>
                    <div className='p-4 md:p-5 ml-5 mt-2 mr-5 md-5'>
                      <div className='flex items-center justify-between mb-5'>
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
                            {berita.date}
                          </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <img
                            src='/berita/user.svg'
                            alt='icon user'
                            className='w-5 h-5 text-gray-700'
                          />
                          <span className='text-sm text-gray-700'>
                            {berita.author}
                          </span>
                        </div>
                      </div>
                      <h3 className='text-xl leading-relaxed mb-5 font-bold text-gray-800'>
                        {berita.title}
                      </h3>
                      <p className='mt-1 text-[#949494] leading-relaxed'>
                        {berita.description}
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
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* end berita */}
        </div>
      </div>
      {/* end */}
    </div>
  );
};

export default News;
