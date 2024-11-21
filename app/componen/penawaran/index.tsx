"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import back from "public/kembali.png";
import lanjut from "public/selanjutnya.png";

const Work = () => {
  const slides = [
    "/banner/baner.png",
    "/banner/carousel-2.svg",
    "/banner/carousel-3.svg",
    "/banner/carousel-4.svg",
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  // Auto-slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
  }, [slides.length]);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className='mx-auto max-w-7xl penawaran px-6' id='about-section'>
        <div className='text-center'>
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <h3 className='text-3xl lg:text-5xl font-normal mb-12 text-lightgrey md:4px lg:text-center'>
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
            <div id='carousel-example' className='relative w-full'>
              <div className='relative layout_slider overflow-hidden radiuss '>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === activeSlide
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}>
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className='block w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <div className='absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse'>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-3 w-3 rounded-full ${
                      index === activeSlide ? "bg-[#169091]" : "bg-gray-300"
                    }`}
                    aria-label={`Slide ${index + 1}`}></button>
                ))}
              </div>
              <button
                onClick={handlePrev}
                className='group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'>
                <span className='inline-flex next_back items-center justify-center rounded-full bg-[#F2F7FD] group-hover:bg-[#E2ECF9] group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-[#E2ECF9] dark:group-hover:bg-[#E2ECF9] dark:group-focus:ring-[#D1E1F7]'>
                  <Image
                    src={back}
                    alt='kembali'
                    width={14}
                    height={16}></Image>
                  <span className='hidden'>Previous</span>
                </span>
              </button>
              <button
                onClick={handleNext}
                className='group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'>
                <span className='inline-flex next_back items-center justify-center rounded-full bg-[#F2F7FD] group-hover:bg-[#E2ECF9] group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-[#E2ECF9] dark:group-hover:bg-[#E2ECF9] dark:group-focus:ring-[#D1E1F7]'>
                  <Image
                    src={lanjut}
                    alt='selanjutnya'
                    width={14}
                    height={16}></Image>
                  <span className='hidden'>Next</span>
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
