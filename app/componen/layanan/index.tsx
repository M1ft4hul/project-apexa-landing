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
              <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-300 hover:border-blue-500 cursor-pointer'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700'>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  Read more
                </a>
              </div>
              {/* layanan 2 */}
              <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-300 hover:border-blue-500 cursor-pointer'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700'>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  Read more
                </a>
              </div>
              {/* layanan 3 */}
              <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow transition duration-300 hover:border-blue-500 cursor-pointer'>
                <a href='#'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className='mb-3 font-normal text-gray-700'>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href='#'
                  className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                  Read more
                </a>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Layanan;
