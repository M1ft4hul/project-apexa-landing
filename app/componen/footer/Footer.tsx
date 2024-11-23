import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='bg-[#59859D] relative '>
        <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-0 px-0'>
          <div className='footer_2 border-b border-dark_border xl:px-0 px-6'>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 lg:gap-0 gap-8 grid-cols-2'>
              {/* logo */}
              <div>
                <div className='flex gap-3 items-center mb-6'>
                  <img
                    src='/apexa-putih.png'
                    width={135}
                    height={68}
                    alt='logo putih'
                  />
                </div>
                <a
                  className='text-white font-normal hover:text-white text-base duration-300'
                  href='#'>
                  PT. APEXA BUANA HOSPITA
                </a>
                <div className='flex gap-6 mt-12'>
                  <a className='text-white hover:text-white' href='#'>
                    <img
                      src='/footer/instagram.png'
                      width={24}
                      height={24}
                      alt=''
                    />
                  </a>
                  <a className='text-grey hover:text-white' href='#'>
                    <img
                      src='/footer/facebook.png'
                      width={24}
                      height={24}
                      alt=''
                    />
                  </a>
                  <a className='text-white hover:text-white' href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      aria-hidden='true'
                      role='img'
                      className='iconify iconify--fa6-brands'
                      width={24}
                      height={24}
                      viewBox='0 0 448 512'
                      style={{ verticalAlign: "-0.125em" }}>
                      <path
                        fill='currentColor'
                        d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z'
                      />
                    </svg>
                  </a>
                  <a className='text-white hover:text-white' href='#'>
                    <img
                      src='/footer/linkedin.png'
                      width={22}
                      height={22}
                      alt=''
                    />
                  </a>
                </div>
              </div>
              {/* Layanan */}
              <div>
                <p className='text-white text-2xl	font-normal mb-4 leading-loose'>
                  Layanan
                </p>
                <ul className='leading-loose'>
                  <li className='py-2'>
                    <a
                      className='text-white font-light hover:text-white text-base duration-300'
                      href='#'>
                      Reliable Rentals
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-white font-light hover:text-white text-base duration-300'
                      href='#'>
                      Golden Key Properties
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-white font-light hover:text-white text-base duration-300'
                      href='#'>
                      Swift Home Sales
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-white font-light hover:text-white text-base duration-300'
                      href='#'>
                      Elite Realty Services
                    </a>
                  </li>
                </ul>
              </div>
              {/* Lokasi Rumah Sakit */}
              <div>
                <p className='text-white text-2xl	font-normal mb-4 leading-loose'>
                  Lokasi Rumah Sakit
                </p>
                <ul>
                  <li className='py-2'>
                    <a
                      className='flex mb-8 font-light  gap-3 items-center'
                      href='mailto:debra.holt@example.com'>
                      <div className='text-white'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--solar'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          style={{ verticalAlign: "-0.125em" }}>
                          <g
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.5'>
                            <path d='M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z' />
                            <path
                              strokeLinecap='round'
                              d='m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8'
                            />
                          </g>
                        </svg>
                      </div>
                      <p className='text-white text-base'>
                        debra.holt@example.com
                      </p>
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-white font-light hover:text-white text-base duration-300 flex mb-8 gap-3 items-center'
                      href='#'>
                      <div className='text-grey'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          aria-hidden='true'
                          role='img'
                          className='iconify iconify--fa6-solid'
                          width={24}
                          height={24}
                          viewBox='0 0 384 512'
                          style={{ verticalAlign: "-0.125em" }}>
                          <path
                            fill='currentColor'
                            d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128'
                          />
                        </svg>
                      </div>
                      Batam Center, Jl.Uniba Kawasan Uniba No.A09, Belian, Batam
                      Kota 29433
                    </a>
                  </li>
                </ul>
              </div>
              {/* Apakah kamu ada pertanyaan? */}
              <div className='sm:col-span-2 ml-8'>
                <div className='flex gap-3 items-center mb-6'>
                  <p className='text-white text-2xl	font-normal mb-4 leading-loose'>
                    Apakah kamu ada pertanyaan?
                  </p>
                </div>
                <a
                  className='flex mb-8 gap-3 items-center'
                  href='mailto:info@mobileapp.com'>
                  <p className='text-white font-light text-base'>
                    Custom Software Development Tailored Solutions for Your
                    Business Custom Software{" "}
                  </p>
                </a>
                <h4 className='text-white text-base font-medium mb-4'>
                  Get Social
                </h4>
              </div>
            </div>
          </div>
          {/* data footer di bawah */}
          <div className='flex justify-between items-center w-full py-4 md:flex-nowrap flex-wrap md:gap-0 gap-5 xl:px-0 px-6'>
            <div>
              <p className='text-base text-white font-light '>
                © rsbundahalimah.com 2024 | All Rights Reserved
              </p>
            </div>
            <div className='flex items-center gap-6'>
              <a className='text-white font-light hover:text-white' href='#'>
                Trams & Condition
              </a>
              <a className='text-white font-light hover:text-white' href='#'>
                Privacy Policy
              </a>
              <a className='text-white font-light hover:text-white' href='#'>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
