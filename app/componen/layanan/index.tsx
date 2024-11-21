"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Layanan = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl layanan px-6'>
        <div className='text-center'>
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}>
            <h3 className='text-3xl lg:text-5xl font-normal mb-12 text-lightgrey md:4px lg:text-center'>
              Layanan Unggulan
            </h3>
          </Fade>
          {/* layanan */}
          <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* layanan 1 */}
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}>
                <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow transition duration-300 hover:border-blue-500 cursor-pointer'>
                  {/* Kotak buat gambar*/}
                  <div className='w-16 h-16 bg-[#deedf2] rounded-2xl mb-4 flex items-center justify-center'>
                    <img
                      src='/banner/prescription.png'
                      alt='Heart'
                      width={39}
                      height={45}
                    />
                  </div>

                  <a href='#'>
                    <h5 className='mb-2 text-2xl font-medium tracking-tight text-gray-900 text-left'>
                      Heart & Lung Center
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-[#949494] text-left'>
                    Lorem ipsum dolor sit consectetur adipiscing elit. Sed sit
                    amet rcus nunc. Duis egestas ac ante sed tincidunt. Lorem
                    ipsum dolor
                  </p>
                  <a
                    href='#'
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    Read more
                  </a>
                </div>
              </Fade>
              {/* layanan 2 */}
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}>
                <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow transition duration-300 hover:border-blue-500 cursor-pointer'>
                  {/* Kotak buat gambar*/}
                  <div className='w-16 h-16 bg-[#deedf2] rounded-2xl mb-4 flex items-center justify-center'>
                    <img
                      src='/banner/diabetes.png'
                      alt='Heart'
                      width={39}
                      height={45}
                    />
                  </div>

                  <a href='#'>
                    <h5 className='mb-2 text-2xl font-medium tracking-tight text-gray-900 text-left'>
                      Orthopedics Center
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-[#949494] text-left'>
                    Lorem ipsum dolor sit consectetur adipiscing elit. Sed sit
                    amet rcus nunc. Duis egestas ac ante sed tincidunt. Lorem
                    ipsum dolor
                  </p>
                  <a
                    href='#'
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    Read more
                  </a>
                </div>
              </Fade>
              {/* layanan 3 */}
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}>
                <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow transition duration-300 hover:border-blue-500 cursor-pointer'>
                  {/* Kotak buat gambar*/}
                  <div className='w-16 h-16 bg-[#deedf2] rounded-2xl mb-4 flex items-center justify-center'>
                    <img
                      src='/banner/trauma.png'
                      alt='Heart'
                      width={35}
                      height={45}
                    />{" "}
                  </div>

                  <a href='#'>
                    <h5 className='mb-2 text-2xl font-medium tracking-tight text-gray-900 text-left'>
                      Trauma Center
                    </h5>
                  </a>
                  <p className='mb-3 font-normal text-[#949494] text-left'>
                    Lorem ipsum dolor sit consectetur adipiscing elit. Sed sit
                    amet rcus nunc. Duis egestas ac ante sed tincidunt. Lorem
                    ipsum dolor
                  </p>
                  <a
                    href='#'
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                    Read more
                  </a>
                </div>
              </Fade>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
