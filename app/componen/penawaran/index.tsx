"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import baner_1 from "public/carousel-1.png";
import back from "public/kembali.png";
import lanjut from "public/selanjutnya.png";

const Work = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl penawaran px-6' id='about-section'>
        <div className='text-center mb-14'>
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <h3 className='text-3xl lg:text-5xl font-normal mb-5 text-lightgrey md:4px lg:text-center'>
              Penawaran Spesial
            </h3>
          </Fade>
          {/* slider */}
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <div
              id='default-carousel'
              className='relative w-full'
              data-carousel='slide'>
              <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
                <div
                  className='hidden duration-700 ease-in-out'
                  data-carousel-item>
                  <Image
                    src={baner_1}
                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    alt='...'></Image>
                </div>
                <div
                  className='hidden duration-700 ease-in-out'
                  data-carousel-item>
                  <Image
                    src={baner_1}
                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    alt='...'></Image>
                </div>
                <div
                  className='hidden duration-700 ease-in-out'
                  data-carousel-item>
                  <Image
                    src={baner_1}
                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    alt='...'></Image>
                </div>
                <div
                  className='hidden duration-700 ease-in-out'
                  data-carousel-item>
                  <Image
                    src={baner_1}
                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    alt='...'></Image>
                </div>
                <div
                  className='hidden duration-700 ease-in-out'
                  data-carousel-item>
                  <Image
                    src={baner_1}
                    className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    alt='...'></Image>
                </div>
              </div>
              <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='true'
                  aria-label='Slide 1'
                  data-carousel-slide-to='0'></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 2'
                  data-carousel-slide-to='1'></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 3'
                  data-carousel-slide-to='2'></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 4'
                  data-carousel-slide-to='3'></button>
                <button
                  type='button'
                  className='w-3 h-3 rounded-full'
                  aria-current='false'
                  aria-label='Slide 5'
                  data-carousel-slide-to='4'></button>
              </div>
              <button
                type='button'
                className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                data-carousel-prev>
                <span className='inline-flex items-center justify-center next_back rounded-full bg-white/30 dark:bg-[#F2F7FD] group-hover:bg-white/50 dark:group-hover:bg-[#F2F7FD] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-[#185EC8] group-focus:outline-none'>
                  {/* <svg
                    className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 6 10'>
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M5 1 1 5l4 4'
                    />
                  </svg> */}
                  <Image
                    src={back}
                    alt='kembali'
                    width={14}
                    height={16}></Image>
                  <span className='sr-only'>Previous</span>
                </span>
              </button>
              <button
                type='button'
                className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
                data-carousel-next>
                <span className='inline-flex items-center justify-center next_back rounded-full bg-white/30 dark:bg-[#F2F7FD] group-hover:bg-white/50 dark:group-hover:bg-[#F2F7FD] group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-[#185EC8] group-focus:outline-none'>
                  {/* <svg
                    className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 6 10'>
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 9 4-4-4-4'
                    />
                  </svg> */}
                  <Image
                    src={lanjut}
                    alt='selanjutnya'
                    width={14}
                    height={16}></Image>
                  <span className='sr-only'>Next</span>
                </span>
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Work;
