"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Fitur = () => {
  return (
    <Fade
      direction={"up"}
      delay={400}
      cascade
      damping={1e-1}
      triggerOnce={true}>
      <div className='mx-auto max-w-9xl py-16 px-6 bg-[#F2F7FD]'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
          <div className='flex justify-center items-center space-x-6'>
            <div className='flex justify-center '>
              <img
                alt='/banner/dental.png'
                loading='lazy'
                width={65}
                height={65}
                decoding='async'
                data-nimg={1}
                style={{ color: "transparent" }}
                src='/banner/dental.png'
              />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-4xl lg:text-5xl text-black font-normal text-star mt-5'>
                200+
              </h2>
              <h3 className='text-1xl text-black font-normal text-center lg:mt-2'>
                HAPPY PATIENTS
              </h3>
            </div>
          </div>
          <div className='flex justify-center items-center space-x-6'>
            <div className='flex justify-center '>
              <img
                alt='/banner/saved.png'
                loading='lazy'
                width={65}
                height={65}
                decoding='async'
                data-nimg={1}
                style={{ color: "transparent" }}
                src='/banner/saved.png'
              />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-4xl lg:text-5xl text-black font-normal text-star mt-5'>
                20+
              </h2>
              <h3 className='text-1xl text-black font-normal text-center lg:mt-2'>
                SAVED HEARTS
              </h3>
            </div>
          </div>
          <div className='flex justify-center items-center space-x-6'>
            <div className='flex justify-center '>
              <img
                alt='/banner/phone.png'
                loading='lazy'
                width={55}
                height={55}
                decoding='async'
                data-nimg={1}
                style={{ color: "transparent" }}
                src='/banner/phone.png'
              />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-4xl lg:text-5xl text-black font-normal text-star mt-5'>
                10k+
              </h2>
              <h3 className='text-1xl text-black font-normal text-center lg:mt-2'>
                EXPERT DOCTORS
              </h3>
            </div>
          </div>
          <div className='flex justify-center items-center space-x-6'>
            <div className='flex justify-center '>
              <img
                alt='/banner/files.png'
                loading='lazy'
                width={60}
                height={60}
                decoding='async'
                data-nimg={1}
                style={{ color: "transparent" }}
                src='/banner/files.png'
              />
            </div>
            <div className='flex flex-col'>
              <h2 className='text-4xl lg:text-5xl text-black font-normal text-star mt-5'>
                900+
              </h2>
              <h3 className='text-1xl text-black font-normal text-center lg:mt-2'>
                SERENITY WORK
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Fitur;
