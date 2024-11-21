import React from "react";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='bg-[#59859D] relative '>
        <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-0 px-0'>
          <div className='footer_2 border-b border-dark_border xl:px-0 px-6'>
            <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 lg:gap-0 gap-8 grid-cols-2'>
              {/* logo */}
              <div className='sm:col-span-2'>
                <div className='flex gap-3 items-center mb-6'>
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
                  <p className='text-grey text-base sm:min-w-full min-w-60'>
                    221b Baker St, London NW1 6XE, United Kingdom
                  </p>
                </div>
                <a
                  className='flex  mb-6 gap-3 items-center'
                  href='tel:+1 (123) 123 1234'>
                  <div className='text-grey'>
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
                      <path
                        fill='currentColor'
                        d='m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38'
                      />
                    </svg>
                  </div>
                  <p className='text-grey text-base sm:min-w-full min-w-60'>
                    +1 (123) 123 1234
                  </p>
                </a>
                <a
                  className='flex mb-8 gap-3 items-center'
                  href='mailto:info@mobileapp.com'>
                  <div className='text-grey'>
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
                      <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                        <path d='M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z' />
                        <path
                          strokeLinecap='round'
                          d='m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8'
                        />
                      </g>
                    </svg>
                  </div>
                  <p className='text-grey text-base'>info@mobileapp.com</p>
                </a>
                <h4 className='text-white text-base font-medium mb-4'>
                  Get Social
                </h4>
                <div className='flex gap-6'>
                  <a className='text-grey hover:text-white' href='#'>
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
                  <a className='text-grey hover:text-white' href='#'>
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
                        d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h98.2V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480h129c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z'
                      />
                    </svg>
                  </a>
                  <a className='text-grey hover:text-white' href='#'>
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
                        d='M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7a53.3 53.3 0 1 0-59.3-88.7m142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9.1-11.2.1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1.1 7.9.1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1s7.2 0 11.4.1c25.5.3 64.8.7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1.1-11.4c.3-25.5.7-64.9-6.5-83c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5a82 82 0 1 1-91.2 136.4a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-91 293c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z'
                      />
                    </svg>
                  </a>
                  <a className='text-grey hover:text-white' href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      aria-hidden='true'
                      role='img'
                      className='iconify iconify--fa6-brands'
                      width={24}
                      height={24}
                      viewBox='0 0 576 512'
                      style={{ verticalAlign: "-0.125em" }}>
                      <path
                        fill='currentColor'
                        d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* Layanan */}
              <div>
                <p className='text-white text-2xl	font-normal mb-4'>Layanan</p>
                <ul>
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
                <p className='text-white text-base mb-4'>Platform</p>
                <ul>
                  <li className='py-2'>
                    <a
                      className='text-grey hover:text-white text-base duration-300'
                      href='#'>
                      Infrastructure
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-grey hover:text-white text-base duration-300'
                      href='#'>
                      Certifications
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-grey hover:text-white text-base duration-300'
                      href='#'>
                      Licenses
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-grey hover:text-white text-base duration-300'
                      href='#'>
                      Terms and conditions
                    </a>
                  </li>
                  <li className='py-2'>
                    <a
                      className='text-grey hover:text-white text-base duration-300'
                      href='#'>
                      Legal
                    </a>
                  </li>
                </ul>
              </div>
              {/* Apakah kamu ada pertanyaan? */}
              <div className='sm:col-span-2'>
                <div className='flex gap-3 items-center mb-6'>
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
                  <p className='text-grey text-base sm:min-w-full min-w-60'>
                    221b Baker St, London NW1 6XE, United Kingdom
                  </p>
                </div>
                <a
                  className='flex  mb-6 gap-3 items-center'
                  href='tel:+1 (123) 123 1234'>
                  <div className='text-grey'>
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
                      <path
                        fill='currentColor'
                        d='m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38'
                      />
                    </svg>
                  </div>
                  <p className='text-grey text-base sm:min-w-full min-w-60'>
                    +1 (123) 123 1234
                  </p>
                </a>
                <a
                  className='flex mb-8 gap-3 items-center'
                  href='mailto:info@mobileapp.com'>
                  <div className='text-grey'>
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
                      <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                        <path d='M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z' />
                        <path
                          strokeLinecap='round'
                          d='m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8'
                        />
                      </g>
                    </svg>
                  </div>
                  <p className='text-grey text-base'>info@mobileapp.com</p>
                </a>
                <h4 className='text-white text-base font-medium mb-4'>
                  Get Social
                </h4>
                <div className='flex gap-6'>
                  <a className='text-grey hover:text-white' href='#'>
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
                  <a className='text-grey hover:text-white' href='#'>
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
                        d='M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h98.2V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480h129c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z'
                      />
                    </svg>
                  </a>
                  <a className='text-grey hover:text-white' href='#'>
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
                        d='M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7a53.3 53.3 0 1 0-59.3-88.7m142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9.1-11.2.1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1.1 7.9.1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1s7.2 0 11.4.1c25.5.3 64.8.7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1.1-11.4c.3-25.5.7-64.9-6.5-83c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5a82 82 0 1 1-91.2 136.4a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-91 293c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z'
                      />
                    </svg>
                  </a>
                  <a className='text-grey hover:text-white' href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      aria-hidden='true'
                      role='img'
                      className='iconify iconify--fa6-brands'
                      width={24}
                      height={24}
                      viewBox='0 0 576 512'
                      style={{ verticalAlign: "-0.125em" }}>
                      <path
                        fill='currentColor'
                        d='M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
