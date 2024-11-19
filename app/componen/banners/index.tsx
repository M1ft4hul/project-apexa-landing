"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import latar from "public/logo_gram_1.png";
import dokter from "public/baner_dokter.png";
import apexa from "public/apexa.png";
import sehat from "public/healthcare.png";

const Banner = () => {
  return (
    <div id='home-section' className='relative'>
      <div className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6'>
        {/* buat latar belakang */}
        <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
          <Image
            src={latar}
            alt='rs-image'
            className='custom-bg'
            // width={463}
            // height={622}
          />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>
          {/* banner */}
          <div className='col-span-6 flex justify-start relative'>
            <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
              <Image src={apexa} alt='apexa-image' width={128} height={65} />
            </div>
            <Image
              src={dokter}
              alt='nothing'
              width={600}
              height={630}
              className='dokter'
            />
          </div>

          {/* konten */}
          <div className='col-span-6 flex flex-col justify-center'>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <div className='grid grid-rows-1 place-items-center lg:place-items-start'>
                <p className='text-[#169091] lg:text-lg font-normal mt-6 mb-2 text-lightgrey md:4px lg:text-start text-center flex items-center space-x-2 gap-2'>
                  <Image src={sehat} alt='sehat' width={25} height={25}></Image>
                  Kesehatan Anda, Prioritas Kami
                </p>
              </div>
            </Fade>
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <h1 className='text-4xl lg:text-7xl font-normal mb-5 text-lightgrey md:4px lg:text-start text-center'>
                Our Best for <br /> Your{" "}
                <b className='text-[#4BB7B7]'>
                  <i>Health</i>
                </b>
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}>
              <p className='text-[#949494] lg:text-lg font-normal mb-10 lg:text-start text-center'>
                Percayakan kesehatan Anda pada ahli. <br /> Temukan Dokter
                terpercaya dan buat janji sekarang.
              </p>
            </Fade>
            <form action='' method='post'>
              <Fade
                direction={"up"}
                delay={1000}
                cascade
                damping={0.1}
                triggerOnce={true}>
                <div className='md:flex align-middle justify-center lg:justify-start'>
                  <div className='p-6 bg-white rounded-3xl drop-shadow-2xl'>
                    <div className='flex flex-col md:flex-row gap-6'>
                      {/* Column 1: Cari Dokter */}
                      <div className='flex flex-col'>
                        <label
                          htmlFor='cari-dokter'
                          className='text-xl font-medium mb-2'>
                          Cari Dokter
                        </label>
                        <Fade
                          direction={"up"}
                          delay={1200}
                          cascade
                          damping={1e-1}
                          triggerOnce={true}>
                          <div className='relative text-white focus-within:text-white flex rounded-full'>
                            <input
                              type='Email address'
                              name='q'
                              className='py-6 sm:py-6 text-normal text-black bg-[#F2F7FD] rounded-full pl-4 pencarian focus:outline-none focus:text-black'
                              placeholder='Spesialisasi...'
                              autoComplete='off'
                            />
                          </div>
                        </Fade>
                      </div>

                      {/* Column 2: Pilih Hari */}
                      <div className='flex flex-col'>
                        <label
                          htmlFor='pilih-hari'
                          className='text-xl font-medium mb-2'>
                          Pilih Hari
                        </label>
                        <Fade
                          direction={"up"}
                          delay={1200}
                          cascade
                          damping={1e-1}
                          triggerOnce={true}>
                          <div className='relative text-white focus-within:text-white flex rounded-full'>
                            <input
                              type='text'
                              name='q'
                              className='py-6 sm:py-6 text-normal text-black bg-[#F2F7FD] rounded-full pl-4 pencarian focus:outline-none focus:text-black'
                              placeholder='YY/MM/DD'
                              autoComplete='off'
                            />
                          </div>
                        </Fade>
                      </div>
                      {/* end */}
                    </div>
                  </div>
                </div>
              </Fade>
              {/* pencarian */}
              <Fade
                direction={"up"}
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce={true}>
                <a
                  href="/"
                  className='px-6 py-5 mt-7 text-base font-sm text-white inline-flex items-center bg-[#59859D] hover:bg-[#59859D]  focus:outline-none rounded-full text-center dark:bg-[#59859D] dark:hover:bg-[#44728C]'>
                  Cari Dokter
                </a>
              </Fade>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
